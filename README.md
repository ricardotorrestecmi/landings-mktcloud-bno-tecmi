# Landings Tecmilenio — Posgrados (HTML estático)

Implementación HTML/CSS estática de las 25 landings de posgrados de Universidad Tecmilenio, desarrollada por Black & Orange a partir de los diseños de Figma (Posgrados MAPS) y la estructura de HubSpot.

## Estructura

```text
index.html            Índice con links a las 25 landings
_headers              Cabeceras para el preview (X-Robots-Tag: noindex)
wrangler.jsonc        Configuración para servir el sitio en Cloudflare Workers (opcional)
landings/
  posgrados/
    <slug>/
      index.html      Landing completa (HTML estático, formulario interactivo)
      styles.css      Estilos de la landing
      assets/         Imágenes, iconos y documentos propios de la landing
      integrations/   Bloque SFMC pendiente de integración (placeholder documentado)
shared/               Recursos compartidos
```

## Las 25 landings

Cada landing vive en `landings/posgrados/<slug>/` y es autocontenida (HTML + CSS + assets propios). Los slugs corresponden a las URLs finales acordadas, por ejemplo:

- `landings/posgrados/maestria-administracion-finanzas/`
- `landings/posgrados/posgrados/` (página general de posgrados)
- `landings/posgrados/especialidad-en-finanzas/`
- … (ver `index.html` en la raíz para la lista completa con links)

## Notas de implementación

- **Formularios:** son HTML interactivo (no imágenes). La integración con Salesforce Marketing Cloud está pendiente; cada landing conserva su placeholder en `integrations/sfmc-block.html` con los datos del formulario de origen de HubSpot. No se incluyó AMPscript ni form IDs inventados.
- **Responsive:** validado en 1450, 1366, 1200, 1024, 900, 850, 760, 640 y 390 px de ancho, sin scroll horizontal.
- **Tipografía:** Montserrat vía Google Fonts.
- **`_headers`:** aplica `noindex` a todo el sitio; es una salvaguarda para entornos de preview. Retirar cuando se publique en el dominio final.
- **`wrangler.jsonc`:** permite servir el repo tal cual como sitio estático en Cloudflare Workers (`npx wrangler deploy`). Si se usa otro hosting, puede ignorarse.
