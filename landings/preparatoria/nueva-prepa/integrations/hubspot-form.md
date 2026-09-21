# Formulario del hero — origen y mapeo

> Fuente: la definición que sirve HubSpot en
> `/_hcms/forms/embed/v3/form/2429099/5461ba79-7625-49ea-8bbd-3169d1ecb207/json/draft`.
> Los campos y sus opciones de `index.html` se generaron de ahí, no a mano.

## Identificadores

| Dato | Valor |
| --- | --- |
| Portal | `2429099` |
| Form ID | `5461ba79-7625-49ea-8bbd-3169d1ecb207` |
| Región | `na1` |
| Endpoint real | `https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/2429099/5461ba79-7625-49ea-8bbd-3169d1ecb207` |
| Texto del botón | `Solicitar Información` |
| Mensaje de éxito | `¡Gracias! Pronto nos pondremos en contacto contigo.` |

## La réplica NO envía a HubSpot

El `<form>` de `index.html` es una réplica estática: valida en el navegador y muestra el
mensaje de gracias, pero **no tiene `action`**. Es deliberado: la página viva apunta al CRM
de producción y un preview no debe generar leads de prueba. El endpoint queda arriba para
cuando se conecte a SFMC.

Reutiliza las clases de HubSpot (`hs-form`, `hs-form-field`, `hs-input`, `form-columns-2`,
`hs_submit`…) para que la hoja de la plantilla la estilice sin CSS extra.

## Campos visibles

| Campo | Tipo | Obligatorio | Placeholder |
| --- | --- | --- | --- |
| `firstname` | text | sí | Nombre* |
| `lastname` | text | no | Apellido |
| `email` | email | sí | Correo electrónico* |
| `phone` | tel | sí | Número de teléfono* |
| `tipo_lead_prepa` | select | sí | Soy:* |
| `campus_de_interes` | select | sí | Campus de Interés* |
| `listadoprofesional` | select | sí | Programa de interés* |
| `periodo` | select | no | Selecciona un periodo |
| `revalidacion` | checkbox | no | ¿Te interesa revalidar materias? |
| `pol_ticas_de_privacidad` | checkbox | sí | Aviso de privacidad |

El texto de la primera opción de cada `<select>` sale de `unselectedLabel` en la definición,
no de `label` ni de `placeholder` (los dos vienen vacíos).

## Campos ocultos

Se conservan como `<input type="hidden">` con el valor que trae la página, para que SFMC
pueda mapearlos:

`nivel_de_interes=1`, `nivel_de_interes_2=1`, `modalidad=1`, `modalidad_=Presencial`,
`canal=13`, `area_de_ventas=1`, `origen=4`, `detalle_de_origen=390`.

Vacíos, los llena `utm.js` en la página viva: `enfoque`, `proveedor`, `utm_medioro__c`,
`formato`, `localizacion`, `custom_2`, `custom_3`, `custom_8`, `gclid`,
`campanas_salesforce`, `posteo`.

## Lo que hace `validate.js` y aquí está resuelto en el HTML

`https://universidad.tecmilenio.mx/hubfs/landings/landings-javascript/validate.js` filtra
opciones en tiempo de ejecución según el nivel. En esta landing esconde:

- **`tipo_lead_prepa`**: las dos opciones de Profesional (valores `4` y `5`).
- **`campus_de_interes`**: los 7 CAMPUS CONNECT, CD. OBREGON, LEON y TECMILENIO ONLINE.

En la réplica esas opciones directamente no se renderizan, así que no hace falta el script.

## Diferencias con la página viva

- **Sin reCAPTCHA.** La página viva monta el widget v2 de Google, que ocupa ~80 px en
  escritorio y ~180 px en móvil. Es la única diferencia de alto entre las dos versiones.
- **Sin `hs_context`** ni cookies de HubSpot.
- La página viva esconde los campos ocultos con una regla
  `.hs-form fieldset:nth-child(4,5,6,10..15){display:none}` en un `<style>` del head. Aquí
  **no se copia**: esos campos ya son `<input type="hidden">` y la regla taparía campus,
  programa y periodo.

## Pendiente

Sustituir el bloque por el de SFMC cuando Marketing lo entregue. Preservarlo en
`integrations/sfmc-block.html`, como en las demás landings.
