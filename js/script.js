$(function () {
  // 대상을 변수에 저장
  const $header = $('header');
  const $menu = $('.gnb>li');
  const $submenu = $('.submenu');
  const duration = 300;

  //메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);
    // $submenu.slideDown();
    // stop (현재진행중인 애니메이션을 즉시 중지)
    $(this).find($submenu).stop().slideDown(duration);

    // 활성화 ㅗ딘 메뉴 표시:on 클래스 부여
    $(this).addClass('on');
    // header에 active클래스부여
    $header.addClass('active');
  });
  //메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });
});
