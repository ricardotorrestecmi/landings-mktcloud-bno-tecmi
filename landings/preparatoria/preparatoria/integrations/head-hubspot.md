# `<head>` para la publicación final (NO incluido en el preview)

> Fuente: `reference/hubspot/preparatoria/content-preparatoria.md` §1.
> En el preview se omiten canonical/og/twitter porque apuntan al dominio real y el preview
> es noindex (el `_headers` del repo manda `X-Robots-Tag` + `<meta name="robots" content="noindex, nofollow">`).

## Meta del original (agregar al publicar en el dominio real)

```html
<link rel="canonical" href="https://universidad.tecmilenio.mx/preparatoria">
<meta property="og:title" content="Preparatoria Tecmilenio">
<meta property="og:description" content="Encuentra tu propósito de vida y prepárate para el mundo laboral en Prepa Tecmilenio. Conoce nuestros diferentes modelos educativos ¡Únete a Tecmilenio!">
<meta property="og:url" content="https://universidad.tecmilenio.mx/preparatoria">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Preparatoria Tecmilenio">
<meta name="twitter:description" content="Encuentra tu propósito de vida y prepárate para el mundo laboral en Prepa Tecmilenio. Conoce nuestros diferentes modelos educativos ¡Únete a Tecmilenio!">
```

Al publicar: **quitar** `<meta name="robots" content="noindex, nofollow">` del `index.html`.

## Ya incluido en el preview (idéntico al original)

- `<title>Preparatoria Tecmilenio</title>`
- meta description verbatim
- `lang="es-mx"`, viewport `width=device-width, initial-scale=1`
- favicon `assets/favicon.png` (= `Favicon Tecmilenio-04.png` de HubSpot, 150×150)

## Fuentes

El original carga Cairo + Gentium Plus (template viejo de HubSpot). El diseño nuevo es 100%
**Montserrat** (Figma) → el preview carga solo Montserrat 400/500/700 de Google Fonts.
