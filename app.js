function onReady() {
    let id = 0;
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) { return; }
        
        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id
        });

        id++; 

        newToDoText.value = '';

        renderTheUI();
    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';

        toDos.forEach(function(toDo) {
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            const deleteLi = document.createElement('button');

            deleteLi.textContent = "Delete";
            newLi.textContent = toDo.title;

            deleteLi.addEventListener('click', () => {
                toDos = toDos.filter(toDoItem => toDoItem.id != toDo.id);

                renderTheUI();
            });

            newLi.appendChild(deleteLi);
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
        });
    }
    
    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });

    renderTheUI();
}

window.onload = function() {
    onReady();
};

