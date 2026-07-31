# Licenciatura en Gastronomía Internacional — Profesional

Décima landing del **template Profesional**. Misma estructura y CSS que las
demás; solo cambia el contenido.

- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-gastronomia-internacional
- **Plan de estudios:** https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/xtxzdvqxrh3
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-en-gastronomia-internacional`

## Contenido
La página oficial trae todos los módulos del template, así que **el contenido
es oficial**:

- Hero, franja de datos (Presencial · Semestral · 8 Semestres · 65/35).
- "¿Qué hace un(a) licenciado(a) en Gastronomía Internacional?" (2 párrafos).
- **Plan de estudios** del SFMC (8 semestres, SEDi 1-14, Certificados de inglés
  1-7, Skilling en veranos, Estancia Empresarial en 8º).
- **Certificados** por semestre (Primer a Quinto) y **3 rutas de enfoque**:
  Gastronomía regional mexicana · Gastronomía latinoamericana · Gastronomía
  internacional.
- Beneficios, Voces, perfil de ingreso/egreso, FAQ y CTA final.

Notas:
- El **FAQ tiene solo 2 preguntas** porque así viene en la oficial (las demás
  LP traen 3).
- Perfiles con los títulos de la oficial: "Perfil de Ingreso" y **"Perfil de
  Egreso"** (sin "y Campo Laboral").
- Se corrigieron erratas evidentes del SFMC: "reposter{ia" → "repostería",
  "Planiación" → "Planeación". También se usó "vitivinicultura" (SFMC) en vez
  de "Vitinicultura" (oficial), por ser la forma correcta.
- En el acordeón de certificados se normalizaron los títulos de los semestres;
  la oficial alterna mayúsculas ("Segundo Semestre", "Tercer Semestre").

Única adición del template que no está en la oficial: la tarjeta
**"¿Cuánto dura la carrera?"** (viene del Figma, mismo texto que las demás LP).

## Pendientes
- URL del **folleto** ("Descarga el folleto") y del **plan de estudios**
  ("Descarga Plan") — hoy `href="#"`.
- URL del **video de YouTube** en "Voces de nuestros estudiantes" — hoy `href="#"`.
- **Formulario:** réplica estática del oficial; bloque real de SFMC pendiente
  (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
- Banner: `6a111e46-ca32-4eef-9b9e-feca8e4d822c.jpg`
- Ilustración "Está en ti": `d85661ef-3160-49d4-93f1-1cbf00d231c4.png`
- Foto "¿Qué hace un…?": `7cc04601-37bd-4597-9ab7-a8888066c7d4.jpg`
- Iconos de datos, foto de certificados, perfil y video: los mismos del template.

Logo y redes son locales en `assets/images/`.
