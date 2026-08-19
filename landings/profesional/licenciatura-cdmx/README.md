# Carreras Profesionales CDMX — Profesional (hub regional)

Variante regional del hub: mismos módulos que `carreras-profesionales`, con la
oferta de Ciudad de México y un módulo extra de ubicaciones de campus.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-cdmx
- **Figma:** Plantilla Profesional → página **2.3 Plantilla general múltiples campus**
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-cdmx`

## Estructura (9 módulos, el orden de la página oficial)
1. Hero — "Carreras Profesionales en Ciudad de México" + formulario
2. Franja de datos — Presencial · Semestral · 8 Semestres · 65/35
3. Programas — **11** carreras (las que se ofrecen en CDMX)
4. Rutas de enfoque — carrusel de 7 tarjetas
5. **Ubicaciones de campus** — Ferrería y Cuautitlán Izcalli *(módulo nuevo)*
6. ¿Por qué estudiar en Universidad Tecmilenio? — 7 tarjetas
7. Voces de nuestros estudiantes — video `VMO8iAWR0WY`
8. En Universidad Tecmilenio contarás con — 6 tarjetas
9. CTA final

## Diferencias con el hub nacional (`carreras-profesionales`)
- **11 programas** en lugar de 15: no están Creación y Desarrollo de Empresas,
  Enfermería, Gastronomía Internacional ni Logística y Cadena de Suministro.
- **Módulo de ubicaciones**: dos tarjetas verde `#00534C` con foto, nombre del
  campus en lima `#78D64B` y dirección, tal como en la página oficial.
- H1 y meta description regionalizados.

## Contenido
Textos literales de la página de referencia: H1, párrafo del hero, título y
descripción de las 11 carreras, nombres y direcciones de los dos campus, los
7 beneficios, las 7 rutas y el CTA final.

## Decisiones (confirmar con Marketing)
- **"Conoce más"** apunta a nuestra LP del programa (`../<slug>/`), igual que en
  el hub nacional. La página oficial de CDMX solo trae "Descargar Plan".
- **"Descargar Plan"** apunta al PDF oficial de cada carrera.
- Las **fotos de campus** son las que entregó Marketing en el CDN de admisiones,
  no las del sitio público (que están en HubSpot).

## Pendientes
- **Formulario:** réplica estática; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`). Nota: el formulario oficial de esta
  página filtra Campus de Interés a CUAUTITLAN IZCALLI y FERRERIA — el nuestro
  usa el listado completo del template.
- Validación del módulo de ubicaciones contra el Figma: la página 2.3 no llegó a
  renderizar en la sesión, se replicó desde la página oficial publicada.

## Assets (CDN admisiones)
- Banner: `82c12b65-de55-4bb4-965a-c4b63ef84906.jpg`
- Campus Ferrería: `4c833e15-9c48-41ac-a035-2b7a1be86439.jpg`
- Campus Cuautitlán Izcalli: `b3688d5b-dc40-43e0-b486-7e9c85bb9083.jpg`
- Resto (ilustración, 11 fotos de programa, 7 de rutas, 7 iconos, franja y
  miniatura del video): los mismos del hub nacional.

Logo y redes son locales en `assets/images/`.
