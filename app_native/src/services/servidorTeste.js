require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const app = express()
const port = 3003

app.listen(port, (req, res ) => {
  res.send('hello world')
})