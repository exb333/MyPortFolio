$(document).ready(function() {
    
//    For the sticky Navigation 
    
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    },  {
            offset: '75px;'
    });
    
//      Scroll on Buttons
    
    $('.js--scroll-to-about').click(function () {
        $('html, body' ).animate({scrollTop: $(' .js--section-about').offset().top}, 1000);    
    });
    
    //      Navigation Scroll
//          Copied from css-tricks.com
          
    $('a[href*="#"]')  // Select all links with hashes
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
//                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
 
    
    
//    Animations on SCROLL
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated bounceInLeft');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '64%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '62%'
    });
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated pulse');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated rubberBand');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    


//      MOBILE NAVIGATION

    
    $('.js--nav-icon').click(function(){
           var nav = $('.js--main-nav');
           var icon = $('.js--nav-icon i');

           nav.slideToggle(200);
           
           if (icon.hasClass('ion-navicon-round')){
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
           
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }   
       
      
    });
    
// This piece of code below is helping to make our original navbar visible, when we close the menu on small screen size.
    
$(window).resize(function(){
            var navcontainer = $('.js--main-nav');
            var width = $(window).width();

            if (width > 767 && navcontainer.is(':hidden')){

                navcontainer.removeAttr('style');

            }

        });

});