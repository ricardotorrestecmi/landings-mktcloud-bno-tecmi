# MAPS — Profesional (LP en inglés, sin formulario)

Landing del modelo educativo **MAPS**, en inglés. Es la más simple del nivel:
tres módulos y sin captación de leads en página.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/model-maps
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-model-maps` · `<html lang="en">`

## Estructura (3 módulos)
1. **Hero** — H1, párrafo y CTA "Request Information". Sin formulario.
2. **A model that develops the most in-demand skills…** — 3 tarjetas:
   Modular (lima) · Stackable (verde oscuro) · Personalized (verde brillante).
3. **At Tecmilenio, you chart your path to the future** — 6 pasos con icono:
   Area certificates · Program Certificates · Focus Certificates ·
   Work Integrated Learning · Language Certificates · Integral Development Weeks.

## Decisiones acordadas
- **Idioma:** inglés completo — contenido, botones y footer ("Privacy notice",
  "Terms and conditions", "Social media"). El texto es literal del sitio oficial.
- **Sin formulario:** la página oficial tampoco lo tiene. El CTA del hero y el
  del header apuntan al **Microsoft Forms** que usa la página oficial:
  `https://forms.office.com/r/wuhPJJTcP2`. Si Marketing quiere captar en la
  propia LP, en `integrations/sfmc-block.html` está la nota de cómo añadirlo.

## Diferencias con la página oficial
- **No hay diseño en Figma para esta LP.** El archivo "Plantilla Profesional"
  tiene siete páginas (2.0 a 2.6) y ninguna es de MAPS, así que se replicó desde
  la página publicada. Si existe en otro archivo, vale la pena revisarla.
- **Cuadro de los iconos:** la oficial usa `#007864`; aquí va `#00534C`, el verde
  oscuro que se unificó en todo el nivel.
- **Iconos:** los seis SVG se sirven desde el HubSpot de Tecmilenio
  (`universidad.tecmilenio.mx/hubfs/iconN-maps-eng.svg`) porque no llegaron en el
  CDN de admisiones. Se muestran en blanco con `filter: brightness(0) invert(1)`.
  Si Marketing los sube al CDN, basta cambiar las rutas.

## Cambios al template que trajo esta LP
- `.hero--simple` — hero a una columna para cuando no hay formulario.
- `.benefit-grid--three` — variante de 3 tarjetas con su propia secuencia de color.
- `.steps` / `.step__icon` — módulo de ruta de aprendizaje.

## Assets
- Banner: `be089bba-32db-4f0f-8b10-e9be5515c685.jpg` (CDN admisiones, el mismo
  que el hub nacional).
- Logo y redes, locales en `assets/images/`.
