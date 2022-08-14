import express from "express";

import User from "../models/userSchema.js";

const router = express.Router();

router.post("/adduser", async (req, res) => {
  try {
    const addUser = await User.create(req.body);
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
