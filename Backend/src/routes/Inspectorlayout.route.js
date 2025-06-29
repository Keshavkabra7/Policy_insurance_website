const express = require('express');
const inspector = require('../controllers/Inspectorlayout.controller.js')

const router = express.Router();

router.get('' , inspector.home)
router.get('/insuracepolicypage1' , inspector.insuracepolicypage1);
router.get('/incident1' , inspector.incident1);
router.get('/productpage1' , inspector.productpage1);
router.get('/incidentreportpage' , inspector.incidentreportpage);








module.exports = router;