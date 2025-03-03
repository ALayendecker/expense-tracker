const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add message"]
  },
  amount: {
    type: Number,
    required: [true, "Please add a number"]
  },
  createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
