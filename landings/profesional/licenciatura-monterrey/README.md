# Carreras Profesionales Monterrey — Profesional (hub regional)

Variante regional del hub, con la oferta de Monterrey. Misma estructura que
`licenciatura-cdmx` y `licenciatura-guadalajara`.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-monterrey-0
- **Figma:** Plantilla Profesional → página **2.3 Plantilla general múltiples campus**
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-monterrey`

## Estructura (9 módulos, el orden de la página oficial)
1. Hero — "Carreras Profesionales en Monterrey" + formulario
2. Franja de datos — Presencial · Semestral · 8 Semestres · 65/35
3. Programas — **14** carreras
4. Rutas de enfoque — carrusel de 7 tarjetas
5. Ubicaciones de campus — **4 campus, con teléfono**
6. ¿Por qué estudiar en Universidad Tecmilenio? — 7 tarjetas
7. Voces de nuestros estudiantes — video `VMO8iAWR0WY`
8. En Universidad Tecmilenio contarás con — 6 tarjetas
9. CTA final

## Oferta (14 programas)
Toda la oferta del hub nacional salvo **Creación y Desarrollo de Empresas**.

## Campus (en el orden de la página oficial)
| Campus | Dirección | Teléfono |
|---|---|---|
| Las Torres | Paseo del Acueducto 2610, Del Paseo Residencial, 64909 Monterrey, N.L. | 81 1052 0000 |
| Guadalupe | Av. San Sebastián 1407, Sin Nombre de Col 54, 67190 Guadalupe, N.L. | 81 8232 8801 |
| San Nicolás | Iztaccihuatl 431, Las Puentes 3er Sector, 66460 San Nicolás de los Garza, N.L. | 81 8305 3200 |
| Cumbres | Calle Alejandro de Rodas 91, Cumbres Elite 2do. Sector, 64349 Monterrey, N.L. | 81 8389 8633 |

> En la página oficial el teléfono viene pegado a la dirección sin separación
> ("…64909 Monterrey, N.L.Tel. 81 1052 0000"). Aquí van en líneas distintas.

## Cambio al template que trajo esta LP
`.campus-card` pasó de ancho fijo (320px) a `flex: 1 1 240px; max-width: 320px`,
para que **4 campus quepan en una fila** (272px cada uno) sin afectar a las LP de
dos campus, que siguen en 320px. Se añadió `.campus-card__tel`.

## Decisiones (confirmar con Marketing)
- **"Conoce más"** apunta a nuestra LP del programa (`../<slug>/`).
- **"Descargar Plan"** apunta al PDF oficial de cada carrera.

## Pendientes
- **Formulario:** réplica estática; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`). El oficial filtra Campus de Interés a
  los campus de Nuevo León; el nuestro usa el listado del template.

## Assets (CDN admisiones)
- Banner: `92ca898d-143b-4d0d-8879-d62db0699c79.jpg`
- Campus: Las Torres `e4c59f20…`, Guadalupe `fecd06ea…`, San Nicolás `f21b3278…`,
  Cumbres `f501a8f9…`
- Resto (ilustración, 14 fotos de programa, 7 de rutas, 7 iconos, franja y
  miniatura del video): los mismos de los otros hubs.

Logo y redes son locales en `assets/images/`.
