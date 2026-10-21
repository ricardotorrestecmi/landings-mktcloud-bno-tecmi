# Formulario — origen y mapeo

| Dato | Valor |
| --- | --- |
| Portal | `2429099` |
| Form ID | `609723d8-bfe8-4fd1-8c28-d5e5ed28eda6` |

Es **el mismo formulario** de todas las landings ejecutivas: lo confirma el `formId` que trae
la página viva `https://universidad.tecmilenio.mx/ingeniero-en-logistica-y-cadena-de-suministro`.

## Única diferencia con la landing general

**Programa de interés** llega preseleccionado en *Ingeniería en Logística y Cadena de Suministro*, porque esta landing es de un
solo programa. Las otras 12 carreras ejecutivas siguen en la lista por si alguien llegó a la
página equivocada, que es como se comporta el formulario vivo.

Si Marketing prefiere que el campo quede fijo y sin lista, se cambia el `<select>` por un
`<input type="hidden" name="programa" value="Ingeniería en Logística y Cadena de Suministro">`.

## Campos visibles

`firstname`, `lastname`, `email`, `phone`, `tipo_lead_prepa` (Soy:), `modalidad_`
(**Formato**), `campus_de_interes`, `listadoprofesional` (**Programa de interés**),
`periodo` y el checkbox `pol_ticas_de_privacidad`.

## Ocultos

`nivel_de_interes`, `nivel_de_interes_2`, `modalidad`, `origen`, `detalle_de_origen`,
`area_de_ventas`, `posteo`, `localizacion`, `utm_medioro__c`, `formato`, `canal`,
`proveedor`, `enfoque`, `campanas_salesforce`, `gclid`, `custom_2`, `custom_3`, `custom_8`.

**Pendiente:** añadirlos como `<input type="hidden">` con sus valores cuando Marketing
confirme qué lleva cada uno. Es el mismo pendiente de todas las ejecutivas.

## La réplica no envía

El `<form>` no tiene `action`: valida en el navegador y nada más. Un preview no debe generar
leads en el CRM de producción.
