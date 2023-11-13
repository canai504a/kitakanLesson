// モーダル
$(function(){

    var open=$('.header_colona'),
        close=$('.modal_close'),
        container=$('.header_modal_container');

    open.on('click',function(){
        container.addClass('active');
        console.log("a");
        return false;        
    });


    close.on('click',function(){
        container.removeClass('active');
    });

    $(document).on('click',function(e){
        if(!$(e.target).closest('.modal_body').length) {
            container.removeClass('active');
        }
    });
});

// スクロール時のアニメーション
const scrollAnime =()=> {
    //写真がふわっと
    $('.js_fadeinIMG').each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let elementHeight = $(this).offset().top;

        if(scroll >= elementHeight - windowHeight + 100) {
                // console.log("画面に要素が入った");
                if(!$(this).hasClass('fadein')) {
                    $(this).addClass('fadein');
                }
        } else {
            $(this).removeClass('fadein');
        }
    });

    //伸びる下線
    $('.js_fadeinIMG2').each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let elementHeight = $(this).offset().top;

        if(scroll >= elementHeight - windowHeight + 100) {
                // console.log("画面に要素が入った");
                if(!$(this).hasClass('nobiru')) {
                    $(this).addClass('nobiru');
                }
        } else {
            $(this).removeClass('nobiru');
        }
    });

    //申し込みのテキスト
    $('.js_fadeinIMG3').each(function(){
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        let elementHeight = $(this).offset().top;

        if(scroll >= elementHeight - windowHeight + 200) {
                // console.log("画面に要素が入った");
                if(!$(this).hasClass('fadeintext')) {
                    $(this).addClass('fadeintext');
                }
        } else {
            $(this).removeClass('fadeintext');
        }
    });
}

$(window).scroll(()=>{
    scrollAnime();
});

$(window).on('load',()=>{
    scrollAnime();
});

// ローディング
 const classAdd = () =>{
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded');
    // スクロール防止のために付与したクラスを外す
    $('html body').removeClass('scroll_stop');
}

//実行
window.onload = () =>{
    $('html body').addClass('scroll_stop');
    setTimeout(classAdd,2000);
}

// // レスポンシブメニューを開く
// $('#header_menu').click(()=>{
//     $('#header_menu').toggleClass('clicked');
//     $('#nav_target').toggleClass('nav_active');
// });

  // 修正 フッターのナビゲーションが出てくる
  const footerAnimation = () => {
    let headerHeight = $('#header').outerHeight();
    let scroll = $(window).scrollTop();

    if (scroll >= (headerHeight)) {
        $('.footer_nav').addClass('fadein_nav');
        $('.footer_nav').removeClass('fadeout_nav');
    } else{
        $('.footer_nav').removeClass('fadein_nav');
        $('.footer_nav').addClass('fadeout_nav');
}
}
$(window).scroll(() => {
    footerAnimation();
})
$(window).on('lord', () => {
    footerAnimation();
})

// ☆ レスポンシブ ナビゲーション
const menubtn = () => {
    document.getElementById('target').classList.toggle('active');
    document.getElementById('nav_target').classList.toggle('nav_active');
};

const coursebtn = () => {
    document.getElementById('course_nav').classList.toggle('course_nav_active');
};
// ハンバーガーメニューの項目を選択したらハンバーガーメニューを閉じる
const navbtn = () => {
    document.getElementById('nav_target').classList.remove('nav_active');
    document.getElementById('target').classList.remove('active');
    document.getElementById('course_nav').classList.remove('course_nav_active');
};
