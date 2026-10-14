import { site } from './config.js';
import { photoGallery, initGalleries } from './gallery.js';
import { mapView, initMaps } from './maps.js';
import { placesSection, initPlaces } from './places.js';
import { icon, mark, roomScene, serviceArt } from './visuals.js';

const isQuarters = document.body.dataset.page === 'quarters';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const escape = (value) => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const external = (url, text, cls = 'text-link') => `<a class="${cls}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${text}${icon('northeast')}</a>`;
const sectionLabel = (number, label) => `<div class="section-label"><span>${number}</span><span>${label}</span></div>`;
const room = id => site.quartersPhoto ? `<img class="actual-quarters" src="${escape(site.quartersPhoto)}" alt="${escape(site.quartersPhotoAlt)}" />` : roomScene(id);
const artCaption = site.quartersPhoto ? 'RDA KOTTAWA / GOVERNMENT QUARTERS' : 'ATMOSPHERE STUDY / ILLUSTRATION, NOT PROPERTY PHOTOGRAPHY';
const readPreference = key => { try { return localStorage.getItem(key); } catch { return null; } };
let theme = readPreference('rda-theme') || 'light';
if (!['light', 'dark'].includes(theme)) theme = 'light';
document.documentElement.dataset.theme = theme;
document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#141713' : '#f4f2ec';
let motionPaused = readPreference('rda-motion') === 'paused';
document.documentElement.classList.toggle('motion-paused', motionPaused);

const header = `<a class="skip-link" href="#main">Skip to content</a>
<header class="header"><a class="brand" href="/" aria-label="RDA Kottawa home">${mark}<span><strong id="brand-wordmark">RDA KOTTAWA</strong><small>ROAD DEVELOPMENT AUTHORITY</small></span></a>
<nav class="desktop-nav" aria-label="Main navigation"><div class="nav-group" aria-label="Explore the unit"><a href="/" ${!isQuarters ? 'aria-current="page"' : ''}>The unit</a><a href="/#services">Our focus</a><a href="/#staff">Our people</a></div><div class="nav-group nav-stay"><a href="/quarters/" ${isQuarters ? 'aria-current="page"' : ''}>Government quarters<span class="nav-dot"></span></a></div></nav>
<div class="header-actions"><button class="theme-toggle" type="button" role="switch" aria-checked="${theme === 'dark'}" aria-label="Dark mode">${icon('sun')}<span class="toggle-track"><span></span></span>${icon('moon')}</button><a class="header-contact" href="#visit">Find us ${icon('northeast')}</a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">${icon('menu')}</button></div></header>
<nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation" hidden><div class="mobile-nav-group"><span class="micro">EXPLORE THE UNIT</span><a href="/">The unit ${icon('arrow')}</a><a href="/#services">Our focus ${icon('arrow')}</a><a href="/#staff">Our people ${icon('arrow')}</a></div><div class="mobile-nav-group"><span class="micro">STAY & VISIT</span><a href="/quarters/">Government quarters ${icon('arrow')}</a><a href="/quarters/#places">Places to visit ${icon('leaf')}</a><a href="#visit">Find us ${icon('pin')}</a></div></nav>`;

function contactBlock(kind) {
  const phone = site[kind + 'Phone'];
  const email = site[kind + 'Email'];
  if (!phone && !email) return '<p class="contact-pending">Direct contact details will be available here soon.</p>';
  return `<div class="contact-links">${phone ? `<a href="tel:${escape(phone.replace(/[^+\d]/g, ''))}">${icon('phone')}${escape(phone)}</a>` : ''}${email ? `<a href="mailto:${escape(email)}">${icon('mail')}${escape(email)}</a>` : ''}</div>`;
}

const visit = `<section class="visit section-pad" id="visit">${sectionLabel(isQuarters ? '05' : '06', 'YOUR NEXT STOP')}
<div class="visit-layout"><div><h2>Let’s get you<br> <span class="serif">to the right place.</span></h2><p>Two destinations. One Kottawa connection.</p><div class="destination-tabs" role="tablist" aria-label="Choose a destination"><button id="unit-tab" role="tab" aria-controls="unit-panel unit-map" aria-selected="${!isQuarters}" ${isQuarters ? 'tabindex="-1"' : ''} data-destination="unit">RDA unit</button><button id="quarters-tab" role="tab" aria-controls="quarters-panel quarters-map" aria-selected="${isQuarters}" ${!isQuarters ? 'tabindex="-1"' : ''} data-destination="quarters">Government quarters</button></div>
<div id="unit-panel" role="tabpanel" aria-labelledby="unit-tab" ${isQuarters ? 'hidden' : ''}><h3>RDA Kottawa Unit</h3><p>${escape(site.unitAddress)}</p>${contactBlock('unit')}${external(site.unitMap, 'Open unit location', 'button button-dark')}</div>
<div id="quarters-panel" role="tabpanel" aria-labelledby="quarters-tab" ${!isQuarters ? 'hidden' : ''}><h3>Green Forest Reserve</h3><p>Kottawa RDA Circuit Bungalow<br> Kottawa, Galle area, Sri Lanka</p>${contactBlock('quarters')}${external(site.quartersMap, 'Get quarters directions', 'button button-dark')}</div></div>
${mapView(isQuarters ? 'quarters' : 'unit')}</div></section>`;

const footer = `<footer><div class="footer-top"><a class="brand" href="/">${mark}<span><strong>RDA KOTTAWA</strong><small>ROAD DEVELOPMENT AUTHORITY</small></span></a><div><a href="/">The unit</a><a href="/quarters/">Government quarters</a><a href="/#staff">Our people</a>${external(site.officialWebsite, 'RDA national website')}</div><a class="back-top" href="#top" aria-label="Back to top">${icon('arrow')}</a></div><div class="footer-statement">A way <span>forward.</span><span class="footer-arrow">↗</span></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} RDA Kottawa Unit</span><span>Kottawa, Sri Lanka</span><button class="motion-toggle" aria-pressed="${motionPaused}">${icon('pause')}<span>${motionPaused ? 'Resume animations' : 'Pause animations'}</span></button><button class="replay-intro">Replay intro ↗</button></div><div class="developer-credit">Designed &amp; Developed by <strong>FutureTech|NH</strong></div></footer>`;

const services = [
  { name: 'Roads & connectivity', tag: 'THE EVERYDAY JOURNEY', type: 'road', text: 'A better road brings people, places and possibilities closer.', detail: 'The Road Development Authority develops and maintains Sri Lanka’s national road network. Explore the national RDA website for official road services, project information and guidance.', url: site.officialWebsite, link: 'Explore RDA services' },
  { name: 'Infrastructure & care', tag: 'BUILT FOR THE LONG RUN', type: 'bridge', text: 'The structures and steady work behind every connection.', detail: 'Roads and bridges are part of RDA’s national infrastructure responsibilities. Visit RDA’s official website for published project details and road development information.', url: site.officialWebsite, link: 'Visit the RDA website' },
  { name: 'Government quarters', tag: 'A NEW CHAPTER', type: 'house', text: 'Newly completed. Air-conditioned. A space to slow down.', detail: '', url: '/quarters/', link: 'Discover the quarters' },
];

const profileIcon = '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="23" r="10"/><path d="M12 57v-5c0-11 9-18 20-18s20 7 20 18v5"/></svg>';
const staff = `<section class="staff-section section-pad" id="staff">${sectionLabel('05', 'THE PEOPLE BEHIND THE WORK')}<div class="staff-layout"><div class="staff-copy reveal"><span class="eyebrow">RDA KOTTAWA · OUR TEAM</span><h2>A shared purpose.<br><span class="serif">A human connection.</span></h2><p>Meet the people who are part of the Kottawa Unit.</p><a class="text-link" href="#visit">Connect with the unit ${icon('arrow')}</a></div><div class="staff-directory"><div class="directory-heading"><span class="directory-symbol">${profileIcon}</span><div><span class="micro">OUR PEOPLE</span><h3>Staff directory</h3></div><span class="pill">KOTTAWA UNIT</span></div>${site.staff.length ? `<div class="staff-list">${site.staff.map(member => `<article class="staff-card"><div class="staff-avatar">${member.photo ? `<img src="${escape(member.photo)}" alt="${escape(member.name)}" loading="lazy"/>` : profileIcon}</div><div><h3>${escape(member.name)}</h3><p>${escape(member.role)}</p>${member.description ? `<p class="staff-description">${escape(member.description)}</p>` : ''}</div></article>`).join('')}</div>` : `<div class="staff-pending"><div class="staff-avatar">${profileIcon}</div><h3>Our team, soon in focus.</h3><p>Staff profiles and designations<br>will be added here soon.</p><span class="staff-pending-label"><i></i> DIRECTORY COMING SOON</span></div>`}</div></div></section>`;

const home = `<main id="main"><section class="hero section-pad" id="top"><div class="hero-eyebrow"><span class="eyebrow"><i></i> KOTTAWA UNIT · SRI LANKA</span><span class="micro">ROADS. PEOPLE. POSSIBILITIES.</span></div><div class="hero-main"><div class="hero-copy"><h1>Building<br> <span>connections.</span></h1><p>Every road brings us closer.<br> Every connection takes us forward.</p><div class="hero-buttons"><a class="button button-orange" href="#about">Explore the unit ${icon('arrow')}</a><a class="hero-secondary" href="/quarters/">Our government<br> quarters ${icon('northeast')}</a></div><div class="hero-coordinate"><span>RDA</span><div>A national purpose.<br> A local connection.</div></div></div><div class="hero-visual"><div class="image-frame"><img class="hero-image" src="/assets/expressway.jpg" alt="RDA photograph of the Southern Expressway extension during construction" fetchpriority="high"/><div class="image-shade"></div><div class="image-cross cross-top">+</div><div class="image-cross cross-bottom">+</div><div class="image-topline"><span>THE WAY FORWARD</span>${icon('northeast')}</div><div class="image-bottomline"><span>Connecting a nation.<br> <strong>One road at a time.</strong></span><span class="image-index">01 / RDA</span></div></div><div class="photo-credit">SOUTHERN EXPRESSWAY · RDA IMAGE ARCHIVE</div><a class="hero-float" href="/quarters/"><span class="float-icon">${icon('house')}</span><span><small>DISCOVER SOMETHING NEW</small><strong>Government quarters</strong></span><span class="float-arrow">${icon('northeast')}</span></a></div></div><div class="hero-foot"><span>ROAD DEVELOPMENT AUTHORITY</span><a href="#about">SCROLL TO EXPLORE ${icon('down')}</a><span>01 — THE UNIT</span></div></section>
<div class="route-band" aria-hidden="true"><span>CONNECTING COMMUNITIES</span><i>↗</i><span>BUILDING TOMORROW</span><i>↗</i><span>KOTTAWA, SRI LANKA</span><i>↗</i><span>CONNECTING COMMUNITIES</span></div>
<section class="about section-pad" id="about">${sectionLabel('01', 'PURPOSE IN EVERY PATH')}<div class="about-heading reveal"><h2>More than roads.<br> <span class="serif">The things they connect.</span></h2><p>A journey to work. A visit home. A new possibility. Roads are part of everyday life — and caring for those connections is at the heart of the Road Development Authority.</p></div><div class="about-line"><span class="big-rda">RDA<span>↗</span></span><div><span class="eyebrow">OUR LOCAL CONNECTION</span><h3>Welcome to Kottawa.</h3><p>Get to know the Kottawa Unit, find your way to us, and discover a new chapter with our completed government quarters.</p>${external(site.unitMap, 'Find the Kottawa Unit')}</div><div class="road-stripes" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div></section>
<section class="photo-section section-pad" id="gallery">${sectionLabel('02', 'A CLOSER LOOK')}<div class="section-heading reveal"><h2>A place worth<br><span class="serif">slowing down for.</span></h2><div class="gallery-introduction"><p>Explore the real spaces at our government quarters, from the first arrival to the quieter corners.</p><a class="text-link" href="/quarters/">Discover the quarters ${icon('arrow')}</a></div></div>${photoGallery({ map: site.quartersMap })}</section>
<section class="services section-pad" id="services">${sectionLabel('03', 'OUR FOCUS')}<div class="section-heading"><h2>Built around<br> <span class="serif">what matters.</span></h2><div class="lighting-control"><span class="micro">SEE A DIFFERENT SIDE</span><button id="grid-toggle" class="label-toggle" role="switch" aria-checked="false"><span>Connections in motion</span><span class="toggle-track"><span></span></span>${icon('sun')}</button></div></div><div class="service-grid">${services.map((s, i) => `<article class="service-card" style="--i:${i}"><div class="card-top"><span>0${i + 1}</span><span class="card-status">${i === 2 ? 'NEWLY COMPLETED' : 'RDA FOCUS'}</span></div><div class="service-art">${serviceArt(s.type)}</div><span class="micro">${s.tag}</span><h3>${s.name}</h3><p>${s.text}</p>${i === 2 ? `<a class="card-link" href="/quarters/" aria-label="Discover government quarters">${icon('northeast')}</a>` : `<button class="card-link" data-service="${i}" aria-label="Learn about ${s.name}">${icon('northeast')}</button>`}</article>`).join('')}</div><p class="grid-note">A national responsibility. A shared way forward.</p></section>
<section class="quarters-feature section-pad">${sectionLabel('04', 'A NEW PLACE TO PAUSE')}<div class="quarters-feature-layout"><div class="quarters-preview"><span class="preview-stamp">GREEN FOREST<br> <strong>RESERVE</strong></span>${room('teaser')}<span class="illustration-note">${artCaption}</span></div><div class="quarters-feature-copy reveal"><span class="pill"><i></i> NEWLY BUILT · FULLY COMPLETED</span><h2>After the journey,<br> <span class="serif">a little stillness.</span></h2><p>Introducing the RDA Kottawa government quarters. A new, air-conditioned space at Green Forest Reserve.</p><div class="mini-features"><span>${icon('check')} Fully completed</span><span>${icon('snow')} Air conditioning</span></div><a class="button button-orange" href="/quarters/">Step inside the quarters ${icon('arrow')}</a></div></div></section>${staff}${visit}</main>`;

const quarters = `<main id="main"><section class="quarters-hero section-pad" id="top"><div class="hero-eyebrow"><a class="breadcrumb" href="/">THE UNIT <span>/</span> GOVERNMENT QUARTERS</a><span class="micro">GREEN FOREST RESERVE</span></div><div class="quarters-hero-layout"><div class="quarters-title"><span class="pill"><i></i> NEWLY BUILT · FULLY COMPLETED</span><h1>Space to<br> <span class="serif">slow down.</span></h1><p>The journey has a quieter side.<br> Discover the new, air-conditioned<br> RDA Kottawa government quarters.</p><a class="button button-orange" href="#quarters-details">Discover the quarters ${icon('arrow')}</a><br><a class="quarters-explore-link" href="#places">Places to visit nearby ${icon('northeast')}</a><div class="quarters-location">${icon('pin')}<span>Green Forest Reserve<br> <strong>Kottawa, Sri Lanka</strong></span></div></div><div class="quarters-photo-tour">${photoGallery({ compact: true, map: site.quartersMap })}</div></div><div class="quarters-specs"><div><span>THE STATUS</span><strong>Fully completed ${icon('check')}</strong></div><div><span>THE COMFORT</span><strong>Air-conditioned ${icon('snow')}</strong></div><div><span>THE DESTINATION</span><strong>Green Forest Reserve ${icon('leaf')}</strong></div><a href="#visit">FIND YOUR WAY ${icon('northeast')}</a></div></section>
<section class="quarters-details section-pad" id="quarters-details">${sectionLabel('01', 'MADE FOR A MOMENT OF REST')}<div class="about-heading reveal"><h2>A fresh beginning.<br> <span class="serif">A comfortable arrival.</span></h2><p>Newly built and now fully completed, the government quarters bring a new space to the Kottawa Unit. Air conditioning adds comfort to time spent here.</p></div><div class="detail-grid"><div class="detail-item reveal">${icon('house')}<span>01 / THE SPACE</span><h3>Newly built.<br> Fully completed.</h3><p>A new chapter for the RDA Kottawa government quarters.</p></div><div class="detail-item reveal">${icon('snow')}<span>02 / THE COMFORT</span><h3>A cooler kind<br> of welcome.</h3><p>Air conditioning for a comfortable indoor environment.</p></div><div class="detail-item reveal">${icon('pin')}<span>03 / THE ARRIVAL</span><h3>Your destination,<br> one tap away.</h3><p>Find the circuit bungalow using the exact location on Google Maps.</p>${external(site.quartersMap, 'Open directions')}</div></div></section>
<section class="comfort-section section-pad">${sectionLabel('02', 'COMFORT IN MOTION')}<div class="comfort-layout"><div class="climate-art"><span class="micro">A BREATH OF CALM</span><div class="ac-unit"><div class="ac-indicator"></div><span>RDA / COMFORT</span><div class="ac-vent"></div></div><div class="air-streams" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div><div class="climate-status">${icon('snow')} AIR-CONDITIONED QUARTERS</div></div><div class="comfort-copy reveal"><span class="eyebrow">LEAVE THE HEAT AT THE DOOR</span><h2>Take a breath.<br> <span class="serif">Make yourself comfortable.</span></h2><p>A simple detail that makes a difference. The newly completed quarters are equipped with air conditioning.</p><a class="text-link" href="#before-you-visit">Before you visit ${icon('arrow')}</a></div></div></section>
${placesSection()}
<section class="faq section-pad" id="before-you-visit">${sectionLabel('04', 'BEFORE YOU VISIT')}<div class="faq-layout"><div><h2>A few useful<br> <span class="serif">things to know.</span></h2><p>Plan your visit with the latest details from the unit.</p></div><div class="faq-list">${[
    ['Are the quarters completed?', 'Yes. The newly built RDA Kottawa government quarters are fully completed.'],
    ['Is air conditioning available?', 'Yes. The government quarters include air conditioning.'],
    ['Who can use the quarters?', site.eligibility || 'Any RDA worker can book the quarters. A fee will be charged.'],
    ['How do I arrange a stay?', site.bookingInformation || 'Booking arrangements happen directly through RDA Head Office.'],
    ['Where are the quarters located?', 'Find “Green Forest Reserve – Kottawa RDA Circuit Bungalow” on Google Maps using the directions link below.'],
    ...(site.checkInInformation ? [['What should I know about arrival?', site.checkInInformation]] : []),
  ].map(([q, a], i) => `<details ${i === 0 ? 'open' : ''}><summary><span>${q}</span>${icon('plus')}</summary><div>${escape(a)}</div></details>`).join('')}</div></div></section>${visit}</main>`;

document.querySelector('#app').innerHTML = `<div class="intro" role="status" aria-label="Welcome to RDA Kottawa"><div class="intro-corners"><span>ROAD DEVELOPMENT AUTHORITY</span><span>SRI LANKA</span></div><div class="intro-center"><div class="intro-word" aria-hidden="true"><span></span><i></i></div><div class="intro-bar"><span></span></div><div class="intro-caption"><span>MAKING CONNECTIONS</span><span class="intro-percent">00</span></div></div><button class="skip-intro">Skip intro ${icon('arrow')}</button><span class="intro-route">YOUR JOURNEY STARTS HERE.</span></div><div class="site-shell">${header}${isQuarters ? quarters : home}${footer}</div><dialog class="service-dialog" aria-labelledby="dialog-title"><button class="dialog-close" aria-label="Close details">${icon('close')}</button><span class="eyebrow">ROAD DEVELOPMENT AUTHORITY</span><h2 id="dialog-title"></h2><p id="dialog-description"></p><a id="dialog-link" class="button button-orange" target="_blank" rel="noopener noreferrer"></a></dialog>`;

// Typewriter and progress share a single clock; the wordmark then flies to the header.
let introCancelled = false;
let introFrame = 0;
let introAnimation;
const intro = document.querySelector('.intro');
const shell = document.querySelector('.site-shell');
const typed = document.querySelector('.intro-word span');
const introWord = document.querySelector('.intro-word');
const brandWord = document.querySelector('#brand-wordmark');
const finishIntro = () => {
  introCancelled = true;
  cancelAnimationFrame(introFrame);
  introAnimation?.cancel();
  intro.hidden = true;
  document.body.classList.remove('loading');
  shell.inert = false;
  try { sessionStorage.setItem('rda-intro-seen', '1'); } catch { }
};
async function playIntro() {
  introCancelled = false;
  intro.hidden = false;
  intro.classList.remove('leaving');
  introWord.removeAttribute('style');
  document.body.classList.add('loading');
  shell.inert = true;
  typed.textContent = '';
  document.querySelector('.intro-bar span').style.transform = 'scaleX(0)';
  document.querySelector('.intro-percent').textContent = '00';
  if (reduceMotion.matches || motionPaused) return finishIntro();
  const start = performance.now();
  const brand = 'RDA KOTTAWA';
  function frame(now) {
    if (introCancelled) return;
    const progress = Math.min((now - start) / 1400, 1);
    const count = Math.floor(progress * brand.length);
    typed.textContent = brand.slice(0, count);
    const typedProgress = count / brand.length;
    document.querySelector('.intro-bar span').style.transform = `scaleX(${typedProgress})`;
    document.querySelector('.intro-percent').textContent = String(Math.round(typedProgress * 100)).padStart(2, '0');
    if (progress < 1) introFrame = requestAnimationFrame(frame);
    else flyToHeader();
  }
  async function flyToHeader() {
    const from = typed.getBoundingClientRect();
    const to = brandWord.getBoundingClientRect();
    intro.classList.add('leaving');
    const dx = to.left - from.left;
    const dy = to.top - from.top;
    introWord.style.transformOrigin = 'top left';
    introAnimation = introWord.animate([
      { transform: 'translate(0,0) scale(1)', color: '#f4f2ec' },
      { transform: `translate(${dx}px,${dy}px) scale(${to.width / from.width})`, color: getComputedStyle(brandWord).color },
    ], { duration: 850, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
    try { await introAnimation.finished; } catch { }
    finishIntro();
  }
  introFrame = requestAnimationFrame(frame);
}
let introSeen = false;
try { introSeen = sessionStorage.getItem('rda-intro-seen') === '1'; } catch { }
if (!introSeen || new URLSearchParams(location.search).has('intro')) playIntro(); else finishIntro();
document.querySelector('.skip-intro').addEventListener('click', finishIntro);
document.querySelector('.replay-intro').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'instant' }); playIntro(); });

const themeButton = document.querySelector('.theme-toggle');
let themeChanging = false;
function applyTheme() {
  theme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-checked', String(theme === 'dark'));
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#141713' : '#f4f2ec';
  try { localStorage.setItem('rda-theme', theme); } catch { }
}
themeButton.addEventListener('click', async () => {
  if (themeChanging) return;
  if (!document.startViewTransition || reduceMotion.matches || motionPaused) return applyTheme();
  themeChanging = true;
  try {
    const rect = themeButton.getBoundingClientRect();
    const x = rect.x + rect.width / 2, y = rect.y + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const transition = document.startViewTransition(applyTheme);
    await transition.ready;
    await document.documentElement.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] }, { duration: 800, easing: 'cubic-bezier(.22,1,.36,1)', pseudoElement: '::view-transition-new(root)' }).finished;
  } catch { /* The applied theme remains usable if a browser cancels a transition. */ }
  finally { themeChanging = false; }
});

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
function closeMenu() { mobileMenu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); }
menuButton.addEventListener('click', () => { const open = mobileMenu.hidden; mobileMenu.hidden = !open; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
mobileMenu.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 1181px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
}, { threshold: .18 });
document.querySelectorAll('.reveal, .comfort-section').forEach(el => observer.observe(el));

document.querySelector('#grid-toggle')?.addEventListener('click', e => {
  const button = e.currentTarget;
  const on = button.getAttribute('aria-checked') !== 'true';
  button.setAttribute('aria-checked', String(on));
  document.querySelector('.services').classList.toggle('illuminated', on);
});
document.querySelector('.room-toggle')?.addEventListener('click', e => {
  const on = e.currentTarget.getAttribute('aria-checked') !== 'true';
  e.currentTarget.setAttribute('aria-checked', String(on));
  document.querySelector('.quarters-room').dataset.lit = String(on);
});

const showDestinationMap = initMaps();
const tabs = [...document.querySelectorAll('[data-destination]')];
function selectDestination(tab) {
  tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; document.querySelector(`#${item.dataset.destination}-panel`).hidden = !active; });
  showDestinationMap(tab.dataset.destination);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectDestination(tab));
  tab.addEventListener('keydown', e => { if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) { e.preventDefault(); const next = e.key === 'Home' ? tabs[0] : e.key === 'End' ? tabs.at(-1) : tabs[(index + 1) % tabs.length]; selectDestination(next); next.focus(); } });
});

const dialog = document.querySelector('.service-dialog');
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click', () => {
  const item = services[Number(button.dataset.service)];
  document.querySelector('#dialog-title').textContent = item.name;
  document.querySelector('#dialog-description').textContent = item.detail;
  const link = document.querySelector('#dialog-link');
  link.href = item.url;
  link.innerHTML = `${item.link}${icon('northeast')}`;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) { const rect = dialog.getBoundingClientRect(); if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close(); } });

const refreshGalleryMotion = initGalleries({ reducedMotion: reduceMotion, isMotionPaused: () => motionPaused });
const refreshPlacesMotion = initPlaces({ reducedMotion: reduceMotion, isMotionPaused: () => motionPaused });

document.querySelector('.motion-toggle').addEventListener('click', e => {
  motionPaused = !motionPaused;
  refreshGalleryMotion();
  refreshPlacesMotion();
  document.documentElement.classList.toggle('motion-paused', motionPaused);
  e.currentTarget.setAttribute('aria-pressed', String(motionPaused));
  e.currentTarget.querySelector('span').textContent = motionPaused ? 'Resume animations' : 'Pause animations';
  try { localStorage.setItem('rda-motion', motionPaused ? 'paused' : 'active'); } catch { }
});
reduceMotion.addEventListener('change', e => { if (e.matches) finishIntro(); });
