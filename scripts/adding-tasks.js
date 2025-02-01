const inputFiledEl = document.querySelector('.input-field');
const addTaskBtn = document.querySelector('.add-task-btn');
const listOfTasksEl = document.querySelector('.list-of-tasks');
let currentTask = null;

const addTask = task => {
    const li = document.createElement('li');
    li.classList.add('task-container');

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('control-btn', 'btn-delete');
    buttonDelete.innerText = 'Delete';

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('control-btn', 'btn-edit');
    buttonEdit.innerText = 'Edit';

    const p = document.createElement('p');
    p.classList.add('task');
    p.innerText = task;

    listOfTasksEl.append(li);
    li.append(buttonDelete);
    li.append(buttonEdit);
    li.append(p);

    inputFiledEl.value = '';

    buttonDelete.addEventListener('click', () => deleteTask(li));
    buttonEdit.addEventListener('click', () => editTask(li, p));
};

const editTask = (taskContainerEl, taskEl) => {
    inputFiledEl.value = taskEl.innerText;
    addTaskBtn.innerText = 'Save';

    currentTask = taskEl;
};

const deleteTask = taskContainer => {
    taskContainer.remove();
    resetInput();
}

addTaskBtn.addEventListener('click', e => {
    e.preventDefault();

    if (!inputFiledEl.value) return;

    if (currentTask) {
        currentTask.innerText = inputFiledEl.value;
        resetInput();

    } else {
        const task = inputFiledEl.value;
        addTask(task);
    }
});

const resetInput = () => {
    inputFiledEl.value = '';
    addTaskBtn.innerText = 'Add';
    currentTask = null;
}