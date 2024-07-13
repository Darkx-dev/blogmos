const debug = require("debug")("blogmos:development");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const { extractFirstImageSrc } = require("../utils/extractor");
const auth = require("../middleware/auth");

// Create a new post
router.post("/", auth , async (req, res) => {
  const { title, description, content, authorId, tags } = req.body;
  debug("Creating new post:", req.body);

  try {
    // Split the tags string into an array if provided, otherwise set an empty array
    const tagsArray = tags ? tags.split(",").map((tag) => tag.trim()) : [];
    const extractedSrc = extractFirstImageSrc(content);

    const post = new Post({
      title,
      content,
      coverImage: extractedSrc,
      description,
      author: authorId,
      tags: tagsArray,
    });
    await post.save();

    await User.findByIdAndUpdate(authorId, { $push: { posts: post._id } });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error creating post", error: err });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sort = "-createdAt",
      tag,
      search,
    } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort,
      populate: { path: "author", select: "username" },
      select: "-content",
    };

    let query = {};

    if (tag) {
      query.tags = tag;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const result = await Post.paginate(query, options);

    res.status(200).json({
      posts: result.docs,
      totalPages: result.totalPages,
      currentPage: result.page,
      totalPosts: result.totalDocs,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
});

// Get a single post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "username")
      .populate("comments");
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post", error: err });
  }
});

// Update a post by ID
router.put("/:id", async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, tags },
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error updating post", error: err });
  }
});

// Delete a post by ID
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(post.author, { $pull: { posts: post._id } });
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting post", error: err });
  }
});

// Get new posts
router.get("/new", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author", "username");
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching new posts", error: err });
  }
});

// Get popular posts
router.get("/popular", async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ likes: -1 })
      .limit(10)
      .populate("author", "username");
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching popular posts", error: err });
  }
});

// Get posts by author ID
router.get("/author/:authorId", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort: "-createdAt",
      populate: { path: "author", select: "username" },
      select: "-content",
    };

    const result = await Post.paginate(
      { author: req.params.authorId },
      options
    );

    res.status(200).json({
      posts: result.docs,
      totalPages: result.totalPages,
      currentPage: result.page,
      totalPosts: result.totalDocs,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching author's posts", error: err });
  }
});

module.exports = router;
