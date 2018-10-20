function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

    });
}

window.onload = function() {
    onReady();
};

