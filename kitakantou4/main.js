// ナビゲーション
// 修正 ターゲットのクラス名変更
$(function() {
    $(".botan2").hover(
      function() {
        $(".course:not(:animated)", this).slideDown();
      },
       function() {
         $(".course", this).slideUp();
      }
    );
  });
// なぜかすぐ帰る



//   画像切り替わり

$(function () {
    $(window).on("scroll", function () {
      const sliderHeight = $(".koko").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".irasuto").addClass("wakatta");
    } 
    });
  });



//   質問のところ
// 修正 一度にすべて展開してしまう部分を修正 ターゲットのclass名変更 
$('.listbtn').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".mousikomi");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
    $(this).removeClass('none');
    $(".mousikomiopen").addClass("detekuru");
  });

  // 修正 追記
  $('.listbtn2').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".mousikomi");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
    $(this).removeClass('none');
    // ターゲットのclass名変更 
    $(".mousikomiopen2").addClass("detekuru");
  });

    // 修正 追記
    $('.listbtn3').on('click', function() {//タイトル要素をクリックしたら
      var findElm = $(this).next(".mousikomi");//直後のアコーディオンを行うエリアを取得し
      $(findElm).slideToggle();//アコーディオンの上下動作
      $(this).removeClass('none');
      // ターゲットのclass名変更 
      $(".mousikomiopen3").addClass("detekuru");
    });

      // 修正 追記
  $('.listbtn4').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".mousikomi");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
    $(this).removeClass('none');
    // ターゲットのclass名変更 
    $(".mousikomiopen4").addClass("detekuru");
  });

    // 修正 追記
    $('.listbtn5').on('click', function() {//タイトル要素をクリックしたら
      var findElm = $(this).next(".mousikomi");//直後のアコーディオンを行うエリアを取得し
      $(findElm).slideToggle();//アコーディオンの上下動作
      $(this).removeClass('none');
      // ターゲットのclass名変更 
      $(".mousikomiopen5").addClass("detekuru");
    });
  
      // 修正 追記
  $('.listbtn6').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".mousikomi");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
    $(this).removeClass('none');
    // ターゲットのclass名変更 
    $(".mousikomiopen6").addClass("detekuru");
  });


//   なぜか一気に全部開く？


// ローディング画面
window.onload = () => {
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded');

    setTimeout(classAdd,1000)
    // 遅らせたいやつ、時間(2000は２秒)
}

const classAdd = () => {
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded');
}

// 修正 グローバルナビのアニメーション追加
// global nav
const navbtn = () => {
  $('.global_nav').each(function () {
      if(!$(this).hasClass('global_active')){
          $(this).removeClass('global_end');
          $(this).addClass('global_active');
      }
      else if($(this).hasClass('global_active')){
          $(this).removeClass('global_active');
          $(this).addClass('global_end');
      }
  })
}

const logoanime = () => {
  let scroll = $(window).scrollTop();
  let windowHeight = $(window).height();
  let targetarea = $(".mittu").offset().top;
  console.log(scroll);
  console.log(windowHeight);
  console.log(targetarea);
  $('.global').each(function () {
    if (scroll >= targetarea - windowHeight) {
      $(this).removeClass('logo_anime2');
      $(this).removeClass('logo_anime3');
      $(this).addClass('logo_anime');
    } else if (scroll <= targetarea - windowHeight) {
      $(this).removeClass('logo_anime');
      $(this).removeClass('logo_anime2');
      $(this).addClass('logo_anime2');
    }
  });
}
$(window).scroll(function () {
  logoanime();
});