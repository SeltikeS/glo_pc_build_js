const modal = () => {
  // Кнопки
  const modalBtn = document.querySelector(".modal__button");
  const courseBtn = document.querySelector(".course__button");
  // Модальное окно
  const modal = document.querySelector(".modal");
  const modalInner = modal.querySelector(".modal__inner");

  // По клику на кнопку открывается модальное окно
  function buttonOpen(button) {
    button.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  buttonOpen(modalBtn);
  buttonOpen(courseBtn);

  // При клике мимо модального окна - оно закрывается
  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if (!modalContent) {
      modal.style.display = "";
    }
  });

  modalInner.style.position = "relative";

  // Новый элемент крестик
  const xBtn = document.createElement("div");
  xBtn.innerHTML =
    '<span class="iconify" data-icon="emojione-monotone:cross-mark"></span>';
  xBtn.style.cssText = `
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

  // Вставка крестика в modalInner перед другими элементами
  modalInner.prepend(xBtn);

  // Закрытие окна на крестик
  xBtn.addEventListener("click", () => {
    modal.style.display = "";
  });
};

modal();
