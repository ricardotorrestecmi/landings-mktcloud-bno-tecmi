# openhouse-prepa-tecmilenio-cdmx — variante CDMX (batch Preparatoria)

Clon de la **madre Openhouse** `../openhouse-prepa-tecmilenio/` (estilo Figma Openhouse ya aprobado)
con **swap de contenido CDMX**. En HubSpot las dos openhouse son plantillas distintas (la CDMX es la
vieja Bootstrap/Slick), pero **aquí ambas se construyen con el mismo estilo Figma Openhouse**; por eso
esto es "clon de la madre Figma-styled + reemplazo de lo que cambia para CDMX".

- **ESTILO = Figma** `ViwhNAvWQcYkoeAgjmFupK` (heredado de la madre; MISMO layout/CSS/JS).
- **CONTENIDO = HubSpot** `/openhouse-prepa-tecmilenio-cdmx` (pageId `153626889800`).
- Fuentes: `reference/hubspot/preparatoria/diff-openhouse.md` (col. CDMX) y
  `reference/hubspot/preparatoria/content-openhouse-prepa-tecmilenio-cdmx.md`.

## Fix de carruseles HEREDADO (NO tocar)

La madre trae el fix: **sin `scroll-behavior: smooth`** en `.benefits__viewport` / `.gallery__viewport`
(solo en `html`, para las anclas), y `goTo` usa `behavior: 'auto'` en `script.js`. Se conservó tal cual.
Verificado: los dos carruseles alcanzan su última card/foto (ver QA).

## Reemplazos aplicados (todos verbatim de HubSpot CDMX)

| # | Área | Madre (nacional) | CDMX (esta página) |
|---|---|---|---|
| 1 | Meta title/description | idénticos | **idénticos** (HubSpot CDMX no los diferencia) |
| 2 | canonical / og:url | — | `…/openhouse-prepa-tecmilenio-cdmx` (añadidos) |
| 3 | Hero: fecha | sin fecha | **`23 de mayo de 2026`** como `<p>` (desktop `.hero__fecha` + mobile `.hero__fecha-m`), en naranja bajo el subtítulo, sin romper el layout Figma |
| 4 | Hero: encabezado (H1 sr-only) | "Crea tu historia en Prepa Tecmilenio" | igual (ya coincidía) |
| 5 | Beneficios | 5 cards | **6 cards** (textos CDMX verbatim; misma card Figma teal r26) |
| 6 | Galería | 6 fotos `1–6 OP` | **6 fotos `open-house-prepa-cdmx1…6`** (mismo carrusel + 6 dots) |
| 7 | Video | YouTube `dqUHsj5LZL0` | **`mCV-bxk3jQM`** (iframe diferido + modal); título modal "CREA TU HISTORIA EN LA PREPA TECMILENIO" |
| 8 | Form redirect | `/registro-concluido-prepa` | **`/registro-concluido`** (SIN `-prepa`) |
| 9 | Form ids | formInstanceId 6867 · pageId 181412124234 · target `…812981888` | **9579 · 153626889800 · `…57633404`** (mismo formId `c8a571a6-…`) |
| 10 | Campus | sin filtro | **parche por TEXTO → FERRERIA / CUAUTITLAN IZCALLI** (select `campus_de_interes` en el preview con esas 2 opciones + placeholder) |
| 11 | Footer/legal | — | **igual a la madre** (mismo legal, redes FB/IG/TikTok/YT, "Aviso de Privacidad" con `href=""` vacío — respetado, así está en HubSpot) |

### Beneficios — 6 textos CDMX (verbatim) e iconos

1. Conocerás gente de tu edad en distintas actividades — `icon-conexion.svg` (madre)
2. Conocerás nuestras instalaciones — `icon-instalaciones.svg` (**nuevo**, exclusiva CDMX)
3. Vivirás el ambiente de las sociedades estudiantiles — `icon-personas-corazon.svg` (madre)
4. Comprenderás nuestro modelo educativo y los programas que te ofrecemos — `icon-modelo-educativo.svg` (**nuevo**, exclusiva CDMX)
5. Entenderás las certificaciones que ofrece Prepa Tecmilenio — `icon-certificaciones.svg` (madre)
6. Disfrutarás el aprendizaje por retos interdisciplinarios — `icon-medalla-estrella.svg` (madre)

## Assets

- **Nuevos / cambiados:**
  - `galeria-1…6.jpg` + `.webp` — las 6 fotos CDMX (`open-house-prepa-cdmx1…6`, landscape 400×200, optimizadas con Pillow: JPG q82 + WebP q80). La `.gallery__card` pasa a `aspect-ratio: 400/200` para respetar el formato 2:1 de estas fotos (única diferencia de layout vs la madre, forzada por el contenido).
  - `icon-instalaciones.svg`, `icon-modelo-educativo.svg` — **placeholders de línea blanca** dibujados a mano en el estilo de los iconos Figma de la card (edificio / libro abierto). Pendientes de sustituir por los iconos oficiales cuando existan.
- **Retirados** (de la madre, no aplican a CDMX): `icon-interculturalidad.svg` (beneficio nacional-only "presupuesto/experiencia intercultural"), `hero-mobile-card.jpg/webp` (leftover no referenciado).
- **Heredados sin cambio** (estilo Figma, compartido en ambas builds): hero (bg + arte OPEN HOUSE/PREPARATORIA), logos header/footer, `video-poster`, `form-photo`, favicon.
- Se corrió `scripts/optimize-assets.sh` sobre `assets/`; como los assets ya venían optimizados de la madre/Pillow y `sips` (sin `cwebp`) los inflaba, se restauraron los originales optimizados. Peso final `assets/` ≈ **1.9 MB** en disco; **primer render mobile (ruta WebP) ≈ 690 KB**.

### Pendiente de asset (anotado)
- **Thumbnail del video CDMX**: en HubSpot CDMX el video vive en el modal del banner y no hay thumb propio; se conservó el `video-poster` Figma de la madre (mismo visual Open House Prepa) con `alt`/`aria` actualizados al título CDMX. Sustituir por el frame real de `mCV-bxk3jQM` si se requiere (la descarga de `img.youtube.com` no estaba disponible en este entorno).

## Integraciones
- `integrations/hubspot-form.md` — snippet CDMX (formId `c8a571a6-…`, formInstanceId 9579, pageId 153626889800, target `#hs_form_target_form_57633404`, redirect `/registro-concluido`) + listener + **parche de campus** (Luis Hernandez). Intacto.
- `integrations/tracking.md` — GTM/GA4/TikTok/Clarity/HubSpot loader (pageId 153626889800) documentados, NO cargados en el preview.

## Cómo previsualizar

```bash
cd landings/preparatoria/openhouse-prepa-tecmilenio-cdmx
python3 -m http.server 8080   # → http://localhost:8080
```

## QA (navegador real headless Chrome vía CDP)

- **Sin scroll horizontal** en 1440 / 1330 / 1280 / 1200 / 1024 / 900 / 850 / 768 / 640 / 390
  (`documentElement.scrollWidth === innerWidth` en los 10 anchos).
- **0 errores de consola**, **0 requests con status ≥ 400**, 0 imágenes rotas (36/36 assets referenciados → 200).
- **Carrusel beneficios (6 cards):** alcanzable. Desktop: flecha "siguiente" avanza 0→368→736→**1104 = maxScroll** (muestra cards 4-5-6); `scrollLeft = scrollWidth − clientWidth` deja la 6ª card visible. Mobile 390: la flecha llega a `maxScroll` con la última card visible.
- **Carrusel galería (6 fotos):** alcanzable. `scrollLeft = scrollWidth − clientWidth` (=1160) deja la foto 6 visible; el último dot navega a `maxScroll`. Mobile 390: la flecha llega a la foto 6. (Nota heredada de la madre: en desktop el índice de dots = `round(scrollLeft/stride)` topa en 3 al final porque se ven varias fotos por vista; la foto 6 igual queda visible — comportamiento idéntico a la madre.)
- **Modal video:** abre con `embed/mCV-bxk3jQM`, cierra con Esc y **vacía el `src`**.
- **Form:** submit vacío → error; submit válido → nota de preview OK. Select `campus_de_interes` = `[Campus de Interés, FERRERIA, CUAUTITLAN IZCALLI]`.

## Pendientes
- [ ] Iconos oficiales para `icon-instalaciones.svg` / `icon-modelo-educativo.svg` (hoy placeholders de línea blanca estilo Figma).
- [ ] Thumbnail real del video `mCV-bxk3jQM` (hoy se reusa el `video-poster` Figma de la madre).
- [ ] Visto bueno de Alan: uso del bloque de video Figma en CDMX (en HubSpot CDMX el video va solo en el modal del banner; aquí se conserva la sección Figma de la madre por consistencia de estilo).
