require("./db/config");
const express = require("express"),
  openRoutes = require("./routes/open"),
  postRoutes = require("./routes/secure/post"),
  userRoutes = require("./routes/secure/user"),
  passport = require("./middleware/index"),
  cookieParser = require("cookie-parser"),
  path = require("path"),
  cors = require("cors"),
  app = express();

//Express set up
app.use(cors());
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));
}

//Routes set up
app.use(openRoutes);

app.use(
  passport.authenticate("jwt", {
    session: false,
  })
);

//Secure route
app.use(userRoutes);
app.use(postRoutes);

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

module.exports = app;
