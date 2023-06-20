// slider settings on main page
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
});

// Ticker
const marqueeContainer = document.querySelector(".ticker__marquee");
const marqueeContent = marqueeContainer.innerHTML;
marqueeContainer.innerHTML = marqueeContent + marqueeContent;