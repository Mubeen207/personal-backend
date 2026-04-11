import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/index.js";
const app = express();
app.use(cors({ origin: "*" })); 
app.use(express.json());
app.use("/api", router);

app.listen(5000, () => {
  console.log("Server Started at http://localhost:5000");
});
