require("./models/User");
require("./models/Track");
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:ottawa123@cluster0.nrsa1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
  console.log("mb");
});

mongoose.connection.on("error", (err) => {
  console.error("err", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your emai;: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listen");
});
