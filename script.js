let tasks =[];
let editIndex = null;
let currentFilter = "all";

const btn = document.getElementById("btn");
const input = document.getElementById("txt");
const date = document.getElementById("day");
const a2 = document.getElementById("ul");
const filterButtons = document.querySelectorAll(".filter");


const storage_key = "my to-do";

function addtask(taskText , taskDate){
    const task = {
        text: taskText,
        date: taskDate,
        completed: false,
    }
    if(task.text==""){
            alert("Enter Data");
        };
        datevalidate();
    tasks.push(task);
    saveTasks();
    displaytask();
}

function displaytask(){
    a2.innerHTML ="";
    let filteredTasks = tasks;

    if (currentFilter === "pending") {
    filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === "completed") {
    filteredTasks = tasks.filter(t => t.completed);
    }
    
    filteredTasks.forEach((task ,index) => {        
        const li = document.createElement('li');

        
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = task.completed;
        check.style.margin ="10px";
        
        const span = document.createElement("span");
        span.textContent = `${task.text} | Due: ${task.date}`;
        span.style.textDecoration = task.completed ? "line-through" : "none";
        

        const edit = document.createElement("button");
        edit.textContent = "update";

        const del = document.createElement("button");
        del.textContent = "delete";

        check.addEventListener("change", () => {
            task.completed = check.checked;
            saveTasks();
            displaytask();
        });
        
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
            tasks.splice(index,1);
            saveTasks();
            displaytask();   
        };
            
        edit.onclick = () => {
        input.value = task.text;
        date.value = task.date;
        editIndex = index;
        btn.textContent = "Update Task";
        };
        a2.appendChild(li);
        li.append(check);
        li.append(span);
        li.append(edit);
        li.append(del);
        
    });
}
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    displaytask();
  });
});

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
        if (editIndex !== null) {
        tasks[editIndex].text = taskText;
        tasks[editIndex].date = taskDate;
        editIndex = null;
        btn.textContent = "Add Task";
        } else {
        
        tasks.push({
            text: taskText,
            date: taskDate,
            completed:false,
        });
    }
        input.value = "";
        date.value = "";
        saveTasks();
        displaytask();
});


function datevalidate(dateInput){
    const selectDate = new Date(dateInput)

    const today = new Date()
    today.setHours(0,0,0,0);

    return selectDate >= today
};

function loadTasks() {
    const data = localStorage.getItem(storage_key);
    tasks = data ? JSON.parse(data) : [];
    displaytask();
}

function saveTasks() {
    localStorage.setItem(storage_key, JSON.stringify(tasks));
}


loadTasks();