const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post");

// Add a comment to a post
router.post("/", async (req, res) => {
  const { postId, authorId, content } = req.body;

  try {
    const comment = new Comment({ postId, author: authorId, content });
    await comment.save();

    await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Error adding comment", error: err });
  }
});

// Get comments for a post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).populate(
      "author",
      "username"
    );
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching comments", error: err });
  }
});

module.exports = router;
