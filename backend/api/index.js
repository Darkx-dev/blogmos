const debug = require('debug')("blogmos:development")
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const config = require('../config/config')
const { connectDB } = require('../utils/db');
const { errorHandler } = require('../middleware/errorHandler');
const routes = require('../routes');

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3001','https://blogmos.vercel.app'],
  preflightContinue: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => res.send("Running Live"));
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

connectDB().then(() => {
  app.listen(config.PORT, () => debug(`Server running on port ${config.PORT}`));
});