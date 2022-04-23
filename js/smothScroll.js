// Ссылки с главного меню
const navbar = document.querySelector('.header__nav');
const links = navbar.querySelectorAll('a');

// Для каждой ссылки
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Плавный скролл до ссылки
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  });
});