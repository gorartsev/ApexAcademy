# Apex Academy — Deploy & Assets Guide

Everything you need: image prompts, filenames, folder structure, GitHub Pages deploy.

---

## 1. Folder structure

```
apex-academy/
├── index.html
├── app.jsx
├── data.jsx
├── details.jsx
├── home.jsx
├── pages.jsx
├── shared.jsx
├── README.md
├── DEPLOY.md          ← this file
├── .gitignore
└── images/            ← create this folder, put generated images here
    ├── hero-horizon.webp
    ├── program-humanities.webp
    ├── program-ev.webp
    ├── program-biochem.webp
    ├── program-nutrition.webp
    ├── tech-dome.webp
    ├── tech-crystal.webp
    ├── about-atrium.webp
    ├── about-library.webp
    ├── case-metahub.webp
    └── cloud-sky.webp
```

Save all images as **.webp** (smaller file size) or **.jpg** (if your tool doesn't support webp). Resolution: **1920×1080** (16:9 widescreen).

---

## 2. Image prompts — full, one per file

Use these for Midjourney, DALL-E 3, Leonardo.ai, Flux, or any AI image tool.

### 2.1 `hero-horizon.webp` — main landing hero background

> Cinematic wide-angle horizon landscape at dawn, vast pale blue sky with soft white clouds, faint golden sun haze near horizon, minimalist silhouette of modern glass architecture in distance, atmospheric depth, bright optimistic mood, editorial photography, ultra-detailed sky, soft volumetric light rays, white and sky blue and pale cyan palette only, no people, no text, no logos

**Midjourney flags:** `--ar 16:9 --style raw --stylize 250 --v 6 --no people text logo`
**DALL-E:** paste prompt as-is, request "widescreen 16:9"

---

### 2.2 `program-humanities.webp` — HUMA 156 cover (Biosocial Humanity)

> Interior of a modernist atrium, soaring white architecture with seven tall doorways, daylight streaming through a glass ceiling, soft blue atmospheric haze, sun rays cutting through the space, minimalist reverent empty hall, editorial architectural photography, bright and contemplative, white walls and pale sky blue palette, no people, no text

**Midjourney flags:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.3 `program-ev.webp` — EV High-Voltage Safety cover

> Abstract field of glowing electric blue energy particles, clean industrial laboratory aesthetic, floating cyan sparks, soft white highlights, bright futuristic but not dark, pale blue and electric cyan palette, atmospheric background blur, premium tech render, no people, no text, no wires visible

**Midjourney flags:** `--ar 16:9 --style raw --stylize 300 --v 6`

---

### 2.4 `program-biochem.webp` — Biochemistry Molecular Assembly cover

> Abstract crystalline molecular structures floating weightlessly in a soft atmospheric void, prismatic light refraction through translucent geometric forms, pale blue and white palette, clean science aesthetic, dreamy volumetric depth, macro photography feel, no text, no labels

**Midjourney flags:** `--ar 16:9 --style raw --stylize 300 --v 6`

---

### 2.5 `program-nutrition.webp` — Nutrition Gut Field Lab cover

> Soft organic abstract forms like rippling pale blue water surface from above, gentle light reflections, clean minimalist biology aesthetic, calm meditative composition, white and sky blue tones only, bright airy, no people, no text, macro photography

**Midjourney flags:** `--ar 16:9 --style raw --stylize 250 --v 6`

---

### 2.6 `tech-dome.webp` — Technology / Platform hero

> View looking upward inside a glass geodesic dome, intricate white steel lattice structure, bright blue sky and soft clouds visible through glass panels, daylight pouring in, architectural photography, cinematic upward perspective, bright and uplifting, white and sky blue only, no people

**Midjourney flags:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.7 `tech-crystal.webp` — Technology secondary visual

> Abstract crystalline geometric forms suspended in soft atmospheric blue void, prismatic light refraction, clean premium render, translucent pale blue facets catching white light, editorial product photography aesthetic, calm and precise, no text

**Midjourney flags:** `--ar 16:9 --style raw --stylize 300 --v 6`

---

### 2.8 `about-atrium.webp` — About page hero

> Grand modernist academy atrium interior, white marble and glass architecture, massive daylight windows, soft blue atmospheric haze filling the volume, minimalist sacred space, sun rays cutting through air, editorial architecture photography, bright and reverent, white and pale blue palette, no people, no text

**Midjourney flags:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.9 `about-library.webp` — Mission / founding story visual

> Interior of a modern university library at daylight, tall white bookshelves, large floor-to-ceiling windows with soft blue sky visible, reverent empty space, sun rays across polished floor, editorial architectural photography, white and sky blue palette, cinematic, no people, no text

**Midjourney flags:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.10 `case-metahub.webp` — Case study hero (Khalifa pilot / demo event)

> Modern conference hall or exhibition space viewed from the back, distant anonymous silhouettes of attendees (far away, faceless, not detailed), bright daylight through tall windows, blue atmospheric haze, white architecture, editorial event photography, premium publication aesthetic, white and sky blue palette, no readable text, no logos

**Midjourney flags:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.11 `cloud-sky.webp` — Atmospheric secondary / roadmap / contact

> Soft white cumulus clouds seen from above in aerial perspective, pale blue clear sky, faint sun haze, minimal calm meditative composition, bright and dreamy, editorial aerial photography, white and sky blue palette only, no horizon line, no objects, no text

**Midjourney flags:** `--ar 16:9 --style raw --stylize 250 --v 6`

---

## 3. Mapping: which image replaces which CSS class

After generating all images, the CSS classes in `index.html` map as follows:

| CSS class     | Used in                        | Replace with image       |
|---------------|--------------------------------|--------------------------|
| `.img-horizon`| HUMA program cover, hero, roadmap | `hero-horizon.webp`   |
| `.img-blue`   | EV program cover, technology   | `program-ev.webp`        |
| `.img-earth`  | Biochemistry program cover     | `program-biochem.webp`   |
| `.img-lab`    | Nutrition, technology accents  | `program-nutrition.webp` |
| `.img-dome`   | Technology hero                | `tech-dome.webp`         |
| `.img-crystal`| About, team, various           | `tech-crystal.webp`      |
| `.img-atrium` | About, programs library        | `about-atrium.webp`      |
| `.img-library`| Programs index hero            | `about-library.webp`     |
| `.img-sky`    | Contact, about accents         | `case-metahub.webp`      |
| `.img-cloud`  | Miscellaneous                  | `cloud-sky.webp`         |

**To use the images:** open `index.html`, find each class in CSS (lines ~169–234), and replace the `background: linear-gradient(...)` line with:

```css
.img-horizon{
  background-image: url('./images/hero-horizon.webp');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
```

Repeat for each class. Keep the `::before` decorative overlays if you like them (they add grid texture over the image).

---

## 4. GitHub deploy — step by step

### 4.1 One-time: install GitHub CLI
Download from https://cli.github.com — install, then in terminal:
```bash
gh auth login
```
Follow prompts to authenticate.

### 4.2 Create repo and push
```bash
cd C:/Users/Zhora/Desktop/GameEducation/Website/apex-academy

git init
git add .
git commit -m "Initial commit — Apex Academy website"

gh repo create apex-academy --public --source=. --push
```

### 4.3 Enable GitHub Pages
1. Open the repo in browser (the command above prints the URL)
2. Go to **Settings → Pages**
3. Under "Source" → **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)` → **Save**
5. Wait ~1 minute
6. Site is live at: `https://<your-github-username>.github.io/apex-academy/`

### 4.4 Updating the site later
After editing files locally:
```bash
git add .
git commit -m "Update: <what you changed>"
git push
```
GitHub rebuilds the Pages site automatically within ~1 minute.

---

## 5. Custom domain (optional, later)

If you buy `apexacademy.io` or similar:
1. In repo → Settings → Pages → **Custom domain** → enter domain → Save
2. At your domain registrar (Namecheap, Porkbun, Cloudflare), add DNS records:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` record `www` → `<your-username>.github.io`
3. Wait for DNS propagation (up to 24h)
4. Enable **Enforce HTTPS** in GitHub Pages settings

---

## 6. Quick checklist

- [ ] Generate 11 images (see section 2), save to `images/` folder
- [ ] Open `index.html`, swap gradients → `background-image: url()` for each `.img-*` class (section 3)
- [ ] Preview locally — double-click `index.html` in Explorer
- [ ] `git init && git add . && git commit -m "..."`
- [ ] `gh repo create apex-academy --public --source=. --push`
- [ ] Settings → Pages → main branch → Save
- [ ] Share URL with Carlo
