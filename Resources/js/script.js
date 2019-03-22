$(document).ready(function() {

  /* ----------------------------------------------- */
  /*             STICKY NAVIGATION                   */
  /* ----------------------------------------------- */
  /* For the sticky navigation */

  /* For the sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });


  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });


  /* Navigation scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  /* Animations on scroll */
  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
  }, {
      offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
  }, {
      offset: '50%'
  });
  

  /* ----------------------------------------------- */
  /*                  MOBILE NAVIGATION              */
  /* ----------------------------------------------- */

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  /* ----------------------------------------------- */
  /*                  IMAGE SLIDER                   */
  /* ----------------------------------------------- */
  let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }

  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }

  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }

  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }

  arrowLeft.addEventListener("click", function() {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

  arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });

  startSlide();

  /* ----------------------------------------------- */
  /*                  locations                      */
  /* ----------------------------------------------- */

  var $contents = $('.tab-content');
$contents.slice(1).hide();
$('.tab').click(function() {
  var $target = $('#' + this.id + 'show').show();
  $contents.not($target).hide();
});

});
