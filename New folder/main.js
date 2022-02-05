$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navBar').addClass("sticky");
        }else{
          $('.navBar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // SLIDE UP SCRITP

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle script start

    $('.menu-btn').click(function(){
        $('.navBar .menu').toggleClass("active");
        $(' .menu-btn i').toggleClass("active");
    });

    // toggle script end

    // typing-animation
    var typed = new Typed(".typing",{
        strings:["Singer.", "YouTuber.", "Computer Engineer.", "Bloger.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2",{
        strings:["Multi-Instrumentalist.", "Singer.", "YouTuber.", "Computer Engineer.", "Bloger.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl-carousel start
    $('.corosuel').owlCarousel({
        margin: 20,
        loop:true,
        autoplayTime:2000,
        autoplayHoverPause:true,
        responsive:{
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
            2000: {
                items: 4,
                nav: false
            }
        }
    });
    // owl-carousel end
});