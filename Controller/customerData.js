const Customer = require("../Model/customerSchema");

module.exports.getCustomerData = async (req, res) => {
  try {
    const allData = req.params.id ? { _id: req.params.id } : {};

    const Data = await Customer.find(allData);
    res.status(200).send(Data);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.createCustomerData = async (req, res) => {
  try {
    const createCustomer = new Customer(req.body);
    const createCustomerDatas = await createCustomer.save();
    res.status(200).send(createCustomerDatas);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.updateCustomerData = async (req, res) => {
  try {
    const id = req.body.id;
    const updateCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updateCustomer);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.deleteCustomerData = async (req, res) => {
    try {
      const id = req.body.id;
      const deleteCustomer = await Customer.findByIdAndDelete(id);
      res.status(200).send(deleteCustomer);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  