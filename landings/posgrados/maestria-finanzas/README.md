# Maestría en Finanzas

Static reconstruction of the Tecmilenio landing page for later Salesforce Marketing Cloud CloudPages migration.

## Status

- HubSpot source extracted.
- Same-structure build created from `landings/posgrados/maestria-administracion-finanzas/`.
- HubSpot content, images, PDF, links, metadata, and program data replaced.
- SFMC integration block pending.

## Source Details

- Sheet row: `4`
- HubSpot URL: https://universidad.tecmilenio.mx/maestria-finanzas
- HubSpot page ID: `211665327703`
- HubSpot template: `Módulos Tailwind 2023/Universidad/maps Tailwind - junio 2025.html`
- HubSpot form ID: `7e46ab60-44ca-40d8-88b7-cdaca5bd03f4`
- Thank you URL: https://universidad.tecmilenio.mx/registro-concluido
- Figma: https://www.figma.com/design/Qk2XSUJa9MuaC0ukztLLKM/Posgrados-MAPS?node-id=0-1&p=f&t=0FiHlXAleLVLYP7s-0
- Preview expected: https://tecmilenio-landings-preview.alan-ece.workers.dev/landings/posgrados/maestria-finanzas/

## QA Notes

- Keep preview pages `noindex,nofollow`.
- Before SFMC handoff, replace the visual form with the real CloudPages form/AMPscript block.
- Preserve form IDs, thank you routing, tracking, UTMs, and request parameters when the SFMC block becomes available.
