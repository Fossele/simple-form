let fname = document.getElementById("firstname");
let fnameError = document.getElementById("e-fname");//firstname
let lname = document.getElementById("lastname");//lastname
let lnameError = document.getElementById("e-lname");
let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
let message = document.getElementById("message");
let errorM = document.getElementById("m_error");
let checkbox = document.getElementById("checkbox");
let checkboxError = document.getElementById("c-error");
let ge = document.getElementById("ge");
let sr = document.getElementById("sr");
let query = document.getElementById("q-error");


function validate(){

}

function onSubmit(){
     errorM.innerHTML =="This field is required";

    if(!fname.value){
        fnameError.innerHTML = "This field is required";
    }
    if(!lname.value){
        lnameError.innerHTML = "This field is required";
    }
    let value = email.value.trim();
    let testing = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

    if (!testing) {
        emailError.innerHTML = "Please enter a valid email address";
    }

    if(!message.value){
        alert("hey");
        errorM.innerHTML ="This field is required";
    }

    if(!checkbox.checked){
        checkboxError.innerHTML = "To submit this form, please consent to being contacted";
    } else{
        checkboxError.innerHTML = "";
    }
    console.log(ge);
    if(!(ge.checked || sr.checked)){
      query.innerHTML = "Please select a query type";
    }
   // || checkbox.checked || ge.checked || sr.checked
   if((fname.value || lname.value || message.value|| testing || checkbox.checked || ge.checked || sr.checked)){
    alert("You submited")
   }
    
}