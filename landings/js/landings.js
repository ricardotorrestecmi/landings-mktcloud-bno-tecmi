/* ==========================================================================
   landings.js — el UNICO JS de las 56 landings (Posgrados, Profesional y Prepa).

   Antes cada landing traia su propio script.js: 51 archivos con 6 versiones
   distintas, mas un shared/prepa.js para las 5 del diseno anterior de Prepa.
   Todo eso vive aqui.

   Secciones 1 a 5: los modulos de Posgrados, Profesional y las dos landings
   nuevas de Prepa (nueva-prepa, nueva-openhouse).
   Seccion 6: el diseno anterior de Prepa, en su propio IIFE.

   Todo va por querySelectorAll o con guarda de existencia, asi que cada bloque
   simplemente no hace nada en las paginas que no tienen ese modulo. Se verifico
   que ningun selector de la seccion 6 coincida con el marcado de las otras.
   ========================================================================== */


/* ==========================================================================
   1) TABS
   ========================================================================== */

/* 1a) Programas por nivel — hub de Posgrados -------------------------------- */
const programButtons = document.querySelectorAll("[data-program-filter]");
const programLists = document.querySelectorAll("[data-program-list]");

programButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.programFilter;

    programButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    programLists.forEach((list) => {
      const isActive = list.dataset.programList === target;
      list.hidden = !isActive;
      list.classList.toggle("is-active", isActive);
    });
  });
});

/* 1b) Plan de estudios por año — programas de Profesional ------------------- */
document.querySelectorAll("[data-plan]").forEach((plan) => {
  const tabs = plan.querySelectorAll(".plan-tab");
  const panels = plan.querySelectorAll("[data-year-panel]");
  const select = plan.querySelector("[data-plan-select]");

  const setYear = (year) => {
    tabs.forEach((t) => {
      const on = t.dataset.year === year;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((panel) => {
      const on = panel.dataset.yearPanel === year;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
    });
    if (select && select.value !== year) select.value = year;
  };

  tabs.forEach((tab) => tab.addEventListener("click", () => setYear(tab.dataset.year)));
  if (select) select.addEventListener("change", () => setYear(select.value));
});

/* 1c) Certificados / Rutas de enfoque — programas de Profesional ------------ */
/* 2) Certificados / Rutas de enfoque — toggle ------------------------------ */
document.querySelectorAll("[data-tracks]").forEach((toggle) => {
  const tabs = toggle.querySelectorAll(".tracks-tab");
  const grid = toggle.parentElement.querySelector(".tracks__grid") || document;
  const panels = grid.querySelectorAll("[data-track-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const track = tab.dataset.track;
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((panel) => {
        const on = panel.dataset.trackPanel === track;
        panel.classList.toggle("is-active", on);
        panel.hidden = !on;
      });
    });
  });
});

/* 1d) Programas — hubs de Profesional --------------------------------------- */
/* 1) Programas — pills + dropdown -------------------------------------------- */
document.querySelectorAll("[data-programs]").forEach((mod) => {
  const tabs = mod.querySelectorAll(".program-tab");
  const panels = mod.querySelectorAll("[data-program-panel]");
  const select = mod.querySelector("[data-programs-select]");

  const setProgram = (slug) => {
    tabs.forEach((tab) => {
      const on = tab.dataset.program === slug;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((panel) => {
      const on = panel.dataset.programPanel === slug;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
    });
    if (select && select.value !== slug) select.value = slug;
  };

  tabs.forEach((tab) => tab.addEventListener("click", () => setProgram(tab.dataset.program)));
  if (select) select.addEventListener("change", () => setProgram(select.value));
});


/* ==========================================================================
   2) ACORDEON
   ========================================================================== */

/* 2a) <details>, uno abierto a la vez por grupo.
   Cubre las 24 de Posgrados y las 15 de programas de Profesional: eran el mismo
   codigo en dos archivos, solo cambiaba querySelector por forEach. ---------- */
document.querySelectorAll("[data-accordion]").forEach((accordion) => {
  accordion.addEventListener(
    "toggle",
    (event) => {
      const active = event.target;
      if (!(active instanceof HTMLDetailsElement) || !active.open) return;
      accordion.querySelectorAll("details").forEach((item) => {
        if (item !== active) item.open = false;
      });
    },
    true
  );
});

/* 2b) Botones con aria-expanded — nueva-prepa.
   Viene del module.js de HubSpot del modulo "Certificaciones"; no editar a mano
   si se quiere que siga coincidiendo con el modulo. ------------------------- */
var module_220233678696=void document.querySelectorAll(".certificaciones-prepa").forEach(function(modulo){modulo.querySelectorAll(".js-acordeon-trigger").forEach(function(trigger){var panel=document.getElementById(trigger.getAttribute("aria-controls")),icono=trigger.querySelector(".js-acordeon-icono");panel&&trigger.addEventListener("click",function(){var abierto="true"===trigger.getAttribute("aria-expanded");trigger.setAttribute("aria-expanded",String(!abierto)),panel.classList.toggle("hidden",abierto),icono&&icono.classList.toggle("rotate-180",!abierto)})})});


/* ==========================================================================
   3) CARRUSEL
   ========================================================================== */

/* 3a) Flechas con estado disabled — hubs de Profesional --------------------- */
/* 2) Rutas de enfoque — carrusel ------------------------------------------- */
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  if (!track) return;

  const paso = () => {
    const card = track.querySelector(".path-card");
    if (!card) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const refresca = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    if (prev) prev.disabled = track.scrollLeft <= 2;
    if (next) next.disabled = track.scrollLeft >= max;
  };

  const mueve = (delta) => {
    const antes = track.scrollLeft;
    const max = track.scrollWidth - track.clientWidth;
    const destino = Math.max(0, Math.min(antes + delta, max));
    track.scrollTo({ left: destino, behavior: "smooth" });
    /* respaldo: si el navegador no anima el desplazamiento, se aplica directo */
    setTimeout(() => {
      if (Math.abs(track.scrollLeft - antes) < 2) track.scrollLeft = destino;
      refresca();
    }, 260);
  };

  if (prev) prev.addEventListener("click", () => mueve(-paso()));
  if (next) next.addEventListener("click", () => mueve(paso()));
  track.addEventListener("scroll", refresca, { passive: true });
  window.addEventListener("resize", refresca);
  refresca();
});

/* 3b) Rutas — nueva-prepa. Del module.js de HubSpot. ----------------------- */
var module_220232624463=void document.querySelectorAll(".rutas-prepa").forEach(function(modulo){var track=modulo.querySelector(".js-rutas-track"),puntos=modulo.querySelectorAll(".js-rutas-puntos button");if(track){puntos.forEach(function(boton,i){boton.addEventListener("click",function(){var t=track.querySelectorAll("li")[i];t&&track.scrollTo({left:t.offsetLeft-track.offsetLeft,behavior:"smooth"})})});var anterior=modulo.querySelector(".js-rutas-anterior"),siguiente=modulo.querySelector(".js-rutas-siguiente");anterior&&anterior.addEventListener("click",function(){track.scrollBy({left:-paso(),behavior:"smooth"})}),siguiente&&siguiente.addEventListener("click",function(){track.scrollBy({left:paso(),behavior:"smooth"})}),track.addEventListener("scroll",marcarActivo,{passive:!0}),marcarActivo()}function paso(){var tarjeta=track.querySelector("li"),gap=parseFloat(getComputedStyle(track).columnGap)||0;return tarjeta?tarjeta.getBoundingClientRect().width+gap:track.clientWidth}function marcarActivo(){if(puntos.length){var actual=Math.round(track.scrollLeft/paso());puntos.forEach(function(boton,i){var punto=boton.firstElementChild;punto.classList.toggle("bg-prepa-punto-activo",i===actual),punto.classList.toggle("bg-prepa-punto",i!==actual),boton.setAttribute("aria-current",i===actual?"true":"false")})}}});

/* 3c) Ubicaciones — nueva-prepa -------------------------------------------- */
/* Carrusel de ubicaciones. Mismo patron que el de rutas, pero aqui las flechas no
   se ocultan por breakpoint sino segun si las tarjetas caben: con tres no aparecen
   en escritorio y con una cuarta se vuelve carrusel solo, sin tocar nada mas. */
document.querySelectorAll(".ubicaciones-prepa").forEach(function (modulo) {
  var track = modulo.querySelector(".js-ubicaciones-track");
  if (!track) return;
  function paso() {
    var tarjeta = track.querySelector("li");
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return tarjeta ? tarjeta.getBoundingClientRect().width + gap : track.clientWidth;
  }
  /* Las flechas solo salen si de verdad hay algo que desplazar: con tres tarjetas
     caben en escritorio y sobran, con una cuarta aparecen solas. */
  function ajusta() {
    var fijo = track.scrollWidth - track.clientWidth <= 1;
    if (modulo.classList.contains("ubicaciones-prepa--fijo") !== fijo) {
      modulo.classList.toggle("ubicaciones-prepa--fijo", fijo);
    }
  }
  ajusta();
  /* Se observa el ancho del track ademas de escuchar "resize": asi tambien reacciona
     a que carguen las fuentes o a cualquier otro cambio de layout. Ocultar las flechas
     ensancha el track y vuelve a disparar el observer, pero converge: si las tarjetas
     caben sin flechas, tambien caben con ellas. */
  if (window.ResizeObserver) new ResizeObserver(ajusta).observe(track);
  window.addEventListener("resize", ajusta);
  window.addEventListener("load", ajusta);

  var anterior = modulo.querySelector(".js-ubicaciones-anterior");
  var siguiente = modulo.querySelector(".js-ubicaciones-siguiente");
  if (anterior) anterior.addEventListener("click", function () {
    track.scrollBy({ left: -paso(), behavior: "smooth" });
  });
  if (siguiente) siguiente.addEventListener("click", function () {
    track.scrollBy({ left: paso(), behavior: "smooth" });
  });
});

/* 3d) "Que esperar" y 3e) Galeria — nueva-openhouse. Del module.js de HubSpot. */
var module_220232393108=void document.querySelectorAll(".expectativas-openhouse").forEach(function(modulo){var track=modulo.querySelector(".js-expectativas-track");if(track){var anterior=modulo.querySelector(".js-expectativas-anterior"),siguiente=modulo.querySelector(".js-expectativas-siguiente");anterior&&anterior.addEventListener("click",function(){track.scrollBy({left:-paso(),behavior:"smooth"})}),siguiente&&siguiente.addEventListener("click",function(){track.scrollBy({left:paso(),behavior:"smooth"})})}function paso(){var tarjeta=track.querySelector("li"),gap=parseFloat(getComputedStyle(track).columnGap)||0;return tarjeta?tarjeta.getBoundingClientRect().width+gap:track.clientWidth}});
var module_220232624450=void document.querySelectorAll(".galeria-openhouse").forEach(function(modulo){var track=modulo.querySelector(".js-galeria-track"),puntos=modulo.querySelectorAll(".js-galeria-puntos button");if(track){puntos.forEach(function(boton,i){boton.addEventListener("click",function(){centrarEn(i,!0)})}),track.addEventListener("scroll",marcarActivo,{passive:!0}),centrar();var ancho=window.innerWidth;window.addEventListener("resize",function(){window.innerWidth!==ancho&&(ancho=window.innerWidth,centrar())})}function fotos(){return track.querySelectorAll("li")}function marcarActivo(){if(puntos.length){var centro,mejor,minima,actual=(centro=track.scrollLeft+track.clientWidth/2,mejor=0,minima=1/0,fotos().forEach(function(foto,i){var d=Math.abs(foto.offsetLeft+foto.offsetWidth/2-centro);d<minima&&(minima=d,mejor=i)}),mejor);puntos.forEach(function(boton,i){var punto=boton.firstElementChild;punto.classList.toggle("bg-prepa-naranja-medio",i===actual),punto.classList.toggle("bg-prepa-amarillo",i!==actual),boton.setAttribute("aria-current",i===actual?"true":"false")})}}function centrarEn(i,suave){var foto=fotos()[i];foto&&track.scrollTo({left:foto.offsetLeft+foto.offsetWidth/2-track.clientWidth/2,behavior:suave?"smooth":"instant"})}function centrar(){centrarEn(Math.floor(fotos().length/2),!1),marcarActivo()}});


/* ==========================================================================
   4) VIDEO DE YOUTUBE
   Se reproduce embebido en la propia miniatura. Cubre las 15 de programas de
   Profesional y los 9 hubs: era el mismo bloque en los dos archivos.
   ========================================================================== */
/* 4) Voces — el video de YouTube se reproduce en línea al hacer clic -------- */
document.querySelectorAll(".voices__video[data-video]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.classList.contains("is-playing")) return;
    event.preventDefault();
    const alto = link.offsetHeight;
    if (alto > 0) link.style.height = alto + "px";   /* conserva el alto de la miniatura */
    link.classList.add("is-playing");
    const frame = document.createElement("iframe");
    frame.src = "https://www.youtube.com/embed/" + link.dataset.video + "?autoplay=1&rel=0";
    frame.title = link.getAttribute("aria-label") || "Video";
    frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allowFullscreen = true;
    link.replaceChildren(frame);
  });
});


/* ==========================================================================
   5) FORMULARIO
   Replica estatica: valida y muestra el mensaje de gracias, pero no envia.
   El endpoint real y el mapeo de campos estan en el integrations/ de cada
   landing. Solo aplica a nueva-prepa y nueva-openhouse.
   ========================================================================== */
document.querySelectorAll("#np-form").forEach(function (f) {
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!f.reportValidity()) return;
    var gracias = document.querySelector(".np-form-gracias");
    if (gracias) { f.hidden = true; gracias.hidden = false; }
  });
});


/* ==========================================================================
   6) DISENO ANTERIOR DE PREPA
   Solo aplica a preparatoria, -cdmx, -monterrey y los dos
   openhouse-prepa-tecmilenio. Era landings/preparatoria/shared/prepa.js y se
   integra tal cual, dentro de su propio IIFE: sus variables no se mezclan con
   las de arriba. Sus selectores (#lead-form, #registro-form, #mobile-menu,
   .accordion-trigger, .btn-modal...) no existen en ninguna de las otras 51.
   ========================================================================== */

/* ============================================================
   SHARED — Batch Preparatoria / Openhouse (Tecmilenio)
   UN SOLO JS para las 5 landings. Vanilla, sin librerías.
   Cada comportamiento va GUARDADO por existencia de su elemento:
   cada página ejecuta solo lo que le corresponde y nada tira error
   si su elemento no existe.

     1. Menú hamburguesa PREPA        (.menu-toggle / #mobile-menu / .menu-close)
     2. Menú hamburguesa OPENHOUSE    (.site-header__burger / #mobile-menu / .mobile-menu__close)
     3. Acordeón de certificaciones   (.accordion-trigger)  [prepa]
     4. Carruseles PREPA (scroll-snap): ubicaciones + rutas + filtro campus MTY
     5. Carruseles OPENHOUSE (transform): beneficios + galería  [copia verificada]
     6. Modal de video OPENHOUSE      (.btn-modal / #modal-video)
     7. Placeholder de teléfono PREPA (#field-phone)
     8. Validación de forms           (#lead-form [prepa] / #registro-form [openhouse])
     9. Tecla Escape                  (cierra menú y modal)

   Producción: los forms se inyectan con hbspt.forms.create y redirigen
   a /registro-concluido-prepa — snippets verbatim en cada
   integrations/hubspot-form.md. Aquí el submit es SIMULADO (preview).
   ============================================================ */
(function () {
  'use strict';

  /* ============================================================
     1. Menú hamburguesa PREPA
     ============================================================ */
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileMenuP = document.getElementById('mobile-menu');
  var menuClose = document.querySelector('.menu-close');

  function setMenu(open) {
    if (!mobileMenuP || !menuToggle) return;
    mobileMenuP.hidden = !open;
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  if (menuToggle && mobileMenuP) {
    setMenu(false);
    menuToggle.addEventListener('click', function () {
      setMenu(mobileMenuP.hidden);
    });
    if (menuClose) {
      menuClose.addEventListener('click', function () { setMenu(false); });
    }
    mobileMenuP.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });
  }

  /* ============================================================
     2. Menú hamburguesa OPENHOUSE
     (mismo id #mobile-menu pero distinto toggle; guardas evitan choque)
     ============================================================ */
  var burger = document.querySelector('.site-header__burger');
  var menuO = document.getElementById('mobile-menu');

  function closeMenuO() {
    if (!menuO || menuO.hidden) return;
    menuO.hidden = true;
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && menuO) {
    burger.addEventListener('click', function () {
      var open = menuO.hidden;
      menuO.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
    });
    var closeBtnO = menuO.querySelector('.mobile-menu__close');
    if (closeBtnO) closeBtnO.addEventListener('click', closeMenuO);
    menuO.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenuO);
    });
  }

  /* ============================================================
     3. Acordeón de certificaciones PREPA (uno abierto a la vez)
     ============================================================ */
  var triggers = Array.prototype.slice.call(document.querySelectorAll('.accordion-trigger'));
  triggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wasOpen = btn.getAttribute('aria-expanded') === 'true';
      triggers.forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        var panel = document.getElementById(other.getAttribute('aria-controls'));
        if (panel) panel.hidden = true;
      });
      if (!wasOpen) {
        btn.setAttribute('aria-expanded', 'true');
        var ownPanel = document.getElementById(btn.getAttribute('aria-controls'));
        if (ownPanel) ownPanel.hidden = false;
      }
    });
  });

  /* ============================================================
     4. Carruseles PREPA (scroll-snap + flechas)
     behavior:'auto' — el smooth se congela en motores headless.
     ============================================================ */
  function initCarousel(trackSelector, arrowSelector, dotsSelector) {
    var track = document.querySelector(trackSelector);
    if (!track) return;
    var arrows = Array.prototype.slice.call(document.querySelectorAll(arrowSelector));
    var dotsBox = dotsSelector ? document.querySelector(dotsSelector) : null;
    var slides = Array.prototype.slice.call(track.children);
    var timer = null, paused = false;
    var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    function step() {
      if (!slides.length) return 0;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
      return slides[0].getBoundingClientRect().width + gap;
    }
    function maxScroll() {
      return track.scrollWidth - track.clientWidth;
    }
    function currentIndex() {
      var s = step();
      return s > 0 ? Math.round(track.scrollLeft / s) : 0;
    }
    function updateDots() {
      if (!dotsBox) return;
      var idx = currentIndex();
      Array.prototype.slice.call(dotsBox.children).forEach(function (dot, i) {
        dot.classList.toggle('active', i === idx);
      });
    }
    function stepBy(dir) {              /* avanza 1, con loop (última → primera) */
      var max = maxScroll();
      if (dir > 0) {
        if (track.scrollLeft >= max - 2) track.scrollTo({ left: 0, behavior: 'auto' });
        else track.scrollBy({ left: step(), behavior: 'auto' });
      } else {
        if (track.scrollLeft <= 2) track.scrollTo({ left: max, behavior: 'auto' });
        else track.scrollBy({ left: -step(), behavior: 'auto' });
      }
    }
    function tick() { if (maxScroll() > 2) stepBy(1); }
    function startAuto() { if (!timer && !paused && !reduce && maxScroll() > 2) timer = window.setInterval(tick, 5000); }
    function stopAuto() { if (timer) { window.clearInterval(timer); timer = null; } }
    function resetAuto() { stopAuto(); startAuto(); }

    arrows.forEach(function (arrow) {
      arrow.addEventListener('click', function () {
        stepBy(parseInt(arrow.getAttribute('data-dir'), 10));
        resetAuto();
      });
    });
    if (dotsBox) {
      slides.forEach(function (_slide, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('tabindex', '-1'); /* contenedor aria-hidden: solo decorativo */
        dot.addEventListener('click', function () {
          track.scrollTo({ left: i * step(), behavior: 'auto' });
          resetAuto();
        });
        dotsBox.appendChild(dot);
      });
    }
    var raf = null;
    track.addEventListener('scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = null; updateDots(); });
    });
    track.addEventListener('pointerenter', function () { paused = true; stopAuto(); });
    track.addEventListener('pointerleave', function () { paused = false; startAuto(); });
    track.addEventListener('focusin', function () { paused = true; stopAuto(); });
    track.addEventListener('focusout', function () { paused = false; startAuto(); });
    window.addEventListener('resize', function () { updateDots(); resetAuto(); });
    updateDots();
    startAuto();
  }

  initCarousel('.ubicaciones-track', '[data-carousel="ubicaciones"]', null);
  initCarousel('.rutas-track', '[data-carousel="rutas"]', '.rutas-dots'); // activo solo en mobile (CSS oculta flechas/dots en desktop)

  /* ---------- 4b. [SOLO MTY] Filtro de campus por select (widget_1732749456516) ---------- */
  var campusSelect = document.getElementById('campus-filter');
  var campusCards = Array.prototype.slice.call(document.querySelectorAll('.card-program-filter'));
  var campusTrack = document.querySelector('.ubicaciones-track');
  if (campusSelect && campusCards.length) {
    campusSelect.addEventListener('change', function () {
      var val = campusSelect.value;
      campusCards.forEach(function (card) {
        var show = (val === '' || val === 'todos' || card.getAttribute('data-categories') === val);
        card.classList.toggle('is-filtered-out', !show);
      });
      // reinicia el scroll del carrusel y recalcula flechas
      if (campusTrack) {
        campusTrack.scrollTo({ left: 0, behavior: 'auto' });
        window.dispatchEvent(new Event('resize'));
      }
    });
  }

  /* ---------- 4c. [SOLO MTY] Filtro del select campus_de_interes del form ----------
     Verbatim del original de /preparatoria-monterrey: tras cargar el form de HubSpot,
     recorta las opciones de select[name="campus_de_interes"] a los 4 campus MTY permitidos
     (values 1105/1106/1101/1102). En el preview el form es estático (no trae ese select),
     por eso el guard `if (selectElement)` evita el error de consola. Ver integrations/hubspot-form.md. */
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      var valoresPermitidos = ['1105', '1106', '1101', '1102'];
      var selectElement = document.querySelector('select[name="campus_de_interes"]');
      if (selectElement) {
        Array.prototype.slice.call(selectElement.options).forEach(function (option, index) {
          if (index !== 0 && valoresPermitidos.indexOf(option.value) === -1) {
            option.remove();
          }
        });
      }
      // (preview) sin select real: se omite en silencio; en producción HubSpot inyecta el campo.
    }, 1000);
  });

  /* ============================================================
     5. Carruseles OPENHOUSE (transform) — copia verificada
     No usa overflow-scroll ni scroll-snap: mueve el track con
     translateX y lo recorta con overflow:hidden del viewport.
     Las cards SIEMPRE son alcanzables (headless, reduced-motion, real).
     ============================================================ */
  function carousel(viewportSel, trackSel, onChange) {
    var viewport = document.querySelector(viewportSel);
    var track = document.querySelector(trackSel);
    if (!viewport || !track) return null;
    var cards = Array.prototype.slice.call(track.children);
    var i = 0, timer = null, paused = false;
    var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

    function stride() {
      if (cards.length < 2) return cards[0] ? cards[0].offsetWidth : 0;
      return cards[1].offsetLeft - cards[0].offsetLeft; /* ancho de card + gap reales */
    }
    function maxOffset() {
      return Math.max(0, track.scrollWidth - viewport.clientWidth);
    }
    function maxIndex() {
      var s = stride();
      return s ? Math.ceil((maxOffset() - 1) / s) : 0;
    }
    function apply() {
      i = Math.max(0, Math.min(maxIndex(), i));
      var off = Math.min(i * stride(), maxOffset());
      track.style.transform = 'translateX(' + (-off) + 'px)';
      if (onChange) onChange(i, maxIndex());
    }
    function goTo(n) { i = n; apply(); resetAuto(); }
    function next() { i = (i >= maxIndex()) ? 0 : i + 1; apply(); resetAuto(); }  /* loop: última → primera */
    function prev() { i = (i <= 0) ? maxIndex() : i - 1; apply(); resetAuto(); }
    function current() { return i; }

    /* autoplay + loop. Pausa en hover/foco/interacción; sin autoplay en reduced-motion */
    function tick() { if (maxIndex() <= 0) return; i = (i >= maxIndex()) ? 0 : i + 1; apply(); }
    function startAuto() { if (!timer && !paused && !reduce && maxIndex() > 0) timer = window.setInterval(tick, 5000); }
    function stopAuto() { if (timer) { window.clearInterval(timer); timer = null; } }
    function resetAuto() { stopAuto(); startAuto(); }

    /* swipe táctil / arrastre (mobile y trackpad) */
    var startX = null;
    viewport.addEventListener('pointerdown', function (e) { startX = e.clientX; });
    viewport.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX; startX = null;
      if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    });
    viewport.addEventListener('pointerenter', function () { paused = true; stopAuto(); });
    viewport.addEventListener('pointerleave', function () { paused = false; startAuto(); });
    viewport.addEventListener('focusin', function () { paused = true; stopAuto(); });
    viewport.addEventListener('focusout', function () { paused = false; startAuto(); });
    window.addEventListener('resize', apply);

    apply();
    startAuto();
    return { goTo: goTo, next: next, prev: prev, current: current, maxIndex: maxIndex };
  }

  /* ---------- Carrusel de beneficios (flechas de a 1, autoplay + loop) ---------- */
  var prevB = document.querySelector('.benefits__arrow--prev');
  var nextB = document.querySelector('.benefits__arrow--next');
  var benefits = carousel('.benefits__viewport', '.benefits__track');
  if (benefits) {
    if (prevB) prevB.addEventListener('click', benefits.prev);
    if (nextB) nextB.addEventListener('click', benefits.next);
  }

  /* ---------- Galería (dots sincronizados + flechas mobile, autoplay + loop) ---------- */
  var gDots = Array.prototype.slice.call(document.querySelectorAll('.gallery__dots button'));
  var prevG = document.querySelector('.gallery__arrow--prev');
  var nextG = document.querySelector('.gallery__arrow--next');
  var gallery = carousel('.gallery__viewport', '.gallery__track', function (idx, max) {
    gDots.forEach(function (d, k) {
      d.setAttribute('aria-selected', String(k === Math.min(idx, gDots.length - 1)));
    });
  });
  if (gallery) {
    gDots.forEach(function (d, k) { d.addEventListener('click', function () { gallery.goTo(k); }); });
    if (prevG) prevG.addEventListener('click', gallery.prev);
    if (nextG) nextG.addEventListener('click', gallery.next);
  }

  /* ============================================================
     6. Modal de video OPENHOUSE (patrón HubSpot: src diferido)
     ============================================================ */
  var modal = document.getElementById('modal-video');
  var iframe = modal ? modal.querySelector('.iframe-video') : null;
  var lastFocus = null;

  function watchToEmbed(url) {
    /* https://www.youtube.com/watch?v=dqUHsj5LZL0&feature=youtu.be → /embed/dqUHsj5LZL0 */
    var m = url.match(/[?&]v=([\w-]+)/);
    return m ? 'https://www.youtube.com/embed/' + m[1] : url;
  }

  function openModal() {
    if (!modal || !iframe) return;
    lastFocus = document.activeElement;
    iframe.src = watchToEmbed(iframe.getAttribute('data-url'));
    modal.hidden = false;
    document.body.classList.add('modal-open');
    var closeEl = modal.querySelector('.modal__close');
    if (closeEl) closeEl.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    if (iframe) iframe.src = ''; /* detiene la reproducción (comportamiento HubSpot) */
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll('.btn-modal').forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });
  if (modal) {
    modal.querySelectorAll('[data-close-modal]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });
  }

  /* ============================================================
     7. Placeholder del teléfono por viewport PREPA
     ============================================================ */
  var phone = document.getElementById('field-phone');
  var mqMobile = window.matchMedia('(max-width: 767px)');
  function syncPhonePlaceholder() {
    if (phone) phone.placeholder = mqMobile.matches ? 'Teléfono' : 'Número de teléfono';
  }
  if (mqMobile.addEventListener) {
    mqMobile.addEventListener('change', syncPhonePlaceholder);
  }
  syncPhonePlaceholder();

  /* ============================================================
     8a. Validación + submit simulado PREPA (#lead-form)
     ============================================================ */
  var formP = document.getElementById('lead-form');
  if (formP) {
    var statusP = formP.querySelector('.form-status');
    formP.addEventListener('submit', function (e) {
      e.preventDefault(); // PREVIEW: no se envía nada a HubSpot

      var valid = true;
      var fields = formP.querySelectorAll(
        'input[type="text"], input[type="tel"], input[type="email"], select'
      );
      fields.forEach(function (field) {
        if (!field.checkValidity()) {
          field.setAttribute('aria-invalid', 'true');
          valid = false;
        } else {
          field.removeAttribute('aria-invalid');
        }
      });

      // Checkbox de privacidad: required solo cuando es visible (mobile)
      var privacy = document.getElementById('field-privacy');
      if (privacy && privacy.offsetParent !== null) {
        if (!privacy.checked) {
          privacy.setAttribute('aria-invalid', 'true');
          valid = false;
        } else {
          privacy.removeAttribute('aria-invalid');
        }
      }

      if (statusP) {
        statusP.hidden = false;
        if (!valid) {
          statusP.textContent = 'Revisa los campos marcados para continuar.';
        } else {
          statusP.textContent = '¡Listo! Recibimos tu información. (Preview: envío simulado)';
          // Producción (NO activar en preview):
          // window.location.href = 'https://universidad.tecmilenio.mx/registro-concluido-prepa';
        }
      }
    });
  }

  /* ============================================================
     8b. Validación + submit simulado OPENHOUSE (#registro-form)
     ============================================================ */
  var formO = document.getElementById('registro-form');
  if (formO) {
    var errorBox = document.getElementById('registro-error');
    var okNote = document.getElementById('registro-ok');
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    var telRe = /^[\d\s()+-]{10,15}$/;

    formO.addEventListener('submit', function (e) {
      e.preventDefault(); /* el preview NO postea a HubSpot */
      var errors = [];

      formO.querySelectorAll('[aria-invalid]').forEach(function (el) {
        el.removeAttribute('aria-invalid');
      });

      formO.querySelectorAll('input[required], select[required]').forEach(function (el) {
        var value = el.type === 'checkbox' ? el.checked : el.value.trim();
        var bad = !value;
        if (!bad && el.type === 'email') bad = !emailRe.test(el.value.trim());
        if (!bad && el.type === 'tel') bad = !telRe.test(el.value.trim());
        if (bad) {
          if (el.type !== 'checkbox') el.setAttribute('aria-invalid', 'true');
          errors.push(el);
        }
      });

      if (errors.length) {
        var first = errors[0];
        var msg = 'Completa los campos marcados para continuar.';
        if (first.type === 'email' && first.value.trim()) msg = 'Revisa el formato del correo electrónico.';
        else if (first.type === 'tel' && first.value.trim()) msg = 'Revisa el formato del teléfono (10 dígitos).';
        else if (first.type === 'checkbox') msg = 'Debes aceptar el aviso para continuar.';
        if (errorBox) { errorBox.textContent = msg; errorBox.hidden = false; }
        if (okNote) okNote.hidden = true;
        first.focus();
        return;
      }

      if (errorBox) errorBox.hidden = true;
      if (okNote) okNote.hidden = false;
    });
  }

  /* ============================================================
     9. Tecla Escape — cierra menú (ambos) y modal
     ============================================================ */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (mobileMenuP && !mobileMenuP.hidden) setMenu(false);
    closeMenuO();
    closeModal();
  });
})();
