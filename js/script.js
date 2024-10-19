$('.banner_slider').slick({
  arrows:false,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1000,
  dots:true
});
$('.Reviews_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
 prevArrow: '<i class="fa-solid fa-angle-left  prev"></i>',
 nextArrow: '<i class="fa-solid fa-angle-right  next"></i>',
 responsive: [
  {
    breakpoint: 991.98,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 767.98,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 575.98,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
]
});