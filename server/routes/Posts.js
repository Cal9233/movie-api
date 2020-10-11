const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("It's working");
});

module.exports = router;
