# Ingeniería en Logística y Cadena de Suministro — Profesional

Duodécima landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/ingenieria-en-logistica-y-cadena-de-suministro
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/ju1yl41svbb
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-ingenieria-en-logistica-y-cadena-de-suministro`

## Contenido
La página oficial trae todos los módulos del template, así que **el contenido
es oficial**:

- Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35).
- "¿Qué hace un(a) Ingeniero(a) en Logística y Cadena de Suministro?"
  (2 párrafos).
- **Plan de estudios** del SFMC (8 semestres, SEDi 1-14, Certificados de inglés
  1-7, Skilling en veranos, Estancia Empresarial en 8º).
- **Certificados** por semestre (Primer a Quinto) y **3 rutas de enfoque**:
  Gestión de riesgos en mercados internacionales · Innovación y logística
  inteligente · Planeación de materiales y gestión de almacenes.
- Beneficios, Voces, perfil de ingreso/egreso (3 párrafos), FAQ (3 preguntas)
  y CTA final.

## Corrección al plan del SFMC (importante)
El SFMC **duplica** "Probabilidad y estadística para ciencia de datos" en los
dos bloques del **2º semestre**. Según la página oficial y el certificado de
ese semestre, la primera celda corresponde a **"Fundamentos de logística y
cadena de suministro"**, y así se capturó. Conviene avisar a Marketing para
que corrijan el SFMC.

Nota: el toggle de la oficial dice "Ruta de enfoque" (singular) aunque lista 3
rutas; aquí se conserva "Rutas de enfoque" del template.

Única adición del template que no está en la oficial: la tarjeta
**"¿Cuánto dura la carrera?"** (viene del Figma, mismo texto que las demás LP).

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `c97b7229-103b-4b33-a153-aec962c6077a.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `d641d7eb-705c-4fa6-b623-ae9f6aefab00.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
