import mongoose from "../../db/index.js";
import todoSchema from "../../schema/index.js";

const getTodos = async (req, res) => {
  const Todo = mongoose.model("Todo", todoSchema);
  try {
    const allTodos = await Todo.find();
    res.status(200).send({
      message: "Todo fetched successfully",
      data: allTodos,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getTodos;
