const express = require("express");
const user = require("../controllers/Userlayout.controller.js");

const router = express.Router();

router.get('',user.customer_read );
router.post('/customer_create' , user.customer_create);
router.get('/customer_read',user.customer_read );
router.get('/quote_read',user.quote_read );
router.get('/application',user.application );
router.get('/insurance_read',user.insurance_read );
router.get('/claimsettlement',user.claimsettlement );
router.get('/officepage',user.officepage );
// router.get('/memberpage',user.memberpage );
router.get('/vehicleservicepage',user.vehicleservicepage );
router.get('/nok',user.nok );
// router.get('/ICP',user.ICP );
router.get('/IRP',user.IRP );
router.get('/CoverageP',user.CoverageP );
router.get('/PP',user.PP );
router.get('/RP',user.RP );






module.exports = router;