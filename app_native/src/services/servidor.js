const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const path = require('path')




const app = express()
const port = 3000


app.use(express.json());

app.use(express.json())


// db connection 

const conn = require('./db/conn')

conn()

const routes = require('./routes/router')

app.use('/api', routes)

app.listen(port, (req, res ) => {
  console.log('servidor online');
})


