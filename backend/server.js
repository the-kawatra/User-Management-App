import express from "express";
import dotenv from "dotenv";

import connectDB from "./db.js";
import Routes from "./controllers/userController.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(Routes);

app.get("/", (req, res) => {
  res.send("CRUD App");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
