# Landing MADRE — `preparatoria` (Batch Preparatoria Tecmilenio)

Réplica 1:1 del diseño Figma "Plantilla Preparatoria" (`ViwhNAvWQcYkoeAgjmFupK`, frame desktop
`1:43` 1440×8866 + nodos sueltos `1:658`/`1:691`; mobile `1:392` 320×7561) con el contenido de
la página nacional de HubSpot (`universidad.tecmilenio.mx/preparatoria`).
**Regla de oro: ESTILO = Figma · CONTENIDO = HubSpot.**

Es la **plantilla madre**: `preparatoria-cdmx` y `preparatoria-monterrey` se clonarán de ella.
Preview estático noindex (el `_headers` del repo fuerza `X-Robots-Tag`; el HTML refuerza con meta robots).

## Fuente única

`landings/preparatoria/blueprint-preparatoria.md` — estructura, medidas, copy verbatim, mapeo
de assets, divergencias (§15) y pendientes (§16). Trazabilidad: `reference/figma/preparatoria/`
y `reference/hubspot/preparatoria/`.

## Archivos

```
index.html      # 11 módulos en orden Figma + comentario del carrusel de eventos oculto
styles.css      # hoja PROPIA (tokens §2 del blueprint) — NO usa shared/css/landing.css (posgrados)
script.js       # menú mobile · acordeón · carruseles (ubicaciones / rutas mobile + 6 dots) · validación + submit simulado
assets/         # 25 assets optimizados (WebP fotos, PNG con transparencia/crops, SVG hamburguesa)
integrations/   # hubspot-form.md · carousel-eventos-oculto.md · head-hubspot.md · tracking.md
```

## Cómo previsualizar

```bash
cd landings/preparatoria/preparatoria
python3 -m http.server 49321
# → http://localhost:49321
```

Sin tracking: el único request externo es Google Fonts (Montserrat 400/500/700).

## Formulario (preview vs producción)

- 6 campos visibles (Figma) + 17 hidden de HubSpot presentes en el DOM.
- `submit` → `preventDefault()` + mensaje simulado. Identidad intocable (portalId `2429099`,
  formId `5461ba79-7625-49ea-8bbd-3169d1ecb207`, redirect `/registro-concluido-prepa`) en
  `integrations/hubspot-form.md` con el snippet `hbspt.forms.create` verbatim y el listener `fn('Preparatoria')`.
- Checkbox de privacidad visible SOLO en mobile (mock 1:392), required solo ahí.

## Divergencias Figma ↔ HubSpot

Todas las decisiones están en el blueprint §15 (22 filas). Las más visibles:

- Casing del H1 y del CTA final = Figma; palabras = HubSpot.
- Sección **Ubicaciones CDMX**: no existe en la página nacional de HubSpot; se maqueta con el
  contenido real del Figma (es parte de la plantilla madre; las variantes la surtirán de su content-*.md).
- CTA "Más información" en Ventajas (existe en Figma, no en HubSpot) → ancla a `#banner-form-section`.
- Etiquetas de categoría de Rutas (PROCESOS/…), ícono flag del CTA y "Términos y Condiciones": NO se maquetan.
- Redes del footer = las reales de HubSpot (FB/IG/TikTok/YT) con glifos inline SVG — difieren del render de Figma (FB/X/LinkedIn/IG): OK.
- Carrusel de eventos de HubSpot: OCULTO en el original (`display:none`) y sin diseño Figma → NO se
  maqueta; documentado en `integrations/carousel-eventos-oculto.md` + comentario HTML en su lugar del DOM.

## Decisiones propias de esta implementación (para el pw-revisor)

1. **WebP sin fallback `<picture>`**: soporte universal desde 2020 y el presupuesto de peso
   (≤1.8MB) no admite duplicar fotos en PNG. Los nombres siguen el mapeo §14.1 del blueprint.
2. **Overlay del hero** `rgba(0,0,0,.25)` aplicado tal cual el JSON — VALIDADO contra
   `figma-prepa-desktop-full.png`: muestreo de píxeles idéntico (±2 RGB). Pendiente §16.2-5 resuelto.
3. **Sombra del acordeón** `0 4px 16px rgba(0,0,0,.08)` (no declarada en JSON, aparente en mock — §16.2-7).
4. **Fondo de Ubicaciones** `#FFFFFF` (asumido, nodo suelto sin fondo propio — §16.2-6).
5. **Card "acompañados" y "Descubre"**: contenedor 1202px centrado (Figma lo dibuja en x=140,
   ligeramente descentrado ~21px; se centró por robustez responsive).
6. **Form centrado en el panel naranja** (Figma lo pone a x=115 del half, centrado sería 105 —
   diferencia de 10px absorbida al centrar).
7. **Campos del form en mobile**: alto 44px (spec estima ~40px; 44 por tap-target de accesibilidad).
8. **Íconos "Al graduarte" en mobile**: se mantienen los 6 crops desktop en su orden (la alternancia
   de color no coincide con el patrón col-izq=amarillo/col-der=naranja del mock) — solución simple
   acordada en blueprint §9; se corrige al integrar los SVG reales.
9. **Título de card de Rutas**: gap título→cuerpo de 41px según spec desktop (y=63 del bloque de texto).
10. **Contraste**: textos `#F8F9FA` sobre naranjas/amarillo van tal cual el Figma (QA del blueprint
    pide contraste IGUAL al diseño, no WCAG).

## Pendientes (no bloquean — blueprint §16.2)

- **SVGs de Figma** (logo header/footer, 6 íconos de "Al graduarte", chevrons, flechas): cuota API
  429 hasta ~2026-07-09. Hoy van crops PNG 1× con cajas exactas listas para swap. En retina se ven
  levemente suaves (esperado).
- **`certificaciones-foto`**: única foto de baja resolución (528×416 para hueco 610×422, upscale
  1.16×). No existe fuente mayor (HubSpot trae la misma foto).
- **Opciones de los selects** del form: sin definir en ninguna fuente (placeholder-option).
- **Tipografía mobile exacta**: estimada del render (H1 30, H2 24, body 14) — confirmar contra JSON.
- El render desktop de Figma tiene un **hueco blanco** (y 2640→4179): ahí van Certificaciones +
  Ubicaciones (nodos sueltos) — el hueco NO es diseño.

## Peso

Assets ≈ 0.69MB + HTML/CSS/JS ≈ 65KB → página completa ≈ **0.76MB transferidos** (+ ~90KB de
fuentes Google externas). Presupuesto del blueprint: ≤1.8MB ✓.
