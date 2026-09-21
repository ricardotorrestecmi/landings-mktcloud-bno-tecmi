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

## Pendientes

1. **El formulario de registro no está hecho**: hoy es un solo campo de correo con
   placeholder `example@`. Ver `integrations/hubspot-form.md`. Es el pendiente grande.
2. **La página no tiene meta description**: en HubSpot está vacía. Ver
   `integrations/head-hubspot.md`.
3. **Borrar de la página el `<style>` del hero en móvil**, ya sustituido por el módulo.
4. **Enlaces `href="#"` en el footer**: las cuatro redes sociales, el aviso de privacidad y
   los términos y condiciones. Igual que en `nueva-prepa`; se dejaron como están.
5. Bloque real de SFMC para el formulario.
