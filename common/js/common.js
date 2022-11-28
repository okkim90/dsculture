function to_top(){
    $('html, body').animate({'scrollTop':0},400,'easeInOutCubic');
}


/* 스크롤 이벤트 */
var vh = $(window).height();
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return (elementBottom > viewportTop + (vh/12))  && (elementTop < viewportBottom - (vh/12)) ;
};

$(function(){




$(window).on('load resize',function(){
    vh = $(window).height();
});
$(window).on('load resize scroll',function(){
    $('.aniBox').each(function(){
        if($(this).isInViewport()){
            $(this).addClass('gogo');
        }
    });
    $('.count_wrap').each(function(){
        if($(this).isInViewport() && !$(this).hasClass('finish')){
            count_wrap($(this).find('.count_box'));
            $(this).addClass('finish');
        }
    });
});

$('.aniBox').each(function(){
    if($(this).isInViewport()){
        $(this).addClass('gogo');
    }
});




$('.nav_btn_dep2').on('click',function(){
    console.log('asdfasdf');
    if($(this).parents('.nav_item').hasClass('on')){
        $(this).parents('.nav_item').removeClass('on');
        //$(this).parents('.nav_item').find('.nav_dep2').slideUp(200);
    }else{
        $(this).parents('.nav_item').addClass('on');
        //$(this).parents('.nav_item').find('.nav_dep2').slideDown(200);
    }

});

$('.btn_nav').on('click',function(){
    if($(this).hasClass('on')){
        $('.header').removeClass('on');
        $(this).removeClass('on');
        $('.nav').removeClass('on');
    }else{
        $('.header').addClass('on');
        $(this).addClass('on');
        $('.nav').addClass('on');
    }

});

});