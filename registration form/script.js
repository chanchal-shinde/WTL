const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const dob = document.getElementById("dob");
    const country = document.getElementById("country");
    const terms = document.getElementById("terms");

    clearErrors();

    if(name.value.trim()===""){
        showError(name,"Name is required");
        valid=false;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){
        showError(email,"Enter valid email");
        valid=false;
    }

    const phonePattern=/^[0-9]{10}$/;

    if(!phonePattern.test(phone.value)){
        showError(phone,"Enter valid 10-digit phone number");
        valid=false;
    }

    if(password.value.length<6){
        showError(password,"Password must be at least 6 characters");
        valid=false;
    }

    if(password.value!==confirmPassword.value){
        showError(confirmPassword,"Passwords do not match");
        valid=false;
    }

    const gender=document.querySelector('input[name="gender"]:checked');

    if(!gender){
        document.querySelector(".radio-group").nextElementSibling.innerText="Select gender";
        valid=false;
    }

    if(dob.value===""){
        showError(dob,"Select Date of Birth");
        valid=false;
    }

    if(country.value===""){
        showError(country,"Select Country");
        valid=false;
    }

    if(!terms.checked){
        document.getElementById("termsError").innerText="Accept Terms & Conditions";
        valid=false;
    }

    if(valid){
        alert("Registration Successful!");
        form.reset();
    }

});

function showError(input,message){

    input.classList.add("error");
    input.nextElementSibling.innerText=message;

}

function clearErrors(){

    document.querySelectorAll("input,select").forEach(element=>{
        element.classList.remove("error");
        element.classList.remove("success");
    });

    document.querySelectorAll("small").forEach(small=>{
        small.innerText="";
    });

}