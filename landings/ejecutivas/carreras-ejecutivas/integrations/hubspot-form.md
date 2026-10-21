# Formulario — origen y mapeo

| Dato | Valor |
| --- | --- |
| Portal | `2429099` |
| Form ID | `609723d8-bfe8-4fd1-8c28-d5e5ed28eda6` |
| Texto del botón | `Solicitar Información` |

Definición real tomada de
`/_hcms/forms/embed/v3/form/2429099/609723d8-bfe8-4fd1-8c28-d5e5ed28eda6/json`.

## Campos visibles

`firstname`, `lastname`, `email`, `phone`, `tipo_lead_prepa` (Soy:), `modalidad_`
(**Formato**), `campus_de_interes`, `listadoprofesional` (**Programa de interés**),
`periodo` y el checkbox `pol_ticas_de_privacidad`.

La réplica los reproduce todos. **Formato** y **Programa de interés** se agregaron a mano:
el formulario heredado de `carreras-profesionales` no los traía y aquí sí están, tanto en la
página viva como en el Figma.

En **Programa de interés** se listan las 13 carreras ejecutivas de esta landing. El campo
real (`listadoprofesional`) trae 110 opciones de todo el catálogo y se filtra en tiempo de
ejecución con `validate.js`; aquí se dejó ya filtrado.

## Ocultos

`nivel_de_interes`, `nivel_de_interes_2`, `modalidad`, `origen`, `detalle_de_origen`,
`area_de_ventas`, `posteo`, `localizacion`, `utm_medioro__c`, `formato`, `canal`,
`proveedor`, `enfoque`, `campanas_salesforce`, `gclid`, `custom_2`, `custom_3`, `custom_8`.

**Pendiente:** añadirlos como `<input type="hidden">` con sus valores, como se hizo en las
landings de Prepa, cuando Marketing confirme qué valor lleva cada uno en esta landing.

## La réplica no envía

El `<form>` no tiene `action`: valida en el navegador y nada más. Un preview no debe generar
leads en el CRM de producción.
