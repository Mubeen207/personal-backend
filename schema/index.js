import mongoose from "../db/index.js";
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default todoSchema;
