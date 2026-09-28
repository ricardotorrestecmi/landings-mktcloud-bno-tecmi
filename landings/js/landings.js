/* ==========================================================================
   landings.js — interacciones compartidas por las landings de Posgrados,
   Profesional y las dos nuevas de Prepa (nueva-prepa y nueva-openhouse).

   Antes cada landing tenia su propio script.js: 51 archivos con 6 versiones
   distintas. Aqui viven las 5 funciones que se repartian entre ellas.

   Todo va por querySelectorAll, asi que cada bloque simplemente no hace nada
   en las paginas que no tienen ese modulo. Se puede cargar en cualquiera.

   Las 5 landings del diseno anterior de Prepa (preparatoria, -cdmx, -monterrey
   y los dos openhouse-prepa-tecmilenio) siguen con preparatoria/shared/prepa.js:
   son otro diseno y no comparten marcado con estas.
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
