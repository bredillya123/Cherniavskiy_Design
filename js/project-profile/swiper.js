// slider settings on project-profile page

const swiperProfOne = new Swiper('.swiper-top', {

  slidesPerView: 1,

  navigation: {
    nextEl: '.arr-right',
    prevEl: '.arr-left',
  },
});

const swiperDraw = new Swiper('.swiper-draw', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperBot = new Swiper('.swiper-bot', {
  slidesPerView: 4, // Основная настройка для десктопной версии
  spaceBetween: 30, // Отступ между слайдами
  navigation: {
    nextEl: '.arr-right',
    prevEl: '.arr-left',
  },
  allowTouchMove: true,
  breakpoints: {
    // Для мобильных устройств с максимальной шириной 767.98px
    210: {
      slidesPerView: 2, // Изменяемое количество слайдов для мобильных
    },
    // Для планшетных устройств с максимальной шириной 1199.98px
    768: {
      slidesPerView: 3, // Изменяемое количество слайдов для планшетов
    },
    1200: {
      slidesPerView: 4, // Изменяемое количество слайдов для планшетов
    },
  },
});
console.log("test");
