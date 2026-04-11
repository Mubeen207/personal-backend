import mongoose from "../db/index.js";
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export default { todoSchema, userSchema };
