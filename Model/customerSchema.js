const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerName: String,
  customerNumber: Number,
  customerAddress: String,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
