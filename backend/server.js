import express from "express";
import dotenv from "dotenv";

import connectDB from "./db.js";
import Routes from "./routes/userRoutes.js";

const app = express();

const PORT = 5000;

dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/user", Routes);

app.get("/", (req, res) => {
  res.send("CRUD App");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
