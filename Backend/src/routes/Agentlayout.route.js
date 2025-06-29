
const express = require("express");
const agent = require("../controllers/Agentlayout.controller.js");

const router = express.Router();

router.get('/', agent.start)
router.get('', agent.start)


// Route for reading customer details
router.get('/customer_read', agent.customer_read);
    
// Route for creating a new customer
router.post('/customer_create', agent.customer_create);

// Route for updating an existing customer
router.put('/customer_edit/:cust_id', agent.customer_edit);

// Route for deleting an existing customer
router.delete('/customer_delete/:cust_id', agent.customer_delete);

// Routes for handling Application operations
router.post('/application_create', agent.application_create);
router.get('/application_read', agent.application_read);
router.put('/application_edit/:application_id', agent.application_edit);
router.delete('/application_delete/:application_id', agent.application_delete);

// Routes for handling vehicle operations
router.post('/vehicle_create',agent.vehicle_create);
router.get('/vehicle_read',agent.vehicle_read);
router.put('/vehicle_edit/:vehicle_id',agent.vehicle_edit);
router.delete('/vehicle_delete/:vehicle_id', agent.vehicle_delete);


// Routes for handling Quote operations
router.post('/quote_create', agent.quote_create);
router.get('/quote_read', agent.quote_read);
router.put('/quote_edit/:quote_id', agent.quote_edit);
router.delete('/quote_delete/:quote_id', agent.quote_delete);


// Routes for handling insurance policy operations
router.post('/policy_create', agent.policy_create);
router.get('/policy_read/', agent.policy_read);
router.put('/policy_edit/:aggrement_id', agent.policy_edit);
router.delete('/policy_delete/:aggrement_id', agent.policy_delete);


// Create a new premium payment
router.post('/payment_create', agent.payment_create);

// Edit an existing premium payment
router.put('/ppayment_edit/:payment_id', agent.payment_edit);

// Delete an existing premium payment
router.delete('/ppayment_delete/:payment_id', agent.payment_delete);

// Read details of a specific premium payment
router.get('/ppayment_read', agent.ppayment_read);


//////////////////////////////////////////////////////////////


// Routes for incident
router.post('/incident_create', agent.incident_create);
router.put('/incident_edit/:INCIDENT_ID', agent.incident_edit);
router.delete('/incident_delete/:INCIDENT_ID', agent.incident_delete);
router.get('/incident_read', agent.incident_read);



//////////////////////////////////////////////////////////////


// Create a new incident report
router.post('/incident_report_create', agent.incident_report_create);

// Edit an existing incident report
router.put('/incident_report_edit/:incident_report_id', agent.incident_report_edit);

// Delete an existing incident report
router.delete('/incident_report_delete/:incident_report_id', agent.incident_report_delete);

// Read details of a specific incident report
router.get('/incident_report_read/:incident_report_id', agent.incident_report_read);

//claim
router.get('/claim_read', agent.claim_read);
router.post('/createClaim' , agent.createClaim);








module.exports = router;