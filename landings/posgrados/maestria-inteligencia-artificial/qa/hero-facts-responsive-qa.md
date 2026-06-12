# Hero and Facts Responsive QA

Validated locally on `http://localhost:49436/landings/posgrados/maestria-inteligencia-artificial/`.

Hero/form widths:

- `1366`: form and selects inside viewport, no horizontal scroll.
- `1200`: form and selects inside viewport, no horizontal scroll.
- `1024`: form and selects inside viewport, no horizontal scroll.
- `900`: form stacks below copy, gap after `Está en ti` is `28px`.
- `768`: form stacks below copy, gap after `Está en ti` is `28px`.
- `640`: form stacks below copy, gap after `Está en ti` is `28px`.
- `390`: form stacks below copy, gap after `Está en ti` is `28px`.

Facts strip widths:

- `850`, `760`, `640`, `390`: two columns, no icon/text overlap, no horizontal scroll.
- `1450`, `1330`, `1200`, `900`, `760`, `390`: `.facts` is full-width with `x=0`, right edge and width equal to viewport, no right-side white gap, no horizontal scroll.
- `1450`, `1330`, `1200`: four internal columns.
- `900`, `760`, `390`: two internal columns.

Benefits module widths:

- `1330`: three centered fluid columns, no clipped text, no internal overflow, no horizontal scroll.
- `1200`: three centered fluid columns, no clipped text, no internal overflow, no horizontal scroll.
- `1024`: two centered fluid columns, no clipped text, no internal overflow, no horizontal scroll.
- `900`: two centered fluid columns, no clipped text, no internal overflow, no horizontal scroll.
- `760`: mobile layout preserved, no clipped text, no internal overflow, no horizontal scroll.

Footer social icons:

- `1366`: `.footer-social.textContent` is empty, four PNG icons loaded, links are `24 x 24`, no broken images.
- `390`: `.footer-social.textContent` is empty, four PNG icons loaded in one centered row, links are `30 x 30`, gap is `28px`, no broken images.

Shared checks:

- `document.documentElement.scrollWidth === innerWidth`.
- Broken images: `0`.
- Hero `::after`: `none`.
- Selects use `min-width: 0`, `text-overflow: ellipsis`, and `white-space: nowrap`.
