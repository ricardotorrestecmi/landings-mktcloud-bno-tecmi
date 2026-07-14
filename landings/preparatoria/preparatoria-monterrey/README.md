# Landing — `preparatoria-monterrey` (variante de la madre `preparatoria`)

Clon de la landing MADRE **ya aprobada** `landings/preparatoria/preparatoria/` (réplica 1:1 del
Figma "Plantilla Preparatoria" con contenido de HubSpot). Mismo estilo/layout/CSS/JS que la madre;
**NO es rediseño**. Solo se reemplazó el contenido que cambia en `/preparatoria-monterrey` según
`reference/hubspot/preparatoria/diff-preparatoria.md` (columna Monterrey) y
`reference/hubspot/preparatoria/content-preparatoria-monterrey.md`.

**Regla de oro heredada: ESTILO = Figma · CONTENIDO = HubSpot (verbatim).**

## Archivos

```
index.html      # clon de la madre con reemplazos MTY (ver abajo)
styles.css      # CSS de la madre + bloque "6-MTY" (sección de campus) y .cert-disclaimer
script.js       # JS de la madre + bloque 6 (filtro select de campus) y bloque 7 (campus_de_interes)
assets/         # 26 assets: los compartidos de la madre + 6 propios de MTY (hero + 4 campus + extra)
integrations/   # hubspot-form.md (formId nacional + JS campus) · head-hubspot.md (canonical MTY) · carousel-eventos-oculto.md · tracking.md
```

## Reemplazos aplicados (verbatim de HubSpot, vs la madre)

1. **Meta / head**
   - `<title>` = `Preparatoria Tecmilenio` (igual a la nacional; NO dice "Monterrey").
   - meta description = nacional (verbatim).
   - CSS extra en el head: `<style>.collapsible::after{ right: 15px; }</style>`.
   - canonical / og:url → `…/preparatoria-monterrey`, `pageId 183031343482` (en `integrations/head-hubspot.md`, no en el preview noindex).

2. **Hero** (`#banner-form-section`)
   - Imagen bg + móvil → `assets/hero-bg-monterrey.webp` (de `Preparatoria tecmilenio (1)-min.png`).
   - Subheadline → "Única prepa que te ofrece certificaciones y plan de estudios en formato tetramestral o semestral, que te acercan más al mundo laboral." (sin "intercultural", sin "3").
   - Form target → `#hs_form_target_form_985276914` · formInstanceId `8901` · pageId `183031343482`.
     **formId = `5461ba79-7625-49ea-8bbd-3169d1ecb207` (el MISMO que la nacional)**.

3. **Tipos de Prepa** (4 tarjetas)
   - Intro P1 → "Ofrecemos **programas** de preparatoria…" (sin "dos").
   - Intro P2 → versión nacional (sin cambio respecto a la madre).
   - Tarjeta 3 → título "Prepa General" (sin "(Tetramestral)"), cuerpo "Este programa de preparatoria se enfoca en…", **sin** "Disponible solo en Monterrey".
   - Tarjeta 4 → título "Prepa Bilingüe" (sin "(Tetramestral)"), cuerpo "Va dirigido a estudiantes…", **sin** disclaimer.
   - Tarjetas 1 y 2 (Intercultural / Intercultural Bilingüe): idénticas a la madre.

4. **Ventajas** (`#ventajas-prepa-tecmilenio`)
   - H2 con salto: "¿Qué ventajas te ofrece<br>Prepa Tecmilenio?" (ya así en la madre).
   - Disclaimer en `<p>` aparte → "*Aplica para Prepa Intercultural Bilingüe (semestral) y para Prepa Bilingüe (tetramestral)."

5. **Sección de CAMPUS — SOLO MONTERREY** (`#campus-filter-section`, widget_1732749456516)
   - Reemplaza por completo la sección "Ubicaciones" de la madre (que traía 3 campus CDMX del Figma).
   - H2 (#FF7F32): "¿Cuáles son las ubicaciones que tenemos en Monterrey?" + párrafo intro verbatim.
   - Select filtro (verde, borde #00433D): Elige una opción / Todos / Campus Las Torres / Campus Guadalupe / Campus San Nicolás / Campus Cumbres.
   - 4 tarjetas (mismo estilo de card/carrusel de la madre), foto + dirección + teléfono verbatim:
     - **Las Torres** — Paseo del Acueducto 2610, Del Paseo Residencial, 64909 Monterrey, N.L. Tel. 81 1052 0000 — `campus-las-torres.webp`
     - **Guadalupe** — Av. San Sebastián 1407, Sin Nombre de Col 54, 67190 Guadalupe, N.L. Tel. 81 8232 8801 — `campus-guadalupe.webp`
     - **San Nicolás** — Iztaccihuatl 431, Las Puentes 3er Sector, 66460 San Nicolás de los Garza, N.L. Tel. 81 8305 3200 — `campus-san-nicolas.webp`
     - **Cumbres** — Calle Alejandro de Rodas 91, Cumbres Elite 2do. Sector, 64349 Monterrey, N.L. Tel. 81 8389 8633 — `campus-cumbres.webp`
   - **Carrusel funcional** (4 campus > 3 visibles en desktop → flechas activas; 1 por vista en mobile).
   - **Filtro select** (`script.js` bloque 6): filtra el display de las tarjetas por `data-categories`
     (Todos muestra las 4). Teléfonos en texto plano (como el original, NO son `tel:`).

6. **Certificaciones** (`#certificaciones`)
   - Ítem 1 → "Certificación en Tecnología (Python)**\***" + disclaimer 10px "*Esta certificación aplica solamente en formato semestral."
   - Ítem 3 → versión nacional "Certificación en Inversión y Finanzas Personales" (ya así en la madre).

7. **Extracurriculares** — 2ª imagen flotante → `assets/extracurriculares-foto-mty.webp` (de `preparatoria-cdmx-1.webp`, como CDMX).

8. **CTA final** (`#cta-bg-solid-section`) → "Comienza tu historia en Prepa Tecmilenio" (**sin** "Intercultural").

9. **Formulario** — mismo form nacional + **JS exclusivo MTY** (`script.js` bloque 7): tras cargar,
   recorta `select[name="campus_de_interes"]` a values `["1105","1106","1101","1102"]`
   (Las Torres/Guadalupe/San Nicolás/Cumbres), setTimeout 1000ms. En el preview el form es estático
   (sin ese select) → guard silencioso. Verbatim en `integrations/hubspot-form.md`.

10. **Carrusel de eventos** — OCULTO (no maquetado), idéntico a la madre.

Todo lo no listado (Header, Beneficios al graduarte, Rutas de Exploración, Acompañamiento,
textos de Extracurriculares, footer, tracking) es **idéntico a la madre**.

## Assets nuevos (propios de MTY)

| Archivo | Origen HubSpot | Uso |
|---|---|---|
| `hero-bg-monterrey.webp` (64KB) | `Preparatoria tecmilenio (1)-min.png` | banner bg + móvil |
| `campus-las-torres.webp` (44KB) | `Tecmilenio Las Torres.jpg` (4032×3024) | campus |
| `campus-guadalupe.webp` (56KB) | `Tecmnilenio Guadalupe.jpeg` | campus |
| `campus-san-nicolas.webp` (52KB) | `Fotos-Campus/Campus_San_Nicolas_con_banner.jpg` | campus |
| `campus-cumbres.webp` (76KB) | `Tecmilenio Cumbres.jpg` (6000×4000) | campus |
| `extracurriculares-foto-mty.webp` (24KB) | `preparatoria-cdmx-1.webp` | extracurriculares |

Optimización: los JPG de campus (hasta 3.4MB en origen) se redimensionaron a ≤800px y se
recomprimieron a WebP q80. `cwebp` no está disponible en la máquina → encoder Pillow (WebP nativo).
Assets retirados de la madre por no usarse aquí: `hero-bg.webp`, `extracurriculares-foto.webp`,
`campus-cuautitlan-izcalli/ferreria/connect.webp` (campus CDMX).

## Cómo previsualizar

```bash
cd landings-mktcloud-bno-tecmi
python3 -m http.server 49324
# → http://localhost:49324/landings/preparatoria/preparatoria-monterrey/
```

Sin tracking: el único request externo es Google Fonts (Montserrat 400/500/700).

## QA (headless Chromium, realizado)

- **Scroll horizontal: 0** en 1440/1330/1280/1200/1024/900/850/768/640/390 (diff scrollW−clientW = 0 en todos).
- **Imágenes rotas: 0** (26 imágenes; verificado tras hacer scroll para disparar lazy-load).
- **Errores de consola: 0**.
- **Acordeón**: `aria-expanded` alterna correctamente.
- **Filtro select de campus**: "Campus Cumbres" → solo 1 card visible; "Todos" → 4 cards. OK.
- **Carrusel de campus**: 2 flechas presentes; click "siguiente" mueve el track (scrollLeft 0→454). OK.
- **Formulario**: submit vacío → mensaje "Revisa los campos marcados para continuar." (envío simulado del preview).

## Peso

Assets ≈ 864KB + HTML/CSS/JS ≈ 76KB → página completa ≈ **0.92MB** (+ ~90KB de fuentes Google
externas). Presupuesto del blueprint: ≤1.8MB ✓.

## Estado

**LISTA PARA REVISIÓN** (pw-revisor). Pendientes heredados de la madre (no bloquean): SVGs de Figma
por cuota API (hoy crops PNG 1× en "Al graduarte"), opciones reales de los selects del form, y la
tipografía mobile exacta — todos documentados en el README/blueprint de la madre.
