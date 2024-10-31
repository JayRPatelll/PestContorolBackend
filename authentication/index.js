const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = express();
const User = require("../Model/userSchema");


auth.use(cookieParser());

auth.post("/signup", async (req, res) => {
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) {
    res.status(422).json({ err: "UserName Already Exist" });
  } else {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    const user = new User(req.body);
    user
      .save()
      .then(() => {
        const jwtToken = jwt.sign(
          { email: user.email },
          process.env.SECRET_JWT_KEY
        );
        res.status(200).json({ Message: "successfull", jwtToken });
      })
      .catch((err) => console.log(err));
  }
});

// for login users

auth.post("/signin", async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      const isMatch = await bcrypt.compare(
        req.body.password,
        userExist.password
      );
      if (!isMatch) {
        res.status(400).json({ err: "invalid credentials" });
      } else {
        const jwtToken = jwt.sign(
          { email: userExist.email },
          process.env.SECRET_JWT_KEY
        );
        res.status(200).json({ Message: "successfull", jwtToken });
      }
    } else {
      res.status(400).json({ err: "invalid credentials" });
    }
  } catch {
    (err) => console.log(err);
  }
});

module.exports = auth;
