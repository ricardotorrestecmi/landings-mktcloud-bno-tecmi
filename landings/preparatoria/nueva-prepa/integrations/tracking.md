# Tracking de la página original (NO incluido en el preview)

El preview es noindex y no carga scripts de terceros. Lo que trae la página de HubSpot:

| Herramienta | Identificador |
| --- | --- |
| Google Tag Manager | `GTM-N34CD2M` (script + `<noscript>` con iframe) |
| Google Analytics 4 | `G-7L1162JBSS` |
| Microsoft Clarity | sí |
| TikTok Pixel | sí |
| Loader de formularios de HubSpot | `js.hsforms.net/forms/v2-legacy.js` |
| `utm.js` | `https://universidad.tecmilenio.mx/hubfs/landings/landings-javascript/utm.js` |
| `validate.js` | `https://universidad.tecmilenio.mx/hubfs/landings/landings-javascript/validate.js` |

`utm.js` rellena los campos ocultos de UTM del formulario y `validate.js` filtra las
opciones de campus y programa según el nivel (ver `hubspot-form.md`).
