// utils/db.js
const mongoose = require('mongoose');
const config = require('../config/config');

exports.connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};