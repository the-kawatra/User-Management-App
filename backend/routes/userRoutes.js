import express from "express";

import { addUser, editUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/add", addUser);
router.put("/edit/:id", editUser);

export default router;
