# QA Notes

Date: 2026-06-10

Local URL:

`http://127.0.0.1:49322/landings/posgrados/maestria-ingenieria-area-gestion-proyectos/`

## Automated Checks

- Desktop viewport: `1440 x 1400`
- Mobile viewport: `390 x 1200`
- HTTP failures: `0`
- Broken images: `0`
- Horizontal overflow: none (`scrollWidth` equals `clientWidth` on both viewports)
- Robots meta: `noindex,nofollow`
- Facts count: `4`
- Study plan cards: `10`
- Brochure link points to the HubSpot source PDF for Gestión de Proyectos.

## Visual Checks

- Hero uses the HubSpot program image `maestria-ingenieria-proyectos.jpg`.
- Mobile hero uses the same program image with the existing dark overlay pattern.
- Intro portrait uses `maestria-ingenieria-proyectos-secundaria.png`.
- Desktop hero copy was adjusted to avoid overlap between the long H1, supporting copy, and form.
- Captures saved:
  - `qa/desktop-final.png`
  - `qa/mobile-final.png`

## Pending

- Real Salesforce Marketing Cloud AMPscript/form block is still pending.
- Current form remains the static placeholder from the validated base until SFMC block is provided.
