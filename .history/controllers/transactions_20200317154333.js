// Gets all transactions
// GET /api/v1/transactions
// Public
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
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
