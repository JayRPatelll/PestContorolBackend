const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false, limit: '50mb' }))
app.use(cors());



app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`));
