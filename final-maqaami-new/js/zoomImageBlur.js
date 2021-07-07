
// img hover jquery
$(document).ready(function(){
    $(".small_img").hover(function(){
        $(".big_img").attr('src',$(this).attr('src'));

    });

});// img hover jquery end


// blur effetc on image

$(document).ready(function(){
    $('.big_img').imagezoomsl({
        zoomrange:[3,9]
    });
});

// blur effetc on image end