import mongoose from "../../db/index.js";
import {todoSchema} from "../../schema/index.js";

const updateTodo = async (req, res) => {
  const Todo = mongoose.model("Todo", todoSchema);
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTodo) return res.status(404).json({ message: "Todo Not Found" });
    res.status(200).send({
      message: "Todo updates Successfully",
      data: updatedTodo,
    });
  } catch (error) {
    res.json({ message: "invalid Id OR Data" });
  }
};

export default updateTodo;