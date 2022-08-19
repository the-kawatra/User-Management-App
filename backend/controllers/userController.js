import User from "../models/userSchema.js";

const addUser = async (req, res) => {
  const { name, email, age, department } = req.body;

  if (!name || !email || !age || !department) {
    return res.status(401).json({ error: "Please fill all the Fields" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(401).json({ error: "Email is already in use" });
  }

  const user = await User.create(req.body);

  if (user) {
    return res.status(201).json({
      name: user.name,
      email: user.email,
      age: user.age,
      department: user.department,
    });
  } else {
    return res.status(401).json({ error: "Adding user failed" });
  }
};

const editUser = async (req, res) => {
  const userId = req.params.id;

  const userExists = await User.findById(userId);

  if (!userExists) {
    return res.status(401).json({ error: "Invalid User Id" });
  }

  const { name, email, age, department } = req.body;

  if (!name || !email || !age || !department) {
    return res.status(401).json({ error: "Please fill all the Fields" });
  }

  const user = await User.findByIdAndUpdate(userId, req.body);

  if (user) {
    return res.status(200).json({ message: "User data updated successfully " });
  } else {
    return res.status(401).json({ error: "Updating user data failed" });
  }
};

export { addUser, editUser };
