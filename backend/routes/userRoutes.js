import express from "express";

import { addUser, editUser, userInfo } from "../controllers/userController.js";

const router = express.Router();

router.post("/add", addUser);
router.put("/edit/:id", editUser);
router.get("/:id", userInfo);

export default router;
