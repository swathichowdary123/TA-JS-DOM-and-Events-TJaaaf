for(let i=1;i<=12;i++){
    document.querySelector(`#box1.small-box:nth-child(${i})`).addEventListener('click',function(){
        alert(`clicked on box ${i}`);
        setTimeout(()=>{
            alert(`number ${i} disappered`);
        },5000)
    });
}
document.getElementById('box2').addEventListener('click',function(event){
    if(event.target.classList.contains('small-box')){
        let clickedNumber=event.target.textContent;
        alert(`clicked on box ${clickedNumber}`);
        setTimeout(()=>{
            alert(`number ${clickedNumber} disappeared`);
        },5000);
    }
});