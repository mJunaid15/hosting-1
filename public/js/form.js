function eye(){
    let x = document.getElementById("myinput");
    let eyeopen = document.getElementById("eyehideopen");
    let eyeclose = document.getElementById("eyehideclose");
    if(x.type === 'password'){

        x.type = "text";
        eyeopen.style.display = "block";
        eyeclose.style.display = "none";
        eyeclose.style.margin="0 0 5px 0";


    }else{
        x.type = "Password";
        eyeopen.style.display = "none";
        eyeclose.style.display = "block";
        eyeclose.style.margin="0 0 5px 0";

       
    }

}


// sign up 


function eyesignUp(){
    let x = document.getElementById("myinputSignup");
    let eyeopen = document.getElementById("eyehideopenSignup");
    let eyeclose = document.getElementById("eyehidecloseSignup");
    if(x.type === 'password'){

        x.type = "text";
        eyeopen.style.display = "block";
        eyeclose.style.display = "none";
        eyeclose.style.margin="0 0 5px 0";


    }else{
        x.type = "Password";
        eyeopen.style.display = "none";
        eyeclose.style.display = "block";
        eyeclose.style.margin="0 0 5px 0";

       
    }

}

// btn loading animation 

$(function() {                       //run when the DOM is ready
    $(".signbtn").click(function() {
        //use a class, since your ID gets mangled 
      $(this).addClass("clickedbtn");
  
  
  
    });
  });






$(function(){
    let $loginForm = $("#login");
    $.validator.addMethod("noSpace", function(value, element){
        return value == '' || value.trim().length != 0

    }, "Spaces not allowed");

   $.validator.addMethod("test",function(Email, element){
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    return $.trim(Email).match(pattern) ? true : false;

   },"invalid email pattern");

    
    

    if($loginForm.length){

        $loginForm.validate({
            rules:{
                email:{
                    required: true,
                    test:true,
                    noSpace:true
                },
                password:{
                    required:true,
                    noSpace: true
                }
            },
            messages:{
                email:{
                    required: 'Invalid'
                },
                password:{
                    required: 'Invalid'
                }
            }

        })

    }
})



$(function(){
    let $signForm = $("#signup");
    $.validator.addMethod("noSpace", function(value, element){
        return value == '' || value.trim().length != 0

    }, "Spaces not allowed");

   $.validator.addMethod("test",function(Email, element){
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    return $.trim(Email).match(pattern) ? true : false;

   },"invalid email pattern");

    
    

    if($signForm.length){

        $signForm.validate({
            rules:{
                email:{
                    required: true,
                    test:true,
                    noSpace:true
                },
                password:{
                    required:true,
                    noSpace: true
                },
                name:{
                    required:true,
                    noSpace: true


                },
                last_name:{
                    required:true,
                    noSpace: true
                }
            },
            messages:{
                email:{
                    required: 'Invalid'
                },
                password:{
                    required: 'Invalid'
                }
            }

        })

    }
})

  