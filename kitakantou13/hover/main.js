let duration = 500;

$(function(){
    $('.content').hover(slideIn,slideOut);
});

function slideIn(){
    // $('.caption1').stop();
    // $('.Caption2').stop();
    // $('.caption1').animate({ top: "20%" }, duration);
    // $('.Caption2').animate({ top: "20%" }, duration); 

    $('.caption1,.Caption2').stop().animate({ top: "20%" }, duration);
    // $('.Caption2').stop().animate({ top: "20%" }, duration); 
};

function slideOut() {
    $('.caption1').stop();
    $('.Caption2').stop();
    $('.caption1').animate({ top: "80%"  }, duration);
    $('.Caption2').animate({ top: "100%" }, duration);
};



//キャプション下から
// $(function () {
//     $('.content').hover(function () {
//         $('.caption1').stop();
//         $('.Caption2').stop();
//         $('.caption1').animate({ top: "20%" }, 500);
//         $('.Caption2').animate({ top: "20%" }, 500);
//     }, function () {
//         $('.caption1').stop();
//         $('.Caption2').stop();
//         $('.caption1').animate({ top: "80%" }, 500);
//         $('.Caption2').animate({ top: "100%" }, 500);
//     });
// });

//  動きが連続してしまうので、ホバーをのけた時に中断する動きをつけたい → stop  500は0.5秒
