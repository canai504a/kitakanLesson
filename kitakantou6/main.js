$(window).on("load", function () {
  $("#splash").delay(1500).fadeOut("slow");
  $("#splash_logo").delay(1200).fadeOut("slow");
});

// =========ハンバーガーメニュー
// ハンバーガーボタン（.openbtn4）がクリックされたときの動作
$(".openbtn4").click(function () {
  // ハンバーガーボタンに"active"クラスの有無をトグル（切り替え）する
  // これにより、ボタンのデザインが「メニュー」から「閉じる」に変わる
  $(this).toggleClass("active");

  // ナビゲーション(#g-nav)に"panelactive"クラスの有無をトグルする
  // これにより、ナビゲーションが表示・非表示を切り替える
  $("#g-nav").toggleClass("panelactive");
});

// ナビゲーションのリンク（#g-nav a）がクリックされたときの動作
$("#g-nav a").click(function () {
  // ハンバーガーボタンから"active"クラスを削除する
  // これにより、ボタンのデザインが「閉じる」から「メニュー」に戻る
  $(".openbtn4").removeClass("active");

  // ナビゲーションから"panelactive"クラスを削除する
  // これにより、ナビゲーションが非表示になる
  $("#g-nav").removeClass("panelactive");
});
// =========ハンバーガーメニュー

$(document).ready(function() {
  // PCでのツールチップ表示
  $('.skills li').hover(function() {
    var tooltipText = $(this).data('tooltip');
    $('#tooltip').text(tooltipText).css({
      top: $(this).position().top,
      left: $(this).position().left
    }).show();
  }, function() {
    $('#tooltip').hide();
  });

  // SPでのモーダルウィンドウ表示
  $('.skills li').on('click', function() {
    var tooltipText = $(this).data('tooltip');
    $('#modal-text').text(tooltipText);
    $('#modal').show();
  });

  // モーダルウィンドウを閉じる
  $('.close').on('click', function() {
    $('#modal').hide();
  });

  // ウィンドウ外をクリックしたときにモーダルを閉じる
  $(window).on('click', function(event) {
    if ($(event.target).is('#modal')) {
      $('#modal').hide();
    }
  });
});
