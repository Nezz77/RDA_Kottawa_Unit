import { icon } from './visuals.js';

export const photographs = [
  { src: '/assets/quarters-exterior.jpg', title: 'A greener arrival.', label: 'The bungalow', text: 'A first look at Green Forest Reserve, tucked into the greenery of Kottawa.', alt: 'White RDA circuit bungalow with a tiled roof and palm-lined garden', position: '50% 55%' },
  { src: '/assets/quarters-bedroom.jpg', title: 'Room to unwind.', label: 'Inside the quarters', text: 'Warm timber details, natural light and air-conditioned comfort.', alt: 'Bedroom with a double bed, timber ceiling and wall-mounted air conditioner', portrait: true },
  { src: '/assets/quarters-veranda.jpg', title: 'A quieter perspective.', label: 'The veranda', text: 'Step outside to the shaded veranda and a view of the surrounding greenery.', alt: 'Shaded bungalow veranda with white columns and tropical greenery', portrait: true },
];

export function photoGallery({ compact = false, map }) {
  return `<div class="photo-gallery ${compact ? 'gallery-compact' : ''}" role="region" aria-roledescription="carousel" aria-label="Government quarters photographs">
    <div class="gallery-stage" tabindex="0" aria-label="Photo viewer. Use left and right arrow keys to browse.">
      ${photographs.map((photo, i) => `<div class="gallery-slide ${i === 0 ? 'is-active' : ''} ${photo.portrait ? 'is-portrait' : ''}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${photographs.length}: ${photo.label}" aria-hidden="${i !== 0}">
        <img class="gallery-ambient" src="${photo.src}" alt="" aria-hidden="true" loading="${compact && !i ? 'eager' : 'lazy'}" />
        <img class="gallery-image" src="${photo.src}" alt="${photo.alt}" loading="${compact && !i ? 'eager' : 'lazy'}" decoding="async" style="object-position:${photo.position || 'center'}" />
        <div class="gallery-shade"></div>
        <div class="gallery-story glass-dark"><span class="micro">0${i + 1} / ${photo.label}</span><h3>${photo.title}</h3><p>${photo.text}</p></div>
      </div>`).join('')}
      <span class="gallery-location glass-dark">${icon('pin')} GREEN FOREST RESERVE</span>
      <div class="gallery-controls glass-dark"><button class="gallery-previous" aria-label="Previous photograph">${icon('arrow')}</button><span class="gallery-count" aria-hidden="true">01 / 03</span><button class="gallery-next" aria-label="Next photograph">${icon('arrow')}</button><span class="control-divider"></span><button class="gallery-play" aria-label="Play slideshow" aria-pressed="false">${icon('play')}</button></div>
      <div class="gallery-progress" aria-hidden="true"><span></span></div>
    </div>
    <div class="gallery-bottom"><div class="gallery-thumbnails" role="group" aria-label="Choose a photograph">${photographs.map((photo, i) => `<button class="gallery-thumb" data-photo="${i}" aria-label="Show ${photo.label.toLowerCase()}" aria-pressed="${i === 0}"><img src="${photo.src}" alt="" loading="lazy" /><span><small>0${i + 1}</small>${photo.label}</span></button>`).join('')}</div><a class="gallery-source" href="${map}" target="_blank" rel="noopener noreferrer">PHOTOS VIA GOOGLE MAPS ${icon('northeast')}</a></div>
    <p class="sr-only gallery-announcement" aria-live="polite" aria-atomic="true"></p>
  </div>`;
}

export function initGalleries({ reducedMotion, isMotionPaused }) {
  const refreshers = [];
  document.querySelectorAll('.photo-gallery').forEach(gallery => {
    const slides = [...gallery.querySelectorAll('.gallery-slide')];
    const thumbs = [...gallery.querySelectorAll('.gallery-thumb')];
    const play = gallery.querySelector('.gallery-play');
    const progress = gallery.querySelector('.gallery-progress span');
    let current = 0, requested = !reducedMotion.matches && !isMotionPaused(), visible = false, hovered = false, focused = false, timer;
    function stopClock() { clearTimeout(timer); progress.getAnimations().forEach(animation => animation.cancel()); }
    function schedule() {
      stopClock();
      const active = requested && visible && !hovered && !focused && !document.hidden && !reducedMotion.matches && !isMotionPaused();
      // Preserve the clicked child while focus/hover events reschedule the clock.
      if (play.getAttribute('aria-pressed') !== String(requested)) {
        play.setAttribute('aria-pressed', String(requested));
        play.setAttribute('aria-label', requested ? 'Pause slideshow' : 'Play slideshow');
        play.innerHTML = requested ? icon('pause') : icon('play');
      }
      if (!active) return;
      progress.animate([{ transform:'scaleX(0)' }, { transform:'scaleX(1)' }], { duration:6500, fill:'forwards' });
      timer = setTimeout(() => show(current + 1), 6500);
    }
    function show(next, manual = false) {
      current = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.classList.toggle('is-active', i === current); slide.setAttribute('aria-hidden', String(i !== current)); });
      thumbs.forEach((thumb, i) => thumb.setAttribute('aria-pressed', String(i === current)));
      gallery.querySelector('.gallery-count').textContent = `0${current + 1} / 0${slides.length}`;
      if (manual) gallery.querySelector('.gallery-announcement').textContent = `Photograph ${current + 1} of ${slides.length}: ${photographs[current].label}`;
      schedule();
    }
    gallery.querySelector('.gallery-next').addEventListener('click', () => show(current + 1, true));
    gallery.querySelector('.gallery-previous').addEventListener('click', () => show(current - 1, true));
    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => show(i, true)));
    play.addEventListener('click', () => { requested = !requested; schedule(); });
    gallery.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      show(event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : current + (event.key === 'ArrowRight' ? 1 : -1), true);
    });
    gallery.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; schedule(); } });
    gallery.addEventListener('pointerleave', () => { hovered = false; schedule(); });
    gallery.addEventListener('focusin', event => { focused = !event.target.closest('.gallery-play'); schedule(); });
    gallery.addEventListener('focusout', event => { focused = gallery.contains(event.relatedTarget) && !event.relatedTarget?.closest('.gallery-play'); schedule(); });
    let touchStart;
    const stage = gallery.querySelector('.gallery-stage');
    stage.addEventListener('pointerdown', event => { if (event.pointerType === 'touch' && !event.target.closest('button')) touchStart = { x:event.clientX, y:event.clientY }; });
    stage.addEventListener('pointerup', event => {
      if (!touchStart) return;
      const dx = event.clientX - touchStart.x, dy = event.clientY - touchStart.y;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1), true);
      touchStart = null;
    });
    stage.addEventListener('pointercancel', () => { touchStart = null; });
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; gallery.classList.toggle('in-view', visible); schedule(); }, { threshold:.2 }).observe(gallery);
    document.addEventListener('visibilitychange', schedule);
    reducedMotion.addEventListener('change', schedule);
    refreshers.push(schedule);
    schedule();
  });
  return () => refreshers.forEach(refresh => refresh());
}
