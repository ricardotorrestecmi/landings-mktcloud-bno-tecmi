# Nueva Prepa — Preparatoria Tecmilenio (Ago26)

Réplica estática de la página nueva de Preparatoria, la que Marketing tiene en HubSpot como
borrador para pasar a Salesforce Marketing Cloud.

| Dato | Valor |
| --- | --- |
| Origen | `https://universidad.tecmilenio.mx/preparatoria-tecmilenio-2-2?hs_preview=JshOhhrZ-221139809378` |
| Page ID | `221139809378` |
| Plantilla en HubSpot | `Prepa Tailwind - Ago26` (`/Módulos Tailwind 2023/Prepa/`) |
| Portal | `2429099` |
| Canonical de la fuente | `/preparatoria` |

No confundir con `landings/preparatoria/preparatoria/`: esa es la página **actual**, con
otro diseño. Ésta es el rediseño.

## Cómo se construyó

A diferencia de las landings anteriores, aquí el marcado de HubSpot ya es Tailwind limpio y
modular, así que no se remaquetó desde cero: se partió del HTML que sirve la página y se
localizó. En concreto:

1. Se quitaron los envoltorios del CMS (`hs_cos_wrapper_*`) y las clases `widget_<id>`, que
   ningún CSS usa.
2. Las 29 imágenes se bajaron a `assets/`. De cada `srcset` se tomó la variante 2x, así que
   se ven nítidas en pantallas retina y el `srcset` deja de hacer falta.
3. Los ids del acordeón pasaron de `widget_1787669940692-cert-N` a `cert-N`.
4. El embed del formulario se sustituyó por una réplica estática (ver
   `integrations/hubspot-form.md`).

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | La página. |
| `preflight.css` | La capa base de Tailwind v3.3.1, recortada de `template_style.css`. |
| `styles.css` | Copia literal de `template_prepa-ago26.min.css`, el build de la plantilla. |
| `script.js` | Los dos `module.js` de HubSpot (acordeón y carrusel) más el submit de la réplica. |
| `reference/` | El HTML original tal cual se descargó. |

### Por qué hay dos hojas de estilo

`styles.css` está **acotado a `.prepa26`** y da por hecho que existe un reset global, que en
HubSpot venía de `template_style.css` (un Tailwind sin acotar, del tema). Sin él:

- `.border-b` no pinta nada, porque el `border-style` por defecto es `none`, y el acordeón
  de certificaciones se queda sin separadores.
- el `<button>` del acordeón conserva el padding de 1px del navegador y cada fila crece 2px.

Por eso se copió **sólo la capa base** de ese archivo a `preflight.css`. Las utilidades y los
componentes del tema (`.btn`, `.container`, estilos globales de títulos…) se quedaron fuera a
propósito: esta landing no los usa y chocarían con el módulo.

El único hueco que quedó es `.mb-6`, que es una utilidad del tema y no de la plantilla; va en
el `<style>` del `<head>`, junto con el CSS propio que la página tenía en su `<head>`.

## Fidelidad verificada

Midiendo el alto de cada sección contra la página viva:

| Sección | 1440 | 768 | 390 |
| --- | --- | --- | --- |
| programas, ventajas, certificaciones, perfil de logros, rutas, acompañamiento, escuela de familias, CTA final | idéntico | idéntico | idéntico |
| hero (`#recibe-informacion`) | −80 px | −72 px | −178 px |

La diferencia del hero es el widget de reCAPTCHA, que la réplica no monta. Es la única.

Sin scroll horizontal a 390, 768 ni 1440. El acordeón y el carrusel (flechas y puntos) se
comportan igual que en el original; el JS es el mismo de HubSpot.

## El módulo de ubicaciones no viene de HubSpot, viene del Figma

`#ubicaciones` ("¿Cuáles son las ubicaciones que tenemos en Ciudad de México?") es la
única sección de esta landing que **no** está en la página de HubSpot. Sí está en el Figma
`Plantilla Preparatoria (Copy)`, en el nodo `187:736`, entre "Certificaciones que impulsan
tu futuro" y "Al graduarte…", que es donde se colocó aquí.

Se maquetó contra esa especificación: tarjeta de 393 px, foto de 220 px, franja `#00534c`
con 16 px de padding y 8 px entre el nombre y la dirección, nombre en Montserrat Bold 20/28
y dirección Regular 18/24, ambos en blanco y centrados, y flechas circulares de 47 px sobre
`#f5f5f5`.

En el Figma la tercera tarjeta aparece cortada, pero es el borde del frame del diseño, no
una decisión: maquetado así se leía como un error.

### Agregar o quitar campus no pide tocar nada más

El módulo decide solo si es carrusel. `script.js` mira si el track desborda y pone o quita
`ubicaciones-prepa--fijo` en la `<section>`; esa clase esconde las flechas y centra la fila.
Así que para un cuarto campus basta con **duplicar un `<li>`** y cambiarle foto, nombre y
dirección.

Caben tres a la vez: las tarjetas reparten el ancho disponible con un tope de 393 px, que es
la medida del Figma. Comprobado recargando en cada ancho:

| | 1440 | 1024 | 390 |
| --- | --- | --- | --- |
| 3 campus | 393 px, sin flechas | 317 px, sin flechas | carrusel con flechas |
| 4 campus | 361 px, carrusel | 275 px, carrusel | carrusel con flechas |

La sección arranca con `--fijo` puesto en el HTML: si el JS no corre, no quedan flechas
muertas y el track se sigue arrastrando con el dedo.

Un apunte de la verificación: el panel del navegador de esta sesión no entrega eventos
`resize` ni callbacks de `ResizeObserver`, así que el recálculo **al cambiar el tamaño de la
ventana en vivo** no se pudo comprobar aquí; lo verificado es el estado inicial en cada
ancho. Por eso van enganchados los dos mecanismos, el observer y el evento `resize`.

Las medidas propias van en el `<style>` del `<head>` porque `styles.css` es un build fijo de
la plantilla y no trae esas utilidades.

**Diferencia conocida:** los chevrons son los `chevron-left/right.svg` que ya usa la página,
en verde `#00534C`; el Figma los dibuja en `#666666`.

**Pendiente de Marketing:** las tres fotos (`campus-*.webp`) se tomaron de
`landings/preparatoria/preparatoria/`, que son las mismas del diseño. En la hoja de assets
del Figma hay una nota que dice "Las ubicaciones yo las agrego", así que faltan sus URLs de
Salesforce.

Los textos (nombres y direcciones de los tres campus) coinciden palabra por palabra entre el
Figma y la landing anterior.

## Erratas de la fuente (no se tocaron)

Están así en la página de HubSpot. Decide Marketing:

1. **El menú del header apunta a secciones que no existen.** `#que-esperar` y `#galeria` son
   anclas de la página de Open House; esta página no las tiene, así que los dos enlaces no
   hacen nada. El módulo de header es compartido y su menú no se actualizó.
2. **El selector "Programa de interés" lista los 103 programas del grupo**, incluidas
   maestrías y especialidades, en una landing de preparatoria. `validate.js` filtra campus y
   tipo de lead, pero no éste.
3. **"Selecciona un periodo" ofrece periodos ya pasados**, desde Septiembre 2024.
4. **Los enlaces del footer son `href="#"`**: las cuatro redes sociales, el aviso de
   privacidad y los términos y condiciones. (El aviso sí tiene URL real dentro del checkbox
   de privacidad del formulario.)

Sí se cambiaron dos enlaces, porque eran claramente marcador de posición y la página tiene
destino obvio: el logo del header y el CTA "¡Quiero ser Halcón!" ahora van a
`#recibe-informacion`, igual que el resto de los CTA de la página. En el original el logo iba
a la home de HubSpot y el CTA a `#`.

## Pendiente

- Bloque real de SFMC para el formulario.
- Que Marketing resuelva las cuatro erratas de arriba.
