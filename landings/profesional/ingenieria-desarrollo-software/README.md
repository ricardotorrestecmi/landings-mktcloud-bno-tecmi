# Ingeniería en Desarrollo de Software — Profesional

Tercera landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/ingenieria-desarrollo-software
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/of5nrjznqec
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-ingenieria-desarrollo-software`

## Contenido
Esta carrera es la que más se apega al template: la página oficial **sí** trae
todos los módulos (perfil de ingreso/egreso, preguntas frecuentes y certificados
por semestre con el toggle), así que **todo el contenido es oficial**:

- Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35).
- "¿Qué hace un(a) Ingeniero(a) en Desarrollo de Software?" (2 párrafos).
- **Plan de estudios** del SFMC (8 semestres, SEDi 1-14, Certificados de inglés
  1-7, Skilling en veranos, Estancia Empresarial en 8º).
- **Certificados** por semestre (Primer a Quinto) y **5 rutas de enfoque**:
  Análisis de datos · Diseño y Programación de Videojuegos · Inteligencia
  Artificial · Metodología DevOps · Ciberseguridad.
- Beneficios, Voces, perfil de ingreso/egreso, FAQ (3 preguntas) y CTA final.

Única adición del template que no está en la oficial: la tarjeta
**"¿Cuánto dura la carrera?"** (viene del Figma, mismo texto que las otras LP).

Nota: el SFMC escribe "Desarrollo stack" en el 4º semestre; se usó
**"Desarrollo full stack"**, que es como aparece en la página oficial y en el
certificado del mismo semestre.

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `9e25c3da-109c-49c5-81e4-72588c498e10.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `7f046010-2bab-4172-addc-46ec1442df03.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
