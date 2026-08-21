# Carreras Profesionales Querétaro — Profesional (hub regional, campus único)

Variante regional del hub con **un solo campus**: en lugar de las tarjetas de
ubicaciones, lleva el mapa embebido de Google Maps, como la página oficial.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-queretaro-1-0-0
- **Figma:** Plantilla Profesional → página **2.2 Plantilla general con campus individual**
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-queretaro`

## Estructura (9 módulos, el orden de la página oficial)
1. Hero — "Carreras Profesionales en Querétaro" + formulario
2. Franja de datos — Presencial · Semestral · 8 Semestres · 65/35
3. Programas — **7** carreras
4. Rutas de enfoque — carrusel de 7 tarjetas
5. **Ubicación del campus** — "Conoce la ubicación del Campus Querétaro" + mapa
6. ¿Por qué estudiar en Universidad Tecmilenio? — 7 tarjetas
7. Voces de nuestros estudiantes — video `VMO8iAWR0WY`
8. En Universidad Tecmilenio contarás con — 6 tarjetas
9. CTA final

## Oferta (7 programas, los de la página oficial)
Administración de Empresas · Comercio y Negocios Internacionales ·
Desarrollo de Software · Diseño Gráfico y Animación · Ingeniería Industrial ·
Mecatrónica · Mercadotecnia.

> **Pendiente de confirmar: Derecho.** Marketing entregó también la foto de
> Derecho para esta LP, pero la página oficial de Querétaro **no lo oferta**
> (7 pills, sin Derecho, verificado en el sitio). Se construyó con los 7
> oficiales para no anunciar un programa que quizá no existe en ese campus.
> Si Querétaro sí lo abre, agregarlo es una línea en el módulo de programas.

## Mapa
Es el `iframe` de Google Maps que entregó Marketing, apuntando a
"Tecmilenio Querétaro". Va **dentro del contenedor de 1160px** con esquinas
redondeadas, en línea con el resto de los módulos; la página oficial lo pone a
todo el ancho de la ventana. Si se prefiere a sangre, es un cambio de una regla
en `.campus-map`.

## Decisiones (confirmar con Marketing)
- **"Conoce más"** apunta a nuestra LP del programa (`../<slug>/`).
- **"Descargar Plan"** apunta al PDF oficial de cada carrera.

## Pendientes
- **Formulario:** réplica estática; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `5d20c705-2dfa-466a-b104-6a5248814d51.jpg`
- Resto (ilustración, 7 fotos de programa, 7 de rutas, 7 iconos, franja y
  miniatura del video): los mismos de los otros hubs.

Logo y redes son locales en `assets/images/`.
