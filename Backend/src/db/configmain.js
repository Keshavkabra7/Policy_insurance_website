const mysql = require("mysql2");
require('dotenv').config()
const dotenv = require("dotenv").config();


//this is the syntax to connect my sqll
const mydata = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_MAIN_DATABASE,
});


mydata.connect((err) => { 
  if (err) {
    console.log(err);
  } else {  
    console.log("conected to DBMS" );
  }
}); 





module.exports = mydata;