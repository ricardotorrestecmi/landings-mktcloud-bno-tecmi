# Plantilla Institucional

| Dato | Valor |
| --- | --- |
| Contenido | `https://universidad.tecmilenio.mx/` |
| Diseño | Figma `Plantilla Institucional (Copy)`, sección **1.0 Plantilla Institucional** (`29:307`) |
| CSS | **propio**: `landings/css/institucional/styles.css` |

Es una **plantilla**, no una página final: el hero dice «Campus Tecmilenio» y el mapa apunta
a un campus de ejemplo. Esos huecos se llenan por campus.

## Por qué CSS propio y no el de otra familia

No existía familia institucional en el repo. El diseño comparte la paleta con el resto
(`#00534c`, `#26d07c`, `#f8f9fa`, `#f9f1e6`, tomados del propio spec del Figma) pero la
retícula y los módulos son distintos. Todo vive bajo `.tpl-institucional`, así que no toca
Profesional, Prepa, Posgrados ni Ejecutivas.

## Los 14 módulos

1. **Header** — Formato · Ubicación · Oferta Educativa + «Más Información»
2. **Hero + formulario** — 7 campos, foto a la izquierda y panel turquesa a la derecha
3. **¿Qué programas puedes estudiar?** — 6 pastillas de nivel + acordeón de escuelas + foto
4. **¿Por qué estudiar en Tecmilenio?** — 7 tarjetas
5. **Ubicación del Campus** — mapa embebido
6. **Elige el formato** — 2 pastillas (Presencial / Connect Online)
7. **Presencia física en 29 ciudades** — mapa + las 42 ubicaciones
8. **Tecmilenio en números** — 8 cifras
9. **Empleabilidad** — 3 tarjetas + video
10. **¿Qué es un Espacio Connect?** — carrusel de loop infinito
11. **Testimoniales** — 2
12. **Preguntas Frecuentes** — acordeón de 5
13. **Certificaciones y Reconocimientos** — 5 logos
14. **CTA final + footer**

## Los comentarios del Figma, aplicados

Los seis hilos están transcritos en `reference/comentarios-figma.md`, cada uno con el módulo
donde está clavado el pin. Lo que cambiaron:

- **#5 «carrusel de loop infinito»** está sobre **Espacio Connect**, no sobre los logos de
  certificaciones. Ese módulo lleva marquesina CSS infinita, que se pausa al pasar el cursor
  y se desactiva con `prefers-reduced-motion`. Los logos quedaron estáticos.
- **#1 y #6** están sobre el medio de **Empleabilidad**: no es una foto, es un **video**, y el
  #6 trae su URL (`youtube.com/watch?v=4mR_zYrJlO4`).
- **#3 y #4** piden reusar módulos ya hechos: el de formato y el acordeón de preguntas
  frecuentes. Se reusó el patrón de ambos.
- **#2** pide que el mapa de las 29 ciudades se comporte como el de la página viva.

## Sin dependencias de HubSpot

La pagina se monta en Salesforce tal cual: **cero scripts externos**. El unico JavaScript
son 9 KB inline al final del `index.html` (pastillas, mapa, carruseles, video, acordeon),
y el unico CSS es `landings/css/institucional/styles.css`.

El mapa de «Presencia fisica» **no usa el script del modulo de HubSpot**. Se rehizo: el SVG
va incrustado en el HTML y el comportamiento son 30 lineas propias de `mouseenter` /
`mouseleave` sobre los 32 estados y los 30 pines. Del modulo original solo se copiaron la
geometria y los estilos, que son activo de Tecmilenio; su codigo de ejecucion no se usa.

Quedan tres hosts externos, ninguno de HubSpot, y conviene confirmarlos antes de publicar:

| Host | Para que | Nota |
| --- | --- | --- |
| `image.admisiones.tecmilenio.mx` | las 35 imagenes | es el CDN de Salesforce |
| `fonts.googleapis.com` / `gstatic` | Montserrat | se puede autoalojar si se prefiere |
| `www.google.com` | iframe del mapa del campus | tercero, por diseno |

El favicon y el logo son locales, en `assets/`.

## Lo que falta

1. **El contenido del acordeón de escuelas y programas.** Es el único hueco real: ni el Figma
   ni la página viva dicen qué escuelas y qué programas van bajo cada uno de los 6 niveles. El
   módulo está armado y funcionando, con una nota visible de «Pendiente de Marketing» en cada
   nivel. Sólo es llenar los `<details>`.
2. **La foto del hero.** No viene en el panel de assets del Figma. Hay una provisional; hay que
   cambiarla por la definitiva.
3. **La miniatura del video** de Empleabilidad: ahora usa una foto de Espacio Connect.
4. **El mapa de México** de «Presencia física» usa el de Ejecutivas como provisional.
5. **El emparejamiento de las fotos por nivel** en el módulo de programas está puesto por
   orden del panel de assets, sin comprobar. Se confirmará como en Ejecutivas: descargando y
   comparando, no suponiendo.
6. **El mapa del campus** apunta a Las Torres Monterrey, que es el ejemplo del Figma.
7. **Formulario**: réplica estática, no envía. Falta el form id de HubSpot.

## Un error de origen que conviene reportar

**El Figma empareja mal las cifras de «Tecmilenio en números».** Muestra «+112,000
Aprendedores», pero en la página viva +112,000 corresponde a «Personas conforman nuestra
comunidad» y Aprendedores es +49,000: el Figma está corrido un lugar. Aquí se usó el
emparejamiento de la página viva, que es el que tiene el dato bueno.

## Verificado

En navegador, a 1440 y a 375: los 13 `<section>` montan, 38 imágenes y ninguna rota, sin
scroll horizontal en ninguno de los dos anchos, y las pastillas de nivel y de formato
conmutan su panel.
