const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  content1: {
    type: String,
    required: true,
  },
  content2: {
    type: String,
    required: true,
  },
  content3: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Plan", planSchema);
