const asyncHandler = require("express-async-handler");

const getAbout = asyncHandler((req, res) => {
  res.render("about", { message: "this is the about page" });
});

module.exports = getAbout;
