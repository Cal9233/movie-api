const router = require("express").Router(),
  Post = require("../../db/models/post");

router.post("/api/posts", async (req, res) => {
  //retrieve data from request
  const { comment, tags, movie_id } = req.body;
  //construct blog model
  const newPost = new Post({
    comment,
    tags,
    movie_id,
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

//get all of a users posts
router.get("/api/posts/me", async (req, res) => {
  try {
    const posts = await Post.find({ owner: req.user._id });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});
//Find post by id
router.get("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
