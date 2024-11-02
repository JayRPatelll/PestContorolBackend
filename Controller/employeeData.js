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

module.exports.createEmployeeData = async (req, res) => {
  try {
    const empData = new Employee(req.body);
    const eData = await empData.save();
    res.status(200).send(eData);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.updateEmployeeData = async (req, res) => {
  try {
    const id = req.body.id;
    const empData = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(empData);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.deleteEmployeeData = async (req, res) => {
  try {
    const id = req.body.id;
    const delData = await Employee.findByIdAndDelete(id);
    res
      .status(200)
      .send({ delData: delData, message: "delete emplyee successful.." });
  } catch (error) {
    res.status(500).send(error);
  }
};
