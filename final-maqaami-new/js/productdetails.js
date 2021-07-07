
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