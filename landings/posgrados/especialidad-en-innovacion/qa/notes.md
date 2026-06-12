# QA Notes

- Local preview checked at `http://localhost:49399/landings/posgrados/especialidad-en-innovacion/`.
- Desktop viewport: `1440px`; no horizontal scroll, no broken images, `noindex,nofollow` present.
- Mobile viewport: `390px`; no horizontal scroll, no broken images, content stacks correctly.
- Content checks: no lorem/placeholder text, 4 program facts, 5 study-plan cards, HubSpot PDF link applied.
- Module 2 global rule checked on desktop: left block height and right photo height match; photo container is transparent; image uses `height: 100%`, `object-fit: cover`, and inherited radius.
- Connect Online global rule checked on desktop: green text box is `630 x 320`, right photo is `610 x 320`, no width gap, no height delta, image is `display: block` with `width: 100%`, `height: 100%`, `object-fit: cover`, and inherited radius. Innovation uses `formato-posgrado-programa-cropped.jpg`.
- Connect Online radius rule checked: desktop photo radius is `0 16px 16px 0`; mobile photo radius is `0 0 16px 16px`; image has no margin, transparent background, and `object-fit: cover`.
- Programs global rule checked on desktop: grid is `1240px`, columns are `610px 610px`, gap is `20px`, accordion and photo both render at `610 x 737` because the open list is taller than the `477px` minimum, image uses `programas-global.png`, `display: block`, `width: 100%`, `height: 100%`, `min-height: 477px`, `object-fit: cover`, `border-radius: 26px`, and transparent background.
- Hero/form responsiveness QA passed at `1366`, `1200`, `1024`, `900`, `768`, `640`, and `390`: form and selects stay inside the viewport, selects use `min-width: 0` plus ellipsis, `scrollWidth === innerWidth`, mobile/tablet form stacks below the copy with `28px` after `Esta en ti`, and the hero overlay uses a lighter single gradient with no `::after` overlay.
- Facts strip QA passed at `1450`, `1330`, `1200`, `900`, `760`, and `390`: `.facts` renders as the full-width green band with `x=0`, right/width equal to the viewport, `width: 100%`, `max-width: none`, margins in `0`, no right-side white gap, no horizontal scroll, and 2 columns from `900px` down.
- Benefits responsive QA passed at `1330`, `1200`, `1024`, `900`, and `760`: cards use auto height with `min-height: 204px`, text uses auto height with `overflow-wrap: break-word`, columns stay centered as 3 / 2 / 1 by breakpoint, and there is no internal clipping or horizontal scroll.
- Footer social icons QA passed on desktop `1440` and mobile `390`: `.footer-social.textContent` is empty, 4 PNG images load, all `img alt=""`, desktop links are `24 x 24`, mobile links are `30 x 30`, mobile row is centered with `28px` gap, and there are no broken images.
- SFMC integration remains pending; `integrations/sfmc-block.html` keeps the HubSpot form reference data only.
