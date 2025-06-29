const express = require("express");
const agentController = require("../controllers/Agent.controller");

const router = express.Router();

router.post('/register', agentController.register)
router.post('/login', agentController.login);
router.get('/logout', agentController.logout);

module.exports = router;