const transaction = require("../models/Transaction");

// Gets all transactions
// GET /api/v1/transactions
// Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

// Add transactions
// POST /api/v1/transactions
// Public
exports.addTransaction = async (req, res, next) => {
  const { text, amount } = req.body;

  const transaction = await Transaction.create(request.body);

  return res.send(201).json({
    success: true,
    data: transaction
  });
};

// Delete all transactions
// DELETE /api/v1/transactions/:id
// Public
exports.deleteTransaction = async (req, res, next) => {
  res.send("DELETE transaction");
};
