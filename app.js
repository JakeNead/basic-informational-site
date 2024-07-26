const express = require("express");
const userRouter = require("./routes/userRoutes");
const aboutRouter = require("./routes/aboutRoutes");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// for CSS
app.use(express.static(path.join(__dirname, "public")));

// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: false }));

// base mount path is `/users` and will always execute on that specific mount path, and yes including `/users/a/b/c`

app.get("/", (req, res) => {
  res.render("index", { message: "home page" });
});

app.use("/about", aboutRouter);
app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
