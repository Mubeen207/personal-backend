import express from "express";
import getTodos from "./todo/get.js";
import postTodo from "./todo/post.js";
const router = express.Router();

router.get("/todos", getTodos);
router.post("/todo", postTodo);

export default router;
