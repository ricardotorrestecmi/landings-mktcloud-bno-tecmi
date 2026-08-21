# Carreras Profesionales San Luis Potosí — Profesional (hub regional, campus único)

Variante regional con **un solo campus**, igual que `licenciatura-queretaro`:
en lugar de tarjetas de ubicaciones lleva el mapa embebido de Google Maps.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-san-luis-potosi-1
- **Figma:** Plantilla Profesional → página **2.2 Plantilla general con campus individual**
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-san-luis-potosi`

## Estructura (9 módulos, el orden de la página oficial)
1. Hero — "Carreras Profesionales en San Luis Potosí" + formulario
2. Franja de datos — Presencial · Semestral · 8 Semestres · 65/35
3. Programas — **7** carreras
4. Rutas de enfoque — carrusel de 7 tarjetas
5. Ubicación del campus — "Conoce la ubicación del Campus San Luis Potosí" + mapa
6. ¿Por qué estudiar en Universidad Tecmilenio? — 7 tarjetas
7. Voces de nuestros estudiantes — video `VMO8iAWR0WY`
8. En Universidad Tecmilenio contarás con — 6 tarjetas
9. CTA final

## Oferta (7 programas)
Administración de Empresas · Comercio y Negocios Internacionales ·
Contabilidad y Estrategia Financiera · Desarrollo de Software ·
Diseño Gráfico y Animación · Ingeniería Industrial · Mecatrónica.

Coincide exactamente con la página oficial y con las fotos que entregó Marketing.

## Mapa
`iframe` de Google Maps apuntando a "Tecmilenio campus San Luis Potosí", el que
entregó Marketing. Va dentro del contenedor de 1160px con esquinas redondeadas
(480px de alto; 340 en móvil), igual que en Querétaro.

## Decisiones (confirmar con Marketing)
- **"Conoce más"** apunta a nuestra LP del programa (`../<slug>/`).
- **"Descargar Plan"** apunta al PDF oficial de cada carrera.

## Pendientes
- **Formulario:** réplica estática; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `a4f9c87f-e907-4a49-85c3-565bd4f3cabb.jpg`
- Resto (ilustración, 7 fotos de programa, 7 de rutas, 7 iconos, franja y
  miniatura del video): los mismos de los otros hubs.

Logo y redes son locales en `assets/images/`.
