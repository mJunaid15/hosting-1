function createSlick(){
    $(".slider").not('.slick-initialized').slick({

        centerMode:true,
        autoplay:false,
        dots:false,
        arrows:true,
        slidesToShow:3,
        responsive:[{
            breakpoint:768,
            setting:{
                dots:false,
                arrows:false,
                Infinity:true,
                slidesToShow:2,
                slidesToScroll:1
            }
        }]

    });

}
createSlick();

// will not throw error, even  if called  multiples times 

$(window).on('resize', createSlick);


function createSlickaddCart(){

    $(".cartsliders").slick({

        centerMode:true,

        autoplay:false,

        dots:false,

        arrows:true,

        slidesToShow:1,

        responsive:[{

            breakpoint:768,

            setting:{

                dots:false,

                arrows:false,

                Infinity:true,

                slidesToShow:2,
                
                slidesToScroll:1

            }

        }]

    });

}
    createSlickaddCart();
// }error, even  if called  multiples times 

$(window).on('resize', createSlickaddCart);


$(document).ready(function(){
    $('.cartsliders').slick({

        centerMode:true,

        autoplay:false,

        dots:false,

        arrows:true,

        slidesToShow:3,

        responsive:[{

            breakpoint:768,

            setting:{

                dots:false,

                arrows:false,

                Infinity:true,

                slidesToShow:2,
                
                slidesToScroll:1

            }

        }]

    });
  });
  
  $('.modal').on('shown.bs.modal', function (e) {
    $('.cartsliders').slick('setPosition');
    $('.wrap-modal-slider').addClass('open');
  })
  


  

