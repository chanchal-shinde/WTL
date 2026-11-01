const taskInput=document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click",() =>{
    const task=taskInput.value;
    if(task==""){
        alert("Please enter a task");
        return;
    }

    const li =document.createElement("li");
    li.textContent=task;
     const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});

