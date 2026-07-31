# Licenciatura en Creación y Desarrollo de Empresas — Profesional

Séptima landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-creacion-y-desarrollo-de-empresas
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/mgygwj0tozy
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-creacion-y-desarrollo-de-empresas`

## Contenido oficial (tal cual la página de referencia)
Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35),
"¿Qué hace un(a) licenciado(a) en Creación y Desarrollo de Empresas?"
(2 párrafos), beneficios, Voces de nuestros estudiantes y CTA final.

**Plan de estudios:** replicado del SFMC de esta carrera (8 semestres,
SEDi 1-14, Certificados de inglés 1-7, Skilling en veranos, Estancia
Empresarial en 8º).

**Rutas de enfoque** (2, oficiales con sus temas): Estrategias para nuevas
empresas · Estrategias de mercadotecnia.

## Diferencias con la página oficial (mismo criterio que Mercadotecnia y Mecatrónica)
La LP oficial NO tiene perfil de ingreso/egreso, FAQ, certificados por semestre
ni la tarjeta "¿Cuánto dura la carrera?". Se mantuvieron para conservar la
estructura del template:

- **Certificados (pestaña del toggle):** lista por semestre **derivada del plan
  de estudios** (materias de los semestres 1-5) → confirmar con Marketing.
- **Perfil de Ingreso / Egreso:** redactado a partir de la información de la
  carrera → confirmar con Marketing.
- **Preguntas frecuentes:** P1 y P3 son el texto genérico de Tecmilenio; P2
  redactada para esta carrera → confirmar con Marketing.
- **"¿Cuánto dura la carrera?":** tarjeta del Figma, mismo texto que las demás LP.

Nota: el 4º semestre aparece como "Marco legal de emprendimiento" en la página
oficial y "Marco legal del emprendimiento" en el SFMC; se usó la del SFMC, que
es la fuente indicada para el plan.

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `c24961e9-cc41-488e-952c-7a4f3cd6bc3e.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `f4baa30c-6318-4023-a0a4-eea3c1b24670.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
