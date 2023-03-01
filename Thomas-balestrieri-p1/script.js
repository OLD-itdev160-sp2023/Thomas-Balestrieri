const tableBody = document.getElementById('table-body');
// Todo form
const todoForm = document.getElementById("todo-form");


// Todo form stops dault handler and i handle it myself. I want to add the new inputs into the todo rows
todoForm.addEventListener( "submit" ,(todoFormSubmitted) => {
    todoFormSubmitted.preventDefault();

    let usersTempInput = document.getElementById("todo-input").value;
    
    newRow(usersTempInput);
    todoForm.reset();
    console.log("handles submit");
})


// ToDo is finished. I want a line through the todo description and added from need to daily proggress page
function finished(event){
    const row = event.target.closest(".todo-row");
    const button = event.target.closest("button");
    button.classList.toggle("complete-button");
    row.classList.toggle("todo-text-finished");
    if(button.innerText == "Finished") button.innerText = "Marked Finished";
    else(button.innerText = "Finished");

      
}

function createFinishButton(row){
    let buttonFinish = document.createElement('button');
    buttonFinish.innerText="Marked Finished";
    buttonFinish.className = "finished-button";
    buttonFinish.addEventListener('click',(event) => finished(event));

    row.querySelector(".todo-text").addEventListener("click", (event) => {
        finished(event);
      });
      return buttonFinish;
}

// ToDo is remove. Remove the row from all pages
function removed(event){
    const row = event.target.closest(".todo-row");
    row.remove();
}
function createRemoveButton(){
    let buttonRemove = document.createElement('button');
    buttonRemove.innerText="Remove";
    buttonRemove.className="remove-button";
    buttonRemove.addEventListener('click', (event) => removed(event));
    return buttonRemove;
}


function newRow(input){
    const newRow = tableBody.insertRow();
    newRow.classList.add("todo-row");

    const todoInput = newRow.insertCell();
    const newFinishedBtn = newRow.insertCell();
    const newRemoveBtn = newRow.insertCell();

    todoInput.classList.add("todo-text");
    
    let usersText = document.createTextNode(input);
    todoInput.appendChild(usersText);
    newFinishedBtn.appendChild(createFinishButton(newRow));
    newRemoveBtn.appendChild(createRemoveButton(newRow));
}





//id needs to be created everytime thers a new row
//id needs to update both the row and the button when theres a deleted or new row

//buttons should get id from newRow
