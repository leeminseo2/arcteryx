$(function () {
  // Initialize the work slider
  gsap.registerPlugin(ScrollTrigger);

  const $btnMmenu = $('.btn-menu');
  const $mSubmenu = $('.m-submenu-wrap');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');
  const $mGnbMenu = $('.m-gnb > li');
  const $mGnbSubmenu = $('.m-gnb-sub');

  // 모바일 용 메뉴를 클릭했을 때
  $mGnbMenu.on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).find($mGnbSubmenu).stop().slideToggle(duration);
    $(this).siblings().find($mGnbSubmenu).stop().slideUp(duration);
  });

  $btnMmenu.on('click', function () {
    $mSubmenu.addClass('active');
    $dim.fadeIn(duration);
  });

  $btnClose.add($dim).on('click', function () {
    $mSubmenu.removeClass('active');
    $dim.fadeOut(duration);

    // 모바일 용 서브메뉴 초기화
    $mGnbMenu.removeClass('on');
    $mGnbSubmenu.stop().slideUp(duration);
  });

  const $window = $(window);
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);
    $(this).addClass('on');
    $header.addClass('active');
  });

  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  $window.on('wheel', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $header.removeClass('hide');
    } else {
      $header.addClass('hide');
    }
  });

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
    pagination: {
      el: '.best-swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.btn-after-black',
      prevEl: '.btn-before-black',
    },
    breakpoints: {
      621: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 4,
      },
    },
    // autoplay: true,
  });
});
