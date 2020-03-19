const transaction = require("../models/Transaction");

// Gets all transactions
// GET /api/v1/transactions
// Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.sendStatus(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.sendStatus(500).json({ success: false, error: "Server error" });
  }
};

// Add transactions
// POST /api/v1/transactions
// Public
exports.addTransaction = (req, res, next) => {
  res.send("POST transaction");
};

// Delete all transactions
// DELETE /api/v1/transactions/:id
// Public
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transaction");
};
