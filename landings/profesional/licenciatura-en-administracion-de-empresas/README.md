# Licenciatura en Administración de Empresas — Profesional

Sexta landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-administracion-de-empresas
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/abmcmdspgfd
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-administracion-de-empresas`

## Contenido
La página oficial trae todos los módulos del template, así que **el contenido
es oficial**:

- Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35).
- "¿Qué hace un(a) licenciado(a) en Administración de Empresas?" (2 párrafos).
- **Plan de estudios** del SFMC (8 semestres, SEDi 1-14, Certificados de inglés
  1-7, Skilling en veranos, Estancia Empresarial en 8º).
- **Certificados** por semestre (Primer a Quinto) y **4 rutas de enfoque**:
  Turismo · Liderazgo e innovación · Gestión de ventas estratégicas · Gestión
  del capital humano.
- Beneficios, Voces, perfil de ingreso/egreso, FAQ (3 preguntas) y CTA final.

Nota: el módulo de perfiles usa los títulos de la oficial, "Perfil de Ingreso"
y **"Perfil de Egreso"** (sin "y Campo Laboral", a diferencia de otras LP).

Única adición del template que no está en la oficial: la tarjeta
**"¿Cuánto dura la carrera?"** (viene del Figma, mismo texto que las demás LP).

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).
- **Fotos por confirmar:** el banner y la foto de "¿Qué hace un…?" son las
  mismas que se usaron en la LP de Derecho (`4d3b8bac…` y `22f6dfce…`), tal
  como se indicaron. Confirmar con Marketing si existen imágenes propias para
  esta carrera.

## Assets (CDN admisiones)
- Banner: `4d3b8bac-cb91-4316-893c-604aae5e5b16.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `22f6dfce-e1a4-42a1-a96f-2a8f2547a006.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
