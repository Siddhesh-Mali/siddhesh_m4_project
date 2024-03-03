// var email = document.forms["form"]["email"];
// var password = document.forms["form"]["password"];

// var email_error = document.getElementsByClassName("email_error");
// var password_error = document.getElementsByClassName("password_error");
// var proceed = document.getElementsByClassName("proceed");


// function onChange(){
//     if(!(email.value.length >3 && email.value.includes("@") && email.value.includes("."))){
//         email_error.style.display = "block";
//         email.focus();
//         return false;
//     }

//     if(password.value.length < 8){
//         password_error.style.display = "block";
//         password.focus();
//         return false;
//     }

//     if((email.value.length >3 && email.value.includes("@") && email.value.includes("."))&&(password.value.length < 8)){
//         proceed.style.display = "block";
//         return true;
//     }

//     // if(password.value.length < 8){
//     //     password_error.style.display = "block";
//     //     password.focus();
//     //     return false;
//     // }

// }


var email = document.querySelector("input[name='email']");
var password = document.querySelector("input[name='password']");
var email_error = document.querySelector(".email_error");
var password_error = document.querySelector(".password_error");
var proceed = document.querySelector(".proceed");

function onChange() {
  // Email validation
  if (email.value.length <= 3 || !email.value.includes("@") || !email.value.includes(".")) {
    email_error.style.display = "block";
    email.focus();
  } else {
    email_error.style.display = "none";
  }

  // Password validation
  if (password.value.length < 8) {
    password_error.style.display = "block";
    password.focus();
  } else {
    password_error.style.display = "none";
  }

  // Combined validation and action
  if (email.value.length > 3 && email.value.includes("@") && email.value.includes(".") && password.value.length >= 8) {
    proceed.style.display = "block";
  } else {
    proceed.style.display = "none";
  }
}

// Attach event listener to the email and password inputs
email.addEventListener("keyup", onChange);
password.addEventListener("keyup", onChange);
