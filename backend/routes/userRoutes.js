const express = require("express");

const {
  addUser,
  allUsers,
  deleteUser,
  editUser,
  userInfo,
} = require("../controllers/userController.js");

const router = express.Router();

router.post("/add", addUser);
router.put("/edit/:id", editUser);
router.get("/", allUsers);
router.get("/:id", userInfo);
router.delete("/:id", deleteUser);

module.exports = router;
