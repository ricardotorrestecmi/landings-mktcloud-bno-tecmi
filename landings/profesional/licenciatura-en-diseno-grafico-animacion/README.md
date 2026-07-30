# Licenciatura en Diseño Gráfico y Animación — Profesional

Primera landing del **template Profesional** (nivel Licenciaturas). Estructura
nueva basada en el Figma "Plantilla Profesional" › página *2.0 Plantilla de programa*
› frame *2.0 Programa individual*.

- **Figma:** https://www.figma.com/design/pEqbzbbKpOkE69YAjnFkwi/Plantilla-Profesional (node 1-24)
- **Contenido de referencia:** https://universidad.tecmilenio.mx/licenciatura-en-diseno-grafico-animacion
- **CSS del nivel (compartido):** `landings/css/profesional/styles.css`
- **Clase de body:** `tpl-profesional lp-licenciatura-diseno-grafico-animacion`

## Módulos (orden)
1. Header · 2. Hero + formulario + badge "Está en ti" · 3. Franja de datos `.facts`
· 4. ¿Qué hace un(a)…? · 5. Plan de Estudios (tabs por año) · 6. Certificados y Ruta
de enfoque (toggle) · 7. Beneficios · 8. Voces de nuestros estudiantes (video) ·
9. Perfil de Ingreso/Egreso · 10. Preguntas Frecuentes · 11. CTA final · 12. Footer.

## Interacciones (`script.js`, vanilla)
- **Plan de Estudios:** tabs por año (`[data-plan]` / `.plan-tab[data-year]` / `[data-year-panel]`).
- **Certificados / Rutas:** toggle (`[data-tracks]` / `.tracks-tab[data-track]` / `[data-track-panel]`).
- **Acordeones:** uno abierto a la vez (`[data-accordion]`, `<details>` nativo).

## Cómo replicar otra licenciatura
1. Copiar esta carpeta a `landings/profesional/<nuevo-slug>/`.
2. Cambiar `<body class="tpl-profesional lp-<nuevo-slug>">`, `<title>`, meta description.
3. Reemplazar textos, imágenes (URLs CDN), plan de estudios, certificados, FAQ.
4. El CSS del nivel se reutiliza tal cual; solo crear overrides si la carrera lo pide.

## Pendientes de contenido (confirmar con Marketing)
- **Plan de Estudios:** ✅ COMPLETO y oficial — replicado exacto de la página SFMC
  `https://mcv8rkn48lx2xhltpg1912kd8tg4.pub.sfmc-content.com/jkq3eb3ztci`
  (8 semestres, SEDi 1–14, Certificados de inglés 1–7, Skilling en veranos,
  Estancia Empresarial en 8º). Diseño y contenido idénticos al reference.
- **FAQ:** respuestas redactadas a partir de la referencia (el Figma trae placeholder).
- **"Descargar folleto" y "Descarga Plan":** URL de PDF pendiente (hoy `href="#"`).
- **"Voces de nuestros estudiantes":** URL del video de YouTube pendiente (hoy `href="#"`).
- **Formulario:** réplica estática; bloque real de SFMC pendiente (ver `integrations/sfmc-block.html`).

## Assets (CDN admisiones)
Banner, ilustración "Está en ti", foto secundaria, 4 iconos de datos, foto de
certificados, imagen de perfiles y thumbnail de video se referencian desde
`https://image.admisiones.tecmilenio.mx/...`. Logo y redes son locales en `assets/images/`.
