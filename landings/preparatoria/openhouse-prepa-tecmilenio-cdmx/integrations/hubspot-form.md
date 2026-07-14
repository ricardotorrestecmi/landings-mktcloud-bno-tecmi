# Integración HubSpot Form — openhouse-prepa-tecmilenio-cdmx

> **NO CAMBIAR NI UN CARÁCTER sin confirmación de Alan** (restricción dura del brief).
> Fuente verbatim: `reference/hubspot/preparatoria/content-openhouse-prepa-tecmilenio-cdmx.md` §3.
> En el preview el form es una réplica HTML interactiva que NO postea; en producción lo inyecta este snippet.
> **El formId es EL MISMO que la openhouse nacional/madre** — la plaza CDMX se distingue por
> `formInstanceId`, `pageId`, el `redirectUrl` (sin `-prepa`) y el parche de campus.

## Snippet `hbspt.forms.create` (verbatim [HS §3] — variante CDMX)

```js
var options = {
    portalId: '2429099',
    formId: 'c8a571a6-56c5-4e42-8cfe-72355d858eef',   // ← MISMO form GUID que la openhouse nacional
    formInstanceId: '9579',                            // ← CDMX (nacional: 6867)
    pageId: '153626889800',                            // ← CDMX (nacional: 181412124234)
    region: 'na1',
    pageName: "Openhouse Prepa Tecmilenio",
    redirectUrl: "https://universidad.tecmilenio.mx/registro-concluido",   // ← SIN sufijo -prepa (nacional: -prepa)
    css: '',
    target: '#hs_form_target_form_57633404',           // ← CDMX (nacional: #hs_form_target_form_812981888)
    contentType: "landing-page",
    formsBaseUrl: '/_hcms/forms/',
    formData: { cssClass: 'hs-form stacked hs-custom-form' }
};
hbspt.forms.create(options);
```

- Target en el DOM de HubSpot: `<div id="hs_form_target_form_57633404">`.
- CSS del head de la página en vivo fuerza el campo periodo visible: `.hs-periodo{display: block!important}`.

## Listener `onFormReady` (verbatim [HS §3] — al final del body)

```js
const forms_restringidos_ids = [
  '3ffde726-eb87-44c9-b5c2-40f2f9ec6a82',
  '4f65b734-c924-4bfc-941d-5b165be058c0',
  'e1c7ad56-4b3f-44a6-bdcc-0d8bf0424b9d',
  '56f1051b-8f39-4ee9-8713-3c779fbe6c8b'
];
window.addEventListener('message', (event) => {
  if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady' && !forms_restringidos_ids.includes(event.data.id)) {
    fn( 'Preparatoria' , null, null );
  }
});
```

## Parche de campus (EXCLUSIVO CDMX — verbatim [HS §3], al final del body)

Filtra el `<select name="campus_de_interes">` por **TEXTO** dejando solo los campus CDMX:

```js
// Parche 1.0 Por Luis Hernandez
// Eliminar este parche
window.onload = function() {
    var selectElement = document.querySelector('select[name="campus_de_interes"]');
    if (selectElement) {
        var opcionesDeseadas = ['FERRERIA', 'CUAUTITLAN IZCALLI', 'Campus de Interés'];
        for (var i = selectElement.options.length - 1; i >= 0; i--) {
            var opcion = selectElement.options[i];
            if (!opcionesDeseadas.includes(opcion.text)) {
                selectElement.remove(i);
            }
        }
    } else {
        console.log("Elemento select no encontrado.");
    }
};
```

- **Nota:** en esta página `utm.js` / `validate.js` se cargan **AL FINAL del body** (no en el head).
  Comentado en el HubSpot en vivo: `template_validate-openhouse-prepa-testing.min.js`.
- En el **preview** el select `campus_de_interes` ya se muestra con las 2 opciones que produce el parche
  (`FERRERIA`, `CUAUTITLAN IZCALLI`) + placeholder — no se inventan más opciones.

## Campos

**Visibles (8)** — `.hs-periodo` forzado visible por CSS del head:

| # | Campo | Tipo |
|---|---|---|
| 1 | Nombre | text |
| 2 | Apellido(s) | text |
| 3 | Teléfono | tel |
| 4 | Correo electrónico | email |
| 5 | Nivel de interés | select |
| 6 | Programa de interés | select |
| 7 | Periodo | select |
| 8 | Campus de Interés | select (parche CDMX: FERRERIA / CUAUTITLAN IZCALLI) |

Las **opciones** de los selects (salvo el campus filtrado) las define el form real `c8a571a6-…` en producción.

**Hidden (~15, los llena `utm.js` en producción):**

```
posteo, modalidad, enfoque, proveedor, modalidad_, utm_medioro__c,
formato, canal, localizacion, gclid, custom_2, custom_3, custom_8,
connect, campanas_salesforce
```

`nivel_de_interes` y `periodo` no se duplican como hidden porque en ESTA página son visibles.

## Redirect

- Producción: **`https://universidad.tecmilenio.mx/registro-concluido`** (SIN `-prepa`; la nacional sí lleva `-prepa`).
- Preview: submit con `preventDefault` + validación ligera; muestra nota de preview, no redirige.
