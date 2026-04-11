import {todoSchema} from "../../schema/index.js";
import mongoose from "../../db/index.js";

const deleteTodo = async (req, res) => {
  const Todo = mongoose.model("Todo", todoSchema);
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.send({ message: "Todo Deleted Successfully" });
  } catch (error) {
    res.send({ message: error.message });
  }
};
export default deleteTodo;
