# Licenciatura en Psicología — Profesional

Decimotercera landing del **template Profesional**. Es la carrera que **más se
aparta del template**: su plan de estudios y su módulo de certificados tienen
otro formato, y no trae perfil de ingreso/egreso.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-psicologia
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/c0bs4s4a34v
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-psicologia`

## Diferencias respecto a las demás LP del nivel
1. **Plan de estudios con otro formato.** No usa bloques de 8 semanas / SEDi /
   Verano / Vivencia. Cada semestre es una lista de 7 materias. Se agregó al CSS
   del nivel la variante `plan-sem__title--solid` + `.plan-list`
   (título de semestre en verde oscuro y materias en 2 columnas, la última a
   todo el ancho), replicando el SFMC de esta carrera.
2. **Idioma:** "Español / Inglés", sin los porcentajes 65/35 de las demás.
3. **Sin perfil de ingreso/egreso.** La oficial no lo trae y se indicó "No
   aplica" para su foto, así que el módulo se omitió.
4. **Tarjeta lima del módulo 3:** en vez de "¿Cuánto dura la carrera?" se usa
   **CESIVS**, con el texto oficial del centro de simulación.
5. **Módulo de video:** título "Estudia la Licenciatura en Psicología" (el de la
   oficial) en vez de "Voces de nuestros estudiantes", con su propia imagen.

## Contenido derivado o redactado (confirmar con Marketing)
- **Certificados (pestaña):** los 6 oficiales (Gestión del Talento Humano,
  Tendencias en la Educación, Psicología Deportiva, Psicología de Trastornos,
  Psicología Jurídica y Forense, Innovación en Salud). La oficial solo lista los
  nombres; **las descripciones de cada uno se redactaron**.
- **Rutas de enfoque (pestaña):** la oficial no tiene rutas. Se armaron las 4
  áreas que menciona el propio hero —educativa, social, organizacional y
  clínica— agrupando las materias del plan que corresponden a cada una.
- **Preguntas frecuentes:** la oficial no trae FAQ; las 3 preguntas se
  redactaron con información de la propia página (prácticas, CESIVS, campus).

Correcciones ortográficas tomadas de la fuente: "congnitiva" → "cognitiva",
"Prática" → "Práctica".

## Contenido: solo lo que trae la página oficial
Esta LP **no lleva** perfil de ingreso/egreso, preguntas frecuentes ni un
módulo de "Certificados y Ruta de enfoque" con descripciones: la página
oficial no los tiene y no se rellenan huecos con texto redactado.

Lo que se retiró (agosto 2026, a petición de Marketing):
- El módulo de **Preguntas frecuentes** completo.
- El toggle "Certificados / Rutas de enfoque" y la descripción de cada
  certificado. Ahora es la lista de nombres de la oficial, bajo el título
  "Potencializa tu carrera con certificados".
- El párrafo del módulo de video (la oficial solo lleva el título y el CTA).
- El título "CESIVS" de la tarjeta lima (el texto sí es oficial).

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video** del módulo "Estudia la Licenciatura en Psicología" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `0b6506a0-1088-4b7b-8a2f-d1804464add1.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `a626acee-9761-417a-8219-c4cd048ae92d.jpg`
- Imagen del video: `ab8b9ae6-186f-4c5b-a0fd-f13f32b1dea8.jpg` (propia de esta LP)
- Iconos de datos y foto de certificados: los mismos del template.

Logo y redes son locales en `assets/images/`.
