# Portfolio

React 19 · Vite · Tailwind CSS v4 · React Router 7. **All content lives in JSON files**, so you never need to open a component to change text, links or images.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve dist/ locally
```

Needs Node 20.19+ (Vite 7).

## Edit the content (`src/data/`)

| File | Controls |
| --- | --- |
| `site.json` | page title and description, **section order**, wax-seal letter, stamp text, **resume link** |
| `hero.json` | title, intro, featured image, caption, links |
| `about.json` | title, paragraphs, closing line, profile card (photo, facts, languages) |
| `services.json` | title, intro and the list of services |
| `works.json` | section texts, the Work page nav items (`categories`) and every work (`items`) |
| `story.json` | the hand-drawn timeline: notes and collage pieces |
| `certs.json` | title and the horizontal list of certificates |

## Images and the resume are links

Every `image` / `photo` field takes either a full URL (`https://…`) or a file from `public/` (`/badges/rug.webp`). Empty or broken links fall back to a soft placeholder.

Resume: paste the link of your PDF into `site.json` → `resume.url`. The "( resume )" links appear in the hero and in About. Leave it empty to hide them.

## Sections

`site.json` → `sections` decides which sections show and in what order. Remove a key to hide a section.

Add a new section:

1. Add `src/data/mysection.json` and export it from `src/data/index.js`.
2. Create `src/sections/MySection.jsx` (wrap it in `<Section id="mysection">`).
3. Register it in `src/pages/Home.jsx`.
4. Add `"mysection"` to `sections` in `site.json`.

Add a work, certificate or service: add one object to `items` in the matching JSON file. Add a nav item to the Work page: add one object to `categories` in `works.json` and give works that `category` key.

## Look and feel

Colors, fonts and shadows are tokens in the `@theme` block of `src/index.css`. Change one there and the whole site follows. Fonts are loaded in `index.html`.

## Deploy

Any static host. It is a single-page app, so every URL must serve `index.html`: `public/_redirects` covers Netlify and Cloudflare Pages; on Vercel add a rewrite of `/(.*)` to `/index.html`.

## Structure

```
src/
├─ data/          content (JSON) + index.js
├─ sections/      Hero, About, Services, Work, Story, Certifications
├─ pages/         Home, WorkPage, NotFound
├─ components/
│  ├─ ui/         Section, SectionTitle, ArrowLink, PaperCard, WaxSeal, Stamp, NavBar, Img, Photo
│  └─ cards/      ProfileCard, WorkCard, WorkGrid, CertCard, ServiceRow
├─ hooks/         useScrollProgress, useDocumentMeta
├─ lib/           cx, url, resume, works, styles
├─ App.jsx        router
└─ index.css      design system
```
