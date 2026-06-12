# QA Notes - Especialidad en Capital Humano

Local preview checked on `http://localhost:51437/landings/posgrados/especialidad-en-capital-humano/`.

## Checks

- Desktop 1440px: `scrollWidth` equals viewport width (`1440`), no horizontal overflow.
- Mobile 390px: `scrollWidth` equals viewport width (`390`), no horizontal overflow.
- Images: `0` broken images in desktop and mobile checks.
- Metadata: title is `Especialidad en Capital Humano | Universidad Tecmilenio`.
- Robots: `noindex,nofollow` present.
- PDF: `Descarga Plan` returned HTTP 200 from HubSpot.
- Header mobile: CTA measured inside viewport (`right: 372px` on 390px viewport) after compact CSS and stylesheet cache-bust.
- Module 2 desktop: photo column and left text boxes measured equal height (`688.421875px` each; diff `0px`).
- Module 2 styling: `.intro__grid` uses `align-items: stretch`; `.portrait-card` background is transparent; image uses `height: 100%`, `object-fit: cover`, and matching `16px` border radius.
- Connect Online desktop: right image and left green box measured equal height (`320px`; diff `0px`), with `rightGap: 0` and `bottomGap: 0`.
- Connect Online image: using `assets/images/figma-4-1-connect-online-cropped.png` (`610 x 320`, RGB), `display: block`, `object-fit: cover`, and matching `16px` border radius.
- Base Finanzas spot-check: Connect Online module also uses the cropped asset with `heightDiff: 0`, `rightGap: 0`, and `bottomGap: 0`.
- Connect Online integrated radii: desktop image radius is `0 16px 16px 0`; mobile image radius is `0 0 16px 16px`, with `rightGap: 0`, `bottomGap: 0`, `background: transparent`, and `object-fit: cover`.
- Base Finanzas spot-check: integrated radii match the same desktop/mobile values with no right or bottom gap.
- Programs module desktop: uses `assets/images/programas-global.png` (`610 x 477`) with grid `1240px`, columns `610px 610px`, gap `20px`, and `align-items: stretch`.
- Programs module alignment: accordion and image measured equal height (`737px`; diff `0px`), top/bottom aligned (`topDiff: 0`, `bottomDiff: 0`), image `display: block`, `width: 610px`, `height: 737px`, `min-height: 477px`, `object-fit: cover`, `border-radius: 26px`, `background: transparent`.
- Base Finanzas spot-check: programs module also uses `programas-global.png` with equal accordion/image height and `topDiff: 0`, `bottomDiff: 0`.
- Hero responsive QA passed at `1366`, `1200`, `1024`, `900`, `768`, `640`, and `390`: `document.documentElement.scrollWidth === innerWidth`, form and selects stay inside viewport, selects use `min-width: 0` and `text-overflow: ellipsis`, and `hero::after` is `none`.
- Hero stack QA passed at `900`, `768`, `640`, and `390`: form stacks below the copy with a short `28px` gap after `Está en ti`, with no large mobile gap.
- Facts strip QA passed at `850`, `760`, `640`, and `390`: two-column layout, no icon/text overlap, no horizontal scroll, icons `48px` on tablet/mobile and `40px` at very small width.
- Facts full-width QA passed at `1450`, `1330`, `1200`, `900`, `760`, and `390`: `.facts` rect starts at `x=0`, right/width match the viewport, `max-width:none`, margins `0`, `box-sizing:border-box`, and `document.documentElement.scrollWidth === innerWidth`.
- Benefits module QA passed at `1330`, `1200`, `1024`, `900`, and `760`: centered grid, no horizontal scroll, cards use `height: auto` with `min-height: 204px`, paragraphs/headings use `height: auto`, no text clipping, and no internal overflow. Columns: `1330/1200` use 3 fluid columns, `1024/900` use 2 columns, `760` keeps the mobile layout.
- Footer social QA passed on desktop and mobile for Capital Humano and base Finanzas: `.footer-social` text content is empty, four images load, `alt=""`, no broken images, desktop links are `24 x 24`, mobile links are `30 x 30`, and mobile social row is centered with `28px` gap.

## Pending

- SFMC AMPscript / CloudPages form block is still pending. Current form is the static placeholder inherited from the validated base, with HubSpot source form data documented in `integrations/sfmc-block.html`.
