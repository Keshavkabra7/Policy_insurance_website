const mysql = require("mysql2");
require('dotenv').config()
const dotenv = require("dotenv").config();


//this is the syntax to connect my sqll
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

con.connect((err) => {
  if (err) {
    console.log(err);
  } else {  
    console.log("conected");
  }
});


module.exports = con;