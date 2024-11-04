const express = require("express");
const authenticate = require("../middleware");
const {
  getCustomerData,
  createCustomerData,
  updateCustomerData,
  deleteCustomerData,
} = require("../Controller/customerData");
const router = express.Router();

router.get("/customer/:id?", authenticate, getCustomerData);
router.post("/customer/createCustomer", authenticate, createCustomerData);
router.put("/customer/updateCustomer", authenticate, updateCustomerData);
router.delete("customer/deleteCustomer/:id", authenticate, deleteCustomerData);

module.exports = router;
