const database = JSON.parse(localStorage.getItem('tasks')) || [];
// localStorage.clear();

const loadTasks = () => {
    database.forEach(el => {
        addTask(el.task);
    });
}
loadTasks();

console.log(JSON.parse(localStorage.getItem('tasks')));