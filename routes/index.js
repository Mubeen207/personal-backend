import express from "express";
import getTodos from "./todo/get.js";
import postTodo from "./todo/post.js";
import deleteTodo from "./todo/delete.js";
const router = express.Router();

router.get("/todos", getTodos);
router.post("/todo", postTodo);
router.delete("/todo/:id", deleteTodo);

export default router;
