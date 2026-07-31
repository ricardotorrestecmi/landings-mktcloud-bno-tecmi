# Licenciatura en Mercadotecnia — Profesional

Segunda landing del **template Profesional**. Misma estructura y CSS que
`licenciatura-en-diseno-grafico-animacion`; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-mercadotecnia
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/zl1e2b2g5wg
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-mercadotecnia`

## Contenido oficial (tal cual la página de referencia)
Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35),
"¿Qué hace un(a) licenciado(a) en Mercadotecnia?" (2 párrafos), beneficios,
Voces de nuestros estudiantes y CTA final.

**Plan de estudios:** replicado del SFMC de Mercadotecnia (8 semestres,
SEDi 1-14, Certificados de inglés 1-7, Skilling en veranos, Estancia
Empresarial en 8º).

**Rutas de enfoque** (4, oficiales con sus temas): Gestión de ventas
estratégicas · Inteligencia de mercados · Estrategias de mercadotecnia en
buscadores y comercio electrónico · Estrategia publicitaria.

## Diferencias con la página oficial (decisiones acordadas)
La LP oficial de Mercadotecnia NO tiene perfil de ingreso/egreso, FAQ,
certificados por semestre ni la tarjeta "¿Cuánto dura la carrera?". Se
mantuvieron para conservar la estructura del template:

- **Certificados (pestaña del toggle):** lista por semestre **derivada del plan
  de estudios** (materias de los semestres 1-5). No viene explícita en la
  oficial → confirmar con Marketing.
- **Perfil de Ingreso / Egreso:** redactado a partir de la información de la
  carrera → confirmar con Marketing.
- **Preguntas frecuentes:** P1 y P3 son el texto genérico de Tecmilenio; P2
  redactada para Mercadotecnia → confirmar con Marketing.
- **"¿Cuánto dura la carrera?":** tarjeta del Figma, mismo texto que la LP de
  Diseño Gráfico.

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `7c92f377-aa69-4f5a-b1ed-c273f85f2889.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `0a9f8102-da8c-49cd-80ac-702ef21bd1eb.png`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
