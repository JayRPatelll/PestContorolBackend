const mongoose = require("mongoose");

const DATABASE ="mongodb+srv://vpandav4599:N2BMwmCVLL3Tbtx1@cluster0.vz1qv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));