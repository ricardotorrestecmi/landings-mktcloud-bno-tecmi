# Integración HubSpot Form — openhouse-prepa-tecmilenio

> **NO CAMBIAR NI UN CARÁCTER sin confirmación de Alan** (restricción dura del brief).
> Fuente verbatim: `reference/hubspot/preparatoria/content-openhouse-prepa-tecmilenio.md` §3.
> En el preview el form es una réplica HTML interactiva que NO postea; en producción lo inyecta este snippet.

## Snippet `hbspt.forms.create` (verbatim [HS §3])

```js
var options = {
    portalId: '2429099',
    formId: 'c8a571a6-56c5-4e42-8cfe-72355d858eef',
    formInstanceId: '6867',
    pageId: '181412124234',
    region: 'na1',
    pageName: "Openhouse Prepa Tecmilenio",
    redirectUrl: "https://universidad.tecmilenio.mx/registro-concluido-prepa",
    css: '',
    target: '#hs_form_target_form_812981888',
    contentType: "landing-page",
    formsBaseUrl: '/_hcms/forms/',
    formData: { cssClass: 'hs-form stacked hs-custom-form' }
};
// + getExtraMetaDataBeforeSubmit (targetedContentMetadata)
hbspt.forms.create(options);
```

- Target en el DOM de HubSpot: `<div id="hs_form_target_form_812981888">`.
- CSS del head de la página en vivo fuerza el campo periodo visible: `.hs-periodo{display: block!important}`.

## Listener `onFormReady` (verbatim [HS §3] — al final del body)

```js
const forms_restringidos_ids = [
  '3ffde726-eb87-44c9-b5c2-40f2f9ec6a82',
  '4f65b734-c924-4bfc-941d-5b165be058c0',
  'e1c7ad56-4b3f-44a6-bdcc-0d8bf0424b9d',   // ← extra vs landings de prepa
  '56f1051b-8f39-4ee9-8713-3c779fbe6c8b'
];
window.addEventListener('message', (event) => {
  if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady' && !forms_restringidos_ids.includes(event.data.id)) {
    fn( 'Preparatoria' , null, null );
  }
});
```

- **Nota:** en esta página `utm.js` / `validate.js` se cargan **AL FINAL del body** (no en el head, a diferencia de las landings de prepa).
- Sin filtro de campus por JS en esta página.

## Campos

**Visibles (7)** — `.hs-periodo` forzado visible por CSS del head:

| # | Campo | Tipo |
|---|---|---|
| 1 | Nombre | text |
| 2 | Apellido(s) | text |
| 3 | Teléfono | tel |
| 4 | Correo electrónico | email |
| 5 | Nivel de interés | select |
| 6 | Programa de interés | select |
| 7 | Periodo | select |

Las **opciones** de los selects las define el form real `c8a571a6-…` en producción — en el preview cada select lleva una única `<option>` deshabilitada con el label (no se inventaron listas).

**Hidden (~17, los llena `utm.js` en producción)** — lista referencial de la familia de forms de prepa
(`reference/hubspot/preparatoria/content-preparatoria.md` §form):

```
posteo, nivel_de_interes, modalidad, enfoque, proveedor, modalidad_,
utm_medioro__c, formato, canal, localizacion, periodo, gclid,
custom_2, custom_3, custom_8, connect, campanas_salesforce
```

En el `index.html` del preview se incluyeron 15 como `<input type="hidden">`; `nivel_de_interes` y
`periodo` no se duplicaron porque en ESTA página son campos **visibles** (evita names duplicados).

## Redirect

- Producción: **`https://universidad.tecmilenio.mx/registro-concluido-prepa`**.
- Preview: submit con `preventDefault` + validación ligera; muestra nota de preview, no redirige.
