# Tracking de la página en vivo — NO incluido en este preview

> Documentado desde `reference/hubspot/preparatoria/content-openhouse-prepa-tecmilenio-cdmx.md` §6.
> Por regla del brief, el preview NO carga ningún tracker. Esta lista es para la migración final.

| Herramienta | ID | Nota |
|---|---|---|
| Google Tag Manager | `GTM-N34CD2M` | + `<noscript>` iframe |
| GA4 | `G-7L1162JBSS` | con Consent Mode v2 |
| TikTok Pixel | `CMG7H33C77UFIL1R7S60` | |
| Microsoft Clarity | `t1z66k7ki2` | |
| HubSpot loader | `2429099.js` | pageId **`153626889800`** (CDMX; nacional: 181412124234) |
| Otros del template en vivo | Bootstrap 4.5.0 + jQuery 3.5.1 + Slick 1.9.0, `template_main.min.js`, CWV embed, HubspotToolsMenu, `utm.js` + `validate.js` (al final del body) | En HubSpot CDMX es la plantilla vieja (Bootstrap/Slick). Este preview lo reconstruye con el estilo Figma Openhouse (carruseles vanilla, sin Bootstrap/Slick). |
