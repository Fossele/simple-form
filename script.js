let fname = document.getElementById("firstname");
let fnameError = document.getElementById("e-fname");//firstname
let lname = document.getElementById("lastname");//lastname
let lnameError = document.getElementById("e-lname");
let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
let message = document.getElementById("message");
let errorM = document.getElementById("m_error");


function validate(){

}

function onSubmit(){
     errorM.innerHTML =="This field is required";
    if(fname.value == ""){
        fnameError.innerHTML = "This field is required";
    }
    if(lname.value == ""){
        lnameError.innerHTML = "This field is required";
    }
    let value = email.value.trim();

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
        emailError.innerHTML = "Please enter a valid email address";
    }

    if(message.value == ""){
        alert("hey");
        errorM.innerHTML =="This field is required";
    }
   
}