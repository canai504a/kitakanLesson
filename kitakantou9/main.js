// ロゴ
const logobtn = () => {
    $('.logo_area').each(function () {
        if (!$(this).hasClass('logo_active')) {
            $(this).removeClass('logo_active2');
            $(this).addClass('logo_active');
        } 
        else if(!$(this).hasClass('logo_active2')) {
            $(this).removeClass('logo_active');
            $(this).addClass('logo_active2');
        } 
    })
    setTimeout(function () {
        window.location.href = '#mainvisual';
    },2000)
}


// ナビゲーション
const navbtn = () => {
    // document.getElementById('navbtn').classList.toggle("nav_active");
    // document.getElementsByClassName("navanime").classList.toggle("fadeup");
    $('.nav_area').each(function () {
        if(!$(this).hasClass('nav_active')){
            $(this).removeClass('nav_end');
            $(this).addClass('nav_active');
        }
        else if($(this).hasClass('nav_active')){
            $(this).removeClass('nav_active');
            $(this).addClass('nav_end');
        }
    })
    $('.navanime').each(function () {
        if(!$(this).hasClass('fadeUp')){
            $(this).addClass('fadeUp');
        }
        else if($(this).hasClass('fadeUp')){
            $(this).removeClass('fadeUp');
        }
    })
    $('.nav_logo').each(function () {
        if(!$(this).hasClass('appear')){
            $(this).addClass('appear');
        }
        else if($(this).hasClass('appear')){
            $(this).removeClass('appear');
        }
    })
    $('.navi').each(function () {
        if(!$(this).hasClass('navi_active')){
            $(this).addClass('navi_active');
        }
        else if($(this).hasClass('navi_active')){
            $(this).removeClass('navi_active');
        }
    })
}

// コース情報
// const curse_box = document.getElementsByClassName('curse_box');
let switch1 = document.getElementsByClassName('switch1');
let switch2 = document.getElementsByClassName('switch2');
let switch3 = document.getElementsByClassName('switch3');


const onClickButton = () => {
    $('.curse_box').each(function () {
        if (!$(this).hasClass('curse_box_anime')) {
            $(this).removeClass('curse_box_anime2');
            $(this).removeClass('curse_box_anime3');
            $(this).addClass('curse_box_anime');
        }
    })
    $('.switch1').each(function () {
        if (!$(this).hasClass('switch_active')) {
            $(switch2).removeClass('switch_active');
            $(switch3).removeClass('switch_active');
            $(this).addClass('switch_active');
        }
    })
}

const onClickButton2 = () => {
    $('.curse_box').each(function () {
        if (!$(this).hasClass('curse_box_anime2')) {
            $(this).removeClass('curse_box_anime');
            $(this).removeClass('curse_box_anime3');
            $(this).addClass('curse_box_anime2');
        }
    })
    $('.switch2').each(function () {
        if (!$(this).hasClass('switch_active')) {
            $(switch1).removeClass('switch_active');
            $(switch3).removeClass('switch_active');
            $(this).addClass('switch_active');
        }
    })
}

const onClickButton3 = () => {
    $('.curse_box').each(function () {
        if (!$(this).hasClass('curse_box_anime3')) {
            $(this).removeClass('curse_box_anime');
            $(this).removeClass('curse_box_anime2');
            $(this).addClass('curse_box_anime3');
        }
    })
    $('.switch3').each(function () {
        if (!$(this).hasClass('switch_active')) {
            $(switch1).removeClass('switch_active');
            $(switch2).removeClass('switch_active');
            $(this).addClass('switch_active');
        }
    })
}

// 修了生の声
let review_text1 = document.getElementsByClassName('review_text1');
let review_text2 = document.getElementsByClassName('review_text2');
let review_text3 = document.getElementsByClassName('review_text3');
let reviewer_switch1 = document.getElementsByClassName('reviewer_switch1');
let reviewer_switch2 = document.getElementsByClassName('reviewer_switch2');
let reviewer_switch3 = document.getElementsByClassName('reviewer_switch3');


const reviewbtn1 = () => {
    $('.review_text1').each(function () {
        if (!$(this).hasClass('review_active')) {
            $(review_text2).removeClass('review_active');
            $(review_text3).removeClass('review_active');
            $(this).addClass('review_active');
        }
    })
    $('.reviewer_switch1').each(function () {
        if (!$(this).hasClass('reviewer_switch_active')) {
            $(reviewer_switch2).removeClass('reviewer_switch_active');
            $(reviewer_switch3).removeClass('reviewer_switch_active');
            $(this).addClass('reviewer_switch_active');
        }
    })
}

const reviewbtn2 = () => {
    $('.review_text2').each(function () {
        if (!$(this).hasClass('review_active')) {
            $(review_text1).removeClass('review_active');
            $(review_text3).removeClass('review_active');
            $(this).addClass('review_active');
        }
    })
    $('.reviewer_switch2').each(function () {
        if (!$(this).hasClass('reviewer_switch_active')) {
            $(reviewer_switch1).removeClass('reviewer_switch_active');
            $(reviewer_switch3).removeClass('reviewer_switch_active');
            $(this).addClass('reviewer_switch_active');
        }
    })
}

const reviewbtn3 = () => {
    $('.review_text3').each(function () {
        if (!$(this).hasClass('review_active')) {
            $(review_text1).removeClass('review_active');
            $(review_text2).removeClass('review_active');
            $(this).addClass('review_active');
        }
    })
    $('.reviewer_switch3').each(function () {
        if (!$(this).hasClass('reviewer_switch_active')) {
            $(reviewer_switch1).removeClass('reviewer_switch_active');
            $(reviewer_switch2).removeClass('reviewer_switch_active');
            $(this).addClass('reviewer_switch_active');
        }
    })
}
