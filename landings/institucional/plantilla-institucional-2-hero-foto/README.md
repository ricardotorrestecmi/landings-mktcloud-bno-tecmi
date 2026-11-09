# Plantilla Institucional 2.0

**Son dos landings, una por cada hero.** El Figma dibuja dos heroes y pide que sean
intercambiables, así que en vez de apilarlos en una sola página hay una LP completa
por cada uno. **Todo lo demás es idéntico entre las dos**, para que Marketing elija
sin comparar diferencias que no existen.

| Carpeta | Hero |
| --- | --- |
| `plantilla-institucional-2-hero-foto` | foto a sangre, «Obtén una Beca por tu talento» |
| `plantilla-institucional-2-hero-crema` | crema a dos columnas, «Becas al 100%» |

Este README cubre las dos. La carpeta `reference/` también.


| Dato | Valor |
| --- | --- |
| Tarea | ClickUp `86e3yu4z6` — «Plantilla Institucional 2.0 (Marketing Cloud)» |
| Diseño | Figma `Plantilla Institucional 2.0`, sección **2.0 Plantilla Institucional** (`9:32`) |
| Contenido | `universidad.tecmilenio.mx/beca-vive` y `.../direccion-de-dignidad-humana-para-tecmilenio` |
| CSS | **compartido** con la 1.0: `landings/css/institucional/styles.css` |
| Destino | Salesforce Marketing Cloud |

## Cómo convive con la 1.0

La tarea pide que los módulos de ambas plantillas se puedan intercalar. Por eso:

- El `<body>` lleva **la misma clase de familia** `.tpl-institucional` que la 1.0, más
  `.lp-inst2` para lo propio de esta página. Así hereda tokens, reset y tipografía.
- Los estilos nuevos se **añadieron al mismo `styles.css`**, al final, bajo un bloque
  rotulado. Todos los selectores nuevos llevan prefijo `.i2-`, así que **no tocan ni
  una regla de la 1.0**.
- Los tokens no se duplicaron: el Figma de la 2.0 usa exactamente la misma paleta
  (`#00534c`, `#26d07c`, `#007864`, `#f8f9fa`, `#f9f1e6`) y Montserrat.

**No se usó `landings.js`.** Igual que en la 1.0, el comportamiento va inline al final
del `index.html`: cero scripts externos, que es lo que permite montarla en Salesforce
sin cargar nada más. Si más adelante se decide extraer el JS a un archivo institucional
compartido, los dos archivos están listos para ello (misma mecánica, mismos nombres).

## Por qué el Figma no se lee de un solo sitio

El Figma trae un frame llamado `0.3.3 - Tecmilenio Institución - Landing Page - Content -
Desktop` con 14 módulos, **pero la sección carga otros cinco módulos de escritorio por
fuera de ese frame**, sueltos en el lienzo (`9:549`, `9:579`, `9:621`, `9:628`, `9:641`).
No son variantes móviles: son de 1440 px. Están incluidos.

Además hay una columna de 320 px con las versiones móviles, y **cuatro módulos que sólo
existen ahí**, sin equivalente de escritorio dibujado:

| Nodo | Módulo sólo en móvil |
| --- | --- |
| `9:721` | Conoce el testimonio de Valeria — video + «Leer más» |
| `9:793` | ¿Tienes un proyecto de Robótica, Programación, Ciencia o Tecnología? |
| `9:826` | Beneficios — formación socioemocional, éxito académico |
| `9:860` | Tarjetas de blog — «Motivadores Mexicanos Famosos…» |

**Esos cuatro no se construyeron**, porque maquetarlos pediría inventar un diseño de
escritorio que el Figma no dibuja. Es decisión de Marketing si se quieren.

## Los 19 módulos

| # | Módulo | Origen del texto |
| --- | --- | --- |
| 1 | Header | Figma |
| 2 | **Hero A** — foto a sangre, sello de interculturalidad + «Obtén una Beca por tu talento» | beca-vive |
| 3 | **Hero B** — crema, «Becas al 100%» | Figma |
| 4 | Conoce nuestras becas — 7 pastillas + panel + foto | Figma / beca-vive |
| 5 | Principales Beneficios Beca VIVE — oscuro | beca-vive |
| 6 | Requisitos y pasos | beca-vive |
| 7 | Servicios Tecmicare — 5 tarjetas | Figma |
| 8 | ¿Listo para la aventura? — 4 paquetes | Figma |
| 9 | Folletos — 2 tarjetas grandes | Figma |
| 10 | Revive lo mejor de nuestros eventos — carrusel de guías | Dignidad Humana |
| 11 | Diseña tu Tecmilenio — video | Figma |
| 12 | Compromisos HeForShe — 3 videos | Dignidad Humana |
| 13 | Solicita información — formulario | Figma |
| 14 | Footer | Figma |
| 15 | ¿De qué se trata esta convocatoria? — banda verde | Figma `9:621` |
| 16 | Conoce nuestros beneficios para ti — acordeón + foto | Figma `9:549` |
| 17 | Tips para tu salud — 4 pestañas + panel | Figma `9:579` |
| 18 | Plan de Estudios — 5 temas | Figma `9:641` |
| 19 | ¿Tienes dudas? Estamos para ayudarte — banda con CTA | Figma `9:628` |

Los cinco últimos son los que viven fuera del frame. En la página se colocaron donde
encajan temáticamente; cada uno lleva su nodo del Figma en un comentario del HTML, así
que Marketing puede reordenarlos sin buscarlos.

**Los dos heroes están desarrollados**, como pide la tarea: son módulos independientes
e intercambiables, no una elección.

## Las imágenes

Vienen del Figma y **ya están en el CDN de Salesforce** (`image.admisiones.tecmilenio.mx`),
así que no hay nada que migrar.

El emparejamiento foto↔beca **no se dedujo del orden del árbol del Figma**, que está
desordenado, sino del orden visual de las anotaciones bajo la etiqueta «Fotos de Becas
en orden desde Merito academico hasta Convenio empresarial». El resultado encaja
semánticamente en los siete casos:

| Beca | Imagen | Qué se ve |
| --- | --- | --- |
| Mérito Académico | `220f42f2` | dos estudiantes estudiando |
| VIVE | `031d7af8` | estudiante con jersey deportivo |
| Socioeconómica | `babd8b5b` | estudiante con laptop |
| STEAM | `4853900f` | estudiante con un proyecto de robótica |
| con Propósito | `48234dcb` | estudiante con celular |
| Préstamos Educativos | `842c298a` | familia revisando un folleto |
| Convenios Empresariales | `1a7817a5` | dos personas en oficina |

El **sello de interculturalidad** del hero no es una foto: es el nodo `Capa_1` (`9:235`)
del Figma, exportado como SVG a `assets/logo-interculturalidad.svg`. Va arriba a la
izquierda, alineado con el titular.

Las fotos que trae incrustadas el diseño del Figma son **de archivo, no las definitivas**:
se comprobó descargando ambas colecciones y comparándolas. Las únicas que sí coinciden
exactamente son las portadas de guías y las miniaturas de HeForShe.

## Las fotos que elegí yo, y hay que confirmar

De las 19 imágenes del CDN, el Figma sólo deja claro dónde van 13: las **7 de becas**
(bajo su etiqueta de orden), las **3 portadas de guías** y las **2 miniaturas de
HeForShe** —éstas cinco comprobadas comparándolas una a una con lo que el diseño trae
incrustado—, más el **gráfico de violencia de género**.

Los demás huecos **no tienen foto asignada en el Figma**: lo que ahí se ve son fotos de
archivo que no están en el CDN. Ésas las elegí yo y van marcadas en el HTML con un
comentario `FOTO PRESTADA`, para que se vean al editar:

| Hueco | Foto puesta | Por qué |
| --- | --- | --- |
| Hero de foto | `cf547964` fútbol | la LP va de becas deportivas |
| Hero crema | `a0e12d29` porrista | ídem, y es vertical como pide el hueco |
| Requisitos | `6bb581c4` Halcones grupo | equipos representativos |
| Beneficios Beca VIVE | `f1c1b9c9` ARTFEST | la beca cubre arte y cultura |
| Beneficios para ti | `1435946f` grupo con lanyards | colaboradores |
| Paquetes (4) | prestadas de becas | **no alcanzan las imágenes** |
| Folletos (2) | `1ffbd538`, `babd8b5b` | una prestada de becas |
| HeForShe, 3ª tarjeta | repite `45ff575f` | el Figma trae 2 miniaturas para 3 tarjetas |

Cada versión gasta una de las dos fotos deportivas en su hero y deja la otra libre:
`hero-foto` no usa la porrista, `hero-crema` no usa la del fútbol.

### Una duda sobre el orden del Figma

La foto de la **Beca VIVE** (`031d7af8`) es una chica con taladro y jersey de equipo de
robótica —se le ve el logo de un átomo y la palabra QUANTUM—. Por contenido encajaría
en **STEAM**, pero el orden de las anotaciones la pone en VIVE, que es deportes, arte y
liderazgo. Es el único de los siete pares que no cuadra. Conviene preguntarlo.

## El texto de relleno queda a la vista, marcado

Los módulos que en el Figma llevan Lorem Ipsum **lo llevan también aquí**, para que la
plantilla se vea igual que el diseño al revisarla. No está escondido: cada bloque va
precedido de este comentario en el HTML, 15 en total por versión:

```html
<!-- TEXTO DE RELLENO: es el Lorem Ipsum del Figma. Pendiente del copy de Marketing. -->
```

Son: el panel de *Tips para tu salud* (5 viñetas), 4 de las 5 tarjetas de *Tecmicare*
—la de hospitales trae su propio texto—, las 5 de *Plan de Estudios*, *Diseña tu
Tecmilenio* y el intro del formulario. **Buscar ese comentario da la lista completa de
lo que hay que reemplazar.**

Los únicos huecos que siguen en blanco son los que **no tienen texto de ningún tipo en
el Figma**: los paneles de Beca Mérito Académico, STEAM, con Propósito, Préstamos
Educativos y Convenios Empresariales, y el acordeón de «Beneficios para miembros y
colaboradores». Ahí no hay nada que copiar.

## Lo que falta de Marketing

1. **Copy de 5 de las 7 becas.** El Figma sólo trae el panel de *Socioeconómica*, y
   *VIVE* se armó con el contenido de beca-vive. Quedan sin texto: Mérito Académico,
   STEAM, con Propósito, Préstamos Educativos y Convenios Empresariales. La caja está
   construida y dimensionada; es sólo rellenar.
2. **Descripciones de los 5 servicios Tecmicare.** En el Figma son Lorem Ipsum.
3. **Texto de «Diseña tu Tecmilenio»** y **el intro del formulario**: Lorem Ipsum.
4. **El titular del módulo de folletos** dice literalmente «Escribe tu titular aquí».
5. **Falta un PDF.** El Figma trae dos y el carrusel de guías tiene tres tarjetas; la
   «Guía de eventos accesibles inclusivos» quedó sin enlace de descarga.
6. **Opciones del formulario**: campus, programa y periodo están vacíos, y falta el
   form id de HubSpot. Es réplica estática, no envía.

## Dos inconsistencias del Figma que conviene reportar

- **El módulo de guías se titula «Revive lo mejor de nuestros eventos»**, pero su
  contenido son las tres guías inclusivas de la página de Dignidad Humana. El título
  no corresponde al contenido.
- **El header dibuja el logo dos veces**, uno al lado del otro. Se montó con uno.

## Cotejo de tipografía contra el Figma

Se extrajo del spec el tamaño, peso y color de **los 204 nodos de texto**, agrupados por
módulo, y se comparó contra el `getComputedStyle` de los elementos equivalentes. Salió un
desfase sistemático: **el cuerpo de texto del Figma es 16 px Medium y estaba puesto a
13 px Regular** en casi toda la plantilla. Se corrigieron 35 reglas:

| Rol | Figma | Estaba |
| --- | --- | --- |
| Hero h1 | 60 Bold | 48 / 800 |
| H2 de módulo | 30 Bold | 30 / 700 ✔ |
| H2 de módulos partidos y bandas | 30 Bold | 26 / 700 |
| Cuerpo general | 16 Medium | 13 / 400 |
| Botones | 16 Bold | 14 / 600 |
| Pastillas de beca | 16 Medium | 14 / 500 |
| Título del panel de beca | 18 Bold | 17 / 700 |
| Pastillas de Tips | 16 Bold | 13 / 600 |
| Título de folleto | 25 Bold | 20 / 700 |
| Acordeón de beneficios | 18 Bold | 14 / 700 |
| Pastillas de Plan | 18 Bold | 13 / 600 |
| Texto de tarjeta HeForShe | 18 SemiBold | 13 / 600 |
| Pie de tarjeta de guía | 16 Bold | 13 / 700 |
| Campos del formulario | 12 Medium | 13 / 400 |
| Footer | 12 Bold / Medium | 11 / 600 y 400 |

Al subir el tipo, dos módulos se pasaron de alto y se reajustó su relleno: Convocatoria
y Becas. Resultado final del cotejo de alturas a 1440 px:

**Desviación media 1.5%, los 18 módulos dentro de ±4%**, total 12 207 px contra 12 352
del Figma (−1.2%).

No es un diff de píxeles —el panel del navegador escala las capturas y daría diferencias
falsas—, sino la comparación de todas las propiedades medibles: alturas, fondos,
tipografías, rejillas y radios.

## Cotejo de estructura contra el Figma

Se midió **a 1440 px, el ancho exacto del lienzo del Figma**, comparando la altura de
cada módulo renderizado contra la de su nodo. La primera versión salía entre 20% y 36%
más baja en casi todo, y Folletos un 31% más alta. Tras dos pasadas de ajuste:

| Módulo | Figma | Aquí | Dif. |
| --- | ---: | ---: | ---: |
| Header | 85 | 86 | +1% |
| Hero (los dos) | 727 | 727 | 0% |
| Convocatoria | 353 | 352 | 0% |
| Becas | 876 | 876 | 0% |
| Beneficios Beca VIVE | 464 | 448 | −3% |
| Requisitos | 598 | 594 | −1% |
| Beneficios para ti | 754 | 726 | −4% |
| Tecmicare | 902 | 882 | −2% |
| Tips para tu salud | 873 | 876 | 0% |
| Paquetes | 932 | 896 | −4% |
| Folletos | 1205 | 1191 | −1% |
| Plan de Estudios | 821 | 812 | −1% |
| Guías | 572 | 582 | +2% |
| Diseña tu Tecmilenio | 544 | 544 | 0% |
| HeForShe | 879 | 880 | 0% |
| Dudas | 424 | 424 | 0% |
| Formulario | 1018 | 983 | −3% |
| Footer | 237 | 235 | −1% |

**Desviación media: 1.9%** (era 22.7%). Los 18 módulos quedan dentro de ±4%.

### Dos rejillas que medían mal

En *Plan de Estudios* y en *Tecmicare* la última tarjeta salía de distinto ancho que sus
hermanas. Dos causas, la misma consecuencia:

- **Plan de Estudios** centraba las dos últimas con `margin-left: 50%`. Un margen en una
  celda de grid **le resta anchura**, no sólo la desplaza: salían estrechas y con el texto
  partido de más.
- **Tecmicare** daba a la quinta `grid-column: 2 / 4`, o sea dos columnas de cuatro:
  salía casi del doble de ancho.

Las dos se rehicieron con el mismo patrón: **el doble de columnas y cada tarjeta ocupa
dos**. Con el mismo `gap`, dos-de-seis mide igual que una-de-tres, y dos-de-ocho igual que
una-de-cuatro; la columna de inicio hace el desplazamiento sin tocar el ancho. Medido:
las cinco de Plan a 349 px con medio paso exacto de offset, y las cinco de Tecmicare a
259 px con la quinta centrada al píxel (centro de tarjeta 720, centro de fila 720).

Después se auditó la página entera buscando el mismo fallo: se recorrieron todas las
rejillas comparando el ancho de sus hijos y buscando márgenes dentro de celdas. **No
queda ninguno.** Las dos únicas asimetrías que salen son deliberadas y coinciden con el
Figma: la tarjeta de paquete (foto 170 + cuerpo 366) y el formulario (dos columnas con
campos que ocupan el ancho completo).

Dos arreglos de fondo salieron de aquí, los dos por la misma causa: `height: 100%` no
resuelve contra un padre que sólo tiene `min-height`, así que la imagen caía en su alto
natural y estiraba el bloque. Pasaba con la foto vertical de los folletos (446×600, que
inflaba la tarjeta a 737 px) y con la del hero crema (617×800, que lo llevaba a 934).
Las dos llevan ahora altura explícita.

También se separaron los tres módulos partidos, porque en el Figma **cada uno tiene su
propia altura de foto**: Beneficios VIVE 264 px, Requisitos 410 y Diseña tu Tecmilenio
344. Antes compartían una sola regla.

## Verificado

En navegador, a 1024 y a 375 px: los 12 `<section>` montan, 29 imágenes y ninguna rota,
**sin scroll horizontal en ninguno de los dos anchos**, cero scripts externos. Las 7
pastillas conmutan su panel (`0010000` → `0100000` → `0000001`), el carrusel de guías
avanza 267 px en móvil y sus flechas se ocultan solas en escritorio, donde las tres
tarjetas caben. La 1.0 sigue respondiendo igual: no se tocó ninguno de sus archivos.
