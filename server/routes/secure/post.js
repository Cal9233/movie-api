const router = require("express").Router(),
  Post = require("../../db/models/post"),
  express = require("express");

router.get("/", async (req, res) => {
  //retrieve data from request
  const { comment, createdAt, tags } = req.body;
  console.log(comment, createdAt, tags);

  //construct blog model
  const newPost = new Post({
    comment,
    createdAt,
    tags,
  });

  //save blog model
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
