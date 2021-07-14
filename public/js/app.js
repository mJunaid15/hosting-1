
// TOOLTIP CLICK JS START 

$('#tooltipclick').click(function(){
  $('.t2').toggle();

});

// TOOLTIP JS CLICK END 



// payment js
$(".payWcard").click(function(){
 
  $('#hideBYdefult').hide();

});




// megadrop down js

$(document).ready(function () {
  // When tab-header is clicked
  $('.tabHeader').hover( function () {

      // Add active class to the clicked element, and remove from other tab-headings
      // $(this).addClass('active').siblings().removeClass('active');

      // Get the target element show it and hide other tab-contents
      $($(this).data('target')).show().siblings().hide();
  });
});


// customer review 



$(document).ready(function () {

  $('.customerReview').on('click', function () {

      // Add active class to the clicked element, and remove from other tab-headings
      $(this).addClass('activeCus').siblings().removeClass('activeCus');
      // Get the target element show it and hide other tab-contents
      $($(this).data('target')).show().siblings('.text').hide();
  });
});

$(document).ready(function () {

  $('.customerReviewbtn').on('click', function () {

      // Add active class to the clicked element, and remove from other tab-headings
      $('#Specififcation11').addClass('activeCus').siblings().removeClass('activeCus');
      // Get the target element show it and hide other tab-contents
      $($(this).data('target')).show().siblings().hide();
  });

});

$("#Specififcation11").click(function(){
 
  $('.block').hide();

});
$(".review").click(function(){
 
  $('.block').hide();

});



$("#overviewBigimg").click(function(){
 
  $('.block').show();

});



$("#Specififcation11").click(function(){
 
  $('.bannersOnlywithOverview').hide();

});
$(".viewFullAnim").click(function(){
 
  $('.bannersOnlywithOverview').hide();

});
$(".customerReview").click(function(){
 
  $('.bannersOnlywithOverview').hide();

});






// CASH ON DELIVERY 

$(document).ready(function () {

  $('.btn-1').on('click', function () {

      // Add active class to the clicked element, and remove from other tab-headings
      $(this).addClass('border-btn-blue').siblings().removeClass('border-btn-blue');
      // Get the target element show it and hide other tab-contents
      // $($(this).data('target')).show().siblings().hide();
  });
});

// let abc = document.getElementById('btn-pay-card');
// let def = document.getElementById('btn');

// function changeborder() {
//   abc = abc.style.border = "2px solid #3866df";
//   def = def.style.border = "2px solid #3866df";
//   abc = abc.style.border = "none";
// }










// megadrop down js end


// $(document).ready(function (){
//   $("#slide_down").click(function (){
//       $('.img-select').animate({  scrollTop: $(".img-select ").offset().top+120 }, 1140);
//   });
// });

var chec=document.getElementsByClassName("section").length;

        if(document.getElementsByClassName("section").length > 4  ){
          console.log(chec);  
          var count = 0,
          sections = $('.section'),
          scrollTo = function(index){
            $('.sections').animate({
              scrollTop: sections.eq(index).offset().top}, '40');
              }
         
      
        }else{
          $('.prev').hide();
          // alert(`hide karwana hai ${chec}` )

 };


    $(document).ready(function(){

        $('.next').hide();



    });


 $(".next").click(function(){
  count++;

    $('.next').hide();
    $('.prev').show();



  scrollTo(count);
});



$(".prev").click(function(){
  count--;
  $('.next').show();
    $('.prev').hide();
  scrollTo(count);
});


// SECOND ARROW


$(document).ready(function(){

  $('.next1').hide();



});

$(".next1").click(function(){
  count++;

    $('.next1').hide();
    $('.prev1').show();



  scrollTo(count);
});

$(".prev1").click(function(){
  count--;
  $('.next1').show();
    $('.prev1').hide();
  scrollTo(count);
});




$(function() {                       //run when the DOM is ready
  $(".cart-button").click(function() {
      //use a class, since your ID gets mangled
    $(this).addClass("clicked");

  });
});



$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:true,
    navText: ["<b> < </b>", "<b> > </b>"],
    dots:false,
    responsiveClass: true,
    navSpeed: 150,
    slideBy: 5,
    stagePadding:5,

    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1024:{
            items:5
        },
        1300:{
          items:7
      },


    }
})







// $(".btnplus").click(function(){

//     $(".abc").addClass("active");

//   });




// confirm order button

   $(document).ready(function(){
  $("#btn").click(function(){
    $("#hideBYdefult").show();
  });
});



// confirm button end



// review section jquery7



  // $(document).ready(function(){
  //   $(".Specification").click(function(){
  //     $(".inerSpecification").toggle();
  //   });
  // });
  // $(document).ready(function(){
  //   $(".Specification").click(function(){
  //     $(".inerOverView").hide();
  //   });
  // });
  // $(document).ready(function(){
  //   $(".Specification").click(function(){
  //     $(".full-sp").hide();
  //   });
  // });


  // $(document).ready(function(){
  //   $(".Specification").click(function(){
  //     $(".inerOverView").hide();
  //   });
  // });

  // $(document).ready(function(){
  //   $(".overview1").click(function(){
  //     $(".inerOverView").toggle();
  //   });
  // });

  // $(document).ready(function(){
  //   $(".review").click(function(){
  //     $(".inerSpecification").hide();
  //   });
  // });

  //  $(document).ready(function(){
  //   $(".review").click(function(){
  //     $(".inerOverView").hide();
  //   });
  // });

  // $(document).ready(function(){
  //   $(".full-sp").click(function(){
  //     $(".overview1").removeClass('activeCus');
  //     $("#Specififcation11").addClass('activeCus');
  //     $(".inerOverView").hide();

  //   });
  // });




  // review section jquery end



  // $(document).ready(function(){
  //   $(".review").click(function(){
  //     $(".inerReview").toggle();
  //   });
  // });
// $(document).ready(function(){

//     $('.plusbtn').click(function(){
//         $('.abc').toggle();
//     });

// });



// $(function(){
//     $('.plusbtn').hover(function(){
//         function(){
//             $( 'abc',this).slideDown(500);

//         }

//     });

// });


// login page


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to

  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// login page end



// shipping js

// $(function() {                       //run when the DOM is ready
//   $(".card").click(function() {
//       //use a class, since your ID gets mangled
//     $(this).addClass("active");



//   });
// });


// shipping select box box-blue 
$(document).ready(function () {

  $('.shipping-card').on('click', function () {

      $('.shipping-card').removeClass('active'); // here remove class selected from all shipping card
      $(this).addClass('active'); // here apply add class to shipping card with blue border
      
  });

});

// shipping select box box-blue end







  // hover active effect

  // Add active class to the current button (highlight it)
  // $(document).ready(function(){
  //   var header = document.getElementById("myDIV");
  //   var btns = header.getElementsByClassName("test");
  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function() {
  //     var current = document.getElementsByClassName("activeCus");
  //     current[0].className = current[0].className.replace(" activeCus", "");
  //     this.className += " activeCus";
  //     });
  //   }
  //   });

// remove disable button
$(".card").click(function(event){
  event.preventDefault();
  $('button').removeAttr("disabled")
});





// shipping js end

// payment button js
// $(function() {
//   $(".butnn").click(function() {
//     $(this).addClass("active");



//   });
// });

$(".butnn").click(function(event){
  event.preventDefault();
  $(this).addClass("active");
  $('button').removeAttr("active")
});