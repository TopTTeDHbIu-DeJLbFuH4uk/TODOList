import Router from "express";
const router = new Router;
import PostController from "./PostController.js";

router.post('/tasks', PostController.create);
router.get('/tasks', PostController.getAll);
router.get('/tasks/:id', PostController.getOne);
router.put('/tasks/:id', PostController.update);
router.delete('/tasks/:id', PostController.delete);

export default router;

