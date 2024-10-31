const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
require("./DataBaseConnection/connection");
dotenv.config({ path: "./config.env" });
const authRoutes = require("./authentication");
const userRoutes = require("./Router/user");
const PORT = process.env.PORT || 5000;


app.use(express.json({ extended: false, limit: '50mb' }))
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
