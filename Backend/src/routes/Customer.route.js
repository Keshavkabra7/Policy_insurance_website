const express = require("express");
const custController = require("../controllers/Customer.controller.js");

const router = express.Router();

router.post('/register', custController.register)
router.post('/login/', custController.login);
router.get('/logout/', custController.logout);

module.exports = router;