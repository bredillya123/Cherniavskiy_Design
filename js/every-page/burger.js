
// burger menu
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".navigation__main");
const wrapperBlur = document.querySelector(".wrapper");

if (iconMenu){  
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("menu-icon--active");
    menuBody.classList.toggle("navigation__main--active");
    wrapperBlur.classList.toggle("wrapper__active");
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
        wrapperBlur.classList.toggle("wrapper__active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
};


// header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header__scroll');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide()) {
      //scroll down
      header.classList.add('header__scroll');
  }
  else if(scrollPosition() < lastScroll && containHide()){
      //scroll up
      header.classList.remove('header__scroll');
  }

  lastScroll = scrollPosition();
});


// plagin for socials 
document.querySelector('.social-pl__btn').addEventListener('click', function() {
  document.querySelector('.social-pl__list').classList.toggle('social-pl__list--active');
  document.querySelector('.social-pl__btn').classList.toggle("social-pl__btn--active");
});