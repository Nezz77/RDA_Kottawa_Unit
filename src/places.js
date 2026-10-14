import { places, categories } from './places-data.js';
import { icon } from './visuals.js';
import './places.css';

const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const photoPath = photo => `/assets/places/${photo.file}`;
const link = (url, text, cls = '') => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${text}${icon('northeast')}</a>`;
const routeText = place => place.km == null ? 'Check distance & time' : `≈ ${place.km} km · ${place.minutes} min drive`;

export function placesSection() {
  return `<section class="places-section section-pad" id="places" aria-labelledby="places-heading">
    <div class="section-label"><span>03</span><span>BEYOND THE BUNGALOW</span></div>
    <div class="places-heading"><div><span class="eyebrow">KOTTAWA · GALLE · THE SOUTH COAST</span><h2 id="places-heading">Stay a little.<br><span class="serif">Explore a little more.</span></h2></div><div class="places-intro"><p>Forest paths, a quiet pool, a day by the sea. Discover 19 places to visit, with Green Forest Reserve as your starting point.</p><a class="places-origin" href="#visit">${icon('house')} FROM YOUR BUNGALOW ${icon('down')}</a></div></div>
    <div class="place-explorer" id="place-explorer" aria-label="Selected destination">
      <div class="place-visual">
        <div class="place-view-tabs glass-dark" role="tablist" aria-label="Destination view"><button id="place-photos-tab" role="tab" aria-selected="true" aria-controls="place-photos">Photographs</button><button id="place-map-tab" role="tab" aria-selected="false" aria-controls="place-map" tabindex="-1">${icon('pin')} Map view</button></div>
        <div class="place-photos" id="place-photos" role="tabpanel" aria-labelledby="place-photos-tab" tabindex="0" aria-label="Destination photographs. Use left and right arrow keys to browse."><div class="place-slides"></div><div class="place-photo-missing" hidden><span>${icon('pin')}</span><h4>A place to discover.</h4><p>Photographs will be added once verified.</p><a class="place-photo-listing" target="_blank" rel="noopener noreferrer">View the Google Maps listing ${icon('northeast')}</a></div><div class="place-photo-caption"><span class="micro">A CLOSER LOOK</span><h4></h4></div><div class="place-photo-controls glass-dark"><button class="place-prev" aria-label="Previous destination photograph">${icon('arrow')}</button><span class="place-photo-count">01 / 02</span><button class="place-next" aria-label="Next destination photograph">${icon('arrow')}</button><span class="control-divider"></span><button class="place-play" aria-label="Pause destination slideshow" aria-pressed="true">${icon('pause')}</button></div><div class="place-photo-progress" aria-hidden="true"><span></span></div></div>
        <div class="place-map" id="place-map" role="tabpanel" aria-labelledby="place-map-tab" hidden><div class="place-map-frame"></div><span class="place-map-status" role="status">Loading destination map…</span></div>
      </div>
      <div class="place-information"><div class="place-information-top"><span class="place-category pill"></span><span class="place-index micro"></span></div><div class="place-story"><span class="place-area eyebrow"></span><h3 id="place-name" tabindex="-1"></h3><p class="place-description"></p></div><div class="place-trip"><span class="micro">FROM GREEN FOREST RESERVE</span><div class="place-metrics"></div></div><p class="place-visit-note"></p><div class="place-actions"><a class="place-directions button button-orange" target="_blank" rel="noopener noreferrer">Directions from bungalow ${icon('northeast')}</a><a class="place-open-map" target="_blank" rel="noopener noreferrer">View place on Google Maps ${icon('arrow')}</a></div></div>
      <div class="place-source-row"><span class="place-photo-source"></span><span>EXPLORE AT YOUR OWN PACE</span></div>
    </div>
    <div class="places-browser"><div class="places-browser-heading"><h3>Where will you go?</h3><span class="places-result-count" aria-live="polite">19 places to discover</span></div><div class="places-toolbar"><div class="places-filters" role="group" aria-label="Filter destinations">${Object.entries(categories).map(([key,label]) => `<button data-place-filter="${key}" aria-pressed="${key === 'all'}">${label}</button>`).join('')}</div><label class="place-search"><span class="sr-only">Search destinations</span><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input type="search" placeholder="Find a place…" aria-label="Search destinations" /></label></div>
      <div class="places-grid">${places.map((place, index) => `<button class="place-card" data-place-id="${place.id}" aria-pressed="${!index}" aria-controls="place-explorer" style="--place-order:${index % 6}"><span class="place-card-image">${place.photos.length ? `<img src="${esc(photoPath(place.photos[0]))}" alt="" loading="lazy" decoding="async" width="480" height="300" />` : `<span class="place-card-awaiting">${icon('pin')}<span>ON THE MAP<br><small>Photos to come</small></span></span>`}<span class="place-card-category glass-dark">${categories[place.category]}</span>${place.photos[0]?.context ? `<span class="place-card-photo-context glass-dark">${esc(place.photos[0].context)}</span>` : ''}<span class="place-card-arrow">${icon('northeast')}</span></span><span class="place-card-body"><small>${esc(place.area)}</small><strong>${esc(place.name)}</strong><span class="place-card-route">${icon('road')}${routeText(place)}</span></span></button>`).join('')}</div>
      <div class="places-empty" hidden><h3>No places found.</h3><p>Try another name or explore all the destinations.</p><button class="button places-reset">Show all places ${icon('arrow')}</button></div><button class="places-more button">Show all 19 places ${icon('plus')}</button>
    </div><div class="places-footnote">${icon('road')}<p>Distances and driving times are approximate Google Maps snapshots checked on 13 October 2026, measured from the bungalow in Kottawa, Galle. Traffic and routes change. Unverified routes are marked “Check distance & time”; open directions for current details. Walking, boat trips and entry arrangements are additional.</p></div><p class="sr-only place-announcement" aria-live="polite" aria-atomic="true"></p>
  </section>`;
}

export function initPlaces({ reducedMotion, isMotionPaused }) {
  const root = document.querySelector('.places-section');
  if (!root) return () => {};
  const get = selector => root.querySelector(selector);
  const cards = [...root.querySelectorAll('[data-place-id]')];
  const filterButtons = [...root.querySelectorAll('[data-place-filter]')];
  const viewTabs = [...root.querySelectorAll('.place-view-tabs button')];
  const photoPanel = get('.place-photos'), mapPanel = get('.place-map');
  const slidesContainer = get('.place-slides'), playButton = get('.place-play');
  let current = places[0], photoIndex = 0, filter = 'all', query = '', expanded = false, view = 'photos';
  let playing = !reducedMotion.matches && !isMotionPaused(), visible = false, hovered = false, focused = false, timer, mapId;
  const shouldAnimate = () => !reducedMotion.matches && !isMotionPaused();
  const announce = text => { get('.place-announcement').textContent = text; };

  function refreshMotion() {
    clearTimeout(timer);
    get('.place-photo-progress span').getAnimations().forEach(animation => animation.cancel());
    const active = playing && visible && !hovered && !focused && !document.hidden && view === 'photos' && current.photos.length > 1 && shouldAnimate();
    if (playButton.getAttribute('aria-pressed') !== String(playing)) {
      playButton.setAttribute('aria-pressed', String(playing));
      playButton.setAttribute('aria-label', playing ? 'Pause destination slideshow' : 'Play destination slideshow');
      playButton.innerHTML = playing ? icon('pause') : '<span aria-hidden="true">▷</span>';
    }
    root.classList.toggle('places-motion-active', active);
    if (!active) return;
    get('.place-photo-progress span').animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'}], {duration:6500,fill:'forwards'});
    timer = setTimeout(() => showPhoto(photoIndex + 1), 6500);
  }
  function updateSource() {
    const photo = current.photos[photoIndex];
    get('.place-photo-source').innerHTML = view === 'map'
      ? link(current.map, 'Map: Google Maps')
      : photo ? link(photo.source, esc(photo.credit)) : link(current.map, 'Photographs awaiting verification · View listing');
  }
  function showPhoto(next, manual = false) {
    if (!current.photos.length) return;
    photoIndex = (next + current.photos.length) % current.photos.length;
    const photo = current.photos[photoIndex];
    [...slidesContainer.children].forEach((slide,index) => {
      slide.classList.toggle('is-active', index === photoIndex);
      slide.setAttribute('aria-hidden', String(index !== photoIndex));
    });
    get('.place-photo-count').textContent = `${String(photoIndex + 1).padStart(2,'0')} / ${String(current.photos.length).padStart(2,'0')}`;
    get('.place-photo-caption h4').textContent = photo.title;
    updateSource();
    if (manual) announce(`${current.name}: photograph ${photoIndex + 1} of ${current.photos.length}. ${photo.title}`);
    refreshMotion();
  }
  function renderPhotos() {
    photoIndex = 0;
    const hasPhotos = current.photos.length > 0;
    slidesContainer.innerHTML = current.photos.map((photo,index) => `<figure class="place-slide ${!index ? 'is-active' : ''} ${photo.height > photo.width || photo.width < 500 ? 'place-contain' : ''}" aria-hidden="${!!index}"><img class="place-photo-ambient" src="${esc(photoPath(photo))}" alt="" aria-hidden="true" decoding="async" /><img class="place-photo-image" src="${esc(photoPath(photo))}" alt="${esc(photo.alt)}" decoding="async" width="${photo.width}" height="${photo.height}" /><span class="place-photo-shade"></span></figure>`).join('');
    get('.place-photo-missing').hidden = hasPhotos;
    get('.place-photo-caption').hidden = !hasPhotos;
    get('.place-photo-controls').hidden = !hasPhotos;
    get('.place-photo-listing').href = current.map;
    get('.place-prev').disabled = current.photos.length < 2;
    get('.place-next').disabled = current.photos.length < 2;
    playButton.hidden = current.photos.length < 2;
    get('.place-photo-controls .control-divider').hidden = current.photos.length < 2;
    if (hasPhotos) showPhoto(0); else updateSource();
    slidesContainer.querySelectorAll('.place-photo-image').forEach(image => image.addEventListener('error', () => {
      image.closest('.place-slide').classList.add('photo-unavailable');
      const label = document.createElement('span');
      label.className = 'place-image-error'; label.textContent = 'This photograph could not load. Please try refreshing.';
      image.closest('.place-slide').append(label);
    }, { once:true }));
  }
  function renderMap() {
    if (mapId === current.id) return;
    mapId = current.id;
    const frame = document.createElement('iframe');
    frame.title = `Interactive Google map of ${current.name}`;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    frame.src = current.embed;
    get('.place-map-status').hidden = false;
    frame.addEventListener('load', () => { if (frame === get('.place-map-frame iframe')) { frame.classList.add('is-loaded'); get('.place-map-status').hidden = true; } });
    get('.place-map-frame').replaceChildren(frame);
  }
  function setView(next) {
    view = next;
    photoPanel.hidden = view !== 'photos'; mapPanel.hidden = view !== 'map';
    viewTabs.forEach((tab,index) => { const selected = index === (view === 'photos' ? 0 : 1); tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1; });
    root.classList.toggle('places-map-visible', view === 'map');
    if (view === 'map') renderMap();
    updateSource();
    refreshMotion();
  }
  function selectPlace(place, manual = false) {
    current = place;
    const index = places.indexOf(place);
    get('.place-category').textContent = categories[place.category];
    get('.place-index').textContent = `${String(index + 1).padStart(2,'0')} / 19`;
    get('.place-area').textContent = place.area;
    get('#place-name').textContent = place.name;
    get('.place-description').textContent = place.description;
    get('.place-visit-note').textContent = place.note;
    get('.place-metrics').innerHTML = place.km == null
      ? `<a class="place-route-pending" href="${esc(place.directions)}" target="_blank" rel="noopener noreferrer">Check distance & time ${icon('northeast')}<small>Open current driving directions</small></a>`
      : `<div><strong>${place.km}<small> km</small></strong><span>APPROX. ROAD DISTANCE</span></div><div><strong>${place.minutes}<small> min</small></strong><span>APPROX. DRIVE</span></div>`;
    get('.place-directions').href = place.directions;
    get('.place-open-map').href = place.map;
    cards.forEach(card => card.setAttribute('aria-pressed', String(card.dataset.placeId === place.id)));
    renderPhotos();
    if (view === 'map') renderMap();
    if (manual) {
      announce(`${place.name}. ${routeText(place)} from the bungalow.`);
      get('#place-name').focus({ preventScroll:true });
      get('.place-explorer').scrollIntoView({ behavior:shouldAnimate() ? 'smooth' : 'instant', block:'start' });
      if (shouldAnimate()) {
        get('.place-story').getAnimations().forEach(animation => animation.cancel());
        get('.place-story').animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.22,1,.36,1)'});
        slidesContainer.animate([{opacity:.2},{opacity:1}],{duration:800,easing:'ease-out'});
      }
    }
    refreshMotion();
  }
  function filterPlaces() {
    const matches = places.filter(place => (filter === 'all' || place.category === filter) && `${place.name} ${place.area} ${place.description}`.toLowerCase().includes(query));
    const shown = expanded || filter !== 'all' || query ? matches : matches.slice(0,6);
    cards.forEach(card => { card.hidden = !shown.some(place => place.id === card.dataset.placeId); });
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.placeFilter === filter)));
    get('.places-result-count').textContent = `${matches.length} ${matches.length === 1 ? 'place' : 'places'}${shown.length < matches.length ? ` · showing ${shown.length}` : ' to discover'}`;
    get('.places-empty').hidden = matches.length > 0;
    get('.places-more').hidden = shown.length === matches.length;
  }
  filterButtons.forEach(button => button.addEventListener('click', () => { filter = button.dataset.placeFilter; filterPlaces(); }));
  get('.place-search input').addEventListener('input', event => { query = event.target.value.trim().toLowerCase(); filterPlaces(); });
  get('.places-more').addEventListener('click', () => { expanded = true; filterPlaces(); cards[6]?.focus({ preventScroll:true }); });
  get('.places-reset').addEventListener('click', () => { query = ''; filter = 'all'; get('.place-search input').value = ''; filterPlaces(); filterButtons[0].focus(); });
  cards.forEach(card => card.addEventListener('click', () => selectPlace(places.find(place => place.id === card.dataset.placeId), true)));
  viewTabs.forEach((tab,index) => {
    tab.addEventListener('click', () => setView(index ? 'map' : 'photos'));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
      event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - index;
      setView(next ? 'map' : 'photos'); viewTabs[next].focus();
    });
  });
  get('.place-prev').addEventListener('click', () => showPhoto(photoIndex - 1, true));
  get('.place-next').addEventListener('click', () => showPhoto(photoIndex + 1, true));
  playButton.addEventListener('click', () => { playing = !playing; refreshMotion(); });
  photoPanel.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault(); showPhoto(event.key === 'Home' ? 0 : event.key === 'End' ? current.photos.length - 1 : photoIndex + (event.key === 'ArrowRight' ? 1 : -1), true);
  });
  photoPanel.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; refreshMotion(); } });
  photoPanel.addEventListener('pointerleave', () => { hovered = false; refreshMotion(); });
  photoPanel.addEventListener('focusin', event => { focused = !event.target.closest('.place-play'); refreshMotion(); });
  photoPanel.addEventListener('focusout', event => { focused = photoPanel.contains(event.relatedTarget) && !event.relatedTarget?.closest('.place-play'); refreshMotion(); });
  let touch;
  photoPanel.addEventListener('pointerdown', event => { if (event.pointerType === 'touch' && !event.target.closest('button,a')) touch = {x:event.clientX,y:event.clientY}; });
  photoPanel.addEventListener('pointerup', event => {
    if (!touch) return; const dx = event.clientX-touch.x, dy = event.clientY-touch.y;
    if (Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy)*1.5) showPhoto(photoIndex+(dx<0?1:-1),true);
    touch = null;
  });
  photoPanel.addEventListener('pointercancel', () => { touch = null; });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; refreshMotion(); }, { threshold:.2 }).observe(get('.place-explorer'));
  reducedMotion.addEventListener('change', refreshMotion);
  document.addEventListener('visibilitychange', refreshMotion);
  selectPlace(current); filterPlaces();
  return refreshMotion;
}
