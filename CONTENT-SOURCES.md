# Content sources and asset notes

Checked 12 October 2026.

- **RDA official website:** https://www.rda.gov.lk/ — national responsibility for road-network development and maintenance; orange branding. The site's stylesheet uses `#FE9A00` prominently. This is a derived design palette, not a formal brand-guideline specification.
- **Photograph:** https://www.rda.gov.lk/images/slider/Extension_of_Southern_Expressway_During_Construction.jpg — the local file `public/assets/expressway.jpg`. Captioned as Southern Expressway / RDA image archive; never described as a photograph of the Kottawa Unit. Source copyright remains with its owner. Confirm organizational permission for publication if required.
- **Unit location supplied by owner:** https://share.google/zoMYCTSZmSnP5o3NB — resolves to a Google listing search for RDA UNITE Kottawa. The Galle–Udugama Road address is corroborated by https://www.cybo.com/LK/kottawa/corporate-management/ ; confirm the precise postal address before public launch.
- **Quarters location supplied by owner:** https://maps.app.goo.gl/ibSGpVBKes2zemxp9 — resolves to Green Forest Reserve – Kottawa RDA Circuit Bangalow, latitude `6.0949044`, longitude `80.3052785`. The UI uses the standard spelling “Bungalow”. This is Kottawa in the Galle area, not the Colombo-area Kottawa expressway interchange.
- **Completion / air conditioning:** supplied directly by the project owner. Eligibility, contact, rates and booking details are intentionally left for the owner to add.
- **Original illustrations:** the focus-card roads and bridge and A/C graphic are code-native SVG/CSS. The illustrated location guides have been replaced with real Google Maps embeds. The former road-trace section and quarters room illustration have been replaced by actual Maps photographs.
- **Manrope font:** Google Fonts / Manrope by Mikhail Sharanda and contributors. Downloaded from fonts.gstatic.com. SIL Open Font License; see `public/assets/OFL-Manrope.txt`.

No reviews, statistics, room counts, contact numbers or booking availability are fabricated. This is an informational website, with no payment processing or reservation backend.

- **Official RDA logo:** https://www.rdasp.lk/imges/logo1.png — the unmodified logo used on https://www.rdasp.lk/, saved as `public/assets/rda-official-logo.png` and displayed in the header, footer and favicon.
- **Developer credit:** “Designed & Developed by FutureTech|NH”, supplied directly by the project owner.

## Property photographs added from the supplied Google Maps listing

Three selected photographs are stored locally and linked back to https://maps.app.goo.gl/ibSGpVBKes2zemxp9 in the galleries:

- `quarters-exterior.jpg`: white bungalow, tiled roof and garden. The Maps photo viewer credited **Namindu Hasalanka**, July 2026.
- `quarters-bedroom.jpg`: the bedroom with timber ceiling and a visible wall-mounted A/C unit.
- `quarters-veranda.jpg`: white veranda columns with surrounding greenery.

The interior and veranda contributor names were not independently captured; their source is the same Maps listing. No claim of ownership is made. Images are original retrieved photographs; presentation uses CSS cropping, blur, soft overlays and transitions. Staff names and designations remain unset until provided by the owner.

## Interactive location maps — 13 October 2026

Both pages now use the actual Google Maps **Share → Embed a map** URLs for the owner-supplied locations. The unit is **RDA UNITE Kottawa**, at `6.094551, 80.305018`, address `38V4+R2C, Galle - Udugama Rd, Kottawa`; the quarters are **Green Forest Reserve - Kottawa RDA Circuit Bangalow**, at `6.0949044, 80.3052785`. They are separate nearby pins.

The embed URLs are stored in `src/config.js`. Native Google place labels, controls and attribution remain intact; no map tiles are recreated or cached. The supplied outbound location links remain unchanged. Both pins and destination switching were checked in the local browser preview.
