# QA - Posgrados General

Fecha: 2026-06-10

Preview local:

`http://127.0.0.1:49321/landings/posgrados/posgrados/`

Validaciones ejecutadas con Chrome local vía Playwright:

- Desktop 1440px: `scrollWidth = 1440`, sin imágenes rotas.
- Mobile 390px: `scrollWidth = 390`, sin imágenes rotas.
- Formulario de preview visible e interactivo.
- Tabs de Maestrías/Especialidades funcionales.
- Tabs de formato funcionales.
- Ajuste global módulo 2 aplicado: en desktop, bloque de cajas `809px`, foto `809px`, fondo de contenedor `transparent`, radio `16px`.
- Ajuste global formato aplicado: en desktop, caja Connect Online `246px`, foto `246px`, `display:block`, `object-fit: cover`, radio de foto `0 16px 16px 0`, fondo transparente, sin margen blanco inferior/derecho visible. En mobile, radio de foto `0 0 16px 16px`.
- Ajuste global programas aplicado: asset `programas-global.png` (`610 x 477`) en uso; desktop grid `1240px`, columnas `610px / 610px`, acordeón blanco `26px`, foto `26px`, fondo de foto `transparent`, sin scroll horizontal en desktop/mobile.
- Ajuste global hero/head aplicado y validado: en `1366`, `1200` y `1024`, formulario y select de programa quedan completos dentro del viewport; en `900`, `768`, `640` y `390`, el formulario apila debajo del copy con `28px` entre `Está en ti` y el formulario; selects usan `min-width:0` y ellipsis; sin overlay verde opaco duplicado; `scrollWidth === innerWidth` en todos los anchos.
- Confirmación final hero/head: se repitió QA en `1366`, `1200`, `1024`, `900`, `768`, `640` y `390`; formulario y select dentro del viewport, apilado desde `900` con `28px` de separación, y `scrollWidth === innerWidth`.
- Ajuste global franja verde aplicado y validado: en `850`, `760`, `640` y `390`, `.facts` queda en 2 columnas, sin scroll horizontal, sin overlap icono/texto; iconos `48px` en tablet/mobile y `40px` en `390`.
- Ajuste global franja verde full-width aplicado y validado: en `1450`, `1330`, `1200`, `900`, `760` y `390`, `.facts` tiene `left = 0`, `right = viewport`, `width = viewport`, `max-width: none`, márgenes `0px`, sin blanco lateral y `scrollWidth === innerWidth`; desde `900` hacia abajo conserva 2 columnas.
- Ajuste global footer redes sociales aplicado y validado: se sustituyó texto por 4 PNG locales (`Facebook`, `X`, `LinkedIn`, `Instagram`) con `aria-label` y `img alt=""`; en `1440` `.footer-social` tiene `textContent` vacío, 4 imágenes cargadas, links `24x24`, gap `24px`; en `390` mantiene 4 iconos en una fila centrada, links `30x30`, gap `28px`; sin imágenes rotas y sin scroll horizontal.
- Ajuste global beneficios revisado: esta landing no tiene la sección literal `En Universidad Tecmilenio contarás con:` con tarjetas; se blindó el bloque `Beneficios exclusivos...` y cualquier `.benefit-grid` contra altos fijos/overflow. Validado en `1330`, `1200`, `1024`, `900` y `760`: sección centrada, sin texto cortado, sin overflow interno y sin scroll horizontal.

Capturas:

- `desktop.png`
- `mobile.png`

Pendiente:

- Sustituir formulario de preview por bloque SFMC oficial cuando Tecmilenio comparta la plantilla/bloque.
