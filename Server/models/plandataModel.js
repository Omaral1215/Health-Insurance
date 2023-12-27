const mongoose = require("mongoose");

const planDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [
    {
      planCategory: {
        type: String,
        required: true,
      },
      premiums: [
        {
          year: {
            type: Number,
            required: true,
          },
          sumInsured: {
            type: Number,
            required: true,
          },
          premiumWithoutTax: {
            type: Number,
            required: true,
          },
          premiumWithTax: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("PlanData", planDataSchema);
