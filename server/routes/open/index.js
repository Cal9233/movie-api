const router = require("express").Router(),
  User = require("../../db/models/user"),
  mongoose = require("mongoose"),
  axios = require("axios");
// Login a user
router.post("/api/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});
// Create a user
router.post("/api/users", async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.json(user);
  } catch (e) {
    res.status(201).status(400).json({ error: e.toString() });
  }
});
// Reset Password- This sends you the reset password email
router.get("/api/password", async (req, res) => {
  try {
    const { email } = req.query,
      user = await User.findOne({ email });
    if (!user) throw new Error("No account associated with Email");
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );
    res.json({ message: "reset password link sent to email" });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});
//Redirect to password reset page
router.get("/api/password/:token", (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 6000000,
      sameSite: "Strict",
    });
    res.redirect(process.env.URL + "/updatepassword");
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

// search for movie in OMDB
router.get("/api/search/:search", async (req, res) => {
  try {
    const { search } = req.params;

    const fetch = await axios.get(
      `http://www.omdbapi.com/?s=${search}&apikey=${process.env.OMDB_KEY}`
    );
    res.json(fetch.data);
  } catch (error) {
    console.log(error);
  }
});

//get all posts for a movie
router.get("/api/posts/movie/:mid", async (req, res) => {
  try {
    const { mid } = req.params;

    const posts = await Post.find({ movie_id: mid });
    if (!posts) return res.sendStatus(404);

    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

//get all of a users posts by user id
router.get("/api/posts/user/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    if (!mongoose.Types.ObjectId.isValid(uid))
      return res.status(400).json({ error: "not a valid user id" });

    const posts = await Post.find({ owner: uid });

    if (!posts) return res.sendStatus(404);
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

//get posts by post id
router.get("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
