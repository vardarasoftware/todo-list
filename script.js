// function myinput1(){
//     var li = document.createElement("li");
//     var input = document.getElementById("i1").value;
//     var n = document.createTextNode(input);
//     li.appendChild(n);
// }

// function addinput(){
//     const add = document.getElementById("i1");
//     const mov = document.getElementById("u1");

//     const li = document.createElement("li");
//     // const bt = document.("button");
//     li.textContent = add.value;
//     // bt.textContent = add.value;

//     mov.appendChild(li);
//     add.value = '';
// }

// const add = document.getElementById("txt");
//     const da = document.getElementById("day");
//     const mov = document.getElementById("ul");
//     const btn = document.getElementById("btn");

//     btn.addEventListener("click" , myfun);


//     let ar = arr[add , da];
//     arr = add;

    
//     function myfun(){
//         const li = document.createElement("li");
//         li.textContent = add.value;
//         mov.appendChild(li);
//         add.value ="";
//         // localStorage.setItem(add);
//     }
    // add.addEventListener("keyup" ,(e)=>{
    //   if(e.key ==="Enter") addTask();
    // });

// add.addEventListener("key" ,(e)=>{

//     if(e.key ==="enter") addTask();
// });


// function addTask() {
//   const text = taskInput.value.trim();
//   if (text === "") return;
//    const task = {
//     id: Date.now(),
//     text,
//     completed: false,
//     dueDate: dateInput.value
//   };   
// } 

    // if(add ==="") return;





// function myfun(){
//     const add = document.getElementById("txt");
//     // const da = document.getElementById("day");
//     const mov = document.getElementById("ul");
//     const btn = document.getElementById("btn");


//     btn.addEventListener()
//     const li = document.createElement("li");
//     // const l1 = document.createTextNode("button");
//     li.textContent = add.value;
//     // li.textContent = l1.value;

    

//     mov.appendChild(li);
//     add.value ="";

// }

// const add = document.getElementById("txt");
// const ul = document.getElementById("ul");
// const btn = document.getElementById("btn");

// // if(add == "") return;
// btn.addEventListener("click" ,(event)=>{
//      event.preventDefault();
//     // add.addEventListener("keyup" ,(e)=>{
//     //     if(e.key ==="Enter") AddTask();
//     // });

//     // function AddTask(){
//     //     const text = add.value;
//     //     if(text ==="")return;
//     // };

//     let li = document.createElement("li");
//     let edit = document.createElement("button");
//     let del = document.createElement("button");
//     let che = document.createElement("input");
//     let span = document.createElement("span");

//     // li.textContent = add.value;
//     che.type = "checkbox";
//     span.textContent = add.value;
//     edit.textContent = "update";
//     del.textContent = "delete";
//     // che.textContent = "checkbox";
//     edit.style.backgroundColor = "blue";
//     edit.style.height = "40px";
//     edit.style.width = "100px";
//     edit.style.margin = "10px";
//     edit.style.borderRadius = "8px";
//     del.style.backgroundColor ="red";
//     del.style.height = "40px";
//     del.style.width = "100px";
//     del.style.margin = "10px";
//     del.style.borderRadius = "8px";
//     // div.append(ul);
//     ul.append(li);
//     li.append(span);
//     li.append(che);
//     li.append(edit);
//     li.append(del);
//     // che.addEventListener("change",()=>{
//     //     che.checked;
//     // });
//     // che.addEventListener('change', () => {
//         // span.style.textDecoration = che.checked ? "line-through" : "none";
//         // });
//         // span.style.textDecoration = che.checked ? "line-through" : "none";

//     del.onclick =()=>{
//         li.remove();
//     }

//     edit.onclick =()=>{
//         // li.update();
//         add.value = span.textContent;
//         li.remove();
//         btn.textContent = "update";
    
//         // li[index].text = add;
//     }

//     add.value = "";
// });

let tasks =[];

function addtask(taskText , taskDate){
    const task = {
        text: taskText,
        date: taskDate,
    }
    if(task.text==""){
            alert("Enter Data");
        };
        datevalidate();
    tasks.push(task);
    saveTasks();
    displaytask();
    // console.log(task);

    displaytask();
}

function displaytask(){
    const a2 = document.getElementById("ul");
    a2.innerHTML ="";
   
    
    tasks.forEach(task => {        
        const li = document.createElement('li');
        li.textContent = `${task.text}, Due-${task.date}`;

        const check = document.createElement("input");
        check.type = "checkbox";
        

        const edit = document.createElement("button");
        edit.textContent = "update";

        const del = document.createElement("button");
        del.textContent = "delete";
        
        edit.style.backgroundColor = "blue";
        edit.style.height = "40px";
        edit.style.width = "100px";
        edit.style.margin = "10px";
        edit.style.borderRadius = "8px";
        del.style.backgroundColor ="red";
        del.style.height = "40px";
        del.style.width = "100px";
        del.style.margin = "10px";
        del.style.borderRadius = "8px";
        
        
        del.onclick = () =>{
            // li.remove();    
            tasks.splice(li,1);
            // tasks.remove(li);
            saveTasks();
            displaytask();
        };
        a2.appendChild(li);
        li.append(check);
        li.append(edit);
        li.append(del);
        
    });
}

const btn = document.getElementById("btn");
const input = document.getElementById("txt");
const date = document.getElementById("day");


btn.addEventListener("click", () => {
        
        const taskText = input.value;
        const taskDate = date.value;

        if(taskText==""){
        alert("Enter Data")
        return;
        }

        if(taskDate==""){
         alert("Enter Data")
         return;
        }

        if(taskDate && !datevalidate(taskDate)){
            alert("enter a valid date")
            return; 
        }
        input.value = "";
        date.value = "";
        addtask(taskText, taskDate);
})
function datevalidate(dateInput){
    const selectDate = new Date(dateInput)
    // console.log(selectDate)
    const today = new Date()
    today.setHours(0,0,0,0);

    return selectDate >= today
    // console.log(selectDate);
}

const storage_key = "my to-do";

function loadTasks() {
    const data = localStorage.getItem(storage_key);
    tasks = data ? JSON.parse(data) : [];
}

function saveTasks() {
    localStorage.setItem(storage_key, JSON.stringify(tasks));
}


loadTasks();
// console.log(datevalidate);


// const d = new Date
// console.log(d);

//  const store = localStorage.setItem( "todo" ,tasks);
//  localStorage.getItem(store);
//  console.log(store);

//  function savetask(){
    //     localStorage.setItem("storage_key" ,JSON.stringify(tasks));
    //  }
    
// //  function loadTasks() {
// //   const data = localStorage.getItem(storage_key);
// }