# Carreras Profesionales Guadalajara — Profesional (hub regional)

Variante regional del hub, con la oferta de Guadalajara. Misma estructura que
`licenciatura-cdmx`; solo cambian los programas, los campus y los textos
regionalizados.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-guadalajara-1-0
- **Figma:** Plantilla Profesional → página **2.3 Plantilla general múltiples campus**
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-guadalajara`

## Estructura (9 módulos, el orden de la página oficial)
1. Hero — "Carreras Profesionales en Guadalajara" + formulario
2. Franja de datos — Presencial · Semestral · 8 Semestres · 65/35
3. Programas — **8** carreras
4. Rutas de enfoque — carrusel de 7 tarjetas
5. Ubicaciones de campus — **Guadalajara y Zapopan**
6. ¿Por qué estudiar en Universidad Tecmilenio? — 7 tarjetas
7. Voces de nuestros estudiantes — video `VMO8iAWR0WY`
8. En Universidad Tecmilenio contarás con — 6 tarjetas
9. CTA final

## Oferta (8 programas)
Administración de Empresas · Comercio y Negocios Internacionales ·
Contabilidad y Estrategia Financiera · Desarrollo de Software ·
Diseño Gráfico y Animación · Ingeniería Industrial · Mecatrónica ·
Mercadotecnia.

Frente a CDMX (11), aquí no están Derecho, Nutrición ni Psicología.

## Campus
- **Campus Guadalajara** — Av. Milenio 8640, Santa María Tequepexpan, 45530 San
  Pedro Tlaquepaque, Jal.
- **Campus Zapopan** — Anillo Periférico Norte Manuel Gómez Morín #2398,
  Constitución, 45180 Zapopan, Jal.

> **Corrección de la fuente:** la dirección de Campus Guadalajara en la página
> oficial empieza con "Aparcamiento, Campus Guadalajara, Av Milenio 8640…" —
> arrastre de la ficha de Google Maps. Se dejó solo la dirección.
> Vale la pena avisar a Marketing para que lo corrijan en el sitio.

## Decisiones (confirmar con Marketing)
- **"Conoce más"** apunta a nuestra LP del programa (`../<slug>/`), igual que en
  los otros hubs. La página oficial solo trae "Descargar Plan".
- **"Descargar Plan"** apunta al PDF oficial de cada carrera.
- Las **fotos de campus** son las que entregó Marketing en el CDN de admisiones.

## Pendientes
- **Formulario:** réplica estática; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`). El formulario oficial filtra Campus de
  Interés a los campus de Jalisco; el nuestro usa el listado del template.

## Assets (CDN admisiones)
- Banner: `4a485221-0637-4a7a-8374-bf89fa6f4927.jpg`
- Campus Guadalajara: `45c9d64d-9a68-4dd8-8f5b-acb086e728b2.jpg`
- Campus Zapopan: `f9beca91-78fd-4097-8132-fb4395b48cd0.jpg`
- Resto (ilustración, 8 fotos de programa, 7 de rutas, 7 iconos, franja y
  miniatura del video): los mismos de los otros hubs.

Logo y redes son locales en `assets/images/`.
