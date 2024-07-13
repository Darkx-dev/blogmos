const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    max: 200,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: false,
  },
  coverImage: {
    type: String,
    trim: true,
    default: "default-cover.png",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  likes: {
    type: Number,
    default: 0,
  }, // Track the number of likes
});

postSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("post", postSchema);
