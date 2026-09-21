# `<head>` para la publicación final (NO incluido en el preview)

El preview omite canonical y og/twitter porque apuntan al dominio real, y el `_headers`
del repo manda `X-Robots-Tag` además del `<meta name="robots" content="noindex, nofollow">`
del `index.html`.

Al publicar en el dominio real: **quitar** ese meta `robots` y agregar

```html
<link rel="canonical" href="https://universidad.tecmilenio.mx/preparatoria">
<meta property="og:title" content="Preparatoria Tecmilenio">
<meta property="og:description" content="Encuentra tu propósito de vida y prepárate para el mundo laboral en Prepa Tecmilenio. Conoce nuestros diferentes modelos educativos ¡Únete a Tecmilenio!">
<meta property="og:url" content="https://universidad.tecmilenio.mx/preparatoria">
```

Ojo: el canonical de la página de origen apunta a `/preparatoria`, no a
`/preparatoria-tecmilenio-2-2`, que es la URL de trabajo de esta versión nueva.

## Ya incluido en el preview (idéntico al original)

- `<title>Preparatoria Tecmilenio</title>`
- meta description verbatim
- `<html lang="es">`
