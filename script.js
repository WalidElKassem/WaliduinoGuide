const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const heroImage = document.querySelector(".hero-image");
const heroFallback = document.querySelector(".hero-fallback");

if (heroImage && heroFallback) {
  const showFallback = () => {
    heroImage.hidden = true;
    heroFallback.style.display = "block";
  };

  const hideFallback = () => {
    heroImage.hidden = false;
    heroFallback.style.display = "none";
  };

  heroImage.addEventListener("error", showFallback);
  heroImage.addEventListener("load", hideFallback);

  if (heroImage.complete) {
    if (heroImage.naturalWidth > 0) {
      hideFallback();
    } else {
      showFallback();
    }
  }
}

const managedImages = Array.from(document.querySelectorAll("img[src]"));

if (managedImages.length > 0) {
  const baseSrcMap = new WeakMap();
  const retriesMap = new WeakMap();
  const maxRetries = 1;

  const getBaseSrc = (image) => {
    if (!baseSrcMap.has(image)) {
      const current = image.currentSrc || image.getAttribute("src") || "";
      const [base] = current.split("?");
      baseSrcMap.set(image, base);
    }
    return baseSrcMap.get(image) || "";
  };

  const reloadImage = (image) => {
    const retries = retriesMap.get(image) || 0;
    if (retries >= maxRetries) {
      return;
    }

    const baseSrc = getBaseSrc(image);
    if (!baseSrc) {
      return;
    }

    retriesMap.set(image, retries + 1);
    image.src = `${baseSrc}?refresh=${Date.now()}`;
  };

  const validateImage = (image) => {
    if (image.complete && image.naturalWidth === 0) {
      reloadImage(image);
      return;
    }

    if (!image.complete) {
      image.decode().catch(() => reloadImage(image));
    }
  };

  managedImages.forEach((image) => {
    image.addEventListener("error", () => reloadImage(image));
  });

  window.addEventListener("pageshow", () => {
    managedImages.forEach(validateImage);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      managedImages.forEach(validateImage);
    }
  });
}

const yearTarget = document.getElementById("current-year");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
