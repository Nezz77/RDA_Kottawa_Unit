import { site } from './config.js';
import { icon } from './visuals.js';

const destinations = {
  unit: { label: 'RDA Kottawa Unit', subtitle: 'Galle – Udugama Road · Kottawa', embed: site.unitMapEmbed, link: site.unitMap },
  quarters: { label: 'Government quarters', subtitle: 'Green Forest Reserve · Kottawa', embed: site.quartersMapEmbed, link: site.quartersMap },
};
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

export function mapView(selected) {
  const place = destinations[selected];
  return `<div class="live-map" aria-label="Destination map">
    <div class="live-map-heading"><span class="live-map-symbol">${icon('pin')}</span><div><span class="micro">FIND YOUR WAY</span><h3 id="live-map-name">${place.label}</h3></div><span class="live-map-badge">GOOGLE MAPS</span></div>
    <div class="live-map-viewport">${Object.entries(destinations).map(([key, destination]) => `<div class="map-pane ${key === selected ? 'is-active' : ''}" id="${key}-map" data-map="${key}" aria-hidden="${key !== selected}" ${key !== selected ? 'inert' : ''}>
      <div class="map-loading" role="status"><span class="map-loading-ring"></span><span>Loading ${key === 'unit' ? 'unit' : 'quarters'} map…</span><a href="${escape(destination.link)}" target="_blank" rel="noopener noreferrer">Open in Google Maps ${icon('northeast')}</a></div>
      <iframe ${key === selected ? 'src' : 'data-src'}="${escape(destination.embed)}" title="Interactive Google map of ${destination.label}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>`).join('')}</div>
    <div class="live-map-footer"><span id="live-map-description">${place.subtitle}</span><a id="live-map-open" href="${escape(place.link)}" target="_blank" rel="noopener noreferrer">Open map ${icon('northeast')}</a></div>
  </div>`;
}

export function initMaps() {
  const panes = [...document.querySelectorAll('[data-map]')];
  panes.forEach(pane => {
    const frame = pane.querySelector('iframe');
    frame.addEventListener('load', () => {
      if (!frame.hasAttribute('src')) return;
      pane.classList.add('map-loaded');
      pane.querySelector('.map-loading').hidden = true;
    });
  });
  return selected => {
    const destination = destinations[selected];
    panes.forEach(pane => {
      const active = pane.dataset.map === selected;
      pane.classList.toggle('is-active', active);
      pane.setAttribute('aria-hidden', String(!active));
      pane.inert = !active;
      const frame = pane.querySelector('iframe');
      if (active && !frame.hasAttribute('src')) frame.src = frame.dataset.src;
    });
    document.querySelector('#live-map-name').textContent = destination.label;
    document.querySelector('#live-map-description').textContent = destination.subtitle;
    document.querySelector('#live-map-open').href = destination.link;
  };
}
