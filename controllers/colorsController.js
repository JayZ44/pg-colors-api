const express = require("express");
const colors = express.Router();
const { getAllColors } = require("../queries/colors");

colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  res.status(200).json(allColors);
});

module.exports = colors;
