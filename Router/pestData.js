const express = require("express");

const {
  deletePestData,
  updatePestData,
  createPestData,
  getPestData,
} = require("../Controller/pestData");

const router = express.Router();

const authenticate = require("../middleware/index");

router.get("/pest/:id?", authenticate, getPestData);
router.post("/pest/createPest", authenticate, createPestData);
router.put("/pest/updatePest", authenticate, updatePestData);
router.delete("/pest/deletePest/:id", authenticate, deletePestData);

module.exports = router;
