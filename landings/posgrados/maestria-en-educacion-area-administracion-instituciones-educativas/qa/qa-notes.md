# QA Notes

- Date: 2026-06-10
- Local URL tested: `http://127.0.0.1:49816/landings/posgrados/maestria-en-educacion-area-administracion-instituciones-educativas/`
- Viewports tested: desktop `1440x1400`, mobile `390x1200`.
- Horizontal overflow: none.
- Broken images: none.
- `meta robots`: `noindex,nofollow`.
- Confirmed key content: hero title, facts strip, 10-bimester study plan, final CTA, and program select option.
- Screenshots: `desktop.png`, `mobile.png`.

## Module 2 Global Adjustment

- Desktop `1440x1400`: left text block `688px`, right photo `688px`, delta `0px`.
- Mobile `390x1200`: section stacks to one column; no horizontal overflow.
- `.intro__grid` computed `align-items: stretch`.
- `.portrait-card` computed background: transparent / no background image.
- `.portrait-card img` computed `object-fit: cover` and `border-radius: 16px`.
- Additional screenshots: `module-2-desktop.png`, `module-2-mobile.png`.

## Connect Online Global Adjustment

- Desktop `1440x1400`: green text box `630x320`, right image `610x320`, height delta `0px`.
- Right image gap to card edge: right `0px`, bottom `0px`.
- Image source: `assets/images/figma-4-1-connect-online-cropped.png`.
- Computed desktop image styles: `display: block`, `object-fit: cover`, `border-radius: 0px 16px 16px 0px`.
- Computed mobile image styles: `display: block`, `object-fit: cover`, `border-radius: 0px 0px 16px 16px`.
- Base Finanzas checked with the same dimensions and gaps.
- Screenshots: `connect-online-card-desktop.png`, `connect-online-card-mobile.png`.

## Programs Module Global Adjustment

- Desktop `1440x1600`: grid `1240px`, columns `610px 610px`, gap `20px`.
- Accordion: `610x737`, `border-radius: 26px`, white background.
- Right image: `610x737`, height delta `0px`, top delta `0px`, bottom delta `0px`.
- Image source: `assets/images/programas-global.png`.
- Computed image styles: `display: block`, `height: 100%`, `min-height: 477px`, `object-fit: cover`, `border-radius: 26px`, transparent background.
- Base Finanzas and approved `worktrees/maestria-finanzas` reference matched the same measurements.
- Screenshot: `programs-card-desktop.png`.

## Hero/Form Responsive QA

- Widths tested: `1366`, `1200`, `1024`, `900`, `768`, `640`, `390`.
- `document.documentElement.scrollWidth === innerWidth`: passed at every tested width.
- At `1366`, `1200`, `1024`: complete form and program select stayed inside the viewport.
- At `900`, `768`, `640`, `390`: form stacked below the copy; gap after `Está en ti` measured `28px`.
- Program select computed `min-width: 0px` and `text-overflow: ellipsis`.
- Hero overlay pseudo-element computed `content: none`; no duplicated opaque green layer.
- Screenshots: `hero-qa-1366.png`, `hero-qa-1024.png`, `hero-qa-900.png`, `hero-qa-390.png`.

## Facts Strip Responsive QA

- Widths tested: `850`, `760`, `640`, `390`.
- `document.documentElement.scrollWidth === innerWidth`: passed at every tested width.
- At `850`, `760`, `640`, `390`: facts strip used two columns.
- No icon/text overlap; all fact items and children remained inside their cards.
- Icons measured `48px` at `850/760/640` and `40px` at `390`.
- Screenshots: `facts-qa-850.png`, `facts-qa-390.png`.

## Benefits Module Responsive QA

- Widths tested: `1330`, `1200`, `1024`, `900`, `760`.
- `document.documentElement.scrollWidth === innerWidth`: passed at every tested width.
- `1330` and `1200`: 3 fluid centered columns.
- `1024` and `900`: 2 fluid centered columns.
- `760`: mobile layout remained active.
- Cards computed `height:auto` with `min-height:204px`; paragraphs computed `height:auto`.
- No text was cut; all card text stayed inside each card.
- No internal overflow was detected in any card.
- Screenshots: `benefits-qa-1330.png`, `benefits-qa-1024.png`, `benefits-qa-760.png`.

## Facts Full-Width Band QA

- Widths tested: `1450`, `1330`, `1200`, `900`, `760`, `390`.
- `.facts` computed `width: 100%`, `max-width: none`, `margin-left: 0px`, `margin-right: 0px`, `box-sizing: border-box`.
- `.facts` rect matched the viewport at every width: `left=0`, `right=innerWidth`, `width=innerWidth`.
- `document.documentElement.scrollWidth === innerWidth`: passed at every tested width.
- At `900`, `760`, `390`: facts strip used two columns.
- No white gap on the right side; no icon/text overlap.
- Screenshots: `facts-fullwidth-qa-1450.png`, `facts-fullwidth-qa-900.png`, `facts-fullwidth-qa-390.png`.

## Footer Social Icons QA

- Viewports tested: desktop `1440x1200`, mobile `390x1200`.
- Routes tested: current landing and base `maestria-administracion-finanzas`.
- Source PNGs matched the approved files from `/Users/alan/Downloads/`.
- `.footer-social.textContent` measured empty string with length `0`.
- Links/images count: `4` links and `4` images.
- All social images loaded successfully; broken images: `0`.
- Desktop: links measured `24x24`, icons approx `17px` tall, Facebook `9x17`, gap `18px`.
- Mobile: links measured `30x30`, icons stayed in one centered row, gap `28px`.
- Screenshots: `footer-social-qa-desktop.png`, `footer-social-qa-mobile.png`.
