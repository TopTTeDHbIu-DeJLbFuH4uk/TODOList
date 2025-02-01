const database = JSON.parse(localStorage.getItem('tasks')) || [];
const loadTasks = () => {
    database.forEach(el => {
        addTask(el.task);
    });
}
loadTasks();