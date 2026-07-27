const inputTag = document.getElementById("input");
const buttonTag = document.getElementById("btn");
const taskList = document.querySelector(".task-list");
// add button
buttonTag.addEventListener("click", function () {
    const task = inputTag.value;
     if (task.trim().length == 0) {
    alert("Plese Enter a Task");
    return;
  }
    inputTag.value = "";
  //boxes
    const taskBox = document.createElement("div");
    taskBox.classList.add("task");

    


    taskBox.innerHTML = `
    
    <p>${task}</p>

        <div class="icons">
            <button class="complete">✔️</button>
            <button class="edit">✏️</button>
            <button class="delete">🗑️</button>
        </div>
    `;
    taskList.appendChild(taskBox);
  // Delete button
    const deleteButton = taskBox.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskBox);
    })
    const editButton = taskBox.querySelector(".edit");
   ///edit button
    editButton.addEventListener("click", function () {
         const taskText = taskBox.querySelector("p");

        if (taskText.classList.contains("completed")) {
        alert("Completed task cannot be edited");
        return;
    }

       
        const updatedTask = prompt("Edit Task", taskText.innerText);

        if (updatedTask !== null && updatedTask.trim() !== "") {
            taskText.innerText = updatedTask;
        }

    });
  //checkbox 
    // const checkbox=taskBox.querySelector(".complete_check");
    // const taskTest=taskBox.querySelector("p");

    // checkbox.addEventListener("change",function(){
    //     if(checkbox.checked){
    //         taskText.classList.add("completed");
    //     }else{
    //         taskTest.classList.remove("completed");
    //     }
    // });

    //complete button
    const completeButton = taskBox.querySelector(".complete");

  completeButton.addEventListener("click", function () {
    const taskText = taskBox.querySelector("p");

    taskText.classList.toggle("completed");

    
  });


});
// enter button
inputTag.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        buttonTag.click();


    }
});
