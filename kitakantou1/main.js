window.onload = () =>{
  // const snipper = document.getElementById('loading');
  // snipper.classList.add('loaded')
  setTimeout(classAdd,800);
}

const classAdd = () =>{
  const snipper = document.getElementById('loading');
  snipper.classList.add('loaded')
}

$('#target').click(()=>{
  $('#target').toggleClass('active');
  $('#nav_target').toggleClass('nav_active');
});


// スライドショー
$('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 7000,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 5,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    centerMode: true, // centerModeを有効にする
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1.5,//スライドを画面に1.5枚見せる
      }
    }
  ]
  });

  // // 戻るぼたん
  // $(function () {
  //   $("#js-pagetop").click(function () {
  //     $('html, body').animate({
  //       scrollTop: 0
  //     }, 300);
  //   });
  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() > 1) {
  //       $('#js-pagetop').fadeIn(300).css('display', 'flex')
  //     } else {
  //       $('#js-pagetop').fadeOut(300)
  //     }
  //   });
  // });

  // モーダル
  $('.pdf').modaal({
    type: 'iframe',
});