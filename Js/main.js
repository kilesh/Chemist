$(document).scroll(function() {
    var target = $("#first");
    var offset = target.offset().top-71;
    if($(this).scrollTop() >= offset) {
       $(".navbar-brand").css({'-webkit-transform': 'translate3d(0, -100px, 0)',
        '-moz-transform': 'translate3d(0, -100px, 0)',
        '-ms-transform':' translate3d(0, -100px, 0)',
        '-o-transform': 'translate3d(0, -100px, 0)',
        'transform': 'translate3d(0, -100px, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
        if(!$('#cover').hasClass("openNav")){
        $('.navbar').css('background-color', 'transparent');
            $('.arrow-left').addClass('changed');
            
        }
    } else {
         $(".navbar-brand").css({'-webkit-transform': 'translate3d(0, 0, 0)',
        '-moz-transform': 'translate3d(0, 0, 0)',
        '-ms-transform':' translate3d(0, 0, 0)',
        '-o-transform': 'translate3d(0, 0, 0)',
        'transform': 'translate3d(0, 0, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
  
       $('.navbar').css('background-color', 'transparent');
      $('.arrow-left').removeClass('changed');
    }
});


$(function(){$(".cross").hover(function(){
    $('.cross').css({'-webkit-transform': 'rotate(90deg)',
        '-moz-transform': 'rotate(90deg)',
        '-ms-transform':' rotate(90deg)',
        '-o-transform': 'rotate(90deg)',
        'transform': 'rotate(90deg)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'
        });
    }); 
      
});








$(function (){$(".open-panel").click(function(){
    /*$(".cross,#cover,#first,#second,#third,#fourth,#fifth,#sixth,#seventh").removeClass('animated          fadeInUp fadeInBlock');*/
    
    $('.navbar').css({'background-color': 'transparent',
                        'transition-delay': '0.5s'});
    
    $(".menu-button,.arrow-left").css({'-webkit-transform': 'translate3d(-100px, 0, 0)',
        '-moz-transform': 'translate3d(-100px, 0, 0)',
        '-ms-transform':' translate3d(-100px 0, 0)',
        '-o-transform': 'translate3d(-100px, 0, 0)',
        'transform': 'translate3d(-100px, 0, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
     
    $(".sidebar,.cross").css({'-webkit-transform': 'translate3d(-6vw, 6vh, 0)',
        '-moz-transform': 'translate3d(-6vw, 6vh, 0)',
        '-ms-transform':' translate3d(-6vw, 6vh, 0)',
        '-o-transform': 'translate3d(-6vw, 6vh, 0)',
        'transform': 'translate3d(-6vw, 6vh, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
    
    if($(window).scrollTop() > $("#first").offset().top-71){
        
         
    $(".navbar-brand").css({'-webkit-transform': 'translate3d(0, -100px, 0)',
        '-moz-transform': 'translate3d(0, -100px, 0)',
        '-ms-transform':' translate3d(0, -100px, 0)',
        '-o-transform': 'translate3d(0, -100px, 0)',
        'transform': 'translate3d(0, -100px, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
    }
    $(".middlerow,.leftrow, .rightrow, .blur,.blur_cover").css({'-webkit-filter': ' blur(2px)',
    '-moz-filter': 'blur(2px) ',
    '-ms-filter': 'blur(2px)',
    '-o-filter': 'blur(2px)',
    'filter': 'blur(2px)',
    'background':'linear-gradient(rgba)'
                                                                
    })

    
    
    
    $("#cover,#first,#second,#third,#fourth,#fifth").addClass("openNav");
  
});
	
$(".cross,#dismiss,#cover,#first,#second,#third,#fourth,#fifth").click(function(){
    
    
    if($(window).scrollTop() >= $("#first").offset().top-71){
        $('.navbar').css({'background-color': 'transparent',
                        'transition-delay': '0s'});
         $('.arrow-left').addClass('changed')
         }
    else{
        $(".navbar-brand").css({'-webkit-transform': 'translate3d(0, 0, 0)',
        '-moz-transform': 'translate3d(0, 0, 0)',
        '-ms-transform':' translate3d(0, 0, 0)',
        '-o-transform': 'translate3d(0, 0, 0)',
        'transform': 'translate3d(0, 0, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
    }
        $('.cross').css({'-webkit-transform': 'rotate(0deg)',
        '-moz-transform': 'rotate(0deg)',
        '-ms-transform':' rotate(0deg)',
        '-o-transform': 'rotate(0deg)',
        'transform': 'rotate(0deg)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'
        });
     $(".sidebar, .cross").css({'-webkit-transform': 'translate3d(-400px, 0, 0)',
        '-moz-transform': 'translate3d(-400px, 0, 0)',
        '-ms-transform':' translate3d(-400px, 0, 0)',
        '-o-transform': 'translate3d(-400px, 0, 0)',
        'transform': 'translate3d(-400px, 0, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
    
    $(".menu-button,.arrow-left").css({'-webkit-transform': 'translate3d(0, 0, 0)',
        '-moz-transform': 'translate3d(0, 0, 0)',
        '-ms-transform':' translate3d(0, 0, 0)',
        '-o-transform': 'translate3d(0, 0, 0)',
        'transform': 'translate3d(0, 0, 0)',
        '-webkit-transition': '-webkit-transform 500ms ease-in-out',
        '-moz-transition': '-moz-transform 500ms ease-in-out',
        '-o-transition': '-o-transform 500ms ease-in-out',
        'transition': 'transform 500ms ease-in-out'});
    
    $(".middlerow, .leftrow, .rightrow, .blur,.blur_cover").css({'-webkit-filter':'',
    '-moz-filter': '',
    '-ms-filter': '',
    '-o-filter': '',
    'filter': ''})

    
    
    
    $("#cover,#first,#second,#third,#fourth,#fifth").removeClass("openNav");
    
    
  
});
             });
              






$(window).scroll( function(){
    $('.fadeInBlock').each( function(i){
            var bottom_of_object = $(this).offset().top ;
            var bottom_of_window = $(window).scrollTop(); 
    
            bottom_of_window +=830;
        //bottom_of_window +=10;
        if( bottom_of_window > bottom_of_object ){
             $(this).addClass('animated fadeInUp');
             //$(this).fadeIn("slow");
            
            }

      });

     });






$(function () {
    $('a[href*=#]:not([href=#])').click(function () {


            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                 
                return false;
                
            }

    });
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});





