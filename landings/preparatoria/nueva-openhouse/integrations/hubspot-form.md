# Formulario de registro — origen y estado

> Fuente: `/_hcms/forms/embed/v3/form/2429099/c7ed0c8f-3070-49b5-9f42-87e977df79bb/json/draft`
> y la propia página renderizada.

## Identificadores

| Dato | Valor |
| --- | --- |
| Portal | `2429099` |
| Form ID | `c7ed0c8f-3070-49b5-9f42-87e977df79bb` |
| Endpoint real | `https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/2429099/c7ed0c8f-3070-49b5-9f42-87e977df79bb` |
| Texto del botón | `Enviar` |
| Al enviar | Redirige a `https://universidad.tecmilenio.mx/gracias` (no hay mensaje en línea) |
| reCAPTCHA | Activado (v2) |

## ⚠️ El formulario todavía no está hecho

Hoy el formulario tiene **un solo campo**: `email`, obligatorio, con el placeholder
`example@` — un marcador de posición. No pide nombre, teléfono, campus ni nada más, y no
se parece al de la página de Preparatoria.

Se comprobó de dos maneras: la definición que sirve HubSpot trae un único `formFieldGroup`
con ese campo, y la página renderizada en el navegador muestra lo mismo.

La réplica de `index.html` lo copia **tal cual**, con ese campo y ese placeholder. No se le
inventaron campos: cuáles debe llevar el registro al Open House lo decide Marketing.

**Éste es el pendiente principal de esta landing.**

## La réplica no envía a HubSpot

Igual que en `nueva-prepa`: el `<form>` valida en el navegador y muestra un mensaje de
gracias, pero no tiene `action`. Un preview no debe generar leads de prueba.

Reutiliza las clases de HubSpot (`hs-form`, `hs-form-field`, `hs-input`, `hs_submit`) para
que la hoja de la plantilla lo estilice sin CSS extra.

## Nota sobre `.hs-periodo`

La página trae en su `<head>` la regla `.hs-periodo { display: block !important; }`, que
fuerza a mostrar el campo "periodo". En este formulario ese campo no existe, así que la
regla no hace nada; viene heredada de otra landing. No se copió.
