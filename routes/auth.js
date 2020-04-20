const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Name should be atleast 3 characters long").isLength({
      min: 3
    }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 4 character long").isLength({
      min: 4
    })
  ],
  signup
);

// Sign In Route

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({
      min: 1
    })
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
