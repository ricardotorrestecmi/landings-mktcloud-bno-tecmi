# Carrusel de eventos — OCULTO (solo documentación, NO se maqueta)

> Fuente: `reference/hubspot/preparatoria/content-preparatoria-cdmx.md` §2.9.
> La sección `carousel-events-section` (id `carousel-events-section`, widget_1692135261057)
> existe en el DOM de la página viva de HubSpot pero está **oculta por CSS del head**:
> `.carousel-events-section{display:none;}`.
> No hay diseño Figma para ella → no se maqueta ni se le inventa diseño (decisión 21 del blueprint).
> Su lugar en el DOM: entre Extracurriculares y el CTA final (hay un comentario HTML en `index.html`).
> **CDMX trae 6 slides** (vs 5 en la nacional) — irrelevante visualmente porque no se renderiza.

## Contenido verbatim

- H2: **"Algunos eventos que se viven en Prepa Tecmilenio"**
- Intro: "Al estudiar en Prepa Tecmilenio, podrás vivir actividades que te ayudarán a seguir conociendo gente, conectar con la comunidad Tecmilenio y participar en los eventos que tenemos a nivel nacional como:"

### 6 slides CDMX (imagen + caja `bg-main-color-2` con nombre/descripción)

⚠️ Nota del origen: los textos están MEZCLADOS en el HTML vivo (nombres y descripciones no corresponden entre sí).

| # | Imagen | Nombre |
|---|---|---|
| 1 | `carousel-events-img-3.png` | "Semana de la Felicidad" |
| 2 | `carousel-events-img-2.png` | "*eSports*" (em, desc de robots) |
| 3 | `Robotic Competition.png` | "FIRST Robotics Competition" |
| 4 | `carousel-events-img-3.png` | "Semana de la Felicidad" (repetida) |
| 5 | `carousel-events-img-2.png` | "Esports" |
| 6 | `Robotic Competition.png` | "FIRST Robotics Competition" |

- 6 bullets de navegación (el 3ro con clase `active`).

### Imágenes de referencia (NO copiadas a `assets/` de esta landing)

- `reference/hubspot/preparatoria/assets/_common/carousel-events-img-2.png`
- `reference/hubspot/preparatoria/assets/_common/carousel-events-img-3.png`
- `reference/hubspot/preparatoria/assets/_common/robotic-competition.png`
