const express = require("express");
const {getUserData, updateUserData, deleteUserData} = require("../Controller/user");

const router = express.Router();
const authenticate = require("../middleware/index");


router.get("/user/:id?", authenticate, getUserData);
router.put("/user/updateuser", authenticate, updateUserData);
router.delete("user/deleteuser/:id", authenticate, deleteUserData);

module.exports = router;
