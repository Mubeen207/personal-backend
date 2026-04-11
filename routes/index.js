import express from "express";
import getTodos from "./todo/get.js";
const router = express.Router();

router.get("/todos", getTodos);

export default router;
