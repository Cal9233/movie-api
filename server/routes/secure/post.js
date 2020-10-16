const router = require("express").Router(),
  Post = require("../../db/models/post");

router.post("/", async (req, res) => {
  //retrieve data from request
  const { comment, tags } = req.body;
  console.log(comment, tags);

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

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
