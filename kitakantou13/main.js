// 画面を読み込んだ時
window.onload = () => {
    setTimeout(classAdd,2000);
    setTimeout(classAdd1,2000);
    setTimeout(classAdd2,4000);
}

const classAdd = () => {
    const sidecontentbox = document.getElementById('header');
    sidecontentbox.classList.add('side');
}

const classAdd1 = () => {
    const title = document.getElementById('titlebox');
    title.classList.add('none');
}

const classAdd2 = () => {
    const sidecontent1 = document.getElementById('sidebox');
    const sidecontent2 = document.getElementById('navi');
    const sidecontent3 = document.getElementById('harowa');
    const sidecontent4 = document.getElementById('covicbox');
    sidecontent1.classList.add('active');
    sidecontent2.classList.add('active');
    sidecontent3.classList.add('active');
    sidecontent4.classList.add('active');
}

// staff紹介
$(function() {
    $(".staffcontentbox").hide();
    $(".more").click(function() {
        $(".staffcontentbox").slideToggle("1000");
    });
});
// course
var sX_syncerModal = 0 ;
var sY_syncerModal = 0 ;

function scrollposition(){
	//スクロール位置を記録する
	var dElm = document.documentElement , dBody = document.body;
	sX_syncerModal = dElm.scrollLeft || dBody.scrollLeft;	//現在位置のX座標
	sY_syncerModal = dElm.scrollTop || dBody.scrollTop;	//現在位置のY座標
}

$(function(){
const open1 = $('.course1'),
      open2 = $('.course2'),
      open3 = $('.course3'),
      close1 = $('.modal-close1'),
      close2 = $('.modal-close2'),
      close3 = $('.modal-close3'),
      container1 = $('.modal-container1'),
      container2 = $('.modal-container2'),
      container3 = $('.modal-container3');

      open1.on('click',function(){
        container1.addClass('active');
        return false;
      });
      open2.on('click',function(){
        container2.addClass('active');
        return false;
      });
      open3.on('click',function(){
        container3.addClass('active');
        return false;
      });

      close1.on('click',function(){
        container1.removeClass('active');
        console.log(close1);
      });
      close2.on('click',function(){
        container2.removeClass('active');
      });
      close3.on('click',function(){
        container3.removeClass('active');
      });

      $(document).on('click',function(e){
        if(!$(e.target).closest('modal-body').length){
            container1.removeClass('active');
            container2.removeClass('active');
            container3.removeClass('active');
        }
      });
    });



// map表示
const delayScrollAnime = () => {

  let time = 0.2;
  let value = time;


  $('.map').each(function () {
      let scroll = $(window).scrollTop(); 
      let windowHeight = $(window).height(); 

      let elementHeight = $(this).offset().top; 
      let childs = $(this).children();


      if(scroll >= elementHeight - windowHeight){
          
          $(childs).each(function(){
              if(!$(this).hasClass('fadein')){
                  $(this).addClass('fadein');
                  $(this).css("animation-delay",value + "s");
                  value = value + time;
              }
          })
      } else {
          $(childs).removeClass('fadein');
      }
  });
} 

$(window).scroll( () => {
  delayScrollAnime();
});

$(window).on('load',() => {
  delayScrollAnime();
});





// レスポンシブ ナビゲーション

$('#nav').click(function () {
  $(this).toggleClass('active');
    $("#sumaho").toggleClass('panelactive');
});

$("#sumaho a").click(function () {
    $(".bottom").removeClass('active');
    $("#sumaho").removeClass('panelactive');
});
