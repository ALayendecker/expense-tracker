const express = require("express");
const router = express.Router();
const { getTransactions } = require("../controllers/transactions");

router.route("/");

router.get("/", (req, res) => res.send("hello"));

module.exports = router;
