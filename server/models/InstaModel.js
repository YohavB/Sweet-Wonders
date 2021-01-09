const mongoose = require("mongoose");

const InstaSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
 });

const Insta = mongoose.model("Menu", InstaSchema);
module.exports = Insta;
