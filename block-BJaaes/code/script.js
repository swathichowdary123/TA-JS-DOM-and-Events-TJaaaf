let form=document.querySelector("form");
let usernameError="";
function doesContainANumber(str){
    return str.split('').some(e=>Number(e));
function handleSubmit(event){
    event.preventDefault();
    console.dir(event.target);
}
let usernameElm=event.target.elements.username;
if(usernameElm.value===""){
    usernameError="cant be less than 4 characters";
    parentElm.classList.add('error');
}
else if(usernameElm.value.length<5){
    usernameError="name cant be numbers";
}
else if(!doesContainANumber(usernameElm.value)){
    usernameError="must contain atleast one number";
}
else{
    usernameError="";
}
parentElm.classList.add("success");
parentElm.classList.remove("error");
let parentElm=usernameElm.parentElm;
}
