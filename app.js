const express = require("express");
const app = express();
const cors = require("cors");
const colorsController = require("./controllers/colorsController");

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/colors", colorsController);

app.get("/", (req, res) => {
  res.send("Welcome to the Colors App!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found :(");
});
module.exports = app;
