# Licenciatura en Contabilidad y Estrategia Financiera — Profesional

Novena landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-contabilidad-y-estrategia-financiera
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/fwu3dfr5ux4
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-contabilidad-y-estrategia-financiera`

## Contenido
La página oficial trae todos los módulos del template, así que **el contenido
es oficial**:

- Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35).
- "¿Qué hace un(a) licenciado(a) en Contabilidad y Estrategia Financiera?"
  (2 párrafos).
- **Plan de estudios** del SFMC (8 semestres, SEDi 1-14, Certificados de inglés
  1-7, Skilling en veranos, Estancia Empresarial en 8º).
- **Certificados** por semestre (Primer a Quinto) y **2 rutas de enfoque**:
  Inversiones · Contabilidad y derecho.
- Beneficios, Voces, perfil de ingreso/egreso, FAQ (3 preguntas) y CTA final.

Notas:
- El módulo de perfiles usa los títulos de la oficial, "Perfil de Ingreso" y
  **"Perfil de Egreso"** (sin "y Campo Laboral"), igual que en Administración
  de Empresas.
- En el acordeón de certificados se normalizaron los títulos de los semestres
  ("Segundo semestre", "Cuarto semestre"); la oficial los escribe de forma
  inconsistente ("Segundo Semestre", "Cuatro semestre").

Única adición del template que no está en la oficial: la tarjeta
**"¿Cuánto dura la carrera?"** (viene del Figma, mismo texto que las demás LP).

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `cb7dd891-41f1-4c15-a4da-e9fbd3a8e383.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `6d45c868-8ced-4be6-b2a9-42a3e31c0fac.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
