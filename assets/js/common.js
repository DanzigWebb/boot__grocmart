


$(document).ready(function() {
    $("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black', "fx-listitems-fade", 'position-right'],
        navbar: {
            //title: '<img src="/assets/img/main/logo-1.png">'
        },
    }, {
        // configuration
        offCanvas: {
            pageSelector: "#my-page"
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:start', function() {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:before', function() {
        $('.hamburger').removeClass('is-active');
    })
}); 

$(document).ready(function(){
    $('.comments-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:false,
        responsive:{
            0:{
                items:1,
                nav:true,
                loop:true
            },
            600:{
                items:1,
                dots:false,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                dots:false,
                loop:true
            }
        }
    });
    $('.brands-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        nav: false,
        responsiveClass:false,
        responsive:{
            0:{
                items:2,
                nav:false,
                margin:0,
                loop:true
            },
            600:{
                items:3,
                margin:60,
                dots:false,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                dots:false,
                loop:true
            }
        }
    });
    $('.mainfaq-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:false,
        dots:true,
        nav: false,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            },
            600:{
                items:1,
                dots:true,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                dots:true,
                loop:true
            }
        }
    }); 
})






