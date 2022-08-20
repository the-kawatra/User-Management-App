import express from "express";

import {
  addUser,
  allUsers,
  deleteUser,
  editUser,
  userInfo,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/add", addUser);
router.put("/edit/:id", editUser);
router.get("/", allUsers);
router.get("/:id", userInfo);
router.delete("/:id", deleteUser);

export default router;
