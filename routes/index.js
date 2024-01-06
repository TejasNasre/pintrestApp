var express = require("express");
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const upload = require("./multer");

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Login Page
router.get("/login", function (req, res) {
  res.render("login", { error: req.flash("error") });
});

// User Feed
router.get("/feed", function (req, res) {
  res.render("feed");
});

// User Profile
router.get("/profile", isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({
    username: req.session.passport.user,
  });
  // console.log(user)
  res.render("profile", { fullname: user.fullname, username: user.username });
});

// Register Page
router.post("/register", function (req, res) {
  const { username, email, fullname } = req.body;
  const userData = new userModel({ username, email, fullname });

  userModel.register(userData, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/profile");
    });
  });
});

//Login Page
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  function (req, res) {}
);

//Logout Page
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

// Ckecking the User Is LoggedIn Or Not
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

//Images File uplaod Route
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No File Were Uploaded");
  }
  res.send("File Uploaded Successfully!");

  //We Have To Send This Images As A Post In MongoDB And Also We Want to Give The Post IDs To User And User ID To Post
});
module.exports = router;
