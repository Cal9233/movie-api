const router = require("express").Router(),
  Post = require("../../db/models/post");

router.post("/api/posts", async (req, res) => {
  //retrieve data from request
  const { comment, tags } = req.body;
  //construct blog model
  const newPost = new Post({
    comment,
    tags,
    owner: req.user._id,
  });

  //save blog model
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find({ owner: req.user._id });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;