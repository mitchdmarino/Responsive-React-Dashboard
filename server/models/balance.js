const mongoose = require("mongoose");

// Schema for Account balance.
const BalanceSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Balance", BalanceSchema);
