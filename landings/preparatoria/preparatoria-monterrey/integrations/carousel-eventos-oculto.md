# Carrusel de eventos — OCULTO (solo documentación, NO se maqueta)

> Fuente: `reference/hubspot/preparatoria/content-preparatoria.md` §2.9.
> La sección `carousel-events-section` (id `carousel-events-section`, widget_1692135261057)
> existe en el DOM de la página viva de HubSpot pero está **oculta por CSS del head**:
> `.carousel-events-section{display:none;}`.
> No hay diseño Figma para ella → no se maqueta ni se le inventa diseño (decisión 21 del blueprint).
> Su lugar en el DOM: entre Extracurriculares y el CTA final (hay un comentario HTML en `index.html`).

## Contenido verbatim

- H2: **"Algunos eventos que se viven en Prepa Tecmilenio"**
- Intro: "Al estudiar en Prepa Tecmilenio, podrás vivir actividades que te ayudarán a seguir conociendo gente, conectar con la comunidad Tecmilenio y participar en los eventos que tenemos a nivel nacional como:"

### 5 slides (imagen + caja `bg-main-color-2` con nombre/descripción)

⚠️ Nota del origen: los textos están MEZCLADOS en el HTML vivo (nombres y descripciones no corresponden entre sí).

| # | Imagen | Nombre | Descripción |
|---|---|---|---|
| 1 | `carousel-events-img-3.png` | "FIRST Robotics Competition 2" | "Ofrecemos torneos de deportes electrónicos a nivel nacional, donde demostrarás tu talento en League of Legends, FIFA, Fortnite, Valorant, entre muchos más." |
| 2 | `carousel-events-img-3.png` | "Semana de la Felicidad" | (misma descripción de eSports) |
| 3 | `carousel-events-img-2.png` | "*eSports*" (em) | "Tendrás oportunidad de participar diseñando, construyendo y programando robots capaces de realizar tareas complejas en eventos de índole nacional e internacional." |
| 4 | `Robotic Competition.png` | "FIRST Robotics Competition" | (misma descripción de eSports) |
| 5 | `carousel-events-img-2.png` (alt vacío) | "ESports 1" | (misma descripción de eSports) |

- 5 bullets de navegación (el 3ro con clase `active`).

### Imágenes de referencia (NO copiadas a `assets/` de esta landing)

- `reference/hubspot/preparatoria/assets/_common/carousel-events-img-2.png`
- `reference/hubspot/preparatoria/assets/_common/carousel-events-img-3.png`
- `reference/hubspot/preparatoria/assets/_common/robotic-competition.png`
