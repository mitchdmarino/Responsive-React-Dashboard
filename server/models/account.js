const mongoose = require("mongoose");

// Schema for Monetary Account balance.
const AccountSchema = new mongoose.Schema(
  {
    balance: {
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

module.exports = mongoose.model("Account", AccountSchema);
