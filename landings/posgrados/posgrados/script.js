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

const formatContent = {
  presencial: {
    title: "Presencial",
    copy: "Vive tu posgrado en campus, con clases guiadas por docentes expertos y actividades que fortalecen tu red profesional.",
    note: "*Disponibilidad sujeta al programa y campus.",
  },
  online: {
    title: "Online",
    copy: "Estudia desde, donde y cuando quieras con formato flexible de horario virtual y experiencias presenciales. Diseñado para que lleves tu posgrado al siguiente nivel con un método adaptable.",
    note: "*Aplica para especialidades.",
  },
  connect: {
    title: "Connect",
    copy: "Combina sesiones en vivo, recursos digitales y acompañamiento para avanzar con mayor flexibilidad sin perder cercanía con tu comunidad académica.",
    note: "*Consulta disponibilidad por programa.",
  },
};

const formatButtons = document.querySelectorAll("[data-format]");
const formatTitle = document.querySelector("[data-format-title]");
const formatCopy = document.querySelector("[data-format-copy]");
const formatNote = document.querySelector("[data-format-note]");

formatButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const format = formatContent[button.dataset.format];
    if (!format) return;

    formatButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    formatTitle.textContent = format.title;
    formatCopy.textContent = format.copy;
    formatNote.textContent = format.note;
  });
});
