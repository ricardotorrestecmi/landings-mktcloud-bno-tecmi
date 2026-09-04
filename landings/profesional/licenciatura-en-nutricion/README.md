# Licenciatura en Nutrición — Profesional

Decimocuarta landing del **template Profesional**. Pertenece al **grupo de
salud** junto con Psicología: misma estructura y mismas particularidades.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-nutricion
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/gdajl1dvp25
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-nutricion`

## Particularidades (iguales a Psicología)
1. **Plan de estudios en formato de lista.** 7 materias por semestre, sin
   bloques de 8 semanas / SEDi / Verano. Usa la variante del CSS del nivel
   `plan-sem__title--solid` + `.plan-list`, ya creada para Psicología.
2. **Idioma:** "Español / Inglés", sin los porcentajes 65/35.
3. **Sin perfil de ingreso/egreso.** La oficial no lo trae y se indicó "No
   aplica" para su foto, así que el módulo se omitió.
4. **Tarjeta lima del módulo 3:** **CESIVS**, con el texto oficial.
5. **Módulo de video:** título "La Licenciatura en Nutrición te espera" (el de
   la oficial), con la misma imagen que Psicología.

## Contenido derivado o redactado (confirmar con Marketing)
- **Certificados (pestaña):** los **9 oficiales** (Nutrición y deporte, Gestión
  en salud, Tecnologías aplicadas en salud, Nutrición en geriatría,
  Sustentabilidad alimentaria, Nutrición y alimentos funcionales, Tendencias
  contemporáneas en nutrición, Innovación en salud, Terapias complementarias en
  salud). La oficial solo lista los nombres; **las descripciones se redactaron**.
- **Rutas de enfoque (pestaña):** la oficial no tiene rutas. Se armaron las 4
  áreas que menciona el propio hero —inicial, avanzada, especializada y
  corporativa— agrupando las materias del plan que corresponden a cada una.
- **Preguntas frecuentes:** la oficial no trae FAQ; las 3 preguntas se
  redactaron con información de la propia página (prácticas, CESIVS, campus).

Nota: se escribió "Interacción fármaco-nutrimento" (la fuente la escribe junta,
"fármaconutrimento").

## Contenido: solo lo que trae la página oficial
Esta LP **no lleva** perfil de ingreso/egreso, preguntas frecuentes ni un
módulo de "Certificados y Ruta de enfoque" con descripciones: la página
oficial no los tiene y no se rellenan huecos con texto redactado.

Lo que se retiró (agosto 2026, a petición de Marketing):
- El módulo de **Preguntas frecuentes** completo.
- El toggle "Certificados / Rutas de enfoque" y la descripción de cada
  certificado. Ahora es la lista de 9 nombres de la oficial, bajo el título
  "Potencializa tu carrera con Certificados".
- El párrafo del módulo de video (la oficial solo lleva el título y el CTA).
- El título de la tarjeta lima (el texto del CESIVS sí es oficial).

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video** del módulo "La Licenciatura en Nutrición te espera" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `0bbf3240-9e72-4fe5-8fb5-ca99e0052771.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `3594b700-2d80-45a0-b4f7-841c82c65aa8.jpg`
- Imagen del video: `ab8b9ae6-186f-4c5b-a0fd-f13f32b1dea8.jpg` (compartida con Psicología)
- Iconos de datos y foto de certificados: los mismos del template.

Logo y redes son locales en `assets/images/`.
