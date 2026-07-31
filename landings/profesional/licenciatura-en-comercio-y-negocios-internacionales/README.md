# Licenciatura en Comercio y Negocios Internacionales — Profesional

Undécima landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-comercio-y-negocios-internacionales
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/o3pdmczcixm
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-comercio-y-negocios-internacionales`

## Contenido
La página oficial trae todos los módulos del template, así que **el contenido
es oficial**:

- Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35).
- "¿Qué hace un(a) licenciado(a) en Comercio y Negocios Internacionales?"
  (2 párrafos).
- **Plan de estudios** del SFMC (8 semestres, SEDi 1-14, Certificados de inglés
  1-7, Skilling en veranos, Estancia Empresarial en 8º).
- **Certificados** por semestre (Primer a Quinto) y **2 rutas de enfoque**:
  Negocios internacionales · Logística y cadena de suministro.
- Beneficios, Voces, perfil de ingreso/egreso (3 párrafos), FAQ (3 preguntas,
  la segunda con 2 párrafos) y CTA final.

Notas:
- Se corrigió la errata "Estrategías" del SFMC → **"Estrategias para el
  comercio global"**.
- El título de la ruta se normalizó a **"Negocios internacionales"**; la
  oficial la escribe como "Negocio internacionales".

Única adición del template que no está en la oficial: la tarjeta
**"¿Cuánto dura la carrera?"** (viene del Figma, mismo texto que las demás LP).

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `e7b7182c-f858-434e-b1d2-8ce953723d7a.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `470c4a79-27c0-407d-808d-797cda761843.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
