function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        toDos.push({
            title: newToDoText.value,
            complete: false
        });
        newToDoText.value = '';
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

