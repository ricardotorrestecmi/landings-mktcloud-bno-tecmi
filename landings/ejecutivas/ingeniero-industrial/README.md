# Ingeniería Industrial — Carrera Ejecutiva

| Dato | Valor |
| --- | --- |
| Contenido | `https://universidad.tecmilenio.mx/ingeniero-industrial` |
| Estructura | Figma `3.0 Carreras Ejecutivas Por programa`, nodo `1:21` (frame `1:562`) |
| Plantilla | **la misma de Profesional** (`tpl-profesional`) |

Gemela de `licenciado-en-mercadotecnia`: las dos salen del mismo generador, así que comparten
estructura, clases y CSS. Sólo cambian el contenido y las dos fotos propias del programa.

## Secciones

1. **Hero + formulario**
2. **Franja de datos** — Formato · Connect online, Plan · Bimestral,
   Duración · 15 Bimestres (3 años), Idioma · 65% Español / 35% Inglés
3. **¿Qué hace un(a) ingeniero(a) industrial?** — caja oscura con los dos párrafos y el
   folleto, foto, y la caja verde claro de **¿Cuánto dura la carrera?**
4. **Plan de estudios** — los 15 bimestres, en tres pestañas de año
5. **Un formato que se adapta a ti**
6. **Potencializa tu carrera con Certificados** — 4 rutas de enfoque
7. **En Universidad Tecmilenio contarás con:**
8. **CTA final**

Es exactamente el orden del frame `1:562` del Figma: Header · Main Hero Banner · Block 1 ·
Block 3 · Block 7 (formato) · Block 4 (certificados) · Block 7 (contarás con) · Block 7 (CTA)
· Footer.

## Imágenes

| Dónde | URL |
| --- | --- |
| Hero | `0e74e932-994a-49b4-a0b4-030281d34ab2.jpg` |
| ¿Qué hace un(a) ingeniero(a) industrial? | `7c16c7e1-ec5e-4d9b-8b52-15b5a4ca69c8.jpg` |
| Connect Online | `c389de17-aadf-4bf9-ba03-6fe53abd167a.jpg` (fija del módulo) |
| Potencializa tu carrera | `4676c614-4231-49c0-bb52-2f8a8b0beca9.jpg` (fija del módulo) |
| Iconos de la franja | `2c0ca968` · `4bdf8225` · `4194c64e` · `56f31a69` |

Las dos fijas y los cuatro iconos salen del panel de assets del Figma 3.0 y se usan igual en
todas las landings que lleven esos módulos.

## El plan de estudios

La página viva muestra los 15 bimestres de golpe en una rejilla de 4 columnas con tipografía
de 8 px, y en móvil los vuelve carrusel. Aquí se reusó el módulo de plan de la plantilla de
Profesional (`.plan-sem`), que ya está en el CSS compartido y ya tiene su JS: tres pestañas de
año, cinco bimestres cada una, dos por fila en escritorio. En móvil las pestañas se vuelven un
`<select>` y las tarjetas se apilan. Sin JS nuevo.

El 15º bimestre sólo lleva **Estancia Empresarial**.

## Pendientes de Marketing

1. **El texto del CTA final.** En el Figma es Lorem Ipsum; aquí se reusó el de la página
   viva, que sí es texto real.
2. **Formulario**: es réplica estática y no envía. Ver `integrations/hubspot-form.md`.
