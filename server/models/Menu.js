const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  units: {
    type: String,
  },
});

const Menu = mongoose.model("Menu", MenuSchema);
module.exports = Menu;
