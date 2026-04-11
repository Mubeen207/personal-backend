import mongoose from "mongoose";
import "dotenv/config";
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("Connection Error", err.message));

export default mongoose;
