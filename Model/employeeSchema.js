const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  address: String,
  firstName: String,
  isAdmin: Boolean,
  lastName: String,
  phoneNumber: Number,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
