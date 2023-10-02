const addBtn = document.getElementById('addBtn');
const input = document.querySelector('input');
const containerTodoItems = document.querySelector('.container-todoItems');

addBtn.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (inputValue !== '') {

        // Container delete task button
        const containerDeleteTaskButton = document.createElement('div');
        containerDeleteTaskButton.className = 'container-deleteTaskButton';
        const deleteTaskButton = document.createElement('div');
        deleteTaskButton.className = 'deleteTaskButton';
        deleteTaskButton.innerHTML = 'Delete';

        containerDeleteTaskButton.appendChild(deleteTaskButton);
        containerTodoItems.appendChild(containerDeleteTaskButton);

        // Container edit task button
        const containerEditTaskButton = document.createElement('div');
        containerEditTaskButton.className = 'container-editTaskButton';
        const editTaskButton = document.createElement('div');
        editTaskButton.className = 'editTaskButton';
        editTaskButton.innerHTML = 'Edit';

        containerEditTaskButton.appendChild(editTaskButton);
        containerTodoItems.appendChild(containerEditTaskButton);

        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.textContent = inputValue;
        containerTodoItems.appendChild(todoItem);

        input.value = '';

    }
});

