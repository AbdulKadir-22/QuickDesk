const User = require("../models/user.model");

//POST /api/users
exports.createUser = async (req, res) => {
  try {
    const { name, email, role, categories, profileImage } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    const user = new User({
      name,
      email,
      role,
      categories,
      profileImage,
    });

    await user.save();

    return res.status(201).json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

//GET /api/users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("tickets")
      .populate("assigned_tickets");
    return res.status(200).json(users);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

//GET /api/users/:id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate("tickets")
      .populate("assigned_tickets");

    if (!user) return res.status(404).json({ message: "User not found." });

    return res.status(200).json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const userEmail = req.params.email.toLowerCase();
    const user = await User.findOne({ email: userEmail })
      .populate("tickets")
      .populate("assigned_tickets");

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with this email." });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

//PUT /api/users/:id
exports.updateUser = async (req, res) => {
  try {
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser)
      return res.status(404).json({ message: "User not found." });

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

//DELETE /api/users/:id
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser)
      return res.status(404).json({ message: "User not found." });

    return res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
