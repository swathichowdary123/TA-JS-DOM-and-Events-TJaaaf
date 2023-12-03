let container=document.getElementById('bocContainer');
for(let i=0;i<9;i++){
    let box=document.createElement('div');
    box.className='box';
    box.textContent=generateRandomNumber();
    box.addEventListener('mouseover',()=>changeColorAndNumber(box));
    container.appendChild(box);
}
function changeColorAndNumber(element){
    let randomColor=generateRandomColor();
    element.textContent=randomNumber;
}
function getRandomColor(){
    let letters='0123456789abcdef';
    let color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
function getRandomColor(){
    return Math.floor(Math.random()*501);
}