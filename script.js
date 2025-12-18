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

const add = document.getElementById("txt");
const ul = document.getElementById("ul");
const btn = document.getElementById("btn");

// if(add == "") return;
btn.addEventListener("click" ,(event)=>{

    // add.addEventListener("keyup" ,(e)=>{
    //     if(e.key ==="Enter") AddTask();
    // });

    // function AddTask(){
    //     const text = add.value;
    //     if(text ==="")return;
    // };

    let li = document.createElement("li");
    let edit = document.createElement("button");
    let del = document.createElement("button");
    let che = document.createElement("input");
    let span = document.createElement("span");

    li.textContent = add.value;
    che.type = "checkbox";
    edit.textContent = "update";
    del.textContent = "delete";
    span.textContent = add.value;
    // che.textContent = "checkbox";
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
    // div.append(ul);
    ul.append(li);
    li.append(che);
    li.append(edit);
    li.append(del);
    li.append(span);


    del.onclick =()=>{
        li.remove();
    }

    edit.onclick =()=>{
        // li.update();
        add.value = span.textContent;
        edit.textContent = "update";
        li.remove();
    
        // li[index].text = add;
    }

    add.value = "";
});