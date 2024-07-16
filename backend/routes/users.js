const debug = require("debug")("blogmos:development");
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get a user profile
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("posts");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
});

// Update a user profile
router.put("/:id", async (req, res) => {
  const { name, email, bio, profilePicture } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { bio, profilePicture, name, email }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
    debug(err)
  }
});

module.exports = router;
