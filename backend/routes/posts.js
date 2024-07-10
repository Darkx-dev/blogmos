const debug = require('debug')("blogmos:development")
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Create a new post
router.post('/', async (req, res) => {
  const { title, content, authorId, tags } = req.body;
  debug('Creating new post:', req.body);

  try {
    // Split the tags string into an array if provided, otherwise set an empty array
    const tagsArray = tags ? tags.split(',').map(tag => tag.trim()) : [];

    const post = new Post({ title, content, author: authorId, tags: tagsArray });
    await post.save();

    await User.findByIdAndUpdate(authorId, { $push: { posts: post._id } });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post', error: err });
  }
});


// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts', error: err });
  }
});

// Get a single post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username').populate('comments');
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching post', error: err });
  }
});

// Update a post by ID
router.put('/:id', async (req, res) => {
  const { title, content, tags } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(req.params.id, { title, content, tags }, { new: true });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error updating post', error: err });
  }
});

// Delete a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(post.author, { $pull: { posts: post._id } });
    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post', error: err });
  }
});

// Get new posts
router.get('/new', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).limit(10).populate('author', 'username');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching new posts', error: err });
  }
});

// Get popular posts
router.get('/popular', async (req, res) => {
  try {
    const posts = await Post.find().sort({ likes: -1 }).limit(10).populate('author', 'username');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching popular posts', error: err });
  }
});

module.exports = router;
