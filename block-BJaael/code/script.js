function generateRandomNumber(max){
    return Math.floor(Math.random()*max);
}
function generateRandomColor(){
    let hexCharacters=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",];
    let color='#';
    for(let i=0;i<6;i++){
        let randomNumber=getrandomNumber(16);
        color=color+hexCharacters[randomNumber];
    }
    return color;
}
let parentBoxes=document.querySelector(".boxes");
for(let i=0;i<500;i++){
    let div=document.createElement("div");
    div.classList.add("box");
    let h3=document.createElement("h3");
    let randomNo=getRandomNumber(500);
    h3.innerText=randomNo;
    div.append(h3);
    parentBoxes.append(div);
}
let allBoxes=document.querySelector(".box");
function handleMouseMove(){
    allBoxes.forEach((box)=>{
        box.style.backgroundColor=generateRandomColor();
        box.children[0].innerText=getRandomNumber(500);
    });
}
parentBox.addEvenListener("mousemove",handleMouseMove);