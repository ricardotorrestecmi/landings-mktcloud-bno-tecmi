# Maestría en Administración de Negocios Área Negocios Internacionales

Static reconstruction of the Tecmilenio landing page for later Salesforce Marketing Cloud CloudPages migration.

## Status

- HubSpot source extracted.
- Same-structure rebuild created from the validated Finanzas base.
- Static HTML reconstruction created.
- SFMC integration block pending.

## Source Details

- HubSpot URL: https://universidad.tecmilenio.mx/maestria-administracion-negocios-internacionales
- HubSpot page ID: `211682206009`
- HubSpot template: `Módulos Tailwind 2023/Universidad/maps Tailwind - junio 2025.html`
- HubSpot form ID: `7e46ab60-44ca-40d8-88b7-cdaca5bd03f4`
- Thank you URL: https://universidad.tecmilenio.mx/registro-concluido
- Figma común: https://www.figma.com/design/Qk2XSUJa9MuaC0ukztLLKM/Posgrados-MAPS?node-id=0-1&p=f&t=0FiHlXAleLVLYP7s-0

## QA Notes

- Keep preview pages `noindex,nofollow`.
- Figma MCP was unavailable because the account hit the Starter plan tool-call limit; use the common Figma URL above for manual visual review if needed.
- Before SFMC handoff, replace the visual form with the real CloudPages form/AMPscript block.
- Preserve form IDs, thank you routing, tracking, UTMs, and request parameters when the SFMC block becomes available.
