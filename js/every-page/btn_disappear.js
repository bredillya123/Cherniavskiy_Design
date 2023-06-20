"use strict"

const element = document.querySelector('.social-pl');
const footerPosition = document.querySelector('.footer').offsetTop;
const windowHeight = window.innerHeight;

function isElementVisible(element) {
  const elementPosition = element.getBoundingClientRect();
  return elementPosition.top < windowHeight && elementPosition.bottom >= 0;
}

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= footerPosition - windowHeight) {
    element.classList.add('social-pl__hide');
  } else {
    element.classList.remove('social-pl__hide');
  }
});



  

