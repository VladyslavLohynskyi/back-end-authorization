const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("SERVER STARTED! PORT =", PORT));
  } catch (error) {
    console.log(error);
  }
};

start();
