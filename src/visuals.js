export const icon = (name, cls = '') => {
  const paths = {
    arrow: '<path d="M4 12h15M13 5l7 7-7 7"/>',
    northeast: '<path d="M6 18 18 6M6 6h12v12"/>',
    down: '<path d="M12 4v16m-6-6 6 6 6-6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    moon: '<path d="M20 14a9 9 0 0 1-10-10A9 9 0 1 0 20 14Z"/>',
    pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    snow: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4-1-1-4m10 14-1-4 4-1M4 14l4 1-1 4m10-14-1 4 4 1"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    house: '<path d="m3 10 9-7 9 7M5 9v12h14V9M10 21v-7h4v7"/>',
    road: '<path d="m7 3-4 18M17 3l4 18M12 3v4m0 3v4m0 3v4"/>',
    bridge: '<path d="M3 21V4m18 17V4M3 12c6 0 6 5 9 5s3-5 9-5M1 21h22M7 14v7m5-4v4m5-7v7"/>',
    leaf: '<path d="M20 3C8 1 2 9 6 16s17 1 14-13ZM4 21 16 8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
    phone: '<path d="m4 3 4-1 3 6-3 2c2 3 3 4 6 6l2-3 6 3-1 4C11 24 0 13 4 3Z"/>',
    menu: '<path d="M4 8h16M4 16h16"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    play: '<polygon points="7 4 19 12 7 20" fill="currentColor" stroke="currentColor" stroke-linejoin="round"/>',
  };
  return `<svg class="icon ${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
};

export const mark = `<img class="official-rda-logo" src="/assets/rda-official-logo.png" alt="Road Development Authority official logo" width="48" height="48" />`;

export function roomScene(id = 'room') {
  return `<svg class="room-scene" viewBox="0 0 720 550" role="img" aria-label="Illustrative cutaway of a calm air-conditioned room; not the actual quarters layout">
    <defs>
      <linearGradient id="${id}-floor" x2="1" y2="1"><stop stop-color="#e7d8be"/><stop offset="1" stop-color="#bca181"/></linearGradient>
      <linearGradient id="${id}-wall" x2="0" y2="1"><stop stop-color="#f7f3e6"/><stop offset="1" stop-color="#d2c8b0"/></linearGradient>
      <linearGradient id="${id}-glass" x2="1" y2="1"><stop stop-color="#7caaa1"/><stop offset="1" stop-color="#284f47"/></linearGradient>
      <radialGradient id="${id}-light"><stop stop-color="#ffd484" stop-opacity=".9"/><stop offset="1" stop-color="#ffc76a" stop-opacity="0"/></radialGradient>
      <filter id="${id}-shadow"><feGaussianBlur stdDeviation="14"/></filter>
    </defs>
    <ellipse cx="360" cy="445" rx="267" ry="55" fill="#111d17" opacity=".18" filter="url(#${id}-shadow)"/>
    <g class="room-architecture">
      <path d="m92 322 275-139 265 146v22L357 491 92 344Z" fill="#8d8069"/>
      <path d="m92 322 275-139 265 146-275 141Z" fill="url(#${id}-floor)"/>
      <g stroke="#aa9478" opacity=".35" fill="none"><path d="m123 306 268 146m-222-169 268 146m-222-168 268 146m-222-169 268 146m-222-169 268 146m-222-169 268 146"/></g>
      <path d="M92 322V134L367 0v183Z" transform="translate(0 39)" fill="url(#${id}-wall)"/>
      <path d="M367 39 632 184v184L367 222Z" fill="#bfbba8"/>
      <path d="m92 173 10-5v181l-10 12Zm275-134 7 4v181l-7-2Z" fill="#faf5e7"/>
      <path d="m403 101 184 100v131L403 232Z" fill="#374d40"/>
      <path d="m413 116 164 91v105L413 222Z" fill="url(#${id}-glass)"/>
      <g fill="#4d7561"><path d="m422 190 26-50 19 85Zm65 32 30-52 30 86Zm64 20 19-24 7 34Z"/></g>
      <path d="m493 160 0 107m-80-97 164 90" stroke="#e1d7bc" stroke-width="6"/>
      <path d="m392 82 14 8v146l-14-8Zm196 105 13 7v153l-13-8Z" fill="#ece3cf"/>
      <path d="m123 230 131-63v-49l-131 63Z" fill="#e4e4db"/>
      <path d="m123 181 9-9 131-63-9 9Z" fill="#fffdf5"/>
      <path d="m254 118 9-9v48l-9 10Z" fill="#b1b7ad"/>
      <path d="m135 216 108-51" stroke="#727f71" stroke-width="3"/>
      <circle cx="239" cy="143" r="2" fill="#74bd8b"/>
      <g class="cool-air" fill="none" stroke="#82b5b3" stroke-width="2.5" stroke-linecap="round"><path d="M154 219q-15 30 7 39t-1 35"/><path d="M187 204q-15 30 7 39t-1 35"/><path d="M220 189q-15 30 7 39t-1 35"/></g>
      <path d="m172 316 152-77 192 104-154 79Z" fill="#7e8a71"/>
      <path d="m245 286 103-52 138 74-102 54Z" fill="#e8dfca"/>
      <path d="m245 286 0 35 139 78v-37Z" fill="#c4b89e"/>
      <path d="m384 362 102-54v36l-102 55Z" fill="#9d927c"/>
      <path d="m230 268 108-56 10 22-103 52Z" fill="#aa835c"/>
      <path d="m246 277 101-52 136 74-99 51Z" fill="#f7f0df"/>
      <path d="m278 256 31-16 37 20-32 17Zm37-19 31-16 38 20-32 17Z" fill="#fffdf5"/>
      <path d="m325 285 41-21 117 64-99 51-99-54Z" fill="#b47647"/>
      <path d="m384 350 99-51v29l-99 51Z" fill="#94623c"/>
      <path d="m165 305 38-19 36 20-38 19Z" fill="#865d39"/>
      <path d="m165 305 0 36 36 20v-36Zm36 20 38-19v36l-38 19Z" fill="#664932"/>
      <path d="M200 304v-49" stroke="#a58550" stroke-width="4"/>
      <path d="m183 268 10-31 16 0 11 31Z" fill="#eee2bd"/>
      <ellipse class="lamp-glow" cx="200" cy="269" rx="84" ry="90" fill="url(#${id}-light)"/>
      <path d="m533 348 35-17 30 17-35 19Z" fill="#756140"/>
      <path d="m538 348 7 36 18 9 20-10 8-35Z" fill="#a98459"/>
      <g fill="#426b4b"><path d="M562 351c-5-49-53-47-46-23 6 20 34 5 46 23Z"/><path d="M562 351c-2-62 40-75 42-51 2 21-35 31-42 51Z"/><path d="M562 338c-40-44-22-65-7-51 15 12 6 35 7 51Z"/><path d="M562 355c22-45 48-34 36-15-10 17-21 7-36 15Z"/></g>
    </g>
    <g class="room-orbit" fill="none" stroke="currentColor" opacity=".13"><ellipse cx="360" cy="460" rx="318" ry="74" stroke-dasharray="3 8"/></g>
  </svg>`;
}

export const routeScene = `<svg class="route-scene" viewBox="0 0 720 460" role="img" aria-label="Animated road connection from a community to its destination">
  <defs><pattern id="route-grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0v36" stroke="currentColor" fill="none" opacity=".07"/></pattern><filter id="route-glow"><feGaussianBlur stdDeviation="5"/></filter></defs>
  <rect width="720" height="460" fill="url(#route-grid)"/>
  <g fill="none" stroke="currentColor" opacity=".1"><path d="M-20 320Q150 40 350 130t370-60M-20 355Q150 75 350 165t370-60M-20 390Q150 110 350 200t370-60M-20 425Q150 145 350 235t370-60"/></g>
  <path class="route-road" d="M80 349H180Q245 349 245 284V205Q245 143 309 143H424Q488 143 488 208V246Q488 311 552 311H642" fill="none" stroke="currentColor" stroke-width="39"/>
  <path d="M80 349H180Q245 349 245 284V205Q245 143 309 143H424Q488 143 488 208V246Q488 311 552 311H642" fill="none" stroke="var(--paper)" stroke-width="2" stroke-dasharray="9 12"/>
  <path class="route-trace route-trace-glow" pathLength="1" d="M80 349H180Q245 349 245 284V205Q245 143 309 143H424Q488 143 488 208V246Q488 311 552 311H642" fill="none" stroke="var(--orange)" stroke-width="9" filter="url(#route-glow)"/>
  <path class="route-trace" pathLength="1" d="M80 349H180Q245 349 245 284V205Q245 143 309 143H424Q488 143 488 208V246Q488 311 552 311H642" fill="none" stroke="var(--orange)" stroke-width="4"/>
  <g fill="var(--paper)" stroke="var(--orange)" stroke-width="3"><circle cx="80" cy="349" r="11"/><circle class="destination-dot" cx="642" cy="311" r="12"/></g>
  <g font-family="monospace" font-size="12" fill="currentColor"><text x="60" y="393">COMMUNITY</text><text x="535" y="360">CONNECTION</text><text x="35" y="40" opacity=".5">RDA / IN MOTION</text><text x="530" y="40" opacity=".5">01 — 02 — 03</text></g>
  <g transform="translate(307 233)" stroke="currentColor" fill="none" stroke-width="2" opacity=".3"><path d="M0 24 23 8l23 16M6 21v28h34V21M19 49V32h9v17"/></g>
</svg>`;

export function serviceArt(kind) {
  if (kind === 'road') return `<svg viewBox="0 0 300 200" aria-hidden="true"><ellipse cx="155" cy="167" rx="110" ry="12" fill="currentColor" opacity=".04"/><path d="m70 150 94-124 82 30-88 131Z" fill="var(--art-fill)"/><path d="m79 153 90-117m66 24-82 115" fill="none" stroke="var(--art-line)" stroke-width="2"/><path class="art-light" d="m117 167 92-123" stroke="var(--orange)" stroke-width="3" stroke-dasharray="13 11"/><g stroke="var(--art-line)" fill="none" stroke-width="2"><path d="M88 114V58h18m100 85V87h-18"/></g><circle class="art-glow" cx="106" cy="58" r="26" fill="var(--orange)" opacity=".2"/><circle class="art-glow" cx="188" cy="87" r="26" fill="var(--orange)" opacity=".2"/></svg>`;
  if (kind === 'bridge') return `<svg viewBox="0 0 300 200" aria-hidden="true"><g fill="none" stroke="var(--art-line)" stroke-width="2"><path d="m28 131 233-63v22L28 153Z" fill="var(--art-fill)"/><path d="M87 166V45l14-4v122m104-34V14l13-4v116M101 51q52 59 104-26M28 116l58-60m132-30 43 24"/><path d="M119 70v32m22-17v11m20-7v2m23-25v19M50 93v28m187-88v41"/></g><path class="art-light" d="m28 132 233-63" stroke="var(--orange)" stroke-width="3"/><path d="m32 185 230-62m-230 51 230-62" stroke="currentColor" opacity=".08"/></svg>`;
  return `<svg viewBox="0 0 300 200" aria-hidden="true"><g stroke="var(--art-line)" stroke-width="2"><path d="m56 109 89-46 100 54-86 47Z" fill="var(--art-fill)"/><path d="M72 109V68l72-38 87 48v40l-72 38-87-47Z" fill="var(--art-fill)"/><path d="m55 72 89-48 102 55-16 8-86-46-72 38Z" fill="var(--art-fill)"/><path d="M144 41v78l15 9v28m-50-57V78l-17 8v21Zm15-8V70l14-7v21Z" fill="none"/></g><path class="art-light" d="m180 102 25-13v29l-25 13Z" fill="var(--orange)"/><circle class="art-glow" cx="194" cy="108" r="42" fill="var(--orange)" opacity=".15"/></svg>`;
}
