"use stric";
// плавный скролл
const navLinks = document.querySelectorAll('.header__nav__link');
const logo = document.querySelector('.header__logo');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

logo.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// фиксируется меню при скролле
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');

  if (window.scrollY > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
