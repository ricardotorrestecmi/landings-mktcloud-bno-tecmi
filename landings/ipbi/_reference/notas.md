# Plantilla IPBI — tres landings para Marketing Cloud

Tarea ClickUp: 86e40hy7f · "Plantilla IPBI (Marketing Cloud)"
Figma: https://www.figma.com/design/oaqYZCQNG3mrfapAIjoQzl/Plantilla-IPBI
Hoja de control: pestaña "IPBI" del Control de plantillas para Marketing Cloud.

## Las tres landings

| Landing            | Carpeta              | Nodo Figma | Origen del copy                              |
|--------------------|----------------------|-----------|-----------------------------------------------|
| Plantilla IPBI     | `liderazgo-positivo` | `1:27`    | universidad.tecmilenio.mx/liderazgo-positivo  |
| Museos Positivos   | `museos-positivos`   | `2:2284`  | universidad.tecmilenio.mx/museos-positivos    |
| Premios TOP        | `premios-top`        | `2:3422`  | solo el Figma; no tiene pagina viva           |

OJO: tanto la tarea como la celda B4 de la hoja de control mandan Museos
Positivos al nodo `2:3422`, que es el de Premios TOP. El correcto es
`2:2284`, verificado en el panel de capas.

## Que se entrego

- `landings/css/ipbi/styles.css` — una sola hoja para las tres, en bloques:
  **A** comun, **B** Liderazgo, **C** Museos, **D** Premios TOP,
  **E** espaciado por landing, **F** tarjetas y fotos de los splits.
- `landings/ipbi/<slug>/index.html` — una pagina por landing.
- `landings/ipbi/<slug>/assets/` — iconos y favicon locales. Las fotos y los
  logos van por URL de `image.admisiones.tecmilenio.mx`, como anota el Figma.

`landings/js/landings.js` NO se toco. Las cuatro funcionalidades se enganchan
a lo que ya existia: pestanas (`i2-pastilla`), carrusel (`data-car` /
`data-car-track`), video (`i2-video`) y acordeones, que son `<details>`
nativos y no necesitan JS.

## Modulos reutilizados de la institucional

Mismo marcado, solo cambia el color: `i2-header`, `i2-footer`, `i2-btn`,
`i2-hero`, `i2-split` (+ `--claro`, `--blanco`, `--invertido`, `--video`),
`i2-banda` (+ `--cta`), `i2-carrusel` + `i2-flecha`, `i2-servicios` +
`i2-servicio--sola`, `i2-pastillas`, `i2-acordeon`, `i2-form`, `i2-wrap`.

Nuevos porque la institucional no los tiene: tarjeta de experto, tarjetas de
beneficio de Museos, temario, categorias y la lista de pasos numerados.

## Medidas del Figma que conviene no perder

- Reticula de 1240 centrada en 1440: el margen lateral va POR FUERA de los
  1240, no por dentro. El borde de contenido cae en 100.
- Hueco de reticula: **20** en todos los modulos.
- Columnas de los splits: 610. Radio de tarjeta y foto: **26**.
- Formularios: 820 de ancho con mitades de 400 (Museos y Premios) y 505 con
  mitades de 242 (Liderazgo).
- Cinco de los seis splits llevan una tarjeta bajo el texto: blanca en
  "Por que estudiar", "Conocenos" y "Que son los Premios TOP"; `#ebebeb` en
  "A quien va dirigido" y "Como participar". CURSA no lleva.

## Pendiente de Marketing

1. **Liderazgo** — el Figma trae una onceava foto de experto
   (`9fb02af3-...`, nodo "isaac-liderazgo-positivo") sin nombre, pais ni
   semblanza en ningun lado. Quedo fuera, marcada en el HTML.
2. **Liderazgo** — "Descarga Plan" no tiene destino: en la pagina viva el
   href va vacio. Marcado como URL PENDIENTE en los tres paneles.
3. **Premios TOP** — cuatro de las cinco categorias (Experiencia 360,
   Sostenibilidad con proposito, Cultura de bienestar, Liderazgo del futuro)
   solo traen el titulo. Solo "Compromiso inclusivo" tiene descripcion.
4. **Museos y Premios** — el formulario repite el mismo consentimiento dos
   veces, palabra por palabra, y sus dos notas legales son Lorem Ipsum.
5. **Museos** — el modulo "En Universidad Tecmilenio contaras con" (nodo
   `2:3357`) esta aparcado AL LADO de la columna en el Figma, no dentro: el
   archivo no dice en que posicion va. Quedo despues de los beneficios, a
   confirmar.
6. **Museos** — la pagina viva lleva en el pie la linea de validez oficial
   SEP; el Figma no la trae. No se incluyo.

## Decisiones tomadas y por que

- **Puntos del carrusel**: el Figma los dibuja, pero pintarlos obliga a
  registrar el carrusel en `landings.js` y el cliente pidio no tocar el JS.
  Quedaron fuera.
- **Contraste**: las tarjetas Artes, Actividades y Emociones de Museos llevan
  texto blanco sobre fondo claro (~1.6:1 y ~2:1, por debajo del minimo
  legible). Se respeto el Figma. La segunda tarjeta de beneficios de Premios
  TOP tiene el texto en `#ebebeb` sobre tarjeta blanca: ahi SI se cambio a
  oscuro, porque tal cual seria invisible.
- **Movil**: el Figma no trae reticula movil util —sus mocks de 320 estan
  tomados de otra plantilla y hablan de trimestres y de "educacion positiva"—
  asi que el comportamiento se extrapolo de los modulos de la institucional.
- **Texto**: se corrigieron dos erratas del Figma, "Integracion laboral"
  (escrito "Integracion" con el acento movido) y un punto de mas en
  "organizaciones. y aprenderas". En "Experimentaras una transformacion"
  se siguio la pagina viva, no el Figma, que rompe el paralelismo con las
  otras dos razones.
