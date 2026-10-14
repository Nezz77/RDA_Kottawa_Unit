# Content sources and asset notes

Live site: https://rda-kottawa-unit.vercel.app  
Checked 14 October 2026.

- **RDA official website:** https://www.rda.gov.lk/ — national responsibility for road-network development and maintenance; orange branding. The site's stylesheet uses `#FE9A00` prominently. This is a derived design palette, not a formal brand-guideline specification.
- **Vision and mission:** https://rda.gov.lk/index.php?lang=en — checked 14 October 2026. The homepage vision reproduces RDA’s short published statement. The mission is a clearly labelled concise summary, with a visible link to the full national statements. These are RDA-wide priorities, not a separate policy invented for the Kottawa Unit.
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

## Places to visit — 13 October 2026

All 19 agreed destinations are included. Google Maps pins and 10 road-route snapshots were observed in public Maps listings. Additional destination identities and embed URLs came from the primary tourism/venue sources listed in `src/place-map-sources.json`. The user chose existing verified data after the browser permission review blocked broader Google access. No extra travel figures or substitute photographs were invented.

Origin: Green Forest Reserve – Kottawa RDA Circuit Bungalow, `6.0949044,80.3052785`. Driving times are historical snapshots, not live predictions.

| Destination | Approx. road distance | Approx. drive | Photos |
| --- | --- | --- | --- |
| Galle Fort | 15.2 km | 23 min | 2 |
| Rumassala · Jungle Beach | 13.9 km | 22 min | 2 |
| Hikkaduwa Beach | 33.8 km | 47 min | 2 |
| Kottawa Natural Pool | 1.6 km | 3 min | 2 |
| Puhulahena Natural Pool | 11.6 km | 23 min | 1 |
| Kottawa Reserve Forest | Awaiting verification | Awaiting verification | 2 |
| Hiyare Reservoir & Forest | 7.2 km | 12 min | 2 |
| Kekilla Rock | Awaiting verification | Awaiting verification | 1 |
| Japanese Peace Pagoda | 14.1 km | 23 min | 2 |
| Unawatuna Beach | 15.1 km | 25 min | 2 |
| Thalpe Beach & Rock Pools | 19.1 km | 27 min | 2 |
| Koggala Beach | Awaiting verification | Awaiting verification | 2 |
| Koggala Lake & Madol Duwa | Awaiting verification | Awaiting verification | 2 |
| Martin Wickramasinghe Folk Museum | Awaiting verification | Awaiting verification | 2 |
| Handunugoda Tea Estate | Awaiting verification | Awaiting verification | 2 |
| Kanneliya Rainforest | Awaiting verification | Awaiting verification | 2 |
| Holuwagoda Serene River Park | Awaiting verification | Awaiting verification | 2 |
| Leisure Land | Awaiting verification | Awaiting verification | 2 |
| Sapphire Swim | 6.6 km | 16 min | 1 |

### Photo provenance

The photographs are real destination images retrieved from the sources below. Publisher attribution is distinguished from photographer attribution; no ownership or reuse license is claimed. The full image URLs, captions, alt text and dimensions are kept in `src/place-photos.json`. Google map controls and attribution remain native.

**Galle Fort**

- `galle-fort-1.jpg`: Galle from above. Source: Central Cultural Fund. [Source](https://ccf.gov.lk/heritage-sites/galle-fort/).
- `galle-fort-2.jpg`: The lighthouse by the sea. Source: Central Cultural Fund. [Source](https://ccf.gov.lk/heritage-sites/galle-fort/).

**Rumassala · Jungle Beach**

- `jungle-beach-1.jpg`: The sheltered cove. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/unawatuna-rumassala-jungle-beach).
- `jungle-beach-2.jpg`: Where the forest meets the sea. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/unawatuna-rumassala-jungle-beach).

**Hikkaduwa Beach**

- `hikkaduwa-1.jpg`: The Hikkaduwa coastline. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/hikkaduwa-beach).
- `hikkaduwa-2.jpg`: Life in the shallows. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/hikkaduwa-beach).

**Puhulahena Natural Pool**

- `puhulahena-1.jpg`: A pool in a green setting. Trishan Fernando · Google Maps. [Source](https://www.google.com/maps/place/Puhulahena+naturel+pool/@6.0711187,80.3629347,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhBoVA30SLXHRkMaN6FgZDx2!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgrass-cs%2FAABkmLfNOVb3o8bGzf6wTQHVQHxqxZ1boEAVMXmUtz8NgQrhqpEn9xq2cWZmJQ3-G6fwBucApy8I9Q6CLWjiHSE2i8o1KPbcbrChZh3ZYfF72qFc624ReE-fOZYKQRFYStq6YMz0XzBL0CJOyiK5%3Dk-no!7i4080!8i3072!4m6!3m5!1s0x3ae16f00672b381d:0x67334fb519b18a87!8m2!3d6.0711187!4d80.3629347!16s%2Fg%2F11ygdmrr5b?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D).

**Hiyare Reservoir & Forest**

- `hiyare-1.jpg`: A reservoir surrounded by forest. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/hiyare-reservoir-forest).
- `hiyare-2.jpg`: Into the green hills. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/hiyare-reservoir-forest).

**Japanese Peace Pagoda**

- `peace-pagoda-1.jpg`: The pagoda at dusk. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/unawatuna-rumassala-jungle-beach).
- `peace-pagoda-2.jpg`: Above Rumassala. Source: Nature Trails Boutique Hotel. [Source](https://naturetrailsunawatuna.com/attractions/).

**Unawatuna Beach**

- `unawatuna-1.jpg`: The curve of Unawatuna Bay. Source: Sri Lanka Tourism. [Source](https://srilanka.travel/index.php?attraction_id=162&route=attractions%2Fattraction).
- `unawatuna-2.jpg`: Along the palm-lined shore. Source: Sri Lanka Tourism. [Source](https://srilanka.travel/index.php?attraction_id=162&route=attractions%2Fattraction).

**Thalpe Beach & Rock Pools**

- `thalpe-1.jpg`: Thalpe rock pools. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/thalpe-beach).
- `thalpe-2.jpg`: The green edge of the coast. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/thalpe-beach).

**Koggala Beach**

- `koggala-beach-1.jpg`: A walk along Koggala. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/koggala-beach).
- `koggala-beach-2.jpg`: A day by the ocean. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/koggala-beach).

**Koggala Lake & Madol Duwa**

- `koggala-lake-1.jpg`: Still waters at Koggala. Source: Tri Lanka. [Source](https://www.trilanka.com/facilities/boat/).
- `koggala-lake-2.jpg`: Out on the lake. Source: Tri Lanka. [Source](https://www.trilanka.com/facilities/boat/).

**Martin Wickramasinghe Folk Museum**

- `museum-1.jpg`: The house among the trees. Source: Martin Wickramasinghe Trust. [Source](https://martinwickramasinghe.com/museum.html).
- `museum-2.jpg`: A quiet garden setting. Source: Martin Wickramasinghe Trust. [Source](https://martinwickramasinghe.com/museum.html).

**Handunugoda Tea Estate**

- `tea-estate-1.jpg`: From the tea garden. Source: Herman Teas. [Source](https://hermanteas.com/).
- `tea-estate-2.jpg`: An introduction to Ceylon tea. Source: Herman Teas. [Source](https://hermanteas.com/).

**Kanneliya Rainforest**

- `kanneliya-1.jpg`: Waterfall in the forest. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/kanneliya-rain-forest).
- `kanneliya-2.jpg`: Life beneath the canopy. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/kanneliya-rain-forest).

**Holuwagoda Serene River Park**

- `river-park-1.jpg`: By the water. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/destination/holuwagoda-serene-river-park).
- `river-park-2.jpg`: Evening reflections. Source: Ruhunu Tourist Bureau. [Source](https://southernsrilanka.lk/about-us/holuwagoda-serene-river-park).

**Leisure Land**

- `leisure-land-1.jpg`: Pools among the palms. Source: Leisure Land. [Source](https://leisureland.lk/).
- `leisure-land-2.jpg`: A view of the water park. Source: Leisure Land. [Source](https://leisureland.lk/).

### Pin and access details

- Kottawa forest: the listed pin is inside the reserve. The 8.3 km / 18 min route to that interior pin is deliberately not presented as a visitor-entrance estimate.
- Kekilla Rock: map listing is verified; public trail access and driving approach still require confirmation.
- Jungle Beach: estimate reaches the beach-side road location, with the final footpath excluded.
- Hikkaduwa: 33.8 km / 47 min uses the recommended coastal route; an expressway alternative differs.
- Koggala Lake: map and directions use Boat Safari at Koggala Lake No 07 (5.9980869,80.3226919), linked by the KK Collection experience page; this is an access point, not the lake centre or Madol Duwa. The photos are destination images from Tri Lanka, not a promise of a particular operator or boat.
- Puhulahena: directions preserve the user-supplied pin (6.0713083,80.3643358). Its single photo was previously captured from the nearby same-name swimming facility listing (6.0711187,80.3629347), credited to Trishan Fernando. The entrance distinction is stated in the UI.
- The official Unawatuna/Rumassala tourism page embeds Rumassala, so the Unawatuna destination deliberately uses its separately verified beach coordinates instead of that regional embed.
- The second river-park image is a small official 312 × 215 photograph; the viewer contains it against a matching blurred background instead of stretching it to fill.

Current hours, prices, admission, supervised swimming and booking availability are not asserted.

### Remaining destination images added — 13 October 2026

All 19 destinations now have imagery, with 35 locally stored photographs in total.

**Kottawa Natural Pool**

- `kottawa-pool-1.jpg`: The pool beneath the trees · 2013. Source: Unawatuna Beach travel journal · 2013. [Source](https://unawatuna-beach.com/en/kottawa-forest-swimming-pool.html).
- `kottawa-pool-2.jpg`: A forest setting · 2013. Source: Unawatuna Beach travel journal · 2013. [Source](https://unawatuna-beach.com/en/kottawa-forest-swimming-pool.html).

**Kottawa Reserve Forest**

- `kottawa-forest-1.jpg`: Under the canopy. Source: Sri Lanka Eco Tourism. [Source](https://www.srilankaecotourism.lk/kottawa-arboretum-walking-tour.php).
- `kottawa-forest-2.jpg`: The living rainforest. Source: Sri Lanka Eco Tourism. [Source](https://www.srilankaecotourism.lk/kottawa-arboretum-walking-tour.php).

**Kekilla Rock**

- `kekilla-1.webp`: Surrounding Kottawa forest. Source: BBC Sinhala · 2024. [Source](https://www.bbc.com/sinhala/articles/clky9rxr7n9o).

**Sapphire Swim**

- `sapphire-1.jpg`: A pool among the palms. Source: Sapphire Swim. [Source](https://www.facebook.com/61551474026743/posts/122221932674049134/).

Kottawa pool images document a 2013 visit; their dates are visible in both the card and gallery. Forest photographs show the arboretum within the reserve. Kekilla’s image shows surrounding forest, not the summit; that distinction is visible on the card and gallery. Sapphire Swim’s public Facebook post supplies the venue image. Original image URLs and dimensions are retained in `src/place-photos.json`. Existing motion and source links are preserved.
