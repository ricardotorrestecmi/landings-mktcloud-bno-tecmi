# Carreras Profesionales — Profesional (hub)

Landing **hub** del nivel Profesional: no es una carrera, sino la página que
presenta las 15 licenciaturas e ingenierías. Reutiliza el mismo CSS y los
mismos componentes que las LP de carrera; añade tres módulos nuevos al
template (programas, rutas de enfoque y razones).

- **Contenido de referencia:** https://universidad.tecmilenio.mx/carreras-profesionales
- **Figma:** https://www.figma.com/design/pEqbzbbKpOkE69YAjnFkwi/Plantilla-Profesional?node-id=3-17
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-carreras-profesionales`

## Estructura (8 módulos, en el orden de la página oficial)
1. Hero — "Carreras Profesionales" + formulario
2. Franja de datos — Presencial · Semestral · 8 Semestres · 65/35
3. **Programas** — 15 pills + panel con foto, descripción y botones *(módulo nuevo)*
4. **Rutas de enfoque** — carrusel de 7 tarjetas con foto *(módulo nuevo)*
5. **¿Por qué estudiar en Universidad Tecmilenio?** — 7 iconos *(módulo nuevo)*
6. Voces de nuestros estudiantes — video `VMO8iAWR0WY`
7. En Universidad Tecmilenio contarás con — 6 tarjetas (reutiliza `.benefit-grid`)
8. CTA final

La página oficial **no tiene** plan de estudios, perfil de ingreso/egreso ni
preguntas frecuentes, así que esta LP tampoco los lleva.

## Contenido
Todos los textos son los oficiales, extraídos de la página de referencia:
título y descripción de las 15 carreras, los 7 beneficios de "¿Por qué
estudiar…?", los nombres de las 7 rutas de enfoque y el CTA final. La franja
de datos usa los cuatro valores estándar del template (no aparece en la
página oficial, pero sí en el Figma; sus iconos son los mismos de las LP de
carrera).

## Decisiones (confirmar con Marketing)
- **"Conoce más"** apunta a **nuestra LP** del mismo programa (`../<slug>/`),
  no a la página del sitio público, para no sacar al usuario de la campaña.
  Los 15 slugs coinciden uno a uno con las carpetas de `landings/profesional/`.
- **"Descargar Plan"** apunta al PDF oficial de cada carrera
  (`universidad.tecmilenio.mx/hubfs/Folletos…`), tal como en la página oficial.
  → Estos mismos PDF sirven para completar el botón "Descarga el folleto" que
  hoy está en `href="#"` en las 15 LP de carrera.
- **Rutas de enfoque:** la página oficial solo da el nombre y la foto de cada
  ruta, sin descripción. Se replicó igual.
- **Iconos de "¿Por qué estudiar…?":** el CDN entrega unos en blanco y otros en
  verde oscuro. Se normalizan a blanco con `filter: brightness(0) invert(1)`
  sobre el cuadro verde `#00534C` (como en la página oficial). Si Marketing
  entrega el set homogéneo, se puede quitar el filtro.

## Pendientes
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).
- Validación visual contra el Figma (nodo 3-17): la sesión no tuvo acceso al
  archivo, el diseño se replicó a partir de la página oficial publicada.

## Assets (CDN admisiones)
- Banner: `be089bba-32db-4f0f-8b10-e9be5515c685.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- 15 fotos de programas, 7 fotos de rutas, 7 iconos de razones, 4 iconos de la
  franja y la miniatura del video: todos en el CDN, referenciados en `index.html`.

Logo y redes son locales en `assets/images/`.

## JS propio (`script.js`)
Solo lo que usa esta LP: pills + desplegable de programas, carrusel de rutas y
el video embebido de "Voces". No incluye el código de plan de estudios ni de
acordeones porque esos módulos no existen aquí.
