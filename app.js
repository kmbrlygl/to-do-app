function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

        // create a new li, set new li class to take on MDL list styling
        let newLi = document.createElement('li');
        newLi.className = "mdl-list__item";

        // create label for new li (MDL styling purposes)
        let labelLi = document.createElement('label');
        labelLi.className = "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect";

        // create a new input, set the input's type to checkbox, assign MDL style
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "mdl-checkbox__input";

        // add checkbox to label (MDL styling purposes)
        labelLi.appendChild(checkbox);

        // create Delete button
        let deleteLi = document.createElement('button');
        deleteLi.textContent = "Delete";
        deleteLi.className = "mdl-button mdl-js-button"

        // set the title 
        newLi.textContent = title;

        // attach the checkbox to the li (in front of it)
        newLi.prepend(labelLi);
        
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

