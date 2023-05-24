"use strict"

const element = document.querySelector('.social-pl');
const footerPosition = document.querySelector('.footer').offsetTop;
const whatSection = document.querySelector("#what");
const windowHeight = window.innerHeight;

function isBlockVisible(block) {
  const blockPosition = block.getBoundingClientRect();
  return blockPosition.top < windowHeight && blockPosition.bottom >= 0;
}

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (isBlockVisible(whatSection) || scrollPosition + window.innerHeight >= footerPosition) {
    element.classList.add('social-pl__hide');
  } else {
    element.classList.remove('social-pl__hide');
  }
});



  

