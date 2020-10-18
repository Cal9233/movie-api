const router = require("express").Router(),
  mongoose = require("mongoose"),
  axios = require("axios");

//Get specific movie
router.get("/api/search/:id", async (req, res) => {
  try {
      const 
    const { id } = req.params;

    const fetch = await axios.get(
      `http://www.omdbapi.com/?s=${id}&apikey=${process.env.OMDB_KEY}`
    );
    res.json(fetch.data);
  } catch (e) {
    res.json({ error: e.toString() });
  }
});
