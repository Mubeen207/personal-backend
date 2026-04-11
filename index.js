
import express from "express";
import cors from "cors";
// import mongoose from "./db/index.js";
import "dotenv/config";
import router from "./routes/index.js";
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api", router);

app.put("/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTodo)
      return res.status(404).json({ message: "Todo not found" });

    res.status(200).json({ message: "Edited Successfully", data: updatedTodo });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID or Data" });
  }
});



app.listen(5000, () => {
  console.log("Server Started at http://localhost:5000");
});
