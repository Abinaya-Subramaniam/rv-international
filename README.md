# RV International Language Institute — Website

A professional, SEO-optimised, mobile-responsive portfolio website for RV International Language Institute.

---

## 📁 Project Structure

```
rv-institute/
│
├── index.html              ← Main HTML (semantic, SEO-ready)
│
├── css/
│   ├── reset.css           ← Browser normalization
│   ├── variables.css       ← Design tokens (colors, fonts, spacing)
│   ├── base.css            ← Typography, layout, buttons
│   ├── components.css      ← Nav, cards, badges, social links
│   ├── sections.css        ← Hero, About, Courses, Tutor, Reviews, Contact, Footer
│   ├── animations.css      ← Scroll reveals & keyframes
│   └── responsive.css      ← Tablet & mobile breakpoints
│
├── js/
│   ├── nav.js              ← Mobile toggle, sticky nav, active section
│   ├── animations.js       ← Intersection Observer scroll reveals
│   └── form.js             ← Contact form validation & submission
│
└── README.md
```

---

## 🎨 Tech Stack

| Layer        | Choice        | Reason                              |
|--------------|---------------|-------------------------------------|
| Markup       | HTML5         | Semantic, accessible, SEO-perfect   |
| Styling      | Pure CSS      | No build step, instant, modular     |
| Behaviour    | Vanilla JS    | Zero dependencies, fast, compatible |
| Fonts        | Google Fonts  | Playfair Display + Jost             |
| Deployment   | Netlify / GitHub Pages / Vercel | Free, global CDN |

---

## 🚀 Deployment Options (All Free)

### Option 1 — Netlify (Recommended, Easiest)

1. Go to **https://netlify.com** and sign up for free
2. Drag and drop the `rv-institute/` folder onto the Netlify dashboard
3. Your site is live instantly with a `.netlify.app` URL
4. **Custom domain**: Go to Site Settings → Domain Management → Add custom domain

### Option 2 — GitHub Pages

1. Create a free account at **https://github.com**
2. Create a new repository (e.g., `rv-institute`)
3. Upload all files maintaining the folder structure
4. Go to Settings → Pages → Source → select `main` branch → `/root`
5. Your site will be at `https://yourusername.github.io/rv-institute/`
6. **Custom domain**: Add a `CNAME` file with your domain name

### Option 3 — Vercel

1. Go to **https://vercel.com** and sign up
2. Import your GitHub repository OR drag and drop the folder
3. Zero configuration needed — it deploys automatically
4. Custom domain available in project settings

---

## ✏️ How to Customise

### 1. Add Your Photo
In `index.html`, find the `.tutor-photo-placeholder` div and replace it:
```html
<!-- BEFORE: -->
<div class="tutor-photo-placeholder" ...>
  <div class="photo-initials">RR</div>
  ...
</div>

<!-- AFTER: -->
<img 
  src="assets/rasika-photo.jpg" 
  alt="Rasika Rasiyasingam — German Language Instructor"
  class="tutor-photo-img"
  loading="lazy"
  width="380"
  height="475"
/>
```
Then add to `css/sections.css`:
```css
.tutor-photo-img {
  width: 100%;
  border-radius: var(--radius-xl);
  object-fit: cover;
  display: block;
}
```

### 2. Add Your Logo Image
Replace the `.logo-mark` div in the nav with:
```html
<img src="assets/logo.png" alt="RV International Language Institute" height="42" width="42" />
```

### 3. Update Social Media Links
In `index.html`, find the social links section and replace the `href="#"` placeholders:
```html
<a href="https://www.facebook.com/YOUR_PAGE" ...>Facebook</a>
<a href="https://www.instagram.com/YOUR_HANDLE" ...>Instagram</a>
<a href="https://wa.me/94773562843" ...>WhatsApp</a>
<a href="https://www.youtube.com/YOUR_CHANNEL" ...>YouTube</a>
```

### 4. Enable Real Form Submissions
The form is ready — just plug in a backend service. **Formspree** is easiest (free):

1. Go to **https://formspree.io** and create a free account
2. Create a new form — you'll get a form ID like `xpwzgqkv`
3. In `js/form.js`, uncomment and replace the fetch block:
```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  body: JSON.stringify({
    name:    nameField.value.trim(),
    email:   emailField.value.trim(),
    message: messageField.value.trim()
  })
})
```
4. Delete the `setTimeout` block above it

### 5. Update the Google Maps Reviews Link
Find this in `index.html` and add your Google Business profile URL:
```html
<a href="https://maps.google.com/?cid=YOUR_GOOGLE_BUSINESS_ID" ...>
```
Get your link by searching your business on Google Maps → Share → Copy link

---

## 🔍 SEO Checklist

- [x] Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [x] Descriptive `<title>` and `<meta name="description">`
- [x] Open Graph tags for social sharing
- [x] Twitter Card meta tags
- [x] Schema.org structured data (EducationalOrganization)
- [x] Canonical URL tag
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Image `alt` attributes
- [x] `lang="en"` on `<html>`
- [x] `rel="noopener noreferrer"` on external links
- [ ] Update `canonical` URL in `<head>` to your actual domain
- [ ] Add your actual Google Business URL to the reviews button
- [ ] Submit sitemap to Google Search Console after deploying

---

## ♿ Accessibility Features

- ARIA labels on interactive elements
- `role` attributes on landmark elements
- Focus-visible styles for keyboard navigation
- Skip-to-content link (add if needed)
- Colour contrast meets WCAG AA

---

## ⚡ Performance Tips

- Fonts load with `preconnect` and `display=swap`
- Images should use `loading="lazy"` and explicit `width`/`height`
- CSS is split into logical files (easy to inline critical CSS later)
- No JavaScript frameworks — pure vanilla
- Use [Squoosh](https://squoosh.app) to compress your photos to WebP

---

## 📞 Support

Contact: +94 77 356 2843  
WhatsApp: https://wa.me/94773562843
