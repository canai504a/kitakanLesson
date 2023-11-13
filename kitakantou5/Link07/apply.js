window.onload = () =>{
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded');
    setTimeout(classAdd, 200);           // setTimeout(実行したい関数, ミリ秒)
}                                         //  ➡「ミリ秒」の分だけ「実行したい関数」の処理を遅らせる

const classAdd = () =>{
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded');
}


// 申込方法の説明追加 caption
let duration = 500;
$(function(){
    $('.box').hover(slideIn,slideOut);
});

function slideIn(){    
    $('.caption1').stop().animate({ top: "50%"}, duration);
    $('.caption2').stop().animate({ top: "60%"}, duration);
};

function slideOut(){
    $('.caption1').stop().animate({ top: "80%"}, duration);
    $('.caption2').stop().animate({ top: "100%"}, duration);
};


