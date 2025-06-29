const express = require("express");
const inspectController = require("../controllers/Inspector.controller.js");

const router = express.Router();

router.post('/register', inspectController.register)
router.post('/login', inspectController.login);
router.get('/logout', inspectController.logout);

module.exports = router;