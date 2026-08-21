# Open House — Profesional

Landing de campaña del **Open House de nuevas carreras profesionales**. Es la
única del nivel construida directamente desde el Figma (no desde la página
publicada, que tiene otro diseño más antiguo).

- **Contenido de referencia:** https://universidad.tecmilenio.mx/openhouse-tecmilenio
- **Figma:** Plantilla Profesional → página **2.4 Plantilla open house**
  (leída con el plugin de DesignAgent, no a ojo)
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-openhouse`

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

## Diferencias con la página publicada
La página oficial es una versión anterior: hero sin lockup, otro orden de
módulos y sin el bloque de video. Se siguió **el Figma**, que es el diseño
vigente. Los textos sí son los de la página oficial, salvo el del módulo de
video, que viene del Figma.

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
