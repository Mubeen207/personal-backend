import express from "express";
import getTodos from "./todo/get.js";
import postTodo from "./todo/post.js";
import deleteTodo from "./todo/delete.js";
import updateTodo from "./todo/update.js";
const router = express.Router();

router.get("/todos", getTodos);
router.post("/todo", postTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router;
