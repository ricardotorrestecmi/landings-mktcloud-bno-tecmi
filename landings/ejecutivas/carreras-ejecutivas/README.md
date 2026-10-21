# Carreras Ejecutivas

| Dato | Valor |
| --- | --- |
| Contenido | `https://universidad.tecmilenio.mx/carreras-ejecutivas` |
| Estructura | Figma `Carreras ejecutivas Plantilla (Copy)`, nodo `1:1120` — "3.1 Carreras Ejecutivas General" |
| Plantilla | **la misma de Profesional** (`tpl-profesional`) |

## Por qué usa el CSS de Profesional

El Figma de Carreras Ejecutivas es la plantilla de Profesional: mismo hero con formulario,
misma franja de cuatro datos, mismas pills de programa con panel, el mismo damero de "En
Universidad Tecmilenio contarás con:" y el mismo CTA final. Por eso esta landing carga
`../../css/profesional/styles.css` y lleva `tpl-profesional` en el `<body>`, en vez de
duplicar 51 KB de CSS idéntico.

La carpeta sí es independiente, con sus propios assets, como pediste.

## Secciones

1. **Hero + formulario** — H1 "Carreras Ejecutivas", bajada oficial, badge "Está en ti".
2. **Franja de datos** — Formato / Plan / Duración / Idioma.
3. **¿Qué carreras ejecutivas puedes estudiar?** — 13 pills con su panel (escuela, nombre,
   descripción y "Conoce más" a la LP de cada carrera).
4. **Un formato que se adapta a ti** — Connect Online + foto.
5. **En Universidad Tecmilenio contarás con:** — 6 tarjetas.
6. **CTA final** — "Si tienes alguna duda, escríbenos."

## De dónde salió cada cosa

El contenido es el de la página oficial, verbatim: la bajada del hero, las 13 carreras con
su escuela y su descripción, el texto de Connect Online y los 6 puntos del "contarás con".

La **estructura** es la del Figma, y en dos puntos va más allá de la página oficial:

- **La franja de datos no existe en la página viva.** Sólo está en el Figma, con estos
  valores: Formato · Connect online, Plan · Semestral, Duración · **15 Bimestres (3 años)**,
  Idioma · 65% Español / 35% Inglés. **Conviene que Marketing los confirme**, sobre todo la
  duración: esta landing cubre 13 carreras y el dato está puesto como si fuera uno solo.
- **El orden de los módulos.** La página viva trae el "¿Por qué estudiar en Tecmilenio?"
  como acordeón; el Figma lo convierte en el damero de 6 tarjetas, que es lo que se maquetó.

## Dos cosas nuevas en el CSS compartido

Se agregaron al final de `css/profesional/styles.css`, con nombres propios, sin tocar nada
existente:

- `.formato__grid` — la caja de dos columnas del módulo de formato. Es como `.intro__grid`
  pero con una sola tarjeta, así que lleva un `grid-area: auto` sobre sus hijos: tanto
  `.info-card--dark` como `.portrait-card` traen un `grid-area` del módulo INTRO que aquí no
  existe, y sin ese reset la foto se iba a su propia fila a todo lo ancho.
- `.program-panel__escuela` — el antetítulo con la escuela, como lo pide el Figma.

## Pendientes de Marketing

1. **Confirmar los 4 datos de la franja**, en especial "15 Bimestres (3 años)".
2. **El texto del CTA final.** En el Figma es Lorem Ipsum; aquí se reusó el de
   `carreras-profesionales`, que sí es texto real. Falta el definitivo.
3. **Formulario**: es réplica estática y no envía. Ver `integrations/hubspot-form.md`.
4. La foto del hero sale del panel de assets del Figma. Si no es la definitiva, se cambia.
