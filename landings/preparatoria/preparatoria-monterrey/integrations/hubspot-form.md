# Integración — Formulario HubSpot (`preparatoria-monterrey`)

> Fuente: `reference/hubspot/preparatoria/content-preparatoria-monterrey.md` §3 (HTML vivo de
> `universidad.tecmilenio.mx/preparatoria-monterrey`). En el preview el form es HTML estático con
> submit simulado (`script.js`); en producción se inyecta con `hbspt.forms.create`.
> Monterrey **comparte el formId nacional** (distinto a CDMX) + un JS exclusivo que recorta el
> select `campus_de_interes` a los 4 campus MTY.

## Identidad del form (INTOCABLE)

| Campo | Valor |
|---|---|
| portalId | `2429099` |
| formId | `5461ba79-7625-49ea-8bbd-3169d1ecb207` (MISMO que /preparatoria) |
| formInstanceId | `8901` |
| pageId | `183031343482` |
| pageName | `"Preparatoria Tecmilenio"` |
| redirectUrl | `https://universidad.tecmilenio.mx/registro-concluido-prepa` |
| region | `na1` |
| target | `#hs_form_target_form_985276914` |
| cssClass | `hs-form stacked hs-custom-form` |
| contentType | `landing-page` |
| formsBaseUrl | `/_hcms/forms/` |

## Snippet verbatim (producción)

```js
var options = {
    portalId: '2429099',
    formId: '5461ba79-7625-49ea-8bbd-3169d1ecb207',
    formInstanceId: '8901',
    pageId: '183031343482',
    region: 'na1',
    pageName: "Preparatoria Tecmilenio",
    redirectUrl: "https://universidad.tecmilenio.mx/registro-concluido-prepa",
    css: '',
    target: '#hs_form_target_form_985276914',
    contentType: "landing-page",
    formsBaseUrl: '/_hcms/forms/',
    formData: { cssClass: 'hs-form stacked hs-custom-form' }
};
// + options.getExtraMetaDataBeforeSubmit (targetedContentMetadata)
hbspt.forms.create(options);
```

Requiere cargar `/_hcms/forms/v2.js` (NO incluido en el preview).

## Listener de `hsFormCallback` (verbatim, al final del body en producción)

```js
const forms_restringidos_ids = [
  '3ffde726-eb87-44c9-b5c2-40f2f9ec6a82',
  '4f65b734-c924-4bfc-941d-5b165be058c0',
  '56f1051b-8f39-4ee9-8713-3c779fbe6c8b'
];
window.addEventListener('message', (event) => {
  if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady' && !forms_restringidos_ids.includes(event.data.id)) {
    fn('Preparatoria', null, null);
  }
});
```

`fn(...)` la define `https://universidad.tecmilenio.mx/hubfs/landings/landings-javascript/validate.js`
(junto con `utm.js`) — NO incluidos en el preview, ver `tracking.md`.

## JS EXCLUSIVO MTY — recorte del select `campus_de_interes` (verbatim del original)

```js
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const valoresPermitidos = ["1105", "1106", "1101", "1102"]; // campus MTY permitidos
    const selectElement = document.querySelector('select[name="campus_de_interes"]');
    if (selectElement) {
      Array.from(selectElement.options).forEach((option, index) => {
        if (index !== 0 && !valoresPermitidos.includes(option.value)) {
          option.remove();
        }
      });
    } else {
      console.error("El elemento <select> con el name indicado no se encontró en el DOM.");
    }
  }, 1000);
});
```

- Values MTY: `1105` = Las Torres · `1106` = Guadalupe · `1101` = San Nicolás · `1102` = Cumbres
  (correspondencia de los 4 campus; confirmar contra el form vivo).
- En el preview (`script.js` bloque 7) el `console.error` se sustituye por un guard silencioso,
  porque el form estático no trae el select `campus_de_interes` (HubSpot lo inyecta en producción).

## 17 campos hidden (orden del CSS del head original)

`posteo`, `nivel_de_interes`, `modalidad`, `enfoque`, `proveedor`, `modalidad_`,
`utm_medioro__c`, `formato`, `canal`, `localizacion`, `periodo`, `gclid`,
`custom_2`, `custom_3`, `custom_8`, `connect`, `campanas_salesforce`.

En el preview están replicados como `<input type="hidden" name="…" value="">` dentro de
`#lead-form`, en ese orden.

## Ambigüedades documentadas (pendientes §16 del blueprint)

1. **`tipo_lead_prepa`**: el CSS de HubSpot lo fuerza visible (`.hs_tipo_lead_prepa{display:block!important}`),
   pero Figma no dibuja ningún campo con ese rótulo (posiblemente sea uno de los 2 selects).
   En el preview se respeta el diseño Figma: 6 campos visibles, sin `tipo_lead_prepa` rotulado.
2. **`nivel_de_interes`**: aparece en la lista de hidden del CSS y a la vez Figma dibuja el
   select "Nivel de interés". Manda Figma en lo visual → el select visible usa `name="nivel_de_interes"`
   y el hidden homónimo se conserva (nombre duplicado intencional, solo preview).
3. **`campus_de_interes`**: el form vivo trae este select (values 1101/1102/1105/1106 para MTY),
   pero el HTML estático no lo expone. El filtro visible de la sección de campus (widget del sitio)
   es independiente del select del form; ambos se documentan aquí.
4. **Opciones de los selects** "Nivel de interés" / "Programa de interés": no definidas en Figma
   ni en el HTML estático de HubSpot (el form se inyecta por JS). Quedan placeholder-options.
5. **Checkbox de privacidad**: solo existe en el mock mobile de Figma (decisión 20 del blueprint).
   En el preview es visible solo en mobile y required solo ahí.
