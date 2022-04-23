// Все элементы аккордеона
const contents = document.querySelectorAll('.program-line__content');

// Для каждого элемента находим Title и Descr
contents.forEach((elem) => {
  const title = elem.querySelector('.program-line__title');
  const descr = elem.querySelector('.program-line__descr');

  // Вешаем eventListener на каждый Title
  title.addEventListener('click', () => {
    // Если элемент открыт
    if (descr.classList.contains('active')) { 
      // НУжный элемент закрываю
      descr.classList.remove('active');
    // Если элемент закрыт 
    } else { 
      const descrs = document.querySelectorAll('.program-line__descr');
      descrs.forEach((currentDescr) => {
        // Все элементы закрываю
        currentDescr.classList.remove('active'); 
      });
      // Нужный элемент открываю
      descr.classList.add('active'); 
    }
  });
});