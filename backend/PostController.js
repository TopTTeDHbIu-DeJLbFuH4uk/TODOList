// noinspection DuplicatedCode
import tasksArray from "./database.js";
import { v4 as uuidv4 } from 'uuid';



class PostController {
    async create(req, res) {
        try {
            const newTask = req.body;
            newTask.id = uuidv4();
            tasksArray.push(newTask);
            res.json(newTask);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async getAll(req, res) {
        try {
            res.json(tasksArray);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async getOne(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).json({message: `Id not specified`});
            }
            const task = tasksArray.find(task => task.id === id);
            res.json(task);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async update(req, res) {
        try {
            const id = req.params.id;
            const updatedTask = req.body;
            if (!id) {
                res.status(400).json({message: `Id not specified`});
            }
            const task = tasksArray.find(res => res.id === id);
            task.content = updatedTask.content;
            res.json(task);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    async delete(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).json({message: `Id not specified`});
            }
            const deleteTask = tasksArray.find(res => res.id === id);
            tasksArray.splice(deleteTask, 1);
            res.status(200);
        } catch (error) {
            res.status(500).json(error);
        }
    };

}
export default new PostController();