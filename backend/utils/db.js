const debug = require("debug")("blogmos:development");
const mongoose = require('mongoose');
const config = require('../config/config');

exports.connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    debug("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};