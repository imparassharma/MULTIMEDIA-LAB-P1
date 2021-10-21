const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass_check");
const form = document.querySelector(".form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    validation();
})

function validation(){
    const username_value = username.value.trim();
    const email_value = email.value.trim();
    const pass_value = pass.value.trim();
    const pass2_value = pass2.value.trim();

    if(username_value === ''){
        set_error(username,"username cannot be blank");
    }
    else
    {
        set_valid(username);
    }

    if(email_value === ''){
        set_error(email,"email cannot be blank");
    }
    else if(!isEmail(email_value)){
        set_error(email,"Email is invalid");
    }
    else{
        set_valid(email);
    }

    if(pass_value ===''){
        set_error(pass,"password cannot be blank");
    }
    else if(!validpass(pass_value)){
        set_error(pass,"password should be 6 characters long")
    }
    else{
        set_valid(pass);
    }

    if(pass2_value === ''){
        set_error(pass2,"password check cannot be blank");
    }
    else if(pass2_value!=pass_value){
        set_error(pass2,"password does not match");
    }
    else{
        set_valid(pass2);
    }
}

function set_error(input,message){
    const check = input.parentElement;
    const error_msg = check.querySelector(".error-msg");

    error_msg.className = "error-msg show"
    error_msg.innerText = message;
    check.className = "input-check fail";
    input.style.border = "solid 3px rgb(235, 59, 59)"
    input.addEventListener("click",function(){
        input.style.border = "none";
        check.className = "input-check";
        error_msg.className = "error-msg";
        input.style.boxShadow = "2px 2px 2px black"
    });
}

function set_valid(input){
    const check = input.parentElement;
    const error_msg = check.querySelector(".error-msg");

    error_msg.className = "error-msg";
    check.className = "input-check success";
    input.style.border = "solid 3px rgb(20, 172, 40)"
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

function validpass(pass){
    var paswd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return paswd.test(pass);
}