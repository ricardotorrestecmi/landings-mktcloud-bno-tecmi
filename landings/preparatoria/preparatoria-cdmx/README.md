# Landing VARIANTE — `preparatoria-cdmx` (Batch Preparatoria Tecmilenio)

Clon de la landing **madre aprobada** `../preparatoria/` (réplica 1:1 del Figma "Plantilla
Preparatoria", validada vs Figma). **NO es un rediseño**: mismo estilo, layout, `styles.css` y
`script.js` que la madre. Solo cambia el **contenido puntual** que HubSpot marca para
`universidad.tecmilenio.mx/preparatoria-cdmx`.
**Regla de oro heredada: ESTILO = Figma · CONTENIDO = HubSpot.**

Fuentes del diff: `reference/hubspot/preparatoria/diff-preparatoria.md` (col `/preparatoria-cdmx`)
y `reference/hubspot/preparatoria/content-preparatoria-cdmx.md`.
Preview estático noindex (el `_headers` del repo fuerza `X-Robots-Tag`; el HTML refuerza con meta robots).

## Reemplazos aplicados vs la madre (verbatim de HubSpot)

| # | Ubicación | Madre (nacional) | CDMX (aplicado) |
|---|---|---|---|
| 1 | `<title>` | Preparatoria Tecmilenio | **Preparatoria Tecmilenio CDMX** |
| 2 | meta description | "Encuentra tu propósito de vida y prepárate para el mundo laboral en Prepa Tecmilenio…" | **"Vive la experiencia Prepa Tecmilenio. Desarrolla tu creatividad, crea vínculos importantes y desarrollate para cumplir tu Propósito de Vida. ¡Conócenos!"** |
| 3 | canonical / og:url (head-hubspot.md) | …/preparatoria | **…/preparatoria-cdmx** |
| 4 | og/twitter title+description (head-hubspot.md) | nacional | **CDMX** (= title + meta desc) |
| 5 | pageId (form + tracking.md) | 130828757815 | **130269436427** |
| 6 | Hero bg + móvil | `hero-bg.webp` (1440×1454) | **`hero-bg-cdmx.webp`** (= `Preparatoria-General-Tecmilenio.webp`, 1191×1600) |
| 7 | Hero subheadline | "Única prepa intercultural que te ofrece 3 certificaciones y un plan de estudios que te acercan más al mundo laboral." | **"Vive la única prepa intercultural con 3 certificaciones."** |
| 8 | Tipos de Prepa — P2 cierre | "…tomar la mejor decisión en su vocación, su carrera profesional y a encontrar su propósito de vida." | **"…tomar la mejor decisión en su vocación profesional y encontrar su propósito de vida."** |
| 9 | Tipos de Prepa — # tarjetas | 4 (Intercultural, Intercultural Bilingüe, Prepa General, Prepa Bilingüe) | **2** (solo Intercultural + Intercultural Bilingüe; eliminadas Prepa General y Prepa Bilingüe) |
| 10 | Certificaciones — ítem 3 | "Certificación en **Inversión y** Finanzas Personales" | **"Certificación en Finanzas Personales "** (cuerpo idéntico) |
| 11 | Extracurriculares — imagen | `extracurriculares-foto.webp` | **`extracurriculares-foto-cdmx.webp`** (= `preparatoria-cdmx-1.webp`) |
| 12 | Form target | `#hs_form_target_form_89683685` | **`#hs_form_target_form_339333563`** |
| 13 | Form `formId` | `5461ba79-7625-49ea-8bbd-3169d1ecb207` | **`c2d0dfb8-a463-4001-b888-e6750c3baef5`** (propio de CDMX) |
| 14 | Form `formInstanceId` | 4525 | **8615** |
| 15 | Form `pageName` (hubspot-form.md) | "Preparatoria Tecmilenio" | **"Preparatoria Tecmilenio CDMX"** |

**Idéntico a la madre (NO tocado):** H1, título del form, Ventajas (5 bullets + disclaimer),
certificaciones ítems 1-2, "Al graduarte", Rutas de Exploración, Acompañamiento, textos de
Extracurriculares, sección **Ubicaciones** (3 campus CDMX de plantilla: Cuautitlán Izcalli,
Ferrería, Connect Las Américas — HubSpot CDMX no trae campus propios; se mantiene el contenido
de plantilla que ya venía del Figma en la madre), CTA final ("Prepa **Intercultural** Tecmilenio"),
footer, tracking, `styles.css`, `script.js`, portalId 2429099, redirect `/registro-concluido-prepa`,
listener `fn('Preparatoria')`, 17 hidden del form.

**Carrusel de eventos:** sigue OCULTO por CSS (`display:none`), NO se maqueta. CDMX trae 6 slides
(vs 5 nacional) — irrelevante visualmente; documentado en `integrations/carousel-eventos-oculto.md`.

## Assets

- **Nuevos (copiados de `reference/hubspot/preparatoria/assets/` y optimizados):**
  - `hero-bg-cdmx.webp` — `preparatoria-cdmx/preparatoria-general-tecmilenio.webp` (WebP 1191×1600, 122KB)
  - `extracurriculares-foto-cdmx.webp` — `_common/preparatoria-cdmx-1.webp` (WebP 605×540, 20KB)
- **Eliminados (huérfanos de la madre, sin uso en CDMX):** `hero-bg.webp`, `extracurriculares-foto.webp`
- **Resto:** 23 assets heredados de la madre (WebP fotos, PNG crops/transparencia, SVG hamburguesa) — sin cambio.
- 25 assets referenciados · 0 faltantes.

Nota de optimización: ambos assets CDMX ya venían en WebP desde HubSpot con peso razonable;
`cwebp` no está disponible en el entorno, así que se conservan tal cual (dentro del presupuesto).

## Archivos

```
index.html      # 11 módulos, contenido CDMX aplicado (2 tarjetas Tipos, cert sin "Inversión y")
styles.css      # heredado 1:1 de la madre (SIN cambios)
script.js       # heredado 1:1 de la madre (SIN cambios) — menú · acordeón · carruseles · form simulado
assets/         # 25 assets (2 CDMX + 23 heredados)
integrations/   # hubspot-form.md · head-hubspot.md · tracking.md · carousel-eventos-oculto.md (todos con valores CDMX)
```

## Cómo previsualizar

```bash
cd landings/preparatoria/preparatoria-cdmx
python3 -m http.server 49323
# → http://localhost:49323
```

Sin tracking: el único request externo es Google Fonts (Montserrat 400/500/700).

## Formulario (preview vs producción)

- 6 campos visibles (Figma) + 17 hidden de HubSpot en el DOM (idéntico a la madre).
- `submit` → `preventDefault()` + mensaje simulado. Identidad intocable CDMX (portalId `2429099`,
  formId `c2d0dfb8-a463-4001-b888-e6750c3baef5`, target `#hs_form_target_form_339333563`,
  redirect `/registro-concluido-prepa`) en `integrations/hubspot-form.md` con snippet verbatim.
- Sin filtro de campus por JS (a diferencia de Monterrey).

## QA propio (servidor local `python3 -m http.server 49323`, ruta `/landings/preparatoria/preparatoria-cdmx/`)

- **Página:** HTTP 200. CSS/JS 200. **0 imágenes rotas** (25/25 assets → 200).
- **Consola:** 0 errores / 0 warnings de la página. 0 requests fallidos. Access log: 335 requests, todos 200/304.
- **Scroll horizontal:** 0 en los 10 anchos verificados — 1440, 1330, 1280, 1200, 1024, 900, 850, 768, 640, 390 (Chrome headless).
- **Layout:** desktop split 50/50 (hero) hasta 1024; apilado ≤1024. 2 tarjetas Tipos de Prepa ocupan el ancho completo sin huecos (grid `1fr 1fr` desktop / `1fr` mobile).
- **Interactivo:** form (6 visibles + checkbox privacidad mobile), acordeón (3 ítems, ítem 3 abierto por defecto), carruseles (Ubicaciones 3 campus + Rutas 6 tarjetas) — selectores del `script.js` con contraparte en el DOM.
- Servidor apagado al terminar.

## Peso

Assets ≈ 784KB + HTML/CSS/JS ≈ 61KB → página ≈ **0.85MB** (+ ~90KB fuentes Google externas).
Presupuesto del blueprint: ≤1.8MB ✓.

## Estado

**LISTA PARA REVISIÓN** (pw-revisor).
