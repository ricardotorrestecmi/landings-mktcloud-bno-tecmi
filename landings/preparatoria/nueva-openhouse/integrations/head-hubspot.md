# `<head>` para la publicación final (NO incluido en el preview)

El preview omite canonical y og/twitter porque apuntan al dominio real, y el `_headers` del
repo manda `X-Robots-Tag` además del `<meta name="robots">` del `index.html`.

Al publicar: **quitar** el meta `robots` y agregar

```html
<link rel="canonical" href="https://universidad.tecmilenio.mx/open-house-preparatoria-tecmilenio">
<meta property="og:title" content="Open House Preparatoria Tecmilenio">
<meta property="og:url" content="https://universidad.tecmilenio.mx/open-house-preparatoria-tecmilenio">
```

## Pendiente de Marketing: la página no tiene descripción

En HubSpot, `<meta name="description">` y `og:description` están **vacíos**. Por eso el
`index.html` tampoco los lleva: no se redactó ninguno para no inventar contenido. Cuando
Marketing entregue el texto, va en los tres lugares (meta description, og y twitter).

## Ya incluido en el preview (idéntico al original)

- `<title>Open House Preparatoria Tecmilenio</title>`
- `<html lang="es">`
