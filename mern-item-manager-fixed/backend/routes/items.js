const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.post("/", async (req, res) => {
  const { name, description, price, district } = req.body;
  const newItem = new Item({ name, description, price, district });
  await newItem.save();
  res.json(newItem);
});

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

module.exports = router;
