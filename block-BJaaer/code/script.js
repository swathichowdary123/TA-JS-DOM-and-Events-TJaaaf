let form=document.querySelector("form");
let userInfo={};
function handleSubmit(event){
    event.preventDefault();
    userInfo.name=form.elements.name.value;
    userInfo.email=form.elements.email.value;
    userInfo.movies=form.elements.movies.value;
    userInfo.color=form.elements.color.value;
    console.log(userInfo);
}
form.addEventListener("sumbit",handleSubmit);