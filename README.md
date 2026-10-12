# RDA Kottawa

A custom, responsive two-page website for RDA Kottawa Unit and its newly completed government quarters. Built with Vite, native JavaScript, CSS and SVG. No backend, API key or database is required.

## Run locally

Use Node.js 22.12 or later.

```sh
npm install
npm run dev
```

Build and preview the production files:

```sh
npm run build
npm run preview
```

## Deploy to Vercel

Import this folder's Git repository into Vercel and select the Vite framework preset. The included `vercel.json` sets the build command to `npm run build` and output directory to `dist`. No environment variables are required. Both `/` and `/quarters/` are built as separate HTML entries, so direct links and page refreshes work without an SPA rewrite.

Alternatively, run `npx vercel` from this folder after signing into your Vercel account. Publish to production only when you are ready with `npx vercel --prod`.

Deployment guidance: https://vercel.com/docs/frameworks/frontend/vite

## Add the details later

Edit **`src/config.js`**:

| Setting | Purpose |
| --- | --- |
| `unitPhone`, `unitEmail` | Unit contact links. Empty values stay hidden. |
| `quartersPhone`, `quartersEmail` | Quarters contact links. Empty values stay hidden. |
| `unitAddress`, `unitMap` | Unit address and supplied location link. |
| `quartersMap` | Supplied bungalow directions link. |
| `quartersPhoto` | Optional actual exterior photograph, e.g. `/assets/quarters-exterior.jpg`. Put the image in `public/assets/`. |
| `quartersPhotoAlt` | A useful description of the real photograph. |
| `eligibility` | Confirmed rules on who can use the quarters. |
| `bookingInformation` | Confirmed booking process, rates or contact instructions. |
| `checkInInformation` | Optional arrival information; adds a FAQ when populated. |

Rebuild after editing. Blank contact/booking fields display an honest “details coming soon” state. There is no simulated reservation, payment or availability flow. The shopping-style animation brief is adapted to the unit's focus areas and accommodation, rather than fictional products.

## Included interactions

- Dark intro with one clock controlling typewriter lettering and progress; the wordmark moves into the header. Shown once per browser session; replay from the footer, or add `?intro=1`.
- Circular light/dark sweep with the View Transitions API and a direct theme-change fallback. Theme preference persists locally.
- Scroll-triggered animated road trace with timed copy reveal.
- Cascading illuminated focus cards controlled by “Connections in motion”.
- Independent evening ambience switch for the quarters illustration.
- Mobile menu, native accessible service dialogs, FAQ accordions, keyboard-operated destination tabs, and correct external map links.
- Reduced-motion support and an optional pause-animations control.

## Content and imagery

See `CONTENT-SOURCES.md`. The room scene is an original, labelled illustration, not a photograph or a claim about the actual floor plan/furnishings. Replace it with a real photo using the configuration above. The property completion and A/C details were provided by the project owner. No room counts, rates, opening times, amenities beyond A/C, or eligibility rules were invented.

The header, footer and browser tab use the official RDA logo image from the RDA Southern Province website, preserved in its original colours and white background. Both pages include the footer credit “Designed & Developed by FutureTech|NH”.

## Structure

```text
index.html            Unit page metadata and entry
quarters/index.html   Quarters page metadata and entry
src/config.js         Editable contacts and property information
src/main.js           Page content and interactive behaviour
src/visuals.js        Original SVG illustrations and icons
src/style.css         Layout, themes, animation and responsive styles
public/assets/        Local photograph and fonts
vercel.json           Vercel build and security-header settings
```

This project was built and checked locally. It has not been pushed to GitHub or deployed to Vercel.
