import photos from './place-photos.json';
import locationSources from './place-map-sources.json';

// Driving snapshots from the bungalow, checked 13 October 2026.
// Null means not verified; never replace it with a straight-line estimate.
export const places = [
  { id:'galle-fort', name:'Galle Fort', category:'heritage', area:'Galle', tag:'Walk through history', coordinates:[6.0304592,80.2150207], identity:'0x3ae173a378ee025d:0xb96f8a16ae16c3fe', km:15.2, minutes:23,
    description:'Follow the sea-facing ramparts, wander the old streets and make a stop at the lighthouse. The clock tower, museums and cafés make the fort a day out of its own.', note:'The driving route ends at the fort. Explore the streets and ramparts on foot.' },
  { id:'jungle-beach', name:'Rumassala · Jungle Beach', category:'beaches', area:'Unawatuna', tag:'A little cove, a slower day', coordinates:[6.0186943,80.2394104], identity:'0x3ae172f940bf9841:0xfe2eceeb0aa33a47', km:13.9, minutes:22,
    description:'A small coastal escape below the wooded slopes of Rumassala. Pair time by the cove with a visit to the nearby Japanese Peace Pagoda.', note:'Allow extra time for the final walk down to the beach; the driving estimate excludes the footpath.' },
  { id:'hikkaduwa', name:'Hikkaduwa Beach', category:'beaches', area:'Hikkaduwa', tag:'A change of coastal pace', coordinates:[6.1377266,80.0990596], identity:'0x3ae177e2cbcb6ead:0xd0adba737d2f45d9', km:33.8, minutes:47,
    description:'Head west for a lively beach town, a long stretch of coast and places to pause beside the ocean. A longer outing from the quiet of Kottawa.', note:'Estimate follows the recommended coastal route. Other routes may differ.' },
  { id:'kottawa-pool', name:'Kottawa Natural Pool', category:'nature', area:'Kottawa', tag:'Close to your stay', coordinates:[6.0976333,80.3165331], identity:'0x3ae16f1f2cc1fe65:0x69f06209f0649f3', km:1.6, minutes:3,
    description:'A nearby natural swimming-pool destination in the Kottawa forest area. An easy place to include in a short outing from the bungalow.', note:'Check local access and water conditions before visiting.' },
  { id:'puhulahena', name:'Puhulahena Natural Pool', category:'family', area:'Yakkalamulla', tag:'The pool you asked for', coordinates:[6.0713083,80.3643358], identity:'0x3ae16f002a7807e9:0x943ed82434861ede', km:11.6, minutes:23,
    description:'The privately operated pool identified for this guide, set in the Yakkalamulla area. Plan a relaxed swimming outing with family or friends.', note:'Directions use the supplied Yakkalamulla pin. The photograph is from the nearby same-name pool listing; confirm the entrance with the venue.' },
  { id:'kottawa-forest', name:'Kottawa Reserve Forest', category:'nature', area:'Kottawa', tag:'Beneath a greener canopy', coordinates:[6.0945932,80.324096], identity:'0x3ae16ef7875dfc59:0x1273ff688f1894b8', km:null, minutes:null,
    description:'Discover the green surroundings that give this part of Kottawa its character. A forest outing close to the bungalow, with the visitor entrance to confirm locally.', note:'The map pin is inside the reserve. Ask for the visitor entrance before setting out; an entrance route has not been verified.' },
  { id:'hiyare', name:'Hiyare Reservoir & Forest', category:'nature', area:'Hiyare', tag:'Water, forest and birdsong', coordinates:[6.0583848,80.3155632], identity:'0x3ae16d6cc28966bb:0xcb7d82645687f4ed', km:7.2, minutes:12,
    description:'A reservoir edged by lowland rainforest, with a quieter landscape to explore outside Galle. The area is also associated with conservation and wildlife education.', note:'Check visitor access in advance, particularly for the conservation and rescue facilities.' },
  { id:'kekilla', name:'Kekilla Rock', category:'nature', area:'Kottawa', tag:'A local place to discover', coordinates:[6.0910466,80.3172851], identity:'0x3ae16f1ac55ef137:0xa15c4242d0af82', km:null, minutes:null,
    description:'A locally listed rock attraction in the Kottawa area. Add it to a nearby outing after checking the approach and current access with someone local.', note:'The attraction pin is verified. The public approach, entrance and driving route still need confirmation.' },
  { id:'peace-pagoda', name:'Japanese Peace Pagoda', category:'heritage', area:'Rumassala', tag:'A moment above the bay', coordinates:[6.016035,80.2381783], identity:'0x3ae172fb8cbf8cd1:0xf266f3c84343f7d3', km:14.1, minutes:23,
    description:'The white pagoda above the coast is a peaceful stop on a Rumassala visit. Combine it with nearby Jungle Beach for a change of scenery.', note:'A place of worship: dress respectfully and follow local visitor guidance.' },
  { id:'unawatuna', name:'Unawatuna Beach', category:'beaches', area:'Unawatuna', tag:'An afternoon by the bay', coordinates:[6.0083046,80.2444595], identity:'0x3ae1739ccbbf2e6d:0xd4ec2033628821e9', km:15.1, minutes:25,
    description:'A palm-lined bay with a broad curve of sand and a lively beachside village. Stay for a walk along the shore or make it part of a south-coast day out.', note:'Drive time is to the beach map pin. Choose parking and beach access on arrival.' },
  { id:'thalpe', name:'Thalpe Beach & Rock Pools', category:'beaches', area:'Thalpe', tag:'A different kind of shoreline', coordinates:[5.9952498,80.2878868], identity:'0x3ae16d44d2b29173:0x797de772d527c2c5', km:19.1, minutes:27,
    description:'Distinctive rectangular rock pools sit beside a palm-fringed coast. Visit for the unusual shoreline and ocean views along the road east of Unawatuna.', note:'Sea and tide conditions change. The rock pools are not a supervised swimming facility.' },
  { id:'koggala-beach', name:'Koggala Beach', category:'beaches', area:'Koggala', tag:'Room to wander', identity:'0x3ae16d2f98fcaa49:0xf36cd1aba09a4b27', query:'Koggala Beach Sri Lanka', km:null, minutes:null,
    description:'A long, open stretch of the south coast with golden sand and rolling waves. Pair a beach stop with the museum or a visit to Koggala Lake.', note:'Use current directions for road distance and journey time from the bungalow.' },
  { id:'koggala-lake', name:'Koggala Lake & Madol Duwa', category:'nature', area:'Koggala', tag:'Take the day onto the water', coordinates:[5.9980869,80.3226919], identity:'0x3ae16d20a54c67fb:0x19fe9638cfc5688b', km:null, minutes:null,
    description:'Explore the lake and its small islands on an arranged boat trip. Madol Duwa is one of the best-known stops in this green waterside landscape.', note:'The map shows Boat Safari at Koggala Lake No 07, a lake access point. Arrange the jetty and itinerary with your operator; boat travel is additional.' },
  { id:'museum', name:'Martin Wickramasinghe Folk Museum', category:'heritage', area:'Koggala', tag:'Stories of everyday Sri Lanka', identity:'0x3ae16cd121185f6f:0xbe05cd99f70c84de', query:'Martin Wickramasinghe Folk Museum Koggala', km:null, minutes:null,
    description:'Visit the writer’s childhood home and museum grounds to explore Sri Lankan folk culture, traditional crafts and everyday life through the collection.', note:'Confirm current visiting arrangements with the museum before your trip.' },
  { id:'tea-estate', name:'Handunugoda Tea Estate', category:'heritage', area:'Ahangama area', tag:'From the leaf to the cup', query:'Handunugoda Tea Estate Sri Lanka', map:'https://maps.app.goo.gl/npenYoihemmhNZu48', km:null, minutes:null,
    description:'A working tea estate offering an introduction to its tea gardens, production and tasting. A countryside stop for anyone curious about Ceylon tea.', note:'Contact the estate for current tour and tasting arrangements.' },
  { id:'kanneliya', name:'Kanneliya Rainforest', category:'nature', area:'Kanneliya', tag:'Follow the forest trail', identity:'0x3ae1635c8925f953:0xaefba3aa56c0b8fd', query:'Kanneliya National Rain Forest Reserve Sri Lanka', km:null, minutes:null,
    description:'Plan a forest excursion beneath a rich lowland canopy. Anagimale Ella is one of the waterfall stops associated with the reserve’s walking trails.', note:'Confirm entry and guide arrangements. Driving time does not include the walk to Anagimale Ella.' },
  { id:'river-park', name:'Holuwagoda Serene River Park', category:'family', area:'Holuwagoda', tag:'A gentle waterside outing', identity:'0x3ae1710545b293d9:0xa0261d6703f387ac', query:'Holuwagoda Water Park Sri Lanka', km:null, minutes:null,
    description:'Landscaped paths and a waterside pavilion offer a change of pace for a family outing. Enjoy the open setting and reflections beside the water.', note:'Check the park’s current visitor arrangements before leaving.' },
  { id:'leisure-land', name:'Leisure Land', category:'family', area:'Galle', tag:'Make a day of it', coordinates:[6.0310407,80.2689841], query:'Leisure Land Water Park Galle Sri Lanka', map:'https://www.google.com/maps/search/?api=1&query=Leisure+Land+Galle&query_place_id=ChIJt5RcRnpy4ToRx7ubNibTwrg', km:null, minutes:null,
    description:'A family water park with swimming pools in a tropical setting. An alternative to a beach day, with activities and admission arranged directly with the venue.', note:'Confirm opening, admission and available activities with Leisure Land.' },
  { id:'sapphire', name:'Sapphire Swim', category:'family', area:'Ihala Keembiya', tag:'Another nearby pool escape', coordinates:[6.1065271,80.2843714], identity:'0x3ae16f1d39534325:0x8b43588ce7597e7c', km:6.6, minutes:16,
    description:'A separate swimming-pool venue in Ihala Keembiya for a short outing from Kottawa. Contact the venue to arrange your visit.', note:'This is a separate venue from Puhulahena Natural Pool. Confirm entry arrangements directly.' },
].map(place => {
  const source = locationSources.find(item => item.id === place.id && item.maps?.some(url => url.includes('/maps/embed') && (!place.identity || decodeURIComponent(url).includes(place.identity))));
  const point = place.coordinates?.join(',') || place.query;
  const map = place.map || `https://www.google.com/maps?cid=${BigInt(place.identity.split(':')[1]).toString()}`;
  return { ...place, map, photos:photos.find(item => item.id === place.id)?.photos || [],
    embed:source?.maps.find(url => url.includes('/maps/embed')) || `https://maps.google.com/maps?q=${encodeURIComponent(point)}&z=15&output=embed`,
    directions:`https://www.google.com/maps/dir/?api=1&origin=6.0949044%2C80.3052785&destination=${encodeURIComponent(point)}&travelmode=driving`,
  };
});

export const categories = { all:'All places', nature:'Nature & forest', beaches:'By the sea', heritage:'Heritage & tea', family:'Pools & outings' };
