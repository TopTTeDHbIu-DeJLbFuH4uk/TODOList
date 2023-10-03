const express = require('express');
const uuid = require('uuid');
const tasksArray = require('./database.js');

const app = express();
const PORT = 5656;

app.use(express.json());

// Get all tasks
app.get('/tasks', (req, res) => {
    try {
        res.json(tasksArray);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Create task
app.post('/tasks', (req, res) => {
    try {
        const newTask = req.body;
        newTask.id = uuid.v4();
        tasksArray.push(newTask);
        res.json(newTask);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Updated task
app.put('/tasks/:id', (req, res) => {
    try {
        const id = req.params.id;
        const reqBody = req.body;
        if (!id) {
            res.status(404).json({message: `Id not specified`})
        }
        const updatedTask = tasksArray.find(task => task.id === id);
        updatedTask.content = reqBody.content;
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete task
app.delete('/tasks/:id', (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
           res.status(404).json({message: `Id not specified`});
        }
        const deleteTask = tasksArray.find(task => task.id === id);
        tasksArray.splice(deleteTask, 1);
        res.status(200).send();
    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));

