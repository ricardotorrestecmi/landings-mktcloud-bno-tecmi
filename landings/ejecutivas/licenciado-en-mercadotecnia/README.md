# Licenciatura en Mercadotecnia — Carrera Ejecutiva

| Dato | Valor |
| --- | --- |
| Contenido | `https://universidad.tecmilenio.mx/licenciado-en-mercadotecnia` |
| Estructura | Figma `3.0 Carreras Ejecutivas Por programa` |
| Plantilla | **la misma de Profesional** (`tpl-profesional`) |

## Validada contra el Figma 3.0

Se construyó primero sin el Figma (el plugin estaba desconectado) y después se revisó contra
el frame `1:562` del nodo `1:21`. El orden de los módulos coincide. Salieron dos ajustes, ya
aplicados:

- La caja verde claro del módulo de intro es **"¿Cuánto dura la carrera?"**, no el segundo
  párrafo de la carrera. Ese párrafo pasó a la caja oscura, que en el Figma lleva dos.
- El módulo de certificados **sí lleva foto** (`4676c614`), que estaba en el panel de assets
  del Figma.

Es gemela de `ingeniero-industrial`: las dos salen del mismo generador.

## Secciones (el orden es el de la página viva)

1. **Hero + formulario** — H1, bajada oficial, badge "Está en ti".
2. **Franja de datos** — Formato · Connect online, Plan · Bimestral,
   Duración · 15 Bimestres (3 años), Idioma · 65% Español / 35% Inglés.
3. **¿Qué hace un(a) licenciado(a) en mercadotecnia?** — caja verde oscuro con el primer
   párrafo y el folleto, foto, y caja verde claro con el segundo párrafo.
4. **Plan de estudios** — los 15 bimestres, en tres pestañas de año.
5. **Un formato que se adapta a ti** — Connect Online + foto.
6. **Potencializa tu carrera con Certificados** — las 4 rutas de enfoque en acordeón.
7. **En Universidad Tecmilenio contarás con:** — 6 tarjetas.
8. **CTA final.**

## El plan de estudios

La página viva muestra los 15 bimestres de golpe, en una rejilla de 4 columnas con tipografía
de 8 px, y en móvil los convierte en carrusel con flechas. Aquí se reusó el módulo de plan de
la plantilla de Profesional (`.plan-sem`), que ya existe en el CSS compartido y ya tiene su JS:

- **Tres pestañas de año**, cinco bimestres cada una, dos por fila en escritorio.
- En móvil las pestañas se vuelven un `<select>` y las tarjetas se apilan. Sin carrusel y sin
  JS nuevo.

Cada bimestre es una tarjeta: bloque de 8 semanas con sus dos materias, el SEDI de 1 semana
al costado, y la barra de "Vivencia y bienestar / Acompañamiento". El 15º sólo lleva
**Estancia Empresarial**.

## Lo que hay que revisar con Marketing

1. **El 9º bimestre trae tres materias y las otras catorce traen dos.** En HubSpot eso está
   escrito como un `<p>` metido dentro del chip de "Distribución de la Oferta de Valor", que
   es un error de captura, no un diseño. Aquí se maquetó como tres chips. Falta saber si de
   verdad son tres materias o si "Creación de Contenidos y Storytelling" va en otro bimestre.
2. **"Comunicación de la Oferta de Valor" aparece dos veces**, en el 9º y en el 10º. Se
   replicó tal cual está en la página viva, pero parece repetición.
3. **El botón "Descarga el folleto" y "Descargar plan" apuntan al mismo PDF**
   (`Folleto Licenciatura en Mercadotecnia y Publicidad.pdf`), igual que en la página viva.
4. **Formulario**: es réplica estática y no envía. Ver `integrations/hubspot-form.md`.

## CSS

Carga `../../css/profesional/styles.css`, como las otras dos ejecutivas. Se le agregaron al
final cuatro reglas, todas con nombre propio y sin tocar nada existente:

- `.plan-sem__grid--bimestre` — un solo bloque por tarjeta, en vez de los dos del semestre.
  Lleva `grid-auto-rows: 1fr` para que el 9º bimestre, que tiene una materia de más, no
  descuadre las filas.
- `.plan-block--estancia` — la tarjeta del 15º.
- `.plan-download` — el botón centrado bajo el plan.
- `.lp-ejecutiva-programa` — las dos columnas del plan en escritorio.

Ninguna regla previa se modificó, así que las landings de Profesional y las dos ejecutivas
anteriores quedan igual (se verificó en el navegador).
