let form=document.querySelector("form");
let errorMessages={};
function displayError(name){
    let elm=form.element[name];
    elm.nextElementSibling.innerText=errorMessages[name];
    elm.parentElement.classList.add("error");
}
function displaySuccess(name){
    let elm=form.elements[name];
    elm.nextElementSibling.innerText="";
    errorMessages[name]="";
    elm.nextElement.classList.remove("error");
    elm.parentElement.classList.add("success");
}
function handleSubmit(event){
    event.preventDefault();
    let elements=event.target.elements;
    const username=elements.username.value;
    const name=elements.name.value;
    const email=elements.email.value;
    const phone=elements.phone.value;
    const password=elements.password.value;
    const passwordCheck=elements["password-check"].value;
    if(username.length<4){
        errorMessages.username="username cant be less than 4 characters";
        displayError("username");
    }
    else{
        displaySuccess("username");
    }
    if(!NaN(name)){
        errorMessages.name="name cant be numbers";
        displayError("name");
    }
    else{
        displaySuccess("name");
    }
    if(!email.includes('@')){
        errorMessages.email="email must contan symbol @";
        displayError("email");
    }
    else if(email.length<6){
        errorMessages.email="email must be atleast 6 characters";
        displayError("email");
    }
    else{
        displaySuccess("email");
    }
    if(isNaN(phone)){
        errorMessages.phone="phone numbers can only be number";
        displayError("phone");
    }
    else{
        displaySuccess("phone");
    }
    if(password!==passwordCheck){
        errorMessages.password="password and confirm must be same";
        errorMessages["password-check"]="password and confirm must be same";
        displayError("password");
    }
    else{
        displaySuccess("password");
        displaySuccess('password-check');
    }
}
form.addEventListener("submit",handleSubmit);