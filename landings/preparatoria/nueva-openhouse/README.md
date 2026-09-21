# Nueva Open House — Open House Preparatoria Tecmilenio (Ago26)

Réplica estática del Open House de Prepa con la plantilla nueva, para pasar a Salesforce
Marketing Cloud.

| Dato | Valor |
| --- | --- |
| Origen | `https://universidad.tecmilenio.mx/open-house-preparatoria-tecmilenio?hs_preview=CPaRIBDq-221312857014` |
| Page ID | `221312857014` |
| Plantilla en HubSpot | `Prepa Tailwind - Ago26` (`/Módulos Tailwind 2023/Prepa/`) |
| Portal | `2429099` |

No confundir con `landings/preparatoria/openhouse-prepa-tecmilenio/`: ésa es la versión
anterior, con otro diseño.

Se construyó igual que `nueva-prepa` (ver su README para el detalle del método y de por qué
hacen falta `preflight.css` y `styles.css`). Comparten las dos hojas, que son idénticas.

## Secciones

hero (`#open-house`) · barra del evento (`#evento`) · ¿Qué puedes esperar? (`#que-esperar`) ·
galería (`#galeria`) · video (`#video`) · registro (`#registro`) · footer.

A diferencia de `nueva-prepa`, aquí los dos enlaces del menú del header (`#que-esperar` y
`#galeria`) **sí** apuntan a secciones que existen.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `index.html` | La página. |
| `preflight.css` | Capa base de Tailwind v3.3.1, del CSS global del tema. |
| `styles.css` | Copia literal de `template_prepa-ago26.min.css`. |
| `hero-openhouse.css` | El `module.css` del módulo del hero, tal cual lo compila HubSpot. |
| `script.js` | Los `module.js` de "Qué esperar" y "Galería", más el submit de la réplica. |

## El hero en móvil se ve distinto que en la página viva, a propósito

El módulo `Prepa - Ago26 - Hero Open House TW` se actualizó el 2026-09-21 para que la imagen
de móvil sea un campo administrable: a 990 px o menos entra una ilustración vertical y se
oculta la de escritorio junto con el texto superpuesto (`hero-openhouse.css`).

La página viva **todavía conserva en su `<head>` el parche anterior**, que hacía lo mismo a
mano con `background-image` + `min-height` y que incluye
`#open-house.hero-openhouse > img { display: none !important; }`. Esa regla esconde también
la imagen nueva, así que en la página viva el hero sigue siendo un fondo recortado:

| Ancho | Página viva | Esta copia |
| --- | --- | --- |
| 768 px | 1020 px de alto, imagen recortada con `cover` | 866 px, la imagen completa |
| 390 px | 450 px de alto, imagen recortada | 440 px, la imagen completa |

Esta copia usa el comportamiento del módulo y **no** copia el parche. Para que la página de
HubSpot se vea igual, hay que borrar ese bloque `<style>` de la página.

## Fidelidad verificada

Altos de sección contra la página viva:

| Sección | 1440 | 768 | 390 |
| --- | --- | --- | --- |
| evento, qué esperar, galería, video | idéntico | idéntico | idéntico |
| hero (`#open-house`) | idéntico | +154 px | −10 px |
| registro | idéntico | −72 px | −72 px |

El hero es la diferencia explicada arriba. En `#registro` es el widget de reCAPTCHA, que la
réplica no monta. A 1440 el alto total de la página coincide exactamente: 4032 px.

Sin scroll horizontal a 390, 768 ni 1440. Las flechas de "Qué esperar" y los puntos de la
galería funcionan igual que en el original; el JS es el mismo de HubSpot. Sin errores en
consola.

## Imágenes en el CDN de Salesforce

16 de las imágenes de la página salen ya de `image.admisiones.tecmilenio.mx`: el fondo del
hero de escritorio, dos de los tres iconos de la barra, los cinco de "¿Qué puedes esperar?",
las seis de la galería, la miniatura del video y la foto del formulario.

Siguen locales, a la espera de sus URLs: el icono de ubicación, el fondo móvil del hero, los
chevrons del carrusel, el icono de play, el logo de Prepa y los cuatro iconos de redes.

Los `width`/`height` se ajustaron al tamaño real de cada archivo nuevo. Dos secciones
cambian de alto porque el recorte nuevo tiene otra proporción: el hero pasa de 723 a 727 px
y el módulo de video de 546 a 507.

Los iconos nuevos son PNG y no todos son cuadrados, mientras que las clases les fijan alto y
ancho, así que se les añadió `object-fit: contain` para que no salgan deformados.

### El orden de las URLs de "¿Qué puedes esperar?" no es el de la página

Las cinco URLs vienen ordenadas **por icono**, no por el texto al que acompañan. Aplicadas
en orden, cada icono habría quedado con la frase equivocada.

El Figma lo resuelve: el nodo `201:22` tiene un panel verde que empareja cada icono con su
frase. Se respetó ese emparejamiento, que además es el que ya tenía la página. Comprobado en
pantalla: "sociedades estudiantiles" con el icono de personas, "presupuesto intercultural"
con el del mundo, "certificaciones" con el del documento.

### La galería pasa de 5 a 6 fotos

La hoja de assets del Figma trae seis fotos, todas distintas de las que había. Se pusieron
las seis, con un punto de navegación por foto.

Se quitó el icono de play que llevaba la última tarjeta: marcaba un archivo llamado
`oh-galeria-5-provisional.webp` y ninguna de las fotos nuevas es una miniatura de video. El
play del módulo `#video` sigue donde estaba.

**Ojo:** el carrusel del Figma dibuja **cinco** puntos aunque la hoja de assets lista seis
fotos. Se hizo caso a las fotos. Si eran cinco, sobra una.

### Falta la URL del icono de ubicación

En la hoja de assets del Figma, el pin de "Lugar" y el reloj de "Hora" tienen escrita **la
misma URL** (`c53c6596-…`), que es la del reloj. El pin se quedó con el SVG local hasta que
Marketing mande la suya.

## Pendientes

1. **La URL del icono de ubicación** y la del fondo móvil del hero (ver arriba).
2. **El formulario de registro no está hecho**: hoy es un solo campo de correo con
   placeholder `example@`. Ver `integrations/hubspot-form.md`. Es el pendiente grande.
3. **La página no tiene meta description**: en HubSpot está vacía. Ver
   `integrations/head-hubspot.md`.
4. **Borrar de la página el `<style>` del hero en móvil**, ya sustituido por el módulo.
5. **Enlaces `href="#"` en el footer**: las cuatro redes sociales, el aviso de privacidad y
   los términos y condiciones. Igual que en `nueva-prepa`; se dejaron como están.
6. Bloque real de SFMC para el formulario.
