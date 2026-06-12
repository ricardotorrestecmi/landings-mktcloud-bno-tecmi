# QA - Maestría en Gestión de TI Área Ciberseguridad

Local preview tested on `http://127.0.0.1:49324/landings/posgrados/maestria-gestion-tecnologias-informacion-area-ciberseguridad/`.

## Checks

- Desktop `1440px`: HTTP 200, no horizontal overflow, no broken images.
- Mobile `390px`: HTTP 200, no horizontal overflow, no broken images.
- Meta robots: `noindex,nofollow`.
- Lead form remains interactive HTML with 7 fields/actions.
- Download button points to local PDF: `assets/docs/plan-ciberseguridad.pdf`.
- Screenshots: `qa-desktop.png`, `qa-mobile.png`.
- Automated results: `qa-results.json`.
- Module 2 global QA: Finanzas desktop `636px / 636px`, Ciberseguridad desktop `688px / 688px`.
- Module 2 photo container QA: `background: transparent`, `background-image: none`, `object-fit: cover`, image radius `16px`, no broken images.
- Connect Online global QA: Finanzas and Ciberseguridad desktop cards `1240 x 320`, left box `630 x 320`, image `610 x 320`, right gap `0`, bottom gap `0`.
- Connect Online image QA: uses `figma-4-1-connect-online-cropped.png`, `display: block`, `height: 100%`, `object-fit: cover`, radius `16px`.
- Connect Online radius QA: desktop image radius `0 16px 16px 0`; mobile image radius `0 0 16px 16px`. Right and bottom gaps remain `0`.
- Programs global QA: Finanzas and Ciberseguridad desktop grid `1240px`, columns `610px / 610px`, gap `20px`.
- Programs image QA: uses `programas-global.png` (`610 x 477` asset), `display: block`, `width: 100%`, `height: 100%`, `min-height: 477px`, `object-fit: cover`, `background: transparent`, radius `26px`.
- Programs alignment QA: desktop accordion and image both rendered `737px` tall with top delta `0` and bottom delta `0`; no broken images or horizontal overflow.
- Hero responsive QA: passed at `1366`, `1200`, `1024`, `900`, `768`, `640`, and `390`. Form and long program select stay inside viewport; select uses ellipsis; `hero::after` is disabled; `scrollWidth === innerWidth`.
- Hero mobile/tablet QA: at `900`, `768`, `640`, and `390`, form stacks under copy with `28px` gap after `Esta en ti`.
- Facts strip QA: passed at `850`, `760`, `640`, and `390`; layout stays `2 + 2`, no horizontal overflow, no icon/text overlap.
- Facts full-width QA: passed at `1450`, `1330`, `1200`, `900`, `760`, and `390`; `.facts` rect starts at `x=0`, right edge equals viewport width, computed `max-width: none`, margins `0`, no white right edge, no horizontal overflow. At `<=900`, layout remains `2 + 2`.
- Benefits QA: passed at `1330`, `1200`, `1024`, `900`, and `760`; section stays centered, no horizontal overflow, no internal card/text overflow. `1330/1200` render `3 + 3`, `1024/900` render `2 + 2 + 2`, and `760` uses mobile one-column layout.
- Footer social QA: passed on Ciberseguridad and Finanzas at desktop `1366` and mobile `390`; `.footer-social` textContent is empty, 4 PNG icons load, no broken images, desktop links are `24 x 24`, mobile links are `30 x 30` with centered `28px` gap.

## Notes

- SFMC integration remains pending and is documented in `integrations/sfmc-block.html`.
- Landing uses the validated Finanzas same-structure layout with Ciberseguridad content and HubSpot assets.
- Ciberseguridad image asset did not need cropping; the green outline came from the container styling, now removed.
- Connect Online uses the cropped/clean asset to avoid white internal margins at the right and bottom edges.
- Connect Online image corners are squared where the image touches the green text box, so the module reads as one integrated piece.
- Programs module follows the approved `worktrees/maestria-finanzas` structure and uses the shared global image asset.
- Hero uses fluid grid/flex behavior and responsive downstream grids to avoid viewport overflow between desktop and mobile.
- Benefits cards use auto height with `min-height: 204px`; paragraphs wrap and are not clipped.
- Footer social links use approved PNG icons with empty image alt text instead of text glyphs.
