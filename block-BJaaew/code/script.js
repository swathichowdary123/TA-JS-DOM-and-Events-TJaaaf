console.log(got);
let parentElm=document.querySelector(".mainbox");
let allPeople=got.houses.reduce((acc,cv)=>{
    acc=acc.concat(cv.people);
    return acc;
},[]);
let cardsHTML=allPeople.map((person)=>{
    return `<li class="card">
    <div class="card">`
})