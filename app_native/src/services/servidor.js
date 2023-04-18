require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const server = express();

server.use(express.json());

//models

const User = require("./models/User");

server.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a nossa API" });
});

//resgitrar usuario
server.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name) {
    return res.status(442).json({ msg: "o nome é obrigatorio" });
  } 
  if (!email) {
    return res.status(442).json({ msg: "o email é obrigatorio" });
  } 
  if (!password) {
    return res.status(442).json({ msg: "o sanha é obrigatorio" });
  } 
  
});

const dbUser = process.env.DB_USER;
const bdPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${bdPassword}@cluster0.elsca2r.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("conectou ao banco"))
  .catch((error) => console.log(error));

server.listen(3000);
