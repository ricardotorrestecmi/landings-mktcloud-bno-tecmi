# Maestría en Inteligencia Artificial

Static reconstruction of the Tecmilenio landing page for later Salesforce Marketing Cloud CloudPages migration.

## Status

- HubSpot source extracted.
- Static HTML reconstruction created from the validated base structure.
- Program-specific HubSpot content and assets replaced.
- SFMC integration block pending.
- Figma MCP review blocked by Starter plan call limit in this run.

## Source Details

- HubSpot URL: https://universidad.tecmilenio.mx/maestria-inteligencia-artificial
- HubSpot page ID: `211968395946`
- HubSpot template: `Módulos Tailwind 2023/Universidad/maps Tailwind - junio 2025.html`
- HubSpot form ID: `7e46ab60-44ca-40d8-88b7-cdaca5bd03f4`
- Thank you URL: https://universidad.tecmilenio.mx/registro-concluido
- Figma: https://www.figma.com/design/Qk2XSUJa9MuaC0ukztLLKM/Posgrados-MAPS?node-id=0-1&p=f&t=0FiHlXAleLVLYP7s-0

## QA Notes

- Keep preview pages `noindex,nofollow`.
- Before SFMC handoff, replace the visual form with the real CloudPages form/AMPscript block.
- Preserve form IDs, thank you routing, tracking, UTMs, and request parameters when the SFMC block becomes available.
- Local QA completed on desktop and mobile for horizontal overflow and broken images.
