const express = require("express");

const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://admin:ottawa123@cluster0.nrsa1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("mb");
});

mongoose.connection.on("error", (err) => {
  console.error("err", err);
});

app.get("/", (req, res) => {
  res.send("hi there");
});

app.listen(3000, () => {
  console.log("listen");
});
