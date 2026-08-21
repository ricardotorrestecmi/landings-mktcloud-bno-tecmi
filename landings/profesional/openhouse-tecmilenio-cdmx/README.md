# Open House CDMX — Profesional

Variante **CDMX** del Open House: misma plantilla que `openhouse-tecmilenio`,
con el contenido y el video de la campaña de Ciudad de México.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/openhouse-tecmilenio-cdmx
- **Figma:** Plantilla Profesional → página **2.4 Plantilla open house**
  (leída con el plugin de DesignAgent, no a ojo)
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-openhouse lp-openhouse-cdmx`

## Diferencias con el Open House nacional
| | Nacional | CDMX |
|---|---|---|
| Hero | "Te invitamos a nuestro Open House de nuevas carreras…" | "Ven y descubre tu propósito y tu carrera haciendo amigos." |
| Bloque verde | "¿Ya sabes…? Ven y conoce nuestro nuevo modelo educativo" | "¿Ya sabes…?" + **"Te invitamos a nuestro Open House el 18 de Abril de 2026…"** |
| 5 tarjetas | grupos, gamer, amistades, certificados, empleo | talleres, eSports y robótica, interculturalidad, 40% del plan, empleo |
| Galería | "Descubre una experiencia única de aprendizaje" | "Conoce los pasillos dónde construirás tus sueños" |
| Video | `VMO8iAWR0WY` | **`NjrvVpf2nRU`** |

La **fecha del evento (18 de abril de 2026)** vive en el subtítulo del bloque
verde: es lo primero que hay que actualizar en cada edición del Open House.

## Estructura (5 módulos)
1. **Hero** — foto del estudiante gamer + lockup "OPEN HOUSE de nuevas carreras
   profesionales" + párrafo + botón "¡Me interesa!".
2. **¿Ya sabes qué carrera te gustaría estudiar?** — sobre `#00534C`, cinco
   tarjetas con icono en cuadro de 129px y radio 20px, alternando `#26D07C` y
   `#78D64B` como en el Figma.
3. **Descubre una experiencia única de aprendizaje** — cuatro fotos 2×2 con
   banda de texto: oscura, lima, lima, oscura.
4. **Descubre cómo es un Open House en Tecmilenio** — banda `#00534C` con el
   copy a la izquierda y el video a la derecha (invertida respecto a "Voces").
5. **¡Regístrate y vive esta gran experiencia!** — sobre `#78D64B`, foto a la
   izquierda y formulario de campos tipo píldora con botón `#00534C`.

Los tres CTA (header, hero y video) bajan al formulario con `#registro`, igual
que la página oficial, que ancla todo a su sección de registro.

## Tokens verificados con el plugin
Del nodo `Block 2`: fondo `#00534C`, título Montserrat Bold 30/34 en `#F8F9FA`,
cuadros de icono 129×129 con radio 20px en `#26D07C` / `#78D64B`, textos 16/22.
La paleta del archivo coincide con la del nivel: `#26D07C`, `#78D64B`,
`#00534C`, `#F8F9FA`.

## Iconos del módulo verde
La exportación SVG desde el plugin no respondió (dos intentos, timeout de 120 s),
así que los cinco iconos se tomaron de los PNG del sitio oficial y se
**procesaron**: se quitó el fondo verde que traían incorporado, se recortó el
glifo y se dejó blanco sobre transparente, para poder pintar el cuadro con el
color que pide el Figma. Están en `assets/images/oh-icon-*.png` (160×160).
Si Marketing entrega los SVG originales, basta sustituirlos.

## Notas de los assets entregados
- El enlace que llegó como "foto banner principal"
  (`…pub.sfmc-content.com/p1qabmmg5as`) **no es una imagen**: es otra LP de SFMC
  ya construida ("Tecmilenio - Un campus cerca de ti"). Se confirmó usar la foto
  del estudiante gamer, la misma del Open House nacional.
- El **lockup "OPEN HOUSE"** es el mismo del nacional (`39c18e33…`); no llegó uno
  específico de CDMX.
- El video entregado era `VMO8iAWR0WY`, pero la página oficial de CDMX y el
  comentario #21 de Sagrario en el Figma (página 2.4) coinciden en
  **`NjrvVpf2nRU`**; se confirmó y es el que quedó.

## Diferencias con la página publicada
La página oficial es una versión anterior del diseño: hero sin lockup y otro
orden de módulos. Se siguió **el Figma** (2.4), que es el diseño vigente, con
los textos de la página oficial de CDMX.

## Formulario
Réplica estática del que muestra el Figma; bloque real de SFMC pendiente
(ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `6981cb45-264a-4624-a4f7-a26ebd1e9da7.jpg`
- Lockup "OPEN HOUSE": `39c18e33-c740-4697-b3ff-5c7616c2efa6.png`
  (Marketing lo etiquetó como "Está en ti", pero es el título del Open House)
- Galería: `bea70720…` laboratorios, `615efe18…` instalaciones,
  `b51cd3bb…` aulas, `1e686b32…` equipo deportivo
- Miniatura del video: `d118bc2a-7178-49dc-9fb0-662d6bac350d.png`
- Foto del formulario: `dc328e54-0e01-4ffa-a9b9-9f014374d24e.jpg`

Logo, redes e iconos del módulo verde son locales en `assets/images/`.
