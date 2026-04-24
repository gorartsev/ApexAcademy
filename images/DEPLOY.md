# Apex Academy — Deploy & Assets Guide

Everything you need: image prompts, filenames, folder structure, GitHub Pages deploy.

Apex Academy = VR-native educational platform for universities. Every image on the site should communicate one of: students in VR, medical/scientific subject matter rendered in a VR-friendly bright aesthetic, or the kind of environment where immersive learning happens. No abstract clouds. The common thread across all images is: **bright daylight, pale blue / white / cyan palette, cinematic but clean, premium editorial photography.**

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
└── images/            ← create this folder, put generated media here
    │
    │   # Photos (Section 2) — 10 files
    ├── program-humanities.webp
    ├── program-ev.webp
    ├── program-biochem.webp
    ├── program-nutrition.webp
    ├── tech-headset.webp
    ├── tech-platform.webp
    ├── about-founder-moment.webp
    ├── about-classroom.webp       ← also used as hero poster
    ├── case-demo-event.webp
    ├── contact-campus.webp
    │
    │   # Video (Section 3) — 1 hero loop, optional
    └── hero-loop.mp4
```

Save as **.webp** (smaller) or **.jpg**. Resolution: **1920×1080** (16:9 widescreen).

---

## 2. Image prompts — thematic, on-brand

> **Hero poster note:** The main landing page uses `about-classroom.webp` (Section 2.9) as the poster image behind the `hero-loop.mp4` video. No separate hero photo is needed.

---

### 2.2 `program-humanities.webp` — HUMA 156 (Biosocial Humanity)

The VR atrium with seven doorways — core metaphor of the course.

> Interior of a minimalist modernist hospital-meets-museum atrium, seven tall white doorways arranged in a semicircle, each doorway glowing with soft pale blue light suggesting a different scene beyond, polished white marble floor, daylight from above through a glass ceiling, clean medical-humanities aesthetic, cinematic architectural photography, bright reverent empty space, white and sky blue palette, no people, no text, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.3 `program-ev.webp` — EV High-Voltage Safety

Actual EV battery technology, clean bright industrial aesthetic.

> Close-up of a sleek modern electric vehicle battery pack module, orange high-voltage warning cables visible but tidy, polished aluminum casing, soft blue rim lighting from a clean lab environment, industrial but bright and premium, technical product photography, white and blue and subtle orange accents, no text, no logos, no people, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.4 `program-biochem.webp` — Biochemistry Molecular Assembly

Actual molecular structures — glycolysis, enzymes — not vague crystals.

> Scientific visualization of a large 3D molecular enzyme structure with a glucose substrate docking into its active site, colored atoms (white, light blue, soft cyan, pale gold), glowing chemical bonds, floating in a bright soft atmospheric void with gentle pale blue gradient background, premium scientific rendering, editorial biochemistry aesthetic, no text, no labels, no formulas visible, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 300 --v 6`

---

### 2.5 `program-nutrition.webp` — Gut Field Lab (digestive tract / microbiome)

Anatomical subject matter, not abstract water.

> Stylized 3D medical visualization of a cutaway human digestive system shown in cross-section, gut villi textures visible in the small intestine, soft pale blue and cream and white palette, floating against a bright atmospheric background, clean modern medical-education rendering, anatomically suggestive but abstracted, editorial science illustration, no text, no labels, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 300 --v 6`

---

### 2.6 `tech-headset.webp` — Technology / Platform hero

The hardware and the platform.

> Close-up editorial product photograph of a modern white VR headset (Meta Quest 3 or Pico 4 style) floating against a clean pale blue gradient background, soft rim light catching the lenses, premium tech photography, minimalist commercial aesthetic, bright and hopeful, white and sky blue palette only, no text, no logos, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.7 `tech-platform.webp` — Technology secondary (multi-platform / telemetry)

Abstract but technical — screens, data, curriculum as architecture.

> Abstract visualization of multiple floating holographic interface panels showing educational dashboards, charts, student progress bars, arranged in a bright atmospheric pale blue void, clean UI aesthetic with lots of whitespace, premium tech product rendering, white and cyan and pale blue palette, no readable text (just shapes and bar chart silhouettes), no logos, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 250 --v 6`

---

### 2.8 `about-founder-moment.webp` — About / Mission hero

Contemplative moment tying Apex to medical education roots.

> A lone figure in a white coat standing at a tall arched window looking out over a modern university campus in bright daylight, silhouetted from behind (no visible face), soft blue atmospheric haze, contemplative cinematic mood, editorial architectural photography, white marble interior, premium publication aesthetic, white and pale blue palette, no text, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.9 `about-classroom.webp` — Future of the classroom

A VR-era classroom that feels real, not sci-fi cliché.

> A bright modern university lecture hall with students seated in rows, each wearing a subtle white VR headset (Meta Quest 3 style), soft daylight filling the room through tall windows, viewed from the front of the room, blurred gentle motion, warm academic atmosphere, cinematic editorial photography, white and sky blue palette with warm wood accents, no visible text, no logos, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.10 `case-demo-event.webp` — Khalifa Pilot / MetaHub demo case study

The actual use case: a demo at a university.

> A modern university exhibition hall during a technology showcase event, distant attendees gathered around a demo station, one person in foreground trying on a white VR headset with an assistant guiding them, bright daylight from skylights, blue atmospheric haze, editorial event photography, premium publication quality, mostly white and pale blue palette with subtle warm accents, faces blurred or turned away, no readable text, no logos, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

### 2.11 `contact-campus.webp` — Contact page hero

University setting — inviting, institutional.

> Aerial or upward view of a modern university campus with glass-and-white architecture buildings, bright blue sky with thin clouds, sunlight catching the building facades, cinematic architectural photography, editorial prestige publication aesthetic, white and sky blue palette, no people, no text, no logos, 16:9

**Midjourney:** `--ar 16:9 --style raw --stylize 200 --v 6`

---

## 3. Video prompt — landing hero only

Only the main landing page (`/`) uses a looping background video. All other pages use photos from Section 2. The code is already wired up — just drop the MP4 into `images/hero-loop.mp4` and the site starts playing it automatically. If you skip the video, `about-classroom.webp` is used as the poster fallback.

**Technical specs:**
- Length: 4–8 seconds
- Format: **MP4 (H.264)** — save to `images/hero-loop.mp4`
- Resolution: 1920×1080, 16:9
- Frame rate: 24 or 30 fps
- Audio: **removed** (autoplay requires muted)
- File size: under 4 MB (compress with Handbrake if larger — aim for CRF 23)
- Must loop seamlessly (first and last frame identical or very close)

**Recommended tools:**
- **Runway Gen-3 Alpha** (best quality)
- **Kling AI** (good, cheaper)
- **Luma Dream Machine** (good for slow cinematic)
- **Runway Image-to-Video** — upload `about-classroom.webp` and animate it (easiest path — keeps visual consistency with the poster)

### `hero-loop.mp4` — MAIN LANDING HERO

> A young medical student wearing a white VR headset slowly raising their hands to interact with an invisible holographic interface, in a bright modern university atrium with soft blue daylight streaming through glass windows, subtle slow camera push-in, cinematic slow motion, shallow depth of field, white and pale sky blue palette, premium editorial cinematography, quiet hopeful mood, 6 seconds, seamless loop, no text, no logos

**What happens if the video is missing?**
The site falls back to `about-classroom.webp` (or the CSS gradient if that's missing too). Nothing breaks.

---

## 4. Mapping: which image replaces which CSS class

After generating all images, the CSS classes in `index.html` map as follows:

| CSS class     | Role                              | Replace with image            |
|---------------|-----------------------------------|-------------------------------|
| `.img-horizon`| Hero, roadmap, HUMA cover         | `about-classroom.webp`        |
| `.img-atrium` | About pages, programs library     | `program-humanities.webp`     |
| `.img-blue`   | EV cover, tech accents            | `program-ev.webp`             |
| `.img-earth`  | Biochem cover                     | `program-biochem.webp`        |
| `.img-lab`    | Nutrition cover                   | `program-nutrition.webp`      |
| `.img-dome`   | Technology hero                   | `tech-headset.webp`           |
| `.img-crystal`| About accents, team, various      | `tech-platform.webp`          |
| `.img-library`| Programs index hero               | `about-founder-moment.webp`   |
| `.img-sky`    | Contact, about accents            | `about-classroom.webp`        |
| `.img-cloud`  | Case study, secondary             | `case-demo-event.webp`        |

(`contact-campus.webp` is a spare — use it anywhere that feels thin, or for the contact-page hero if you add one later.)

**To swap a gradient for an image:** open `index.html`, find the class (CSS is around lines ~169–234), replace the `background: linear-gradient(...)` or `background: radial-gradient(...)` line with:

```css
.img-horizon{
  background-image: url('./images/hero-vr-student.webp');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
```

Keep the `::before` decorative overlays below each class — they add a subtle grid/line texture on top of the photo which looks great. If a photo looks too busy with the overlay, just delete the `::before` block for that class.

---

## 5. GitHub deploy — step by step

### 4.1 One-time: install GitHub CLI
Download from https://cli.github.com — install, then in terminal:
```bash
gh auth login
```

### 4.2 Create repo and push
```bash
cd C:/Users/Zhora/Desktop/GameEducation/Website/apex-academy

git init
git add .
git commit -m "Initial commit — Apex Academy website"

gh repo create apex-academy --public --source=. --push
```

### 4.3 Enable GitHub Pages
1. Open the repo page (URL printed above)
2. **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)` → **Save**
5. Wait ~1 min
6. Live at: `https://<your-github-username>.github.io/apex-academy/`

### 4.4 Updating later
```bash
git add .
git commit -m "Update: <what you changed>"
git push
```
Auto-rebuilds in ~1 min.

---

## 6. Custom domain (optional, later)

If you buy `apexacademy.io` or similar:
1. Repo → Settings → Pages → **Custom domain** → enter domain → Save
2. At registrar (Namecheap, Porkbun, Cloudflare), add DNS:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `<your-username>.github.io`
3. Wait up to 24h for DNS
4. Enable **Enforce HTTPS** in Pages settings

---

## 7. Quick checklist

### Minimum launch (photos only)
- [ ] Generate 11 photos (Section 2), save to `images/` folder with exact filenames
- [ ] Open `index.html`, swap gradients → `background-image: url()` for each `.img-*` class (Section 4)
- [ ] Preview locally — double-click `index.html`
- [ ] `git init && git add . && git commit -m "..."`
- [ ] `gh repo create apex-academy --public --source=. --push`
- [ ] Settings → Pages → main branch → Save
- [ ] Share URL with Carlo

### Polish pass (add videos)
- [ ] Generate `hero-loop.mp4` first (biggest impact)
- [ ] Drop MP4 into `images/` folder — site auto-plays it on next load
- [ ] Generate the other 6 videos progressively as you have time
- [ ] `git add images/ && git commit -m "Add hero videos" && git push`
