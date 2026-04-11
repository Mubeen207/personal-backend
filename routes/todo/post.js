import todoSchema from "../../schema/index.js";
import mongoose from "../../db/index.js";
const postTodo = async (req, res) => {
  const Todo = mongoose.model("Todo", todoSchema);
  try {
    const { title } = req.body;
    const newTodo = new Todo({ title: title });
    const savedTodo = await newTodo.save();
    res.status(201).send({
      message: "Todo Added Successfuly",
      data: savedTodo,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postTodo;
