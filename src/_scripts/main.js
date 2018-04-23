window.addEventListener('load', () => {
  let $circle = $('.circle'),
      $papers = $('.paper'),
      $mail = $('.mail'),
      $mailBack = $('.mail-back__paper'),
      $mailFront = $('.mail-front__paper'),
      $check = $('.check');

  function mailAnimationShow() {
    $($mail).addClass('show');
    setTimeout(mailAnimationBack, 600);
    setTimeout(mailAnimationFront, 700);
  }

  function mailAnimationBack() {
    $($mailBack).addClass('animate');
  }

  function mailAnimationFront() {
    $($mailFront).addClass('animate');
  }

  function mailAnimationHide() {
    $($mail).addClass('hide');
  }

  function hidePapers() {
    $($papers).addClass('hide');
  }

  function checkAnimation() {
    $circle.animate({ width: '100px', height: '100px' }, 1000, 'easeOutBounce');
    $($check).addClass('show');
  }

  $($circle).on('click', () => {
    $($papers).addClass('folder');
    setTimeout(mailAnimationShow, 500);
    setTimeout(hidePapers, 1400);
    setTimeout(mailAnimationHide, 1600);
    setTimeout(checkAnimation, 2200)
  })
});
