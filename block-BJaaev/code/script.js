function main(){
let inputText=document.querySelector("#text");
let root=document.querySelector("ul");
let allTodos=JSON.parse(localStorage.getItem("todos"))||[];
function handleInput(event){
    let value=event.target.value;
    if(event.keyCode===13 && value!==""){
        let todo={
            name:value,
            isDone:false,
        };
        allTodos.push(todo);
        event.target.value="";
        createMovieUI(allTodos,root);
    }
    localStorage.setItem("todos",JSON.stringfy(allTodos));
}
function handleDelete(event){
    let id=event.target.dataset.id;
    allTodos.splice(id,1);
    localStorage.setItem("todos",JSON.stringfy(allTodos));
    createMovieUI();
}
function handleToggle(event){
    let id=event.target.dataset.id;
    allTodos[id].isDone=!allTodos[id].isDone;
    localStorage.setItem("todos",JSON.stringfy(allTodos));
    createMovieUI(allTodos,root);
}
function createUI(data,rootElm){
    rootElm.innerHTML="";
    data.forEach((todo,index) => {
        let li=document.createElement("li");
        let input=document.createElement("input");
        input.type="checkbox";
        input.addEventListener("input",handleToggle);
        input.setAttribute("data-id",index);
        input.checked=todo.isDone;
        let p=document.createElement("p");
        p.innerText=todo.name;
        let span=document.createElement("span");
        span.innerText="x";
        span.setAttribute("data-id",index);
        span.addEventListener("click",handleDelete);
        li.append(input,p,span);
        rootElm.append(li);
    });
}
createUI(allTodos,root);
inputText.addEventListener("keyup",handleInput);
}
main();