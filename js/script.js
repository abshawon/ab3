(function($){



  $(document).ready(function(){
    $('.burger-area').slick({
      autoplay: true,
      autoplaySpeed:300,
      arrows:false,
      slidesToShow: 4,
      slidesToScroll: 1,
    });


// typed-js
var typed = new Typed('.type-js', {
  strings: ['THIS IS A SLICK SLIDER',
              'of Resturent psd to html.',
              'create by ab shawon raja',
           ],
  typeSpeed: 50,
  loop:true,
// end-typed-js


  });

});

})(jQuery);




