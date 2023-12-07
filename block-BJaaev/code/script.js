let ulRoot=document.querySelector(".todos");
let todoInput=document.querySelector(`input[type="text"]`);
let all=document.querySelector(".all");
let active=document.querySelector(".active");
let completed=document.querySelector(".completed");
let clear=document.querySelector(".clear");
let activeButton="all";
let allTodos=localStorage.getItem("allTodos")?JSON.parse(localStorage.getItem("allTodos")):[];
function addTodo(event){
    if(event.keyCode===13 && event.target.value){
        allTodos.push({
            name:event.target.value,
            isDone:false,
        });
        event.target.value="";
        createUI();
        localStorage.setItem("allTodos",JSON.stringify(allTodos));
    }
}
function handleCheck(event){
let id=event.target.dataset.id;
allTodos[id].isDone=!allTodos[id].isDone;
createUI();
localStorage.setItem("allTodos",JSON.stringify(allTodos));
}
function handleDelete(event){
let id=event.target.dataset.id;
allTodos.splice(id,1);
createUI();
localStorage.setItem("allTodos",JSON.stringify(allTodos));
}
function createUI(data=allTodos){
    ulRoot.innerHTML="";
    data.forEach((todo,i)=>{
        let li=document.createElement("li");
        let input=document.createElement("input");
        input.type="checkbox";
        input.checked=todo.isDone;
        input.setAttribute("data-id",i);
        input.addEventListener("click",handleCheck);
        let p=document.createElement("p");
        p.innerText=todo.name;
        let span=document.createElement("span");
        span.innerText="x";
        span.setAttribute("data-id",i);
        span.addEventListener("click",handleDelete);
        li.append(input,p,span,ulRoot.append(li));
    });
}
createUI();
clear.addEventListener("click",()=>{
    allTodos=allTodos.filter((todo)=>!todo.isDone);
    createUI();
    localStorage.setItem("allTodos",JSON.stringify(allTodos));
});
active.addEventListener("click",()=>{
    let notCompleted=allTodos.filter((todo)=>!todo.isDone);
    createUI(notCompleted);
    activeButton="active";
    updateActiveButton();
});
completed.addEventListener("click",()=>{
    let completdTodos=allTodos.filter((todo)=>todo.isDone);
    createUI(completedTodos);
    activeButton="completed";
    updateActiveButton();
});
