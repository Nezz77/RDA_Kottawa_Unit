import { icon } from './visuals.js';
import './villa-tour.css';

// Owner-supplied photographs. Original filenames are retained in the asset names.
export const villaPhotos = [
  { id: 'frontview', title: 'The villa', area: 'ARRIVAL', caption: 'White veranda columns, a tiled roof and a garden setting at Green Forest Villa.', alt: 'Front of Green Forest Villa with a covered veranda and surrounding lawn' },
  { id: 'livingarea', title: 'Living & dining', area: 'SHARED SPACES', caption: 'A shared living area with sofa seating and a dining table, all in one open room.', alt: 'Blue sofa seating and a wooden dining table in the villa living area' },
  { id: 'livingarea2', title: 'The living area', area: 'SHARED SPACES', caption: 'Another view of the sitting area, with daylight through the timber-framed windows.', alt: 'Living area seating beside the villa windows and front doorway' },
  { id: 'back', title: 'Kitchen area', area: 'SHARED SPACES', caption: 'The kitchen area has a sink and a dark worktop beside the rear doorway.', alt: 'Kitchen sink and dark corner worktop beside a wooden rear door' },
  { id: 'bedroom1', title: 'Bedroom 1', area: 'ROOM ONE', caption: 'A double bed, warm timber furniture and a window bringing daylight into the first bedroom.', alt: 'First bedroom with a wooden double bed, coral bed linen and a window' },
  { id: 'bathroom1', title: 'Bathroom 1', area: 'ATTACHED TO BEDROOM 1', caption: 'The first bedroom’s attached bathroom, with tiled walls, a shower and toilet.', alt: 'First attached bathroom with tiled walls, a toilet and shower fittings' },
  { id: 'bathroom1-2', title: 'Bathroom 1 · basin', area: 'ATTACHED TO BEDROOM 1', caption: 'A closer look at the basin, mirror and shower fittings in bathroom one.', alt: 'Basin and mirror beside the shower in the first attached bathroom' },
  { id: 'bedroom2', title: 'Bedroom 2', area: 'ROOM TWO', caption: 'The second double bedroom, with a timber bed, patterned bedding and a window beside it.', alt: 'Second bedroom with a wooden double bed, blue patterned linen and a window' },
  { id: 'bathroom2-1', title: 'Bathroom 2', area: 'ATTACHED TO BEDROOM 2', caption: 'A separate attached bathroom for bedroom two, with a shower and toilet.', alt: 'Second attached bathroom showing the toilet and shower fittings' },
  { id: 'bathroom2-2', title: 'Bathroom 2 · basin', area: 'ATTACHED TO BEDROOM 2', caption: 'The basin and mirror, framed by the bathroom’s grey patterned tiles.', alt: 'Basin and mirror with grey tiled walls in the second attached bathroom' },
  { id: 'outside5', title: 'A seat in the garden', area: 'OUTSIDE', caption: 'A garden table and stools sit among the palms, with the villa just beyond.', alt: 'Outdoor table and stools in the palm garden with the villa behind' },
  { id: 'outside1', title: 'Beside the veranda', area: 'OUTSIDE', caption: 'A small outdoor seating spot alongside the villa, surrounded by greenery.', alt: 'Outdoor table and stools beside the villa wall and garden plants' },
  { id: 'outside2', title: 'The side garden', area: 'OUTSIDE', caption: 'The lawn continues along the side of the building beneath the palms.', alt: 'Side of the white villa with a lawn and palm trees' },
  { id: 'outside3', title: 'Around the back', area: 'OUTSIDE', caption: 'A view of the rear entrance and the strip of lawn around the villa.', alt: 'Rear corner of the villa with a covered entrance and grass along the wall' },
  { id: 'outside4', title: 'The grounds', area: 'OUTSIDE', caption: 'Open garden space, established trees and places to sit outside.', alt: 'Villa grounds with grass, trees and outdoor seating' },
  { id: 'outside6', title: 'The garden outlook', area: 'OUTSIDE', caption: 'A wider view across the grounds towards the villa and its garden seating.', alt: 'Wide view of the villa exterior and outdoor table across the garden' },
  { id: 'outside7', title: 'Under the trees', area: 'OUTSIDE', caption: 'Another quiet corner of the garden, with a table beneath the trees.', alt: 'Outdoor table with orange seats beneath trees near the villa' },
];

const photo = id => villaPhotos.find(item => item.id === id);
const path = (id, size = '') => `/assets/villa/${id}${size}.webp`;
const image = (item, eager = false, sizes = '(max-width: 680px) 88vw, (max-width: 1000px) 80vw, 65vw') => `<img src="${path(item.id)}" srcset="${path(item.id, '-640')} 640w, ${path(item.id)} 1296w" sizes="${sizes}" alt="${item.alt}" width="1296" height="729" loading="${eager ? 'eager' : 'lazy'}" decoding="async" ${eager ? 'fetchpriority="high"' : ''}>`;
const frame = (id, extra = '') => {
  const item = photo(id);
  return `<figure class="villa-frame reveal ${extra}"><button class="villa-photo-button" type="button" data-villa-photo="${id}" aria-label="Enlarge ${item.title} photograph">${image(item)}<span class="villa-expand" aria-hidden="true">${icon('northeast')}</span></button><figcaption><span class="villa-caption-title">${item.title}</span><span>${item.caption}</span></figcaption></figure>`;
};

export function villaHero() {
  return `<div class="villa-arrival"><button class="villa-arrival-photo villa-photo-button" type="button" data-villa-photo="frontview" aria-label="Enlarge the villa exterior photograph">${image(photo('frontview'), true, '(max-width: 680px) 88vw, 52vw')}<span class="villa-expand" aria-hidden="true">${icon('northeast')}</span></button><div class="villa-arrival-label glass-dark"><span class="micro">YOUR FIRST LOOK</span><strong>Green Forest Villa</strong><a href="#villa-tour">Step inside ${icon('arrow')}</a></div><p class="villa-arrival-caption">KOTTAWA, GALLE · THE VILLA &amp; ITS GARDEN</p></div>`;
}

const chapters = [
  ['living', '01', 'Living & kitchen'],
  ['bedroom-one', '02', 'Bedroom one'],
  ['bedroom-two', '03', 'Bedroom two'],
  ['garden', '04', 'Out in the garden'],
];
const chapterHeading = (number, label, title, body) => `<div class="villa-chapter-heading reveal"><span class="eyebrow">${number} / ${label}</span><h3>${title}</h3><p>${body}</p></div>`;

export function villaTour() {
  return `<section class="villa-tour section-pad" id="villa-tour" aria-labelledby="villa-tour-title">
    <div class="section-label"><span>02</span><span>A WALK THROUGH THE VILLA</span></div>
    <div class="villa-tour-heading reveal"><h2 id="villa-tour-title">Every room.<br><span class="serif">A little closer.</span></h2><p>Come through the door, find your room, then step out into the garden. A closer look at the spaces you’ll share — and the ones that are your own.</p></div>
    <div class="villa-tour-layout">
      <aside class="villa-index"><span class="micro">EXPLORE THE SPACES</span><nav aria-label="Villa rooms">${chapters.map(([id, n, title], i) => `<a href="#villa-${id}" ${i === 0 ? 'aria-current="location"' : ''}><span>${n}</span>${title}${icon('arrow')}</a>`).join('')}</nav><p>Two double bedrooms.<br>Two attached bathrooms.<br>One place to unwind.</p><span class="villa-photo-note">Tap a photograph<br>for a closer look.</span></aside>
      <div class="villa-chapters">
        <article class="villa-chapter" id="villa-living" aria-label="Living area and kitchen">
          ${chapterHeading('01', 'THE SHARED SPACES', 'Room to <span class="serif">come together.</span>', 'A living area for time together, a dining table for shared meals, and a kitchen area at the rear of the villa.')}
          <div class="villa-living-pair">${frame('livingarea')}${frame('livingarea2', 'villa-offset')}</div>
          <div class="villa-kitchen-row">${frame('back')}<div class="villa-kitchen-copy reveal"><span class="eyebrow">A PRACTICAL LITTLE CORNER</span><h4>The <span class="serif">kitchen area.</span></h4><p>A sink and worktop provide a separate space away from the sitting area. The rear doorway brings in light.</p><span class="villa-small-note">Kitchen area · at the rear of the villa.</span></div></div>
        </article>
        <article class="villa-chapter" id="villa-bedroom-one" aria-label="Bedroom one and its attached bathroom">
          ${chapterHeading('02', 'YOUR OWN SPACE', 'The first <span class="serif">place to rest.</span>', 'Bedroom one has a double bed and its own attached bathroom, keeping both spaces together.')}
          <div class="villa-room-pair"><div class="villa-room-main">${frame('bedroom1')}<div class="villa-room-facts"><span>Double bed</span><span>Attached bathroom</span></div></div><div class="villa-bathroom-pair">${frame('bathroom1')}${frame('bathroom1-2')}</div></div>
        </article>
        <article class="villa-chapter" id="villa-bedroom-two" aria-label="Bedroom two and its attached bathroom">
          ${chapterHeading('03', 'ANOTHER QUIET CORNER', 'A second room.<br><span class="serif">The same welcome.</span>', 'A second double bedroom with a separate attached bathroom. Another space to settle in after the journey.')}
          <div class="villa-room-pair villa-room-reverse"><div class="villa-room-main">${frame('bedroom2')}<div class="villa-room-facts"><span>Double bed</span><span>Attached bathroom</span></div></div><div class="villa-bathroom-pair">${frame('bathroom2-1')}${frame('bathroom2-2')}</div></div>
        </article>
        <article class="villa-chapter villa-garden" id="villa-garden" aria-label="Villa garden and exterior">
          ${chapterHeading('04', 'STEP OUTSIDE', 'A little more <span class="serif">green.</span>', 'Follow the veranda around the villa, or take a seat among the palms. The garden is part of the experience, too.')}
          ${frame('outside5', 'villa-garden-lead')}
          <div class="villa-filmstrip-heading"><span class="micro">AROUND THE VILLA</span><div class="villa-filmstrip-controls"><button type="button" data-villa-scroll="-1" aria-label="Previous garden photographs">${icon('arrow')}</button><button type="button" data-villa-scroll="1" aria-label="Next garden photographs">${icon('arrow')}</button></div></div>
          <div class="villa-filmstrip" tabindex="0" role="region" aria-label="More garden photographs; scroll horizontally">${['outside1', 'outside2', 'outside3', 'outside4', 'outside6', 'outside7'].map(id => frame(id)).join('')}</div><div class="villa-filmstrip-track" aria-hidden="true"><span></span></div>
        </article>
      </div>
    </div>
    <div class="villa-tour-end"><span class="eyebrow">THAT’S YOUR LOOK AROUND.</span><a class="button button-dark" href="#before-you-visit">Plan your stay ${icon('arrow')}</a></div>
  </section>
  <dialog class="villa-lightbox" aria-labelledby="villa-lightbox-title"><div class="villa-lightbox-top"><span class="micro">GREEN FOREST VILLA · A CLOSER LOOK</span><button type="button" class="villa-lightbox-close" aria-label="Close photograph">${icon('close')}</button></div><div class="villa-lightbox-stage"><img class="villa-lightbox-image" alt="" draggable="false"><p class="villa-photo-error" hidden>This photograph could not load. Try another view.</p></div><div class="villa-lightbox-bottom"><div class="villa-lightbox-copy"><span class="micro villa-lightbox-area"></span><h2 id="villa-lightbox-title"></h2><p class="villa-lightbox-caption"></p></div><div class="villa-lightbox-controls"><button type="button" data-villa-step="-1" aria-label="Previous villa photograph">${icon('arrow')}</button><span class="villa-lightbox-count" aria-live="polite" aria-atomic="true"></span><button type="button" data-villa-step="1" aria-label="Next villa photograph">${icon('arrow')}</button></div></div></dialog>`;
}

export function initVillaTour() {
  const tour = document.querySelector('.villa-tour');
  if (!tour) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const motionAllowed = () => !reduced.matches && !document.documentElement.classList.contains('motion-paused');
  const dialog = document.querySelector('.villa-lightbox');
  const largeImage = dialog.querySelector('.villa-lightbox-image');
  const error = dialog.querySelector('.villa-photo-error');
  let current = 0, request = 0, returnFocus, oldOverflow;
  let imageAnimation;

  async function showPhoto(index) {
    current = (index + villaPhotos.length) % villaPhotos.length;
    const item = villaPhotos[current];
    const version = ++request;
    dialog.querySelector('#villa-lightbox-title').textContent = item.title;
    dialog.querySelector('.villa-lightbox-area').textContent = item.area;
    dialog.querySelector('.villa-lightbox-caption').textContent = item.caption;
    dialog.querySelector('.villa-lightbox-count').textContent = `${String(current + 1).padStart(2, '0')} / ${villaPhotos.length}`;
    dialog.setAttribute('aria-busy', 'true');
    error.hidden = true;
    imageAnimation?.cancel();
    largeImage.style.opacity = '0';
    const nextImage = new Image();
    nextImage.src = path(item.id);
    try { await nextImage.decode(); }
    catch { if (version === request) { error.hidden = false; dialog.setAttribute('aria-busy', 'false'); } return; }
    if (version !== request || !dialog.open) return;
    largeImage.src = nextImage.src;
    largeImage.alt = item.alt;
    largeImage.style.opacity = '1';
    if (motionAllowed()) imageAnimation = largeImage.animate([{ opacity: 0, transform: 'translateY(10px) scale(.985)' }, { opacity: 1, transform: 'none' }], { duration: 430, easing: 'cubic-bezier(.2,.7,.2,1)' });
    dialog.setAttribute('aria-busy', 'false');
  }
  document.querySelectorAll('[data-villa-photo]').forEach(button => button.addEventListener('click', () => {
    returnFocus = button;
    oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    showPhoto(villaPhotos.findIndex(item => item.id === button.dataset.villaPhoto));
    dialog.querySelector('.villa-lightbox-close').focus();
  }));
  dialog.querySelector('.villa-lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { request++; imageAnimation?.cancel(); document.body.style.overflow = oldOverflow; returnFocus?.focus({ preventScroll: true }); });
  dialog.querySelectorAll('[data-villa-step]').forEach(button => button.addEventListener('click', () => showPhoto(current + Number(button.dataset.villaStep))));
  dialog.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    showPhoto(event.key === 'Home' ? 0 : event.key === 'End' ? villaPhotos.length - 1 : current + (event.key === 'ArrowLeft' ? -1 : 1));
  });
  let touch;
  const stage = dialog.querySelector('.villa-lightbox-stage');
  stage.addEventListener('pointerdown', event => { if (event.pointerType === 'touch') touch = { x: event.clientX, y: event.clientY }; });
  stage.addEventListener('pointerup', event => {
    if (!touch) return;
    const dx = event.clientX - touch.x, dy = event.clientY - touch.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) showPhoto(current + (dx < 0 ? 1 : -1));
    touch = null;
  });
  stage.addEventListener('pointercancel', () => { touch = null; });
  const cancelImageMotion = () => { if (!motionAllowed()) imageAnimation?.cancel(); };
  reduced.addEventListener('change', cancelImageMotion);
  new MutationObserver(cancelImageMotion).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  const strip = tour.querySelector('.villa-filmstrip');
  const arrows = [...tour.querySelectorAll('[data-villa-scroll]')];
  const progress = tour.querySelector('.villa-filmstrip-track span');
  function updateStrip() {
    const max = strip.scrollWidth - strip.clientWidth;
    arrows[0].disabled = strip.scrollLeft <= 2;
    arrows[1].disabled = strip.scrollLeft >= max - 2;
    progress.style.transform = `scaleX(${max > 0 ? .12 + .88 * strip.scrollLeft / max : 1})`;
  }
  const scrollStrip = direction => strip.scrollBy({ left: direction * strip.clientWidth * .78, behavior: motionAllowed() ? 'smooth' : 'instant' });
  arrows.forEach(button => button.addEventListener('click', () => scrollStrip(Number(button.dataset.villaScroll))));
  strip.addEventListener('scroll', updateStrip, { passive: true });
  strip.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault(); scrollStrip(event.key === 'ArrowRight' ? 1 : -1);
  });
  new ResizeObserver(updateStrip).observe(strip);
  updateStrip();

  const links = [...tour.querySelectorAll('.villa-index nav a')];
  const rooms = [...tour.querySelectorAll('.villa-chapter')];
  let scrollFrame = 0, activeChapter = '';
  function updateChapter() {
    scrollFrame = 0;
    const active = rooms.reduce((found, room) => room.getBoundingClientRect().top <= innerHeight * .42 ? room : found, rooms[0]);
    if (active.id === activeChapter) return;
    activeChapter = active.id;
    links.forEach(link => {
      if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  const onScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateChapter); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateChapter();
}
