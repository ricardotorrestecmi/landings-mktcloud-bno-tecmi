# `<head>` para la publicación final (NO incluido en el preview)

> Fuente: `reference/hubspot/preparatoria/content-preparatoria-cdmx.md` §1.
> En el preview se omiten canonical/og/twitter porque apuntan al dominio real y el preview
> es noindex (el `_headers` del repo manda `X-Robots-Tag` + `<meta name="robots" content="noindex, nofollow">`).

## Meta del original CDMX (agregar al publicar en el dominio real)

```html
<link rel="canonical" href="https://universidad.tecmilenio.mx/preparatoria-cdmx">
<meta property="og:title" content="Preparatoria Tecmilenio CDMX">
<meta property="og:description" content="Vive la experiencia Prepa Tecmilenio. Desarrolla tu creatividad, crea vínculos importantes y desarrollate para cumplir tu Propósito de Vida. ¡Conócenos!">
<meta property="og:url" content="https://universidad.tecmilenio.mx/preparatoria-cdmx">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Preparatoria Tecmilenio CDMX">
<meta name="twitter:description" content="Vive la experiencia Prepa Tecmilenio. Desarrolla tu creatividad, crea vínculos importantes y desarrollate para cumplir tu Propósito de Vida. ¡Conócenos!">
```

Al publicar: **quitar** `<meta name="robots" content="noindex, nofollow">` del `index.html`.

## Ya incluido en el preview (idéntico al original)

- `<title>Preparatoria Tecmilenio CDMX</title>`
- meta description verbatim
- `lang="es-mx"`, viewport `width=device-width, initial-scale=1`
- favicon `assets/favicon.png` (= `Favicon Tecmilenio-04.png` de HubSpot, 150×150)

## Fuentes

El original carga Cairo + Gentium Plus (template viejo de HubSpot). El diseño nuevo es 100%
**Montserrat** (Figma) → el preview carga solo Montserrat 400/500/700 de Google Fonts.
