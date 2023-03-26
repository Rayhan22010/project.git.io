$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
});
//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
        }
    }
})

//wow jss
new WOW().init();