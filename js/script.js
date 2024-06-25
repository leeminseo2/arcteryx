$(function () {
  // Initialize the work slider
  gsap.registerPlugin(ScrollTrigger);

  const newSlider = new Swiper('.newcollection-slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    // autoplay: true,
    pagination: {
      el: '.col-swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.btn-after-white',
      prevEl: '.btn-before-white',
    },

    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      621: {
        slidesPerView: 1,
      },
      837: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  const bestSlider = new Swiper('.bestseller-slider', {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 4,
      },
    },
    // autoplay: true,
  });
});
