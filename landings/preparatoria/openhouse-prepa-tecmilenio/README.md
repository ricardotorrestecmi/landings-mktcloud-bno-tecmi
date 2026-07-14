# openhouse-prepa-tecmilenio — MADRE Openhouse (batch Preparatoria)

Preview 1:1 del rediseño de `universidad.tecmilenio.mx/openhouse-prepa-tecmilenio`.
**ESTILO = Figma** `ViwhNAvWQcYkoeAgjmFupK` (frames `1:707` desktop 1440 / `1:996` mobile 320) ·
**CONTENIDO = HubSpot** (página nacional en vivo).

## Fuente única

- `landings/preparatoria/blueprint-openhouse.md` — blueprint del pw-arquitecto (medidas, colores, copy verbatim, huecos resueltos).
- Apoyo: `reference/figma/openhouse/` (specs + renders + assets) y `reference/hubspot/preparatoria/content-openhouse-prepa-tecmilenio.md`.

## Cómo previsualizar

```bash
cd landings/preparatoria/openhouse-prepa-tecmilenio
python3 -m http.server 8080
# → http://localhost:8080
```

## Estructura

- `index.html` — 7 módulos: header fixed · hero · beneficios (`#carousel-benefits-section`) · galería (`#carousel-section`) · video (`#video-cards-section`) · registro (`#image-form-section`) · footer. IDs de sección = anclas de HubSpot.
- `styles.css` — hoja PROPIA mobile-first (breakpoint 768). Tokens exactos del blueprint. Montserrat 500/700 (Google Fonts).
- `script.js` — vanilla: carrusel beneficios (5 cards, 3 visibles desktop / 1 mobile, flechas de a 1), galería (6 fotos + dots sincronizados + flechas mobile), modal video (src diferido → embed `dqUHsj5LZL0`, se vacía al cerrar; Esc/fondo/✖), hamburguesa, validación ligera del form.
- `assets/` — optimizados (WebP + fallback JPG, resize al tamaño de uso; crops PNG del render para el arte del hero).
- `integrations/hubspot-form.md` — snippet `hbspt.forms.create` VERBATIM (formId `c8a571a6-56c5-4e42-8cfe-72355d858eef`, redirect `/registro-concluido-prepa`) + listener + hidden fields. **Intacto.**
- `integrations/tracking.md` — GTM/GA4/TikTok/Clarity/HubSpot loader documentados, NO cargados.

## Decisiones clave (resoluciones del blueprint §Huecos)

1. **Sin fecha/hora/sede**: ni Figma ni HubSpot la traen — no se inventó (Huecos #18).
2. **H1 de HubSpot** "Crea tu historia en Prepa Tecmilenio" → sr-only (sin lugar visual en Figma).
3. **Hero**: arte "OPEN HOUSE" y "PREPARATORIA + subtítulo" como **crops del render empalmados en sus coordenadas exactas** (SVGs de Figma bloqueados por 429 hasta ~2026-07-09): logo 460×319 @(100,212) abs, subtítulo 612×77 @(100,548), CTA 295×52 @(100,651) — verificados por template-matching pixel-perfect contra el render. Canvas 1440×727 escalable en %.
4. **Ondas verdes**: sin SVG ni crop limpio → **calcadas a mano** como paths SVG desde los renders (listón `#26D07C`, aro desktop `#78D64B`, aro mobile `#A7E393` muestreados). Pendiente sustituir por los SVG reales cuando libere el API de Figma.
5. **Hero mobile**: el arte "PREPARATORIA + subtítulo" (nodo 1:1145) no tiene crop → recreado como texto Montserrat Bold (mismo copy). Logo OPEN HOUSE mobile sí es crop empalmado sobre la foto interna.
6. **Beneficios**: carrusel 5 cards (3 visibles desktop / 1 mobile), textos e iconos reales de la lámina 18:22–18:32; sin dots (ocultos también en HubSpot). Mobile = carrusel, no acordeón (estilo manda Figma).
7. **Galería**: las 6 fotos OP reales de HubSpot + 6 dots (Figma template traía 5 placeholder). Sin icono play (la galería HubSpot no tiene video). Estado inicial: foto 1 alineada al contenedor (el render muestra un estado intermedio del template con dot 3 activo — es estado de carrusel, no layout).
8. **Video**: body del bloque = texto del Figma (en HubSpot el `p.h3` va vacío) — marcado para visto bueno de Alan. CTA "Ver video" (el "Descubre más" del mock mobile es inconsistencia del template).
9. **Form**: réplica HTML interactiva (7 visibles + 15 hidden; `nivel_de_interes`/`periodo` no duplicados por ser visibles aquí). Selects sin opciones inventadas. Checkbox "…señalados aquí" sin link (no inventar destino). No postea; integración intacta en `integrations/`.
10. **Footer**: legal verbatim HubSpot ("Da click aquí" sin `<a>`, así está en vivo); redes reales FB/IG/TikTok/YT (glifos SVG propios base Font Awesome Free CC BY 4.0); **"Aviso de Privacidad" con `href=""` vacío intencional** (así está en HubSpot); "Términos y Condiciones" del Figma NO va (no existe en HubSpot).
11. **CTA hero** "¡Me interesa!" con signos (Figma; HubSpot dice "Me interesa") — variante anotada.
12. **Hamburguesa**: geometría del `icon-hamburger.svg` de HubSpot, trazo blanco según Figma (el archivo original, verde `#26D07C`, quedó en `assets/`).

## Pendientes

- [ ] Sustituir crops PNG del hero (logo/subtítulo/logos header-footer) y ondas calcadas por los **SVG reales de Figma** cuando el API libere (~2026-07-09). NodeIds en `reference/figma/openhouse/assets-manifest.md`.
- [ ] Visto bueno de Alan: body del bloque video (Hueco #9) y "¡Me interesa!" vs "Me interesa" (Hueco #4).
- [ ] Validar el mapeo de los 7 campos contra el render real del form `c8a571a6-…` si Tecmilenio lo comparte (Hueco #13).
- [ ] Empalme del hero garantizado hasta 1440px de viewport; en pantallas más anchas el fondo escala y el empalme puede desfasar ~px (QA topa en 1440).

## QA

Viewports verificados: 1440 / 1330 / 1280 / 1200 / 1024 / 900 / 850 / 768 / 760 / 640 / 390 — sin scroll horizontal, 0 imágenes rotas. Anclas con `scroll-margin-top`. Modal abre desde poster y botón; cierra con ✖/fondo/Esc y vacía el `src`.
