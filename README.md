# Waliduino Landing Page

Static GitHub Pages landing page for Waliduino.

## Files

- `index.html`: page structure, SEO metadata, and content
- `styles.css`: design system, layout, responsive styles, and motion
- `script.js`: mobile navigation, reveal-on-scroll, and hero image fallback

## Local preview

Because this is a plain static site, you can preview it with any local server.

Examples:

```powershell
python -m http.server 8080
```

or

```powershell
npx serve .
```

Then open `http://localhost:8080`.

## GitHub Pages deployment

1. Push this repository to GitHub.
2. In the repository settings, open `Pages`.
3. Set the source to `Deploy from a branch`.
4. Select the main branch and the `/ (root)` folder.
5. Save the settings and wait for the GitHub Pages URL to be published.

## Hero image

The landing page is prepared to use the generated product image at:

`assets/Walid_with_waliduino.png`

If the file is not present, the layout will still render cleanly with a designed fallback block, but for production you should add the final generated image there.

Recommended:

- Export a production-optimized `webp` later if you want a smaller payload
- Keep it roughly square
- Aim for about `1600px` wide for strong retina quality without oversized payload
