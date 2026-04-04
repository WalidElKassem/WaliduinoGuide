const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const langToggle = document.querySelector("[data-lang-toggle]");

const i18nMap = {
  "Skip to content": "تخطَّ إلى المحتوى",
  "Hands-on STEM learning": "تعلّم STEM العملي",
  "Toggle navigation": "تبديل التنقل",
  "Why Waliduino": "لماذا Waliduino",
  "Features": "المميزات",
  "Projects": "المشاريع",
  "Creator": "المؤسس",
  "Contact": "تواصل معنا",
  "Plug-and-play STEM board for future innovators": "لوحة STEM جاهزة للتشغيل للمبتكرين الجدد",
  "Learn electronics and programming the smarter way.": "تعلّم الإلكترونيات والبرمجة بطريقة أسهل وأذكى.",
  "Premium STEM hardware": "عتاد STEM احترافي",
  "Waliduino helps students, teachers, trainers, and parents move from wiring confusion to real coding and hands-on results with one streamlined learning board.": "يساعد Waliduino الطلاب والمعلمين والمدربين وأولياء الأمور على الانتقال من فوضى التوصيلات إلى البرمجة الحقيقية والنتائج العملية عبر لوحة تعليمية واحدة منظمة.",
  "Explore Waliduino": "اكتشف Waliduino",
  "Built to teach real embedded systems fundamentals in a simpler format.": "مصمم لتعليم أساسيات الأنظمة المدمجة بشكل أبسط.",
  "Waliduino combines the core building blocks beginners need for electronics, coding, sensing, and control on one compact educational board.": "يجمع Waliduino العناصر الأساسية التي يحتاجها المبتدئ في الإلكترونيات والبرمجة والاستشعار والتحكم على لوحة تعليمية مدمجة واحدة.",
  "Everything beginners need, arranged on one focused learning board.": "كل ما يحتاجه المبتدئ في لوحة تعليمية واحدة مركزة.",
  "The integrated layout helps learners understand how sensors, outputs, display modules, and control elements connect inside a real embedded system without the usual wiring overhead.": "يساعد التصميم المدمج المتعلمين على فهم ترابط الحساسات والمخرجات وشاشات العرض وعناصر التحكم داخل نظام مدمج حقيقي دون تعقيد التوصيلات المعتاد.",
  "Cleaner first experience": "بداية أوضح وأسهل",
  "Better visual understanding": "فهم بصري أفضل",
  "Faster classroom demonstrations": "عروض صفية أسرع",
  "Plug-and-play learning": "تعلم جاهز للتشغيل",
  "Designed for quick onboarding with fewer loose components and fewer setup errors.": "مصمم للبدء السريع بمكونات أقل وأخطاء إعداد أقل.",
  "Arduino Nano based": "مبني على Arduino Nano",
  "Uses a familiar ecosystem for accessible programming, examples, and long-term learning growth.": "يعتمد على منظومة مألوفة تسهّل البرمجة والتطبيقات العملية والنمو التعليمي على المدى الطويل.",
  "All-in-one teaching board": "لوحة تعليمية متكاملة",
  "Includes integrated modules for hands-on lessons across sensors, outputs, and automation concepts.": "تتضمن وحدات مدمجة لدروس عملية تشمل الحساسات والمخرجات ومفاهيم الأتمتة.",
  "Built-in components": "مكونات مدمجة",
  "OLED display, LEDs, buzzer, servo support, ultrasonic, PIR, DHT11, LDR, potentiometer, and more.": "شاشة OLED، مصابيح LED، جرس، دعم سيرفو، حساس فوق صوتي، PIR، DHT11، LDR، مقاومة متغيرة، وأكثر.",
  "Faster lab setup": "تجهيز أسرع للمعمل",
  "Ideal for workshops, courses, schools, and training centers that need efficient sessions with less troubleshooting.": "مثالي للورش والدورات والمدارس ومراكز التدريب التي تحتاج جلسات فعالة مع وقت أقل لحل المشاكل.",
  "Safer classroom use": "استخدام صفي أكثر أمانًا",
  "A structured board layout reduces loose wiring errors and makes repeated classroom use more manageable.": "تصميم اللوحة المنظم يقلل أخطاء التوصيل ويجعل الاستخدام المتكرر داخل الصف أسهل.",
  "Less time troubleshooting wires. More time learning how systems work.": "وقت أقل في إصلاح التوصيلات، ووقت أكثر لفهم عمل الأنظمة.",
  "Beginners often lose momentum before they build understanding. Traditional kits require extra parts, repeated setup, and fragile connections. Waliduino removes that friction by combining the core learning modules on one ready-to-code board.": "غالبًا يفقد المبتدئون حماسهم قبل تكوين الفهم. الأطقم التقليدية تحتاج قطعًا إضافية وتجهيزًا متكررًا وتوصيلات غير ثابتة. Waliduino يزيل هذه الصعوبات عبر دمج وحدات التعلم الأساسية في لوحة واحدة جاهزة للبرمجة.",
  "Faster first success": "نجاح أسرع من البداية",
  "Plug in the USB cable, open Arduino IDE, and start experimenting without a long setup process.": "وصّل كابل USB، افتح Arduino IDE، وابدأ التجربة دون إعداد طويل.",
  "Integrated learning modules": "وحدات تعليمية مدمجة",
  "Sensors, outputs, and controls are already on the board, so learners can explore concepts without extra shopping or complex assembly.": "الحساسات والمخرجات وأدوات التحكم موجودة بالفعل على اللوحة، فيمكن للمتعلم فهم المفاهيم دون شراء إضافي أو تركيب معقد.",
  "Better classroom flow": "سير تعليمي أفضل داخل الصف",
  "Teachers and trainers spend less time fixing loose connections and more time guiding projects and understanding.": "يقضي المعلمون والمدربون وقتًا أقل في إصلاح التوصيلات ووقتًا أكبر في توجيه المشاريع وتعميق الفهم.",
  "Confidence for beginners": "ثقة أكبر للمبتدئين",
  "A clear starting point helps new learners build momentum, curiosity, and problem-solving habits early.": "نقطة بداية واضحة تساعد المتعلمين الجدد على بناء الحماس والفضول ومهارات حل المشكلات مبكرًا.",
  "Learning Outcomes": "مخرجات التعلّم",
  "From first code to real mini projects.": "من أول سطر كود إلى مشاريع صغيرة حقيقية.",
  "Waliduino is built to turn abstract theory into visible results that learners can understand, test, and improve.": "صُمم Waliduino لتحويل النظرية إلى نتائج ملموسة يمكن للمتعلم فهمها واختبارها وتطويرها.",
  "Understand core electronics concepts": "فهم أساسيات الإلكترونيات",
  "Learn inputs, outputs, signals, sensing, and the fundamentals behind modern embedded systems.": "تعلّم مفاهيم المدخلات والمخرجات والإشارات والاستشعار وأساسيات الأنظمة المدمجة الحديثة.",
  "Build programming logic": "بناء منطق البرمجة",
  "Practice variables, conditions, loops, timing, and structured thinking through hands-on coding tasks.": "تدرّب على المتغيرات والشروط والحلقات والتوقيت والتفكير المنظم من خلال مهام برمجية عملية.",
  "Read sensors and data": "قراءة الحساسات والبيانات",
  "Explore how temperature, light, motion, and distance measurements can drive decisions in code.": "استكشف كيف يمكن لقياسات الحرارة والضوء والحركة والمسافة أن توجه القرارات داخل الكود.",
  "Control real outputs": "التحكم في مخرجات حقيقية",
  "Trigger LEDs, buzzers, displays, and servo-based actions to connect software with physical results.": "شغّل LED والجرس والشاشات وحركات السيرفو لربط البرمجيات بنتائج واقعية.",
  "Gain confidence through making": "اكتساب الثقة عبر الإنجاز",
  "Mini projects turn learning into progress, helping beginners solve problems and see tangible success early.": "المشاريع الصغيرة تحول التعلم إلى تقدم فعلي وتساعد المبتدئين على حل المشكلات ورؤية نتائج ملموسة مبكرًا.",
  "Who It Is For": "لمن هذه اللوحة؟",
  "Made for every learning environment that needs practical, beginner-friendly STEM tools.": "مصممة لكل بيئة تعليمية تحتاج أدوات STEM عملية ومناسبة للمبتدئين.",
  "Students": "الطلاب",
  "A more approachable path into electronics, coding, Arduino, and embedded systems without getting stuck in setup friction.": "مسار أسهل لدخول عالم الإلكترونيات والبرمجة وأردوينو والأنظمة المدمجة دون تعطّل بسبب صعوبات الإعداد.",
  "Teachers and trainers": "المعلمون والمدربون",
  "A reliable classroom tool for workshops and courses where time, clarity, and repeatable demos matter.": "أداة صفية موثوقة للورش والدورات حيث الوقت والوضوح وإمكانية تكرار التجارب عوامل أساسية.",
  "Schools and STEM centers": "المدارس ومراكز STEM",
  "An efficient way to run practical sessions with stronger structure, faster onboarding, and better student engagement.": "طريقة فعالة لتقديم حصص عملية بتنظيم أفضل وبداية أسرع وتفاعل أعلى من الطلاب.",
  "Parents and self-learners": "أولياء الأمور والمتعلمون ذاتيًا",
  "A credible board for home learning and guided exploration that makes technical subjects feel more accessible.": "لوحة موثوقة للتعلم المنزلي والاستكشاف الموجّه تجعل المواد التقنية أقرب وأسهل.",
  "Mini Projects": "مشاريع صغيرة",
  "Use cases that make learning feel real.": "أفكار تطبيقية تجعل التعلم واقعيًا.",
  "Waliduino supports practical demos and beginner automation ideas that help learners connect theory to visible outcomes.": "يدعم Waliduino عروضًا عملية وأفكار أتمتة للمبتدئين تساعد على ربط النظرية بالنتائج المرئية.",
  "Smart room monitor": "مراقب غرفة ذكي",
  "Read temperature, light, and environmental values and display useful status information on screen.": "اقرأ الحرارة والضوء والقيم البيئية واعرض معلومات مهمة على الشاشة.",
  "Distance alarm": "إنذار المسافة",
  "Use the ultrasonic module to trigger LEDs or a buzzer when an object comes too close.": "استخدم حساس الموجات فوق الصوتية لتشغيل LED أو الجرس عند اقتراب جسم أكثر من اللازم.",
  "Motion security demo": "تجربة أمان بالحركة",
  "Create a simple detection system using the PIR sensor to introduce event-driven programming.": "أنشئ نظام كشف بسيط باستخدام حساس PIR لتعلّم البرمجة المعتمدة على الأحداث.",
  "Servo gate": "بوابة سيرفو",
  "Control movement based on conditions and inputs to understand actuation and automation logic.": "تحكم في الحركة بناءً على الشروط والمدخلات لفهم منطق التشغيل والأتمتة.",
  "Beginner automation projects": "مشاريع أتمتة للمبتدئين",
  "Combine multiple sensors and outputs to build practical flows that mirror real embedded system behavior.": "ادمج عدة حساسات ومخرجات لبناء تطبيقات عملية تحاكي سلوك الأنظمة المدمجة الواقعية.",
  "Why It Is Different": "ما الذي يميّزه؟",
  "A more efficient path than learning with loose parts alone.": "مسار أكثر كفاءة من التعلم بالقطع المنفصلة فقط.",
  "Traditional starter setup": "الإعداد التقليدي للمبتدئين",
  "More time spent on wiring and fixing connections": "وقت أطول في التوصيل وإصلاح الأخطاء",
  "Higher setup friction for complete beginners": "صعوبة أكبر في البداية للمبتدئين تمامًا",
  "Slower classroom flow and repeated troubleshooting": "سير أبطأ في الصف مع تكرار حل المشكلات",
  "Harder to keep focus on the underlying concepts": "أصعب في الحفاظ على التركيز على المفاهيم الأساسية",
  "Waliduino approach": "أسلوب Waliduino",
  "Faster start with fewer setup barriers": "بداية أسرع مع عوائق إعداد أقل",
  "More attention on code, logic, and electronics concepts": "تركيز أكبر على الكود والمنطق ومفاهيم الإلكترونيات",
  "Better classroom efficiency for teachers and trainers": "كفاءة أعلى داخل الصف للمعلمين والمدربين",
  "Easier entry point for students and first-time learners": "نقطة دخول أسهل للطلاب والمتعلمين الجدد",
  "About the Creator": "عن المؤسس",
  "Built by an engineer focused on making technical learning more accessible.": "طُوّرت بواسطة مهندس يركز على جعل التعلم التقني أكثر سهولة.",
  "Walid El Kassem is an electrical engineer with more than 15 years of experience in designing and programming electronic devices and embedded systems in Germany.": "وليد القاسم مهندس كهرباء يمتلك أكثر من 15 عامًا من الخبرة في تصميم وبرمجة الأجهزة الإلكترونية والأنظمة المدمجة في ألمانيا.",
  "Through his YouTube channel": "من خلال قناته على يوتيوب",
  "@electronicsandcoding": "@electronicsandcoding",
  "he has helped a large community of Arabic-speaking learners take their first steps in Arduino, electronics, and programming. Waliduino reflects that teaching experience in a board designed to simplify the first learning journey without oversimplifying the concepts.": "ساعد مجتمعًا كبيرًا من المتعلمين الناطقين بالعربية على بدء رحلتهم في أردوينو والإلكترونيات والبرمجة. ويعكس Waliduino هذه الخبرة التعليمية في لوحة صُممت لتبسيط رحلة التعلم الأولى دون الإخلال بعمق المفاهيم.",
  "15+ years": "+15 سنة",
  "Industry experience in electronics and embedded systems": "خبرة صناعية في الإلكترونيات والأنظمة المدمجة",
  "100,000+": "+100,000",
  "Learners reached through educational content and tutorials": "متعلم تم الوصول إليهم عبر المحتوى التعليمي والشروحات",
  "1M+": "+1 مليون",
  "Views across Arabic-language Arduino learning content": "مشاهدة عبر محتوى أردوينو التعليمي باللغة العربية",
  "Start Your Journey": "ابدأ رحلتك",
  "Discover Waliduino for learning, teaching, and training.": "اكتشف Waliduino للتعلم والتعليم والتدريب.",
  "Whether you are launching a course, equipping a classroom, supporting a child’s first STEM project, or building a training program, Waliduino is designed to make the learning process clearer and more practical.": "سواء كنت تطلق دورة تدريبية، أو تجهز فصلًا دراسيًا، أو تدعم أول مشروع STEM لطفل، أو تبني برنامجًا تدريبيًا، فإن Waliduino مصمم لجعل عملية التعلم أوضح وأكثر عملية.",
  "Request More Information": "اطلب مزيدًا من المعلومات",
  "Practical STEM learning made simple": "تعلم STEM عملي وبسيط",
  "A modern Arduino learning board designed to help students, schools, trainers, and beginners learn with more clarity and less setup friction.": "لوحة تعلم أردوينو حديثة صُممت لمساعدة الطلاب والمدارس والمدربين والمبتدئين على التعلم بوضوح أكبر وتعقيد أقل.",
  "Learning Outcomes": "مخرجات التعلّم",
  "Contact": "تواصل",
  "YouTube": "يوتيوب",
  "Instagram": "إنستغرام",
  "LinkedIn": "لينكدإن",
  "All rights reserved.": "جميع الحقوق محفوظة."
};

const reverseI18nMap = Object.fromEntries(
  Object.entries(i18nMap).map(([en, ar]) => [ar, en])
);

const attrTranslations = {
  ar: {
    title: "Waliduino | لوحة STEM الجاهزة لتعلم الإلكترونيات والبرمجة",
    description: "Waliduino لوحة أردوينو تعليمية جاهزة للتشغيل تساعد الطلاب والمدارس والمدربين وأولياء الأمور على تعليم الإلكترونيات والأنظمة المدمجة والبرمجة بسهولة أكبر ونتائج أسرع.",
    ogTitle: "Waliduino | تعلم الإلكترونيات بذكاء",
    ogDescription: "لوحة تعليمية احترافية جاهزة للتشغيل لتعلم الإلكترونيات وأردوينو والأنظمة المدمجة والبرمجة والأتمتة بإعداد أقل وفهم أعمق.",
    brandHome: "الصفحة الرئيسية Waliduino",
    navPrimary: "التنقل الرئيسي",
    navFooter: "تذييل الموقع",
    creatorPanel: "أبرز نقاط خبرة المؤسس",
    social: "قنوات التواصل",
    heroAlt: "لوحة Waliduino التعليمية للإلكترونيات مع وحدات مدمجة",
    exploreAlt: "عرض تفصيلي للوحة Waliduino ووحداتها المدمجة",
    creatorAlt: "صورة وليد القاسم، مؤسس Waliduino"
  },
  en: {
    title: "Waliduino | Plug-and-Play STEM Board for Electronics and Programming",
    description: "Waliduino is a plug-and-play Arduino learning board that helps students, schools, trainers, and parents teach electronics, embedded systems, and programming with less wiring and faster hands-on results.",
    ogTitle: "Waliduino | Learn Electronics the Smarter Way",
    ogDescription: "A premium plug-and-play board for learning electronics, Arduino, embedded systems, coding, and automation with less setup and more real understanding.",
    brandHome: "Waliduino home",
    navPrimary: "Primary",
    navFooter: "Footer",
    creatorPanel: "Creator credibility highlights",
    social: "Social channels",
    heroAlt: "Waliduino electronics learning board with integrated modules and clean product presentation",
    exploreAlt: "Detailed overview of the Waliduino board and its integrated modules",
    creatorAlt: "Portrait of Walid El Kassem, creator of Waliduino"
  }
};

function applyTextLanguage(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const map = lang === "ar" ? i18nMap : reverseI18nMap;

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!node.parentElement || ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) {
      continue;
    }

    const text = node.textContent;
    const trimmed = text.trim();
    if (!trimmed || !map[trimmed]) {
      continue;
    }

    node.textContent = text.replace(trimmed, map[trimmed]);
  }
}

function applyAttributeLanguage(lang) {
  const attrs = attrTranslations[lang];
  document.title = attrs.title;
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) description.setAttribute("content", attrs.description);
  if (ogTitle) ogTitle.setAttribute("content", attrs.ogTitle);
  if (ogDescription) ogDescription.setAttribute("content", attrs.ogDescription);

  document.querySelector(".brand-mark")?.setAttribute("aria-label", attrs.brandHome);
  document.querySelector("#site-nav")?.setAttribute("aria-label", attrs.navPrimary);
  document.querySelector(".footer-links")?.setAttribute("aria-label", attrs.navFooter);
  document.querySelector(".creator-panel")?.setAttribute("aria-label", attrs.creatorPanel);
  document.querySelector(".social-placeholders")?.setAttribute("aria-label", attrs.social);
  document.querySelector(".hero-image")?.setAttribute("alt", attrs.heroAlt);
  document.querySelector(".explore-image")?.setAttribute("alt", attrs.exploreAlt);
  document.querySelector(".creator-photo")?.setAttribute("alt", attrs.creatorAlt);
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  applyTextLanguage(lang);
  applyAttributeLanguage(lang);
  if (langToggle) {
    langToggle.textContent = lang === "ar" ? "English" : "العربية";
    langToggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التحويل إلى العربية");
  }
  localStorage.setItem("waliduino-lang", lang);
}

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

const savedLang = localStorage.getItem("waliduino-lang") || "ar";
setLanguage(savedLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = document.documentElement.lang === "ar" ? "en" : "ar";
    setLanguage(nextLang);
  });
}
