/* ==========================================================================
   Carreras Profesionales — interacciones (vanilla, sin dependencias)
   1) Programas: pills (desktop) + dropdown (móvil) por carrera
   2) Rutas de enfoque: carrusel con flechas
   3) Voces: reproduce el video de YouTube embebido en la propia miniatura
   ========================================================================== */

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

/* 3) Voces — el video de YouTube se reproduce en línea al hacer clic -------- */
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
