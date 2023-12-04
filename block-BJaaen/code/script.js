let userRoot=document.querySelector(".user-icons");
let computerRoot=document.querySelector(".computer-icons");
let result=document.querySelector(".result");
let reset=document.querySelector(".reset");
let dataset=[
    {
        name:"rock",
        beats:"scissors",
    },
    {
        name:"paper",
        beats:"rock",
    },
    {
        name:"scissors",
        beats:"paper",
    }, 
];
let userSelected={},
computerSelected={};
function getWinner(user,computer){
    if(user.name===computer.name){
        result.innerText="its a tie";
    }
    else if(user.beats===computer.name){
        result.innerText="User Wins";
    }
    else{
        result.innerText="computer wins";
    }
}
function getRandomNumber(max=3){
    return Math.floor(Math.random()*max);
}
function createUserLayout(){
    userRoot.innerHTML="";
    dataset.forEach((icon)=>{
  let li=document.createElement("li");
  let i=document.createElement("i"); 
  i.className=`fa fa-hand-${icon.name}-0`;  
  if(userSelected.name===icon.name){
    li.classList.add("selected");
  }    
  li.addEventListener("click",()=>{
    userSelected=icon;
    computerSelected=dataset[
        getRandomNumber()
    ];
    getWinner(userSelected,computerSelected);
    createComputerLayout();
  });
  li.append(i);
  userRoot.append(li);
    });
}
createUserLayout();
function createComputerLayout(){
    computerRoot.innerHTML="";
    dataset.forEach((icon)=>{
  let li=document.createElement("li");
  let i=document.createElement("i"); 
  if(computerSelected.name===icon.name){
    li.classList.add("selected");
  }
  i.className=`fa fa-hand-${icon.name}-0`;
  li.append(i);
  computerRoot.append(li);
});
}
createComputerLayout();
reset.addEventListener("click",()=>{
    userSelected={};
    computerSelected={};
    createUserLayout();
    createComputerLayout();
})