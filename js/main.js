"use scrict"

// slider settings
const swiper = new Swiper('.swiper', {
  // dots
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
  speed: 1000,

  // slide effect
  effect: 'fade',
})

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
}

// custom cursor
const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
            pointerColor: "#cecece",
            ringSize: 15,
            ringClickSize: (options["ringSize"] || 15) - 5,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.2)
        ringY = trace(ringY, mouseY, 0.2)

        if (document.querySelector(".p-action-click:hover")) {
            pointer.style.borderColor = getOption("pointerColor")
            isHover = true
        } else {
            pointer.style.borderColor = "white"
            isHover = false
        }
        ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.style.padding = getOption("ringSize") + "px"
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

init_pointer({
            
});

// header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header__scroll');

window.addEventListener('scroll', () => {
  if(scrollPosition() > lastScroll && !containHide()) {
      //scroll down
      console.log(scrollPosition());
      header.classList.add('header__scroll');
  }
  else if(scrollPosition() < lastScroll && containHide()){
      //scroll up
      console.log(scrollPosition());
      header.classList.remove('header__scroll');
  }

  lastScroll = scrollPosition();
})


// plagin for socials 
const SocialBtn = document.querySelector(".social-pl__btn");
const blockSolcial = document.querySelector(".social-pl__list");

if (SocialBtn){  
  SocialBtn.addEventListener("click", function(e) {
    SocialBtn.classList.toggle("social-pl__btn--active");
    blockSolcial.classList.toggle("social-pl__list--active");
  });
}

const SocialLinks = document.querySelector(".social-pl__list");

if (SocialLinks){  
  SocialLinks.addEventListener("click", function(e) {
    SocialBtn.classList.toggle("social-pl__btn--active");
    blockSolcial.classList.toggle("social-pl__list--active");
  });
}
