const router = require("express").Router(),
  User = require("../../db/models/user"),
  mongoose = require("mongoose");

//Login Check
router.post("/api/loginCheck", async (req, res) => res.sendStatus(200));

//Get Current User
router.get("/api/user/me", (req, res) => {
  res.json(req.user);
});

//Get Specific User
router.get("/api/user/:id", async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send("User is nonexistent");
  try {
    const user = await User.findOne({
      _id,
      owner: req.user._id,
    });
    if (!user) return res.status(400).send();
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//Logout a User
router.post("/api/user/logout", async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie("jwt");
    res.json({ message: "You have Logged out!" });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//Delete User
router.delete("/api/user/me", async (req, res) => {
  try {
    await req.user.remove();
    res.clearCookie("jwt");
    res.json(req.user);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

//Reset Password
router.put("api/password", async (req, res) => {
  try {
    req.user.password = req.body.password;
    await res.user.save();
    res.clearCookie("jwt");
    res.json({ message: "Your password has been reset!" });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

module.exports = router;
