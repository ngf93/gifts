/* current year */
$(document).ready( function() {
  let now = new Date();
  let cur_year = now.getFullYear();
  $("#year").html(cur_year);
});

$(document).ready(function () {
  bsCustomFileInput.init()
})

$(document).ready( function() {
  $('.info').mouseenter(function(){
    $(this).children('.hidden-info').slideDown();
  });
  $('.info').mouseleave(function(){
    $(this).children('.hidden-info').slideUp();
  });
});


/* sticky header */
$(window).scroll(function () {
  /* hide mobile menu on scroll */
  $('.hs_mobilemenu').slideUp();
  $('.hamburger').attr('data-status', 'menu-hidden');

  var h_header = $('header').outerHeight();
  var st = $(this).scrollTop();
  if (st > h_header) {
    $('.header_sticky').fadeIn(300);
  } else if (st < h_header) {
    $('.header_sticky').fadeOut(300);
  }
});


/* mobile menu */
$(document).ready( function() {
  $('.show-aside').click(function(){
    let target = $(this).attr('data-target');
    $(target).css('left', '0');
  });

  $('.close-aside').click(function(){
    $(this).parents('aside').css('left', '-100%');
  });
});


$(function() {
    $(".quantity-arrow-plus").click(function() {
        var num = $(this).prev(".quantity-num");
        var num_val = num.val();
        num.val(+num_val + 1);
    });
    $(".quantity-arrow-minus").click(function() {
        var num = $(this).next(".quantity-num");
        var num_val = num.val();
        if (num_val > 1) {
          num.val(+num_val - 1);
        }
    });
});

/* params in FILTER */
$(function() {
  $('.params-group-title').click(function() {
    $(this).toggleClass('group-full');
    // $('.params-list').addClass('minimized');
    $(this).next('.params-list').toggleClass('minimized');
  });
});  

$(function() {
  $('.card-header').click(function() {
    $(this).next('.card-body').fadeToggle();
  });
}); 

$(function() {
  $('.btn_show_hashtags').click(function() {
    $(this).toggleClass('hashtags_showed');
    $('.form_hashtags').fadeToggle();
  });
});

$(function() {
  $('.btn_show').click(function() {
    let elementClick = $(this).attr('data-target');
    $(elementClick).fadeToggle();
    let destination = $(elementClick).offset().top - 100;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});  

/* smooth scroll to anchor */
$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

/* ползунок для выбора диапазона цены */
$(document).ready( function() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 10000,
    values: [ 2000, 7000 ],
    slide: function( event, ui ) {
      $('#min-price').val(ui.values[0]);
      $('#max-price').val(ui.values[1]);
    }
  });
  $('#min-price').val($( "#slider-range" ).slider( "values", 0 ));
  $('#max-price').val($( "#slider-range" ).slider( "values", 1 ));
});


/* gifts set */
$(document).ready( function() {
  $(".point").click(function() {
    $(".point").removeClass('clicked');
    $('.point-product').hide();
    $(this).addClass('clicked');
    $(this).children('.point-product').show();
  });
});

if (window.matchMedia("(min-width: 768px)").matches) {
  /** shopping cart preview **/
  $(function() {
    $(".toggle-cart").mouseenter(function() {
      $('.cart-preview').show();
    });
    $(".toggle-cart").mouseleave(function() {
      $('.cart-preview').hide();
    });
  });
}



/********** 
SLIDERS 
**********/
var mySwiper1 = new Swiper('.swiper-4', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});

var mySwiper2 = new Swiper('.swiper-4-mini', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    }
  }
});

var mySwiper3 = new Swiper('.swiper-6', {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }
});

var mySwiper4 = new Swiper('.galleryThumbs', {
  spaceBetween: 5,
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  slideToClickedSlide: true,
  loopedSlides: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});

var mySwiper5 = new Swiper('.gallery', {
  slideToClickedSlide: true,
  loop: true,
  loopedSlides: 5,
  slidesPerView: 1,
  effect: 'fade',
  thumbs: {
        swiper: mySwiper4,
      },
});

