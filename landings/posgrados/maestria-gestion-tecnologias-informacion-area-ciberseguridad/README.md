# Maestría en Gestión de Tecnologías de la Información Área Ciberseguridad

Static reconstruction of the Tecmilenio landing page for later Salesforce Marketing Cloud CloudPages migration.

## Status

- HubSpot source extracted for content, assets, PDF, form ID, and metadata.
- Same-structure reconstruction created from the validated Finanzas base.
- Ciberseguridad images and PDF saved locally.
- SFMC integration block pending.

## Source Details

- HubSpot URL: https://universidad.tecmilenio.mx/maestria-gestion-tecnologias-informacion-area-ciberseguridad
- HubSpot template: `Módulos Tailwind 2023/Universidad/maps Tailwind - junio 2025.html`
- HubSpot form ID: `7e46ab60-44ca-40d8-88b7-cdaca5bd03f4`
- Thank you URL: https://universidad.tecmilenio.mx/registro-concluido
- Figma común: https://www.figma.com/design/Qk2XSUJa9MuaC0ukztLLKM/Posgrados-MAPS?node-id=0-1&p=f&t=0FiHlXAleLVLYP7s-0
- Base visual: `landings/posgrados/maestria-administracion-finanzas/`

## QA Notes

- Keep preview pages `noindex,nofollow`.
- Before SFMC handoff, replace the visual form with the real CloudPages form/AMPscript block.
- Preserve form IDs, thank you routing, tracking, UTMs, and request parameters when the SFMC block becomes available.
