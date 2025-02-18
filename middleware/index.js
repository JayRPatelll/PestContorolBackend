const { config } = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("../Model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const verifyToken = jwt.verify(token, process.env.SECRET_JWT_KEY);

    const rootUser = await User.findOne({ email: verifyToken.email });
    console.log("rootUser", rootUser);
    if (!rootUser) {
      throw new Error("user not found");
    } else {
      req.rootuser = rootUser;
      next();
    }
  } catch (err) {
    res.status(401).json({ err: "unauthorised" });
    console.log(err);
  }
};

module.exports = authenticate;
