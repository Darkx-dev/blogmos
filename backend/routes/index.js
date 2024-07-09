// routes/index.js
const router = require('express').Router();
const authRoutes = require("./auth");
const postRoutes = require("./posts");
const commentRoutes = require("./comments");
const userRoutes = require("./users");

router.use("/auth", authRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;