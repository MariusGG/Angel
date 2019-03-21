$(document).ready(function() {

  /* ----------------------------------------------- */
  /*             STICKY NAVIGATION                   */
  /* ----------------------------------------------- */
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
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
