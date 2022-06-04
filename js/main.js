$(document).ready(function(){ 

  $('.ham').click(function() {
    $('.hidden').addClass("open")
  })

  $('.ham__close, .nav__link').click(function() {
    $('.hidden').removeClass('open')
  })

  $('.reviews__sliderdesktop').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  $('.reviews__slidermobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

})
  