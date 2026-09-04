# Licenciatura en Enfermería — Profesional

Decimoquinta landing del **template Profesional**. Pertenece al **grupo de
salud** (Psicología, Nutrición) pero con varias particularidades propias.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-enfermeria
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/3difxwncz03
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-enfermeria`

## Particularidades de esta carrera
1. **Campus: solo LAS TORRES.** El formulario oficial únicamente ofrece ese
   campus (las demás LP listan ~40), y así se dejó el select.
2. **Plan de estudios en formato de lista con 8 materias por semestre** (las
   otras de salud traen 7). Usa la variante `plan-sem__title--solid` +
   `.plan-list` del CSS del nivel.
3. **Sin CESIVS:** la tarjeta lima usa el **respaldo de TecSalud**, con el texto
   oficial.
4. **Sin video.** Se indicó "No aplica", así que la banda teal se muestra **sin
   reproductor**: es la sección oficial "Con nuestra Licenciatura en Enfermería
   podrás contar con:" con sus 3 puntos y el botón "¡Me interesa!". Para esto se
   agregó al CSS del nivel la variante `.voices--text` (una columna, sin video).
5. **Sin perfil de ingreso/egreso.** No existe en la oficial y se indicó "No
   aplica" para su foto.
6. **Idioma:** "Español / Inglés".

## Contenido derivado o redactado (confirmar con Marketing)
La oficial no tiene módulo de certificados con toggle, pero sí se pidió foto
para "Certificados y ruta de enfoque", así que el módulo se mantuvo:
- **Certificados (pestaña):** las certificaciones que la propia página menciona
  (RCP avanzado, cuidados paliativos, teleenfermería, simulación de alta
  fidelidad, comunicación asertiva y ética aplicada); **las descripciones se
  redactaron**.
- **Rutas de enfoque (pestaña):** derivadas del plan, agrupando materias por
  área (materno infantil y pediátrica; médico quirúrgica y adulto crítico;
  salud mental y geriatría; salud pública, gestión e investigación).
- **Preguntas frecuentes:** la oficial no trae FAQ; las 3 preguntas se
  redactaron con información de la propia página (prácticas, TecSalud, campus
  Las Torres).

Correcciones ortográficas tomadas de la fuente: "Estadísitca" → "Estadística",
"Pisquiatría" → "Psiquiatría", "enfermeria" → "enfermería" (acentos).

## Contenido: solo lo que trae la página oficial
Esta LP **no lleva** perfil de ingreso/egreso, preguntas frecuentes ni un
módulo de "Certificados y Ruta de enfoque" con descripciones: la página
oficial no los tiene y no se rellenan huecos con texto redactado.

Lo que se retiró (agosto 2026, a petición de Marketing):
- El módulo de **Preguntas frecuentes** completo.
- El módulo de **Certificados y Ruta de enfoque** entero: la oficial no lo
  tiene. Sus certificados (RCP avanzado, cuidados paliativos…) estaban
  derivados de un párrafo, no eran una lista oficial.
- El botón **"Descarga el folleto"**: la oficial de Enfermería no lo ofrece.
- El título "Respaldo de TecSalud" de la tarjeta lima (el texto sí es oficial).

**Pendiente de Marketing:** la oficial muestra el texto de TecSalud dentro de
un módulo de video que aquí no existe (se confirmó que Enfermería no lleva
video). El texto está en la tarjeta lima del módulo 3.

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `86e4c40c-cc17-4610-bb67-405b3418f0b4.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `99197184-26af-4f20-9615-3e9a71fa66c2.png`
- Foto de certificados: `dbc22c2c-aa65-41a7-b59b-609745f94107.png`
- Iconos de datos: los mismos del template. Sin foto de perfil ni de video.

Logo y redes son locales en `assets/images/`.
