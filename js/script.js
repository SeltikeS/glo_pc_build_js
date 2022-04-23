const contents = document.querySelectorAll('.program-line__content');

contents.forEach((elem) => {
  const title = elem.querySelector('.program-line__title');
  const descr = elem.querySelector('.program-line__descr');

  title.addEventListener('click', () => {
    if (descr.classList.contains('active')) {
      descr.classList.remove('active');
    } else {
      const descrs = document.querySelectorAll('.program-line__descr');
      descrs.forEach((currentDescr) => {
        currentDescr.classList.remove('active');
      });
      descr.classList.add('active');
    }
  });
});