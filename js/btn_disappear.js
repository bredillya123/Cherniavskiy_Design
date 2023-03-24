"use strict"

const element = document.querySelector('.social-pl');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const footerPosition = document.querySelector('.footer').offsetTop;

    if (scrollPosition + window.innerHeight >= footerPosition) {
        // Делаем элемент невидимым
        element.classList.add('social-pl__hide');
    } else {
        // Возвращаем элемент видимым
        element.classList.remove('social-pl__hide');
    }
  });

