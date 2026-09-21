/* Los module.js de los modulos "Que esperar" y "Galeria", tal cual los sirve HubSpot. */
var module_220232393108=void document.querySelectorAll(".expectativas-openhouse").forEach(function(modulo){var track=modulo.querySelector(".js-expectativas-track");if(track){var anterior=modulo.querySelector(".js-expectativas-anterior"),siguiente=modulo.querySelector(".js-expectativas-siguiente");anterior&&anterior.addEventListener("click",function(){track.scrollBy({left:-paso(),behavior:"smooth"})}),siguiente&&siguiente.addEventListener("click",function(){track.scrollBy({left:paso(),behavior:"smooth"})})}function paso(){var tarjeta=track.querySelector("li"),gap=parseFloat(getComputedStyle(track).columnGap)||0;return tarjeta?tarjeta.getBoundingClientRect().width+gap:track.clientWidth}});
var module_220232624450=void document.querySelectorAll(".galeria-openhouse").forEach(function(modulo){var track=modulo.querySelector(".js-galeria-track"),puntos=modulo.querySelectorAll(".js-galeria-puntos button");if(track){puntos.forEach(function(boton,i){boton.addEventListener("click",function(){centrarEn(i,!0)})}),track.addEventListener("scroll",marcarActivo,{passive:!0}),centrar();var ancho=window.innerWidth;window.addEventListener("resize",function(){window.innerWidth!==ancho&&(ancho=window.innerWidth,centrar())})}function fotos(){return track.querySelectorAll("li")}function marcarActivo(){if(puntos.length){var centro,mejor,minima,actual=(centro=track.scrollLeft+track.clientWidth/2,mejor=0,minima=1/0,fotos().forEach(function(foto,i){var d=Math.abs(foto.offsetLeft+foto.offsetWidth/2-centro);d<minima&&(minima=d,mejor=i)}),mejor);puntos.forEach(function(boton,i){var punto=boton.firstElementChild;punto.classList.toggle("bg-prepa-naranja-medio",i===actual),punto.classList.toggle("bg-prepa-amarillo",i!==actual),boton.setAttribute("aria-current",i===actual?"true":"false")})}}function centrarEn(i,suave){var foto=fotos()[i];foto&&track.scrollTo({left:foto.offsetLeft+foto.offsetWidth/2-track.clientWidth/2,behavior:suave?"smooth":"instant"})}function centrar(){centrarEn(Math.floor(fotos().length/2),!1),marcarActivo()}});

/* Replica estatica del formulario: no envia a HubSpot. Endpoint y campos reales
   en integrations/hubspot-form.md. */
document.querySelectorAll("#np-form").forEach(function (f) {
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!f.reportValidity()) return;
    var gracias = document.querySelector(".np-form-gracias");
    if (gracias) { f.hidden = true; gracias.hidden = false; }
  });
});
