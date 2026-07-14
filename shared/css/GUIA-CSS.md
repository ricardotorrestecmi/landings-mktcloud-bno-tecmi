# Guía CSS — Landings de posgrado ("¿dónde toco qué?")

Referencia rápida para mantener las LPs sin volver a inflar los `styles.css`.

## 1. Modelo de 2 archivos
| archivo | qué es | alcance |
|---|---|---|
| `shared/css/landing.css` | estilos **GENERALES** | común a las 24 LPs — **editar aquí cambia TODAS** |
| `landings/posgrados/<slug>/styles.css` | estilos **PROPIOS** de esa LP | solo esa LP |

**Orden de carga:** `landing.css` → luego `styles.css`. Por eso `styles.css` **siempre puede
sobreescribir** al general (misma especificidad → gana el que carga después).

## 2. Regla de oro: ¿dónde va mi cambio?
- ¿Aplica a **todas** las LPs? → `landing.css`.
- ¿Es de **una sola** LP? → su `styles.css`.
- ¿Dudas? → ponlo en `styles.css` (local, no rompe a las demás). Si luego lo repites en varias
  LPs, súbelo a `landing.css` y bórralo de cada `styles.css`.

## 3. Lo que se queda por-LP a propósito (NO subir a landing.css)
Son "knobs" que suelen variar por programa aunque hoy coincidan:
- `.hero` → imagen de fondo (el knob real es **`--hero-image`**) y `min-height`.
- `.hero h1` / `.hero p` → `line-height` / `margin` (dependen del largo del copy).
- `.facts` → `grid-template-columns` / `padding` / `gap` (y la variante `.facts--four`).
- tamaños de `.facts img` / `.facts strong` / `.facts span`.
- `.final-cta h2` → `font-size` / `line-height`.
- `.format-card` / `.benefit-grid` / `.programs__grid` / `.hero__inner` → columnas / `max-width` / `gap`.

## 4. Excepción importante: el hub
`landings/posgrados/posgrados/` **NO carga `landing.css`** — todo su estilo vive en su propio
`styles.css`. Un cambio en `landing.css` **NO le llega**: si el hub debe cambiar, toca su
`styles.css` aparte.

## 5. Para no volver a inflar los archivos
- ❌ No pegues un bloque de "fixes" al final por si acaso → ✏️ edita la regla que **ya existe**.
- ❌ No apiles `!important`. Si tu regla "no gana", revisa por qué pierde (orden/especificidad),
  no añadas otro `!important` encima.
- ❌ No agregues otro `@media (mismo breakpoint)`: añade tu regla al bloque de ese breakpoint que
  ya está en el archivo.
- ✅ Un selector puede aparecer varias veces **legítimamente**: una vez base + una por cada
  breakpoint donde lo personalizas. Eso es responsive normal, no duplicación.

## 6. Verificar que un refactor NO cambió el aspecto
Cuando el cambio **no debe alterar píxeles** (limpieza, mover a `landing.css`), usa el harness:
```bash
cd tools/css-refactor && npm install       # una vez
# (en el árbol previo al cambio)
node capture.mjs before
#  ...aplica tu cambio...
node capture.mjs after
node diff.mjs before after                 # objetivo: 0 en computed-style, ~0 px
```
Para cambios de diseño **intencionales** (sí mueven píxeles), revisa visualmente en su lugar.
Detalle completo del refactor de dedup: `tools/css-refactor/REPORT.md`.
