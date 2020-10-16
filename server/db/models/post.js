const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    comment: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tags: { type: [String] },
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model("post", postSchema);
