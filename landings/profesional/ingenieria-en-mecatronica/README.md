# Ingeniería en Mecatrónica — Profesional

Cuarta landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/ingenieria-en-mecatronica
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/0dmwijuqe1x
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-ingenieria-en-mecatronica`

## Contenido oficial (tal cual la página de referencia)
Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35),
"¿Qué hace un(a) Ingeniero(a) en Mecatrónica?" (2 párrafos), beneficios,
Voces de nuestros estudiantes y CTA final.

**Plan de estudios:** replicado del SFMC de Mecatrónica (8 semestres,
SEDi 1-14, Certificados de inglés 1-7, Skilling en veranos, Estancia
Empresarial en 8º).

**Rutas de enfoque** (7, oficiales con sus temas): Mecatrónica Avanzada ·
Automatización Industrial · Semiconductores y Micro Manufactura · Sistemas de
control · Vehículos autónomos · Inteligencia Artificial · Diseño de procesos
sostenibles de manufactura.

## Diferencias con la página oficial (mismo criterio que Mercadotecnia)
La LP oficial de Mecatrónica NO tiene perfil de ingreso/egreso, FAQ,
certificados por semestre ni la tarjeta "¿Cuánto dura la carrera?". Se
mantuvieron para conservar la estructura del template:

- **Certificados (pestaña del toggle):** lista por semestre **derivada del plan
  de estudios** (materias de los semestres 1-5) → confirmar con Marketing.
- **Perfil de Ingreso / Egreso:** redactado a partir de la información de la
  carrera → confirmar con Marketing.
- **Preguntas frecuentes:** P1 y P3 son el texto genérico de Tecmilenio; P2
  redactada para Mecatrónica → confirmar con Marketing.
- **"¿Cuánto dura la carrera?":** tarjeta del Figma, mismo texto que las demás LP.

Correcciones menores de ortografía tomadas de la fuente: "manufacura" →
"manufactura", "finíto" → "finito", "automotríz" → "automotriz".

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `695db0ff-52d7-4814-8050-77ec926f827f.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `148fe501-9b12-4e1a-affe-c406293e0a4e.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
