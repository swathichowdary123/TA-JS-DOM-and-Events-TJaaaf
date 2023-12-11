let key=document.querySelector("h2");
let description=document.querySelector("p");
let button=document.querySelector("button");
function generateRandomNumber(max){
    return Math.floor(Math.random()*max);
}
function handleClick(){
    let randomIndex=generateRandomNumber(data.length);
    let randomShortCut=data[randomIndex];
    key.innerText=randomShortCut.shortcut;
    description.innerText=randomShortCut.description
}
handleClick();
button.addEventListener("click",handleClick);