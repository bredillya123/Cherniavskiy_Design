"use scrict"

// slider settings
const swiper = new Swiper('.swiper', {
  // dots
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // swipes
  simulateTouch: 0,

  // infinit active
  loop: true,
  loopedSlides: 5,

  // autoplay mode
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
  // speed slides
  speed: 800,

  // slide effect
  effect: 'fade',
})

// burger menu
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".navigation__main");

if (iconMenu){  
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock")
    iconMenu.classList.toggle("menu-icon--active");
    menuBody.classList.toggle("navigation__main--active");
  });
}

// slow scrool to section
const menuLinks = document.querySelectorAll(".navigation__link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick)
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

      if(iconMenu.classList.contains('menu-icon--active')){
        document.body.classList.toggle("_lock")
        iconMenu.classList.toggle("menu-icon--active");
        menuBody.classList.toggle("navigation__main--active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

