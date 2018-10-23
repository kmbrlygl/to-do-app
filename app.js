function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

        // create a new li
        let newLi = document.createElement('li');

        // set new li class to take on MDL list styling
        newLi.className = "mdl-list__item";

        // create label for li (MDL styling purposes)
        let labelLi = document.createElement('label');
        labelLi.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";

        // create a new input
        let checkbox = document.createElement('input');

        // set the input's type to checkbox, assign MDL style
        checkbox.type = "checkbox";
        checkbox.className = "mdl-checkbox__input";

        // add li to label
        labelLi.appendChild(checkbox);

        // create delete button
        let deleteLi = document.createElement('button');

        // set the button value and type
        deleteLi.textContent = "Delete";

        // set the title 
        newLi.textContent = title;

        // attach the checkbox to the li
        newLi.appendChild(labelLi);
        
        // attach delete button to li   
        newLi.appendChild(deleteLi);

        // when delete button is clicked, remove list item
        deleteLi.addEventListener('click', (removeLi) => {
            removeLi.target.parentNode.remove();
        });

        // attach the li to the ul
        toDoList.appendChild(newLi);

        // empty the input
        newToDoText.value = '';
        
        // to register new DOM elements to get MDL to work
        componentHandler.upgradeElement(labelLi);

    });
}

window.onload = function() {
    onReady();
};

