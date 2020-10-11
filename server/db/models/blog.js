const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  createdAt: { type: Date, required: true },
  tags: { type: [String] },
});

module.exports = Post = mongoose.model("post", postSchema);
