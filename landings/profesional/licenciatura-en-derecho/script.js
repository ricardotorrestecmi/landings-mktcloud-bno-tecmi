/* ==========================================================================
   Template Profesional — interacciones (vanilla, sin dependencias)
   1) Plan de Estudios: tabs por año
   2) Certificados / Rutas de enfoque: toggle
   3) Acordeones: uno abierto a la vez (FAQ, certificados, rutas)
   4) Voces: reproduce el video de YouTube embebido en la propia miniatura
   ========================================================================== */

/* 1) Plan de Estudios — tabs (desktop) + dropdown (móvil) por año ----------- */
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

/* 3) Acordeones — uno abierto a la vez por grupo --------------------------- */
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
