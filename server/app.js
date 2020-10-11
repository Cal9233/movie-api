require("dotenv").config;
const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose");

//Express set up
const app = express();
app.use(cors());
app.use(express.json());

//Routes set up
app.use("/posts", require("./routes/Posts"));

//Mongoose set up
console.log("Connecting to mongoDB");
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (err) return console.error(err);
  console.log("MongoDB connection established");
});

module.exports = app;
