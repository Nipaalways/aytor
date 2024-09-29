
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function(){
    $('.test_parent_banner').slick({
      arrows:false,
      dots:true, 
      dotsClass:'dots_container container',
      autoplay:true,
      autoplaySpeed:1800,

})

$('.productSlider').slick({
  slidesToShow: 4,
  prevArrow: '#newProduct .arrows .leftArrow',
  nextArrow:'#newProduct .arrows .rightArrow',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },


  ]
})

    
})

