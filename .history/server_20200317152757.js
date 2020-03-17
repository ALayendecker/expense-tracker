const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

const app = expres();

app.get("/", (req, res) => res.send("hello"));
