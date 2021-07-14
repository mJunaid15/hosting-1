
// img hover jquery
$(document).ready(function(){
    $(".small_img").click(function(){
        $(".big_img").attr('src',$(this).attr('src')).css="border:1px grey solid";

    });

});// img hover jquery end


// blur effetc on image

$(document).ready(function(){
    $('.big_img').imagezoomsl({
        zoomrange:[3,9]
    });
});

// blur effetc on image end


// active class border



  $(document).ready(function () {

    $('.small_img').on('click', function () {
  
        $('.small_img').removeClass('img-item-active'); // here remove class selected from all shipping card
        $(this).addClass('img-item-active'); // here apply add class to shipping card with blue border
        
    });
  
  });