const transaction = require("../models/Transaction");

// Gets all transactions
// GET /api/v1/transactions
// Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
  }
};

// Add transactions
// POST /api/v1/transactions
// Public
exports.addTransaction = async (req, res, next) => {
  res.send("POST transaction");
};

// Delete all transactions
// DELETE /api/v1/transactions/:id
// Public
exports.deleteTransaction = async (req, res, next) => {
  res.send("DELETE transaction");
};
