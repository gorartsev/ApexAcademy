# Apex Academy — Website

Cinematic glassmorphism marketing site for Apex Academy. Static — runs on GitHub Pages.

## Stack
React 18 (CDN) + Babel Standalone + Tailwind CDN. No build step.

## Run locally
Open `index.html` in a browser. Done.

## Deploy to GitHub Pages
1. `gh repo create apex-academy --public --source=. --push`
2. GitHub → repo Settings → Pages → Source: `main` branch, folder: `/ (root)`
3. Site lives at `https://<user>.github.io/apex-academy/`

## Structure
- `index.html` — entry, all CSS, React CDN loads
- `data.jsx` — programs, team, case studies (edit this to change content)
- `shared.jsx` — Nav, Footer, Reveal, CountUp, Corners
- `home.jsx` — landing page
- `pages.jsx` — /programs, /technology, /about, /roadmap, /contact, /press, 404
- `details.jsx` — /programs/[slug], /case-studies/[slug]
- `app.jsx` — router + mount

## Images
All covers currently use CSS gradient placeholders (`img-horizon`, `img-blue`, etc. in `index.html`). Replace with real imagery by swapping each class's `background` to `background-image: url('./images/<file>.webp')`.
