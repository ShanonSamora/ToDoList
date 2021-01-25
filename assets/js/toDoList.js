//=========================================================
// Helper functions
//=========================================================
const assignRemoveButtons = () => {

    // Adding a remove button to every LI item
    document.querySelectorAll('#items li').forEach(li => {
        const button = document.createElement('button');
        button.className = 'remove';
        button.innerHTML = 'x';
        button.type = 'button';

        // If the LI does not have a remove button, add it
        if (li.childElementCount < 1) {
            li.appendChild(button);
        }
        })
    // Adding the function to delete the item that's been clicked to the remove buttons
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].onclick = function() {
            let taskSelected = this.parentElement;
            taskSelected.remove();
        }
    }
}

const newElement = () => {
    let newLi = document.createElement("li");
    let inputValue = newTaskInput.value;
    let text = document.createTextNode(inputValue);
    newLi.appendChild(text);

    if (inputValue !== '') {
        itemsList.appendChild(newLi);
    } else {
        newTaskInput.classList.remove("showMe");
        newTaskInput.style.visibility = 'hidden';
    }
    newTaskInput.value = "";

    // Using this function to add a remove button to the new item
    assignRemoveButtons();
}

const stayVisible = () => {
    newTaskInput.classList.add("showMe");
    newTaskInput.style.visibility = 'visible';
}

//=========================================================
// Initiate variables
//=========================================================
const addButton = document.getElementById("addButton");
const newTaskInput = document.getElementById("newTask")
const removeButtons = document.getElementsByClassName("remove");
const itemsList = document.getElementById("items");

//=========================================================
// Main
//=========================================================
function main() {
    // Set up the input when opening the page
    newTaskInput.style.visibility = 'hidden';
    newTaskInput.value = "";

    // Cross the text of the item clicked
    itemsList.addEventListener('click', function(item) {
        if (item.target.tagName === 'LI') {
          item.target.classList.toggle("checked");
        }
      }, false);

    // Adding a remove button to every LI item
    assignRemoveButtons();

    // Add function to add items by pressing enter
    newTaskInput.addEventListener("keyup", function(enter) {
        if (enter.keyCode === 13) {
            addButton.click();
        }
    })
    
    // Set up the click function to the add button
    addButton.onclick = function() {
        if (newTaskInput.style.visibility === 'visible') {
            newElement();
        } else if (newTaskInput.style.visibility === 'hidden') {
            stayVisible();
        }
    }
}

main();