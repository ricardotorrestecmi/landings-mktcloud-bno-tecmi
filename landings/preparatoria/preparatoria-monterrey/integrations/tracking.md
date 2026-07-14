# Tracking del original (NO incluido en el preview)

> Fuente: `reference/hubspot/preparatoria/content-preparatoria.md` §6.
> Regla del preview: **CERO tracking**. Único request externo permitido: Google Fonts
> (fonts.googleapis.com / fonts.gstatic.com). Verificable en la pestaña Network.

## Lo que carga la página viva (para restituir al publicar, si aplica)

| Herramienta | ID / detalle |
|---|---|
| Google Tag Manager | `GTM-N34CD2M` (script + noscript iframe) |
| GA4 | `G-7L1162JBSS` (integración HubSpot con Google Consent Mode v2, default denied, `waitForUpdateMillis=1000`) |
| TikTok Pixel | `CMG7H33C77UFIL1R7S60` (analytics.tiktok.com) |
| Microsoft Clarity | `t1z66k7ki2` |
| HubSpot analytics | `/hs/scriptloader/2429099.js`, `_hsq` con `setPageId 130828757815`; CWV embed `content-cwv-embed`; HubspotToolsMenu |
| Scripts propios de landings | `https://universidad.tecmilenio.mx/hubfs/landings/landings-javascript/utm.js` y `.../validate.js` (define `fn(...)` usado por el listener del form — ver `hubspot-form.md`) |
| Librerías del template viejo | tiny-slider 2.9.2 (JS) + 2.9.4 (CSS), Font Awesome Pro 5.15.0, `template_main.min.js` — NO necesarias en el diseño nuevo |
