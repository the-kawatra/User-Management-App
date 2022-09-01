const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db.js");
const Routes = require("./routes/userRoutes.js");
const path = require("path");

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/user", Routes);

// ------------------------------- Deployment --------------------------------

if (process.env.NODE_ENV === "production") {
  const __dirname1 = path.resolve();

  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("CRUD App");
  });
}

// ------------------------------- Deployment --------------------------------

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
