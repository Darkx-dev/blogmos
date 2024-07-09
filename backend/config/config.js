const dotenv = require('dotenv');
const path = require('path');

// Determine which .env file to use
const envFile = process.env.NODE_ENV === 'production' ? '../.env.production' : '../.env.local';

// Load the appropriate .env file
dotenv.config({ path: path.resolve(__dirname, envFile) });
module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || "development",
};
