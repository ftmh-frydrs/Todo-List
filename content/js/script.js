let $ = document;
let inputEl= $.querySelector('input');
let addTodo= $.querySelector('.add');
let ulEl = $.querySelector('.todos');

let newTodoArray=[]

function addNewTodo(newTodo){

    

    let newObj={
        id:newTodoArray.length+1,
        title:inputEl.value,
        complete:false
    }

    setLocalStorage(newTodoArray)
     
    

    newTodoArray.push(newObj)
    console.log(newTodoArray);

    let newLi= $.createElement('li')
    newLi.className = "list-group-item d-flex justify-content-between align-items-center";

    let newSpan = $.createElement('span')
    newSpan.innerHTML = newTodo;

    iconTrash = $.createElement('i')
    iconTrash.className= "fa-solid fa-trash"

    iconCheck =$.createElement('i')
    iconCheck.className="fa-regular fa-square-check "
    iconCheck.addEventListener('click',function(event){
        event.target.parentElement.classList.toggle("check");
    
        newTodo.forEach(function(toDo){
            console.log(toDo);
            })

    })


    function setLocalStorage(todosList){
        localStorage.setItem('todo', JSON.stringify(todosList))
    }

    // function todoGenerator(todosList){
       
    // }
    

    // let CheckBox = $.createElement('input')
    // CheckBox.setAttribute('type','checkBox' )
    // CheckBox.classList='checked'

    // ulEl.addEventListener('click', function(event){
    //     event.target.classList.toggle('checked');
    // })

    iconTrash.addEventListener('click', function(event){
        event.target.parentElement.remove();
    })

    newLi.append(iconCheck,newSpan , iconTrash );
    ulEl.append(newLi);

}

addTodo.addEventListener('submit', function(event){
    event.preventDefault();
})

inputEl.addEventListener('keydown', function(event){
   let newTodo=event.target.value.trim();
   

   if(event.keyCode===13){
    if(newTodo){
     inputEl.value="";
     addNewTodo(newTodo);
    }
   }
})

function getLocalStorage(){
    let localStorageTodo = JSON.parse(localStorage.getItem('todo'))

   if(localStorageTodo){
    newTodoArray = localStorageTodo
   }else{
    newTodoArray=[]
   }
//    addNewTodo(newTodoArray)
    console.log(localStorageTodo);
   
}

window.addEventListener('load', getLocalStorage)



