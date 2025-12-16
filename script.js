// function myinput1(){
//     var li = document.createElement("li");
//     var input = document.getElementById("i1").value;
//     var n = document.createTextNode(input);
//     li.appendChild(n);
// }

function addinput(){
    const add = document.getElementById("i1");
    const mov = document.getElementById("u1");

    const li = document.createElement("li");
    li.textContent = add.value;

    mov.appendChild(li);
    add.value = '';
}