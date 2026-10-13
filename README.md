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
| `unitMapEmbed`, `quartersMapEmbed` | Verified Google Maps embed URLs for the real interactive location panels. No API key required. |
| `quartersPhoto` | Exterior photograph for the homepage feature, already set to the supplied Maps photo. |
| `staff` | Array of confirmed profiles. Each accepts `name`, `role`, optional `photo` and optional `description`. Empty shows a clear coming-soon state. |
| `quartersPhotoAlt` | A useful description of the real photograph. |
| `eligibility` | Confirmed rules on who can use the quarters. |
| `bookingInformation` | Confirmed booking process, rates or contact instructions. |
| `checkInInformation` | Optional arrival information; adds a FAQ when populated. |

Rebuild after editing. Blank contact/booking fields display an honest “details coming soon” state. There is no simulated reservation, payment or availability flow. The shopping-style animation brief is adapted to the unit's focus areas and accommodation, rather than fictional products.

## Included interactions

- Dark intro with one clock controlling typewriter lettering and progress; the wordmark moves into the header. Shown once per browser session; replay from the footer, or add `?intro=1`.
- Circular light/dark sweep with the View Transitions API and a direct theme-change fallback. Theme preference persists locally.
- Real Google Maps property photographs replace the former road-trace section. Soft crossfades, slow zoom, staggered glass captions, thumbnail selection, keyboard navigation and touch swipes.
- Automatic slideshows pause offscreen, in hidden tabs, during mouse hover and keyboard interaction. Dedicated play/pause controls and global motion preferences are supported.
- Frosted glass navigation with grouped links, pill-shaped controls and a responsive staff directory.
- Cascading illuminated focus cards controlled by “Connections in motion”.
- The quarters page includes its own photographic tour, with portrait images displayed against matching blurred backgrounds.
- Mobile menu, native accessible service dialogs, FAQ accordions, and keyboard-operated destination tabs.
- Real interactive Google Maps views on both pages, using the two distinct place listings. Destination tabs crossfade between maps and update the text and directions link. Native map controls and Google attribution remain visible; Google Maps requires an internet connection. Inactive maps load only after first selection.
- A 19-place destination explorer on `/quarters/#places`, with category filters, search, a six-card preview and expansion, local photographs, source credits, keyboard and touch gallery controls, and a selected-place Google Maps view.
- Ten verified driving snapshots from the bungalow. Routes awaiting verification link to current Google directions without inventing a number.
- Reduced-motion support and an optional pause-animations control.

## Content and imagery

See `CONTENT-SOURCES.md`. The bungalow, bedroom and veranda photographs come from the owner-supplied Google Maps listing. They are stored locally, with a visible source link in each gallery. The gallery preserves portrait compositions against a blurred copy of the same photograph. Photo paths, descriptions and order are editable in `src/gallery.js`. The property completion and A/C details were provided by the project owner. No room counts, rates, opening times, amenities beyond A/C, or eligibility rules were invented.

The header, footer and browser tab use the official RDA logo image from the RDA Southern Province website, preserved in its original colours and white background. Both pages include the footer credit “Designed & Developed by FutureTech|NH”.

## Structure

```text
index.html            Unit page metadata and entry
quarters/index.html   Quarters page metadata and entry
src/config.js         Editable contacts and property information
src/main.js           Page content and interactive behaviour
src/gallery.js        Photo selection and accessible slideshow interactions
src/maps.js           Real map views and destination switching
src/places-data.js    Destination descriptions, pins and route snapshots
src/place-photos.json Verified photo metadata, captions and source credits
src/place-map-sources.json Source-provided map embeds
src/places.js         Destination explorer and gallery interactions
src/places.css        Explorer layout, glass controls and responsive styles
src/visuals.js        Official logo, SVG illustrations and icons
src/style.css         Layout, themes, animation and responsive styles
public/assets/        Local photograph and fonts
vercel.json           Vercel build and security-header settings
```

This project was built and checked locally. It has not been pushed to GitHub or deployed to Vercel.

## Nearby places guide

The quarters page includes all 19 agreed destinations. Edit names, categories, descriptions, coordinates and travel snapshots in `src/places-data.js`. Distances are **road distances from 6.0949044,80.3052785**, the bungalow in Kottawa near Galle. They are not straight-line distances, live traffic, or distances from Colombo-area Kottawa.

The gallery uses **29 local photographs across 15 destinations**. Add verified photographs for Kottawa Natural Pool, Kottawa Reserve Forest, Kekilla Rock and Sapphire Swim to `public/assets/places/`, then add their metadata under the matching `id` in `src/place-photos.json`. Until then they have a clear photo-pending state and a link to their real map listing. A one-photo destination remains usable with disabled previous/next controls.

Ten places have verified approximate driving distance/time snapshots dated 13 October 2026. Nine remaining routes show **Check distance & time** and provide live directions. `km: null, minutes: null` is intentional. In particular, the Kottawa forest's interior map pin must not be presented as a verified visitor entrance. Koggala Lake directions point to a sourced boat access location, and exclude boat travel. The user chose to use existing verified data when broader Google browser access was unavailable.

Photo/map switching creates only the selected destination's iframe. All 19 places have their own map view and outbound directions. Photos fade between slides; motion pauses offscreen, on hover/focus, with the global pause setting, or with a reduced-motion preference. Images retain contributor/publisher source links. See `CONTENT-SOURCES.md` for provenance and remaining content gaps.
