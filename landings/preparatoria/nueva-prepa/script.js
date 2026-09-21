/* Acordeon de certificaciones y carrusel de rutas: los dos module.js de la plantilla
   Prepa Tailwind - Ago26, concatenados tal cual los sirve HubSpot. */
var module_220233678696=void document.querySelectorAll(".certificaciones-prepa").forEach(function(modulo){modulo.querySelectorAll(".js-acordeon-trigger").forEach(function(trigger){var panel=document.getElementById(trigger.getAttribute("aria-controls")),icono=trigger.querySelector(".js-acordeon-icono");panel&&trigger.addEventListener("click",function(){var abierto="true"===trigger.getAttribute("aria-expanded");trigger.setAttribute("aria-expanded",String(!abierto)),panel.classList.toggle("hidden",abierto),icono&&icono.classList.toggle("rotate-180",!abierto)})})});
var module_220232624463=void document.querySelectorAll(".rutas-prepa").forEach(function(modulo){var track=modulo.querySelector(".js-rutas-track"),puntos=modulo.querySelectorAll(".js-rutas-puntos button");if(track){puntos.forEach(function(boton,i){boton.addEventListener("click",function(){var t=track.querySelectorAll("li")[i];t&&track.scrollTo({left:t.offsetLeft-track.offsetLeft,behavior:"smooth"})})});var anterior=modulo.querySelector(".js-rutas-anterior"),siguiente=modulo.querySelector(".js-rutas-siguiente");anterior&&anterior.addEventListener("click",function(){track.scrollBy({left:-paso(),behavior:"smooth"})}),siguiente&&siguiente.addEventListener("click",function(){track.scrollBy({left:paso(),behavior:"smooth"})}),track.addEventListener("scroll",marcarActivo,{passive:!0}),marcarActivo()}function paso(){var tarjeta=track.querySelector("li"),gap=parseFloat(getComputedStyle(track).columnGap)||0;return tarjeta?tarjeta.getBoundingClientRect().width+gap:track.clientWidth}function marcarActivo(){if(puntos.length){var actual=Math.round(track.scrollLeft/paso());puntos.forEach(function(boton,i){var punto=boton.firstElementChild;punto.classList.toggle("bg-prepa-punto-activo",i===actual),punto.classList.toggle("bg-prepa-punto",i!==actual),boton.setAttribute("aria-current",i===actual?"true":"false")})}}});

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

/* Replica estatica del formulario: no envia a HubSpot. El endpoint real y el mapeo
   de campos estan en integrations/hubspot-form.md. */
document.querySelectorAll("#np-form").forEach(function (f) {
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!f.reportValidity()) return;
    var gracias = document.querySelector(".np-form-gracias");
    if (gracias) { f.hidden = true; gracias.hidden = false; }
  });
});
