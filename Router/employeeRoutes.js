const express = require("express");
const authenticate = require("../middleware");
const {
  getEmployeeData,
  createEmployeeData,
  updateEmployeeData,
  deleteEmployeeData,
} = require("../Controller/employeeData");
const router = express.Router();

router.get("/employee/:id?", authenticate, getEmployeeData);
router.post("/employee/createEmployee", authenticate, createEmployeeData);
router.put("/employee/updateEmployee", authenticate, updateEmployeeData);
router.delete("/employee/deleteEmployee/:id", authenticate, deleteEmployeeData);

module.exports = router;
