const PestData = require("../Model/pestSchema");

module.exports.getPestData = async (req, res) => {
  try {
    const id = req.params.id ? { _id: req.params.id } : {};
    const pestData = await PestData.find(id);
    res.status(200).send(pestData);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.createPestData = async (req, res) => {
  try {
    const newPestData = new PestData(req.body);
    const Data = await newPestData.save();
    res.status(200).send(Data);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.updatePestData = async (req, res) => {
  try {
    const id = req.body._id ? req.body._id : null;

    const updatePestDatas = await PestData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updatePestDatas);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports.deletePestData = async (req, res) => {
  try {
    const id = req?.params?.id;
    const deleteData = await PestData.findByIdAndDelete(id);
    res
      .status(200)
      .send({ deleteData: deleteData, message: "delete Successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};
