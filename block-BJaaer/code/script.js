let form=document.querySelector("form");
let modal=document.querySelector(".modal_overlay");
let modalInfo=document.querySelector(".modal_info");
let userData={};
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let elements=event.target.elements;
    userData.name=elements.name.value;
    userData.email=elements.email.value;
    userData.choice=elements.choice.value;
    userData.color=elements.color.value;
    userData.movie=elements.movie.value;
    userData.book=elements.book.value;
    userData.terms=elements.terms.checked;
    modal.classList.add("open");
    let close=document.querySelector(".modal_close");
    close.addEventListener("click",()=>{
        modal.classList.remove("open");
    });
    displayInfo(userData);
});
function displayInfo(data={}){
    modalInfo.innerHTML="";
    let h1=document.createElement("h1");
    h1.innerText=`hello ${data.name}`;
    let email=document.createElement("p");
    email.innerHTML=`email:${data.email}`;
    let choice=document.createElement("p");
    choice.innerHTML=`watching choice:${data.choice}`;
    let color=document.createElement("p");
    color.innerHTML=`color:${data.color}`;
    let movie=document.createElement("p");
    movie.innerHTML=`rating for movie:${data.movie}`;
    let book=document.createElement("p");
    book.innerHTML=`book:${data.book}`;
    let terms=document.createElement("p");
    terms.innerHTML=`->:${data.terms?"you have accepted the terms and condition"
    :"you have not accepted the terms and condition"}`;
    modalInfo.append(h1,email,choice,color,movie,book,terms);
}