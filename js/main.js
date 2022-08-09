(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

THEPAW TESTIMONIAL SLIDER JS
THEPAW SWIPER SLIDER JS

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){

  $(".menu-bar").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").addClass("active");
});
$(".close, .offcanvas-overlay").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
});

// date picker

// $('.rangestart').calendar({
//   type: 'date',
//   endCalendar: $('.rangeend')
// });
// $('.rangeend').calendar({
//   type: 'date',
//   startCalendar: $('.rangestart')
// });

// $('.rangestart2').calendar({
//   type: 'date',
//   endCalendar: $('.rangeend2')
// });
// $('.rangeend2').calendar({
//   type: 'date',
//   startCalendar: $('.rangestart2')
// });

// $('#rangestart').calendar({
//   type: 'date',
//   endCalendar: $('#rangeend')
// });
// $('#rangeend').calendar({
//   type: 'date',
//   startCalendar: $('#rangestart')
// });


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});

$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu2').addClass('sticky-menu');
  } else {
      $('#sticky-menu2').removeClass('sticky-menu');
  }

});


var trip_slider = $('.trip-slider');
  if(trip_slider.is_exist()){
    trip_slider.slick({
      infinite: true,
      slidesToShow: 1, 
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      autoplay: false,
	    autoplaySpeed: 2000,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });
  }

	

});/*End document ready*/


$(window).on("resize", function(){


}); // end window resize


$(window).on("load" ,function(){

  /*--------------------------------------------------------------
THEPAW GALLERY MASONAY FILTER JS
------------------------------------------------------------*/
var tpw_gallery_masonay = $('#trip-gallery-masonay');
if(tpw_gallery_masonay.is_exist()){
  var $container = $(tpw_gallery_masonay),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 3;
      } else if (w > 900) {
        columnNum  = 3;
      } else if (w > 600) {
        columnNum  = 2;
      } else if (w > 450) {
        columnNum  = 2;
      } else if (w > 385) {
        columnNum  = 1;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.collection-grid-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
          multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
        $item.css({
          width: width,
          // height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.collection-grid-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 0
        }
      });
    };
  isotope();
  $(window).resize(isotope);
  var $optionSets = $('.watch-gallery-nav .option-set'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.click(function(){
  var $this = $(this);
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
}


}); // End window LODE




})(jQuery);






