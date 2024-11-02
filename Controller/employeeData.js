const Employee = require("../Model/employeeSchema");

module.exports.getEmployeeData = async (req, res) => {
  try {
    const id = req.params.id ? { _id: req.params.id } : {};
    const empData = await Employee.find(id);
    res.status(200).send(empData);
  } catch (error) {
    res.status(500).send(error);
  }
};
