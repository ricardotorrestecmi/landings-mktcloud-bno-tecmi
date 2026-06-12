const accordion = document.querySelector("[data-accordion]");

if (accordion) {
  accordion.addEventListener("toggle", (event) => {
    const active = event.target;
    if (!(active instanceof HTMLDetailsElement) || !active.open) return;

    accordion.querySelectorAll("details").forEach((item) => {
      if (item !== active) item.open = false;
    });
  }, true);
}
