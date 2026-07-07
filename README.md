<<<<<<< HEAD
# Your Portfolio

A Next.js portfolio with a purple-to-black neon theme, built for a FAST NUCES
Karachi Computer Science student.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Deploy it (free, easy)

The simplest option is [Vercel](https://vercel.com):
1. Push this folder to a GitHub repo.
2. Import the repo on vercel.com.
3. Click Deploy — no configuration needed.

## Things to customize

- **Your photo:** open `components/Hero.js`. There's a comment showing exactly
  where to add your image. Put your photo file in `/public` (e.g.
  `/public/avatar.jpg`) and swap the placeholder `<span>` for an `<img>` tag —
  the circular neon frame will automatically wrap around it.
- **Your name:** in `components/Hero.js`, replace "Your Name Here".
- **Contact links:** in `components/Contact.js`, replace the `mailto:`,
  LinkedIn, and Instagram URLs with your real ones.
- **Certificates:** in `components/Certificates.js`, add entries to the
  `CERTIFICATES` array, e.g.:
  ```js
  const CERTIFICATES = [
    { title: "Python for Everybody", issuer: "Coursera", date: "2026" },
  ];
  ```
- **Projects:** in `components/Projects.js`, edit the `PROJECTS` array to add
  more projects as you build them.

## Structure

```
app/
  layout.js       — fonts + global metadata
  globals.css      — theme tokens (colors, type) + section utilities
  page.js          — assembles all sections
components/
  Navbar.js/.module.css
  Hero.js/.module.css
  Projects.js/.module.css
  Skills.js/.module.css
  Certificates.js/.module.css
  Contact.js/.module.css
```

Fully responsive — the navbar collapses into a hamburger menu on mobile, and
all grids stack into a single column on small screens.
=======
# Tahir-portfolio
>>>>>>> 2be313b5e74f82c3f54a87ae1adb4b231a50b57d
