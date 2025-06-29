const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");  

const db = require('../db/config')

    exports.login  = async(req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Please provide both username and password' });
        }
        
        // Query to check if the username and password match
        const sql = 'SELECT * FROM agent WHERE username = ? AND password = ?';
        db.query(sql, [username, password], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
            if (result.length > 0) { 
                const agentid = 'select id from agent where username = ? '
                db.query(agentid , [username] , (err,result)=>{
                 console.log('result:', result);
                //  res.cookie('userId', result[0].id);
                 return res.status(200).json({ id: result[0].id });
                })
            } else {
                // Authentication failed
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    };

    

    exports.register = (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Please provide username, password, and email' });
        }
        
        // Query to check if the username or email already exists
        const checkUserQuery = 'SELECT * FROM agent WHERE username = ?';
        db.query(checkUserQuery, [username], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }
            if (result.length > 0) {
                // Username or email already exists
                return res.status(400).json({ message: 'User already exists' });
            }
            
            // If username and email don't exist, insert new user into the database
            const insertUserQuery = 'INSERT INTO agent (username, password) VALUES (?, ?)';
            db.query(insertUserQuery, [username, password], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
                // User signed up successfully
                res.status(201).json({ message: 'agent signed up successfully' });
            });
        });
    };
    
    
exports.logout = (req, res) => {
    res.cookie('userSave', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).redirect("/");
}