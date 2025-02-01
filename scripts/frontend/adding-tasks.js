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

    buttonDelete.addEventListener('click', () => deleteTask(li, p));
    buttonEdit.addEventListener('click', () => editTask(p));

    resetInput();
};

const addTaskToDatabase = task => {
    const newTask = {
        id: database.length + 1,
        task: task,
        completed: false,
    };
    database.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(database));
};

const editTask = taskEl => {
    inputFiledEl.value = taskEl.innerText;
    addTaskBtn.innerText = 'Save';

    currentTask = taskEl;
};

const deleteTask = (taskContainerEl, taskEl) => {
    taskContainerEl.remove();
    resetInput();

    const taskIndex = database.findIndex(t => t.task === taskEl.innerText)
    if (taskIndex !== -1) {
        database.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(database));
    }
}

addTaskBtn.addEventListener('click', e => {
    e.preventDefault();

    if (!inputFiledEl.value) return;

    if (currentTask) {
        const taskIndex = database.findIndex(t => t.task === currentTask.innerText);
        currentTask.innerText = inputFiledEl.value;

        if (taskIndex !== -1) {
            database[taskIndex].task = currentTask.innerText;
            localStorage.setItem('tasks', JSON.stringify(database));
        }

        resetInput();

    } else {
        const task = inputFiledEl.value;

        addTask(task);
        addTaskToDatabase(task);
    }
});

const resetInput = () => {
    inputFiledEl.value = '';
    addTaskBtn.innerText = 'Add';
    currentTask = null;
}