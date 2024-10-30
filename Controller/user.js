const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");

module.exports.getUserData = async (req, res) => {
  try {
    const id = req.params.id
      ? {
          _id: req.params.id,
        }
      : {};

    const result = await User.find(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.updateUserData = async (req, res) => {
  try {
    const id = req.body.id;
    req.body.password = await bcrypt.hash(req.body.password, 12);
    const Data = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(Data);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.deleteUserData = async (req, res) => {
  try {
    const id = req.params.id;
    const delteUser = await User.findByIdAndDelete(id);
    res.status(200).send({delteUser :delteUser, message: "delete user successfull.." });
  } catch (error) {
    res.status(404).send(error);
  }
};
