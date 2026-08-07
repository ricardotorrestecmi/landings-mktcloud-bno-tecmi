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
