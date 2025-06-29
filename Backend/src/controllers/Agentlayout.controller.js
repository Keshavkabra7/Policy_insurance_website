const mydata = require('../db/configmain')



exports.start =async(req,res)=>{

    res.send("hello");
  };


//////////////////////////////////////////////////////////////////////////////////////////////////

  // Create a new customer
  exports.customer_create = async (req, res) => {
      const {
          cust_id,
          cust_fname,
          cust_lname,
          cust_DOB,
          cust_gender,
          cust_mob_number,
          cust_email,
          cust_passport_number,
          cust_martial_status,
          cust_ppS_number
      } = req.body;
  
      const query = `INSERT INTO customer (cust_id, cust_fname, cust_lname, cust_DOB, cust_gender, cust_mob_number, cust_email, cust_passport_number, cust_martial_status, cust_ppS_number) 
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
      mydata.query(query, [cust_id, cust_fname, cust_lname, cust_DOB, cust_gender, cust_mob_number, cust_email, cust_passport_number, cust_martial_status, cust_ppS_number], (error, result) => {
          if (error) {
              console.error(error);
              res.status(500).send("Error creating customer");
          } else {
              console.log("Customer created successfully");
              res.status(200).send("Customer created successfully");
          }
      });
  };
  
///////////////////////////////////////////////////////////////////////////////////////



  // Read customer details
exports.customer_read = async (req, res) => {
    // const cust_id = req.params.cust_id;

    const query = `SELECT * FROM customer `;

    mydata.query(query,  (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading customer details");
        } else {
            if (result.length === 0) {
                res.status(404).send("Customer not found");
            } else {
                res.status(200).send(result); // Assuming there's only one customer with a given ID
            }
        }
    });
};


///////////////////////////////////////////////////////////////////////////////////////////


  
  // Edit an existing customer
  exports.customer_edit = async (req, res) => {
      const cust_id = req.params.cust_id;
      const fieldsToUpdate = req.body;
  
      let query = `UPDATE customer SET `;
      const values = [];
  
      // Construct the query dynamically based on fieldsToUpdate
      Object.keys(fieldsToUpdate).forEach((key, index) => {
          query += `${key} = ?`;
          values.push(fieldsToUpdate[key]);
          if (index < Object.keys(fieldsToUpdate).length - 1) {
              query += `, `;
          }
      });
  
      query += ` WHERE cust_id = ?`;
      values.push(cust_id);
  
      mydata.query(query, values, (error, result) => {
          if (error) {
              console.error(error);
              res.status(500).send("Error editing customer");
          } else {
              console.log("Customer edited successfully");
              res.status(200).send("Customer edited successfully");
          }
      });
  };
  


/////////////////////////////////////////////////////////////////////////////////////////////



// Delete an existing customer
exports.customer_delete = async (req, res) => {
    const cust_id = req.params.cust_id;

    const query = `DELETE FROM customer WHERE cust_id = ?`;

    mydata.query(query, [cust_id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error deleting customer");
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send("Customer not found");
            } else {
                console.log("Customer deleted successfully");
                res.status(200).send("Customer deleted successfully");
            }
        }
    });
};



//////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a new application
exports.application_create = async (req, res) => {
    const { application_id, cust_id, vehicle_id, coverage } = req.body;

    // Check if the customer owns the vehicle
    const vehicleQuery = 'SELECT * FROM vehicle WHERE vehicle_id = ? AND cust_id = ?';
    mydata.query(vehicleQuery, [vehicle_id, cust_id], (vehicleError, vehicleResult) => {
        if (vehicleError) {
            console.error(vehicleError);
            res.status(500).send("Error validating vehicle details");
            return;
        }

        if (vehicleResult.length === 0) {
            res.status(400).send("The customer doesn't own the vehicle");
            return;
        }

        // Check if the application_id already exists
        const checkQuery = 'SELECT * FROM Application WHERE application_id = ?';
        mydata.query(checkQuery, [application_id], (checkError, checkResult) => {
            if (checkError) {
                console.error(checkError);
                res.status(500).send("Error checking application ID");
                return;
            }

            if (checkResult.length > 0) {
                res.status(400).send("Application ID already exists");
                return;
            }

            // Proceed with creating the application
            const createQuery = 'INSERT INTO Application (application_id, cust_id, vehicle_id, coverage) VALUES (?, ?, ?, ?)';
            mydata.query(createQuery, [application_id, cust_id, vehicle_id, coverage], (createError, createResult) => {
                if (createError) {
                    console.error(createError);
                    res.status(500).send("Error creating application");
                    return;
                }
                
                res.status(200).send("Application created successfully");
            });
        });
    });
};

/////////////////////////////////////////////////


// Edit an existing application
exports.application_edit = async (req, res) => {
    const application_id = req.params.application_id;
    const fieldsToUpdate = req.body;

    let query = `UPDATE Application SET `;
    const values = [];

    // Construct the query dynamically based on fieldsToUpdate
    Object.keys(fieldsToUpdate).forEach((key, index) => {
        query += `${key} = ?`;
        values.push(fieldsToUpdate[key]);
        if (index < Object.keys(fieldsToUpdate).length - 1) {
            query += `, `;
        }
    });

    query += ` WHERE application_id = ?`;
    values.push(application_id);

    mydata.query(query, values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error editing application");
        } else {
            console.log("Application edited successfully");
            res.status(200).send("Application edited successfully");
        }
    });
};






//////////////////////////////////////////////////////////////


// Delete an existing application
exports.application_delete = async (req, res) => {
    const application_id = req.params.application_id;

    // Delete operation
    const deleteQuery = 'DELETE FROM Application WHERE application_id = ?';
    mydata.query(deleteQuery, [application_id], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send("Error deleting application");
            return;
        }
        
        res.status(200).send("Application deleted successfully");
    });
};


/////////////////////////////////////////////////////////////////////////////////////////////


// Read details of a specific application
exports.application_read = async (req, res) => {
    // const application_id = req.params.application_id;

    // Query to fetch application details
    const query = 'SELECT * FROM Application ';

    mydata.query(query, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading application details");
            return;
        }

        // Check if application exists
        if (result.length === 0) {
            res.status(404).send("Application not found");
            return;
        }

        // Application found, send details
        res.status(200).send(result);
    });
};




////////////////////////////////////////////////////////////////////////

// Create a new vehicle
exports.vehicle_create = async (req, res) => {
    const { vehicle_id, cust_id, policy_id, dependent_nok_id, vehicle_registration_number, vehicle_value, vehicle_type, vehicle_size, vehicle_number_of_seat, vehicle_manufacturer, vehicle_chasis_number, vehicle_number, vehicle_model_number } = req.body;

    // Check if the customer exists
    const customerQuery = 'SELECT * FROM customer WHERE cust_id = ?';
    mydata.query(customerQuery, [cust_id], (customerError, customerResult) => {
        if (customerError) {
            console.error(customerError);
            res.status(500).send("Error validating customer details");
            return;
        }

        if (customerResult.length === 0) {
            res.status(400).send("Customer doesn't exist");
            return;
        }

        // Check if the vehicle_id already exists
        const checkQuery = 'SELECT * FROM vehicle WHERE vehicle_id = ?';
        mydata.query(checkQuery, [vehicle_id], (checkError, checkResult) => {
            if (checkError) {
                console.error(checkError);
                res.status(500).send("Error checking vehicle ID");
                return;
            }

            if (checkResult.length > 0) {
                res.status(400).send("Vehicle ID already exists");
                return;
            }

            // Proceed with creating the vehicle
            const createQuery = 'INSERT INTO vehicle (vehicle_id, cust_id, policy_id, dependent_nok_id, vehicle_registration_number, vehicle_value, vehicle_type, vehicle_size, vehicle_number_of_seat, vehicle_manufacturer, vehicle_chasis_number, vehicle_number, vehicle_model_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            mydata.query(createQuery, [vehicle_id, cust_id, policy_id, dependent_nok_id, vehicle_registration_number, vehicle_value, vehicle_type, vehicle_size, vehicle_number_of_seat, vehicle_manufacturer, vehicle_chasis_number, vehicle_number, vehicle_model_number], (createError, createResult) => {
                if (createError) {
                    console.error(createError);
                    res.status(500).send("Error creating vehicle");
                    return;
                }
                
                res.status(200).send("Vehicle created successfully");
            });
        });
    });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////



// Edit an existing vehicle
exports.vehicle_edit = async (req, res) => {
    const vehicle_id = req.params.vehicle_id;
    const fieldsToUpdate = req.body;

    let query = `UPDATE vehicle SET `;
    const values = [];

    // Construct the query dynamically based on fieldsToUpdate
    Object.keys(fieldsToUpdate).forEach((key, index) => {
        query += `${key} = ?`;
        values.push(fieldsToUpdate[key]);
        if (index < Object.keys(fieldsToUpdate).length - 1) {
            query += `, `;
        }
    });


    query += ` WHERE vehicle_id = ?`;
    values.push(vehicle_id);

    mydata.query(query, values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error editing vehicle");
        } else {
            console.log("Vehicle edited successfully");
            res.status(200).send("Vehicle edited successfully");
        }
    });
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////



// Delete an existing vehicle
exports.vehicle_delete = async (req, res) => {
    const vehicle_id = req.params.vehicle_id;

    // Delete operation
    const deleteQuery = 'DELETE FROM vehicle WHERE vehicle_id = ?';
    mydata.query(deleteQuery, [vehicle_id], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send("Error deleting vehicle");
            return;
        }
        
        res.status(200).send("Vehicle deleted successfully");
    });
};

// Read details of a specific vehicle
exports.vehicle_read = async (req, res) => {
    // const vehicle_id = req.params.vehicle_id;

    // Query to fetch vehicle details
    const query = 'SELECT * FROM vehicle ';

    mydata.query(query, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading vehicle details");
            return;
        }

        // Check if vehicle exists
        if (result.length === 0) {
            res.status(404).send("Vehicle not found");
            return;
        }

        // Vehicle found, send details
        res.status(200).send(result);
    });
};


/////////////////////////////////////////////////////////////////////////////////////////////////////


// Create a new quote
exports.quote_create = async (req, res) => {
    const { quote_id, application_id, cust_id, issue_date, valid_from_date, valid_till_date, description, product_id, coverage_level } = req.body;

    // Check if the quote_id already exists
    const checkQuery = 'SELECT * FROM quote WHERE quote_id = ?';
    mydata.query(checkQuery, [quote_id], (checkError, checkResult) => {
        if (checkError) {
            console.error(checkError);
            res.status(500).send("Error checking quote ID");
            return;
        }

        if (checkResult.length > 0) {
            res.status(400).send("Quote already exists");
            return;
        }

        // Check if the application_id exists
        const applicationQuery = 'SELECT * FROM Application WHERE application_id = ?';
        mydata.query(applicationQuery, [application_id], (applicationError, applicationResult) => {
            if (applicationError) {
                console.error(applicationError);
                res.status(500).send("Error validating application details");
                return;
            }

            if (applicationResult.length === 0) {
                res.status(400).send("Application ID doesn't exist");
                return;
            }

            // Check if the cust_id exists
            const customerQuery = 'SELECT * FROM customer WHERE cust_id = ?';
            mydata.query(customerQuery, [cust_id], (customerError, customerResult) => {
                if (customerError) {
                    console.error(customerError);
                    res.status(500).send("Error validating customer details");
                    return;
                }

                if (customerResult.length === 0) {
                    res.status(400).send("Customer ID doesn't exist");
                    return;
                }

                // Proceed with creating the quote
                const createQuery = 'INSERT INTO quote (quote_id, application_id, cust_id, issue_date, valid_from_date, valid_till_date, description, product_id, coverage_level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
                mydata.query(createQuery, [quote_id, application_id, cust_id, issue_date, valid_from_date, valid_till_date, description, product_id, coverage_level], (createError, createResult) => {
                    if (createError) {
                        console.error(createError);
                        res.status(500).send("Error creating quote");
                        return;
                    }
                    
                    res.status(200).send("Quote created successfully");
                });
            });
        });
    });
};






//////////////////////////////////////////////////////////////////////////////////////////////////////



// Edit an existing quote
exports.quote_edit = async (req, res) => {
    const quote_id = req.params.quote_id;
    const fieldsToUpdate = req.body;

    let query = `UPDATE quote SET `;
    const values = [];

    // Construct the query dynamically based on fieldsToUpdate
    Object.keys(fieldsToUpdate).forEach((key, index) => {
        query += `${key} = ?`;
        values.push(fieldsToUpdate[key]);
        if (index < Object.keys(fieldsToUpdate).length - 1) {
            query += `, `;
        }
    });

    query += ` WHERE quote_id = ?`;
    values.push(quote_id);

    mydata.query(query, values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error editing quote");
        } else {
            console.log("Quote edited successfully");
            res.status(200).send("Quote edited successfully");
        }
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////




// Delete an existing quote
exports.quote_delete = async (req, res) => {
    const quote_id = req.params.quote_id;

    // Delete operation
    const deleteQuery = 'DELETE FROM quote WHERE quote_id = ?';
    mydata.query(deleteQuery, [quote_id], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send("Error deleting quote");
            return;
        }
        
        res.status(200).send("Quote deleted successfully");
    });
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////


// Read details of a specific quote
exports.quote_read = async (req, res) => {
    // const quote_id = req.params.quote_id;

    // Query to fetch quote details
    const query = 'SELECT * FROM quote ';

    mydata.query(query, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading quote details");
            return;
        }

        // Check if quote exists
        if (result.length === 0) {
            res.status(404).send("Quote not found");
            return;
        }

        // Quote found, send details
        res.status(200).send(result);
    });
};


/////////////////////////////////////////////////////////////////////////////////////

// Create a new insurance policy
exports.policy_create = async (req, res) => {
    const { aggrement_id, application_id, cust_id, department_name, policy_number, start_date, expiry_date, term_condition_description } = req.body;

    // Check if the application exists
    const applicationQuery = 'SELECT * FROM Application WHERE application_id = ?';
    mydata.query(applicationQuery, [application_id], (applicationError, applicationResult) => {
        if (applicationError) {
            console.error(applicationError);
            res.status(500).send("Error validating application details");
            return;
        }

        if (applicationResult.length === 0) {
            res.status(400).send("Application ID not found");
            return;
        }

        // Check if the cust_id exists
        const customerQuery = 'SELECT * FROM customer WHERE cust_id = ?';
        mydata.query(customerQuery, [cust_id], (customerError, customerResult) => {
            if (customerError) {
                console.error(customerError);
                res.status(500).send("Error validating customer details");
                return;
            }

            if (customerResult.length === 0) {
                res.status(400).send("Customer ID not found");
                return;
            }

            // Check if the policy number exists
            // const policyQuery = 'SELECT * FROM insurance_policy WHERE policy_number = ?';
            // mydata.query(policyQuery, [policy_number], (policyError, policyResult) => {
            //     if (policyError) {
            //         console.error(policyError);
            //         res.status(500).send("Error checking policy number");
            //         return;
            //     }    

            //     if (policyResult.length === 0) {
            //         res.status(400).send("Policy number not found");
            //         return;
            //     }

                // Proceed with creating the policy
                const createQuery = 'INSERT INTO insurance_policy (aggrement_id, application_id, cust_id, department_name, policy_number, start_date, expiry_date, term_condition_description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                mydata.query(createQuery, [aggrement_id, application_id, cust_id, department_name, policy_number, start_date, expiry_date, term_condition_description], (createError, createResult) => {
                    if (createError) {
                        console.error(createError);
                        if (createError.code === 'ER_DUP_ENTRY') {
                            res.status(400).send("Policy ID already exists");
                        } else {
                            res.status(500).send("Error creating insurance policy");
                        }
                        return;
                    }
                    
                    res.status(200).send("Insurance policy created successfully");
                });
            });
        });
    // });
};




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Edit an existing insurance policy
exports.policy_edit = async (req, res) => {
    const aggrement_id = req.params.aggrement_id;
    const fieldsToUpdate = req.body;

    let query = `UPDATE insurance_policy SET `;
    const values = [];

    // Construct the query dynamically based on fieldsToUpdate
    Object.keys(fieldsToUpdate).forEach((key, index) => {
        query += `${key} = ?`;
        values.push(fieldsToUpdate[key]);
        if (index < Object.keys(fieldsToUpdate).length - 1) {
            query += `, `;
        }
    });

    query += ` WHERE aggrement_id = ?`;
    values.push(aggrement_id);

    mydata.query(query, values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error editing insurance policy");
        } else {
            console.log("Insurance policy edited successfully");
            res.status(200).send("Insurance policy edited successfully");
        }
    });
};






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Delete an existing insurance policy
exports.policy_delete = async (req, res) => {
    const aggrement_id = req.params.aggrement_id;

    // Delete operation
    const deleteQuery = 'DELETE FROM insurance_policy WHERE aggrement_id = ?';
    mydata.query(deleteQuery, [aggrement_id], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send("Error deleting insurance policy");
            return;
        }
        
        res.status(200).send("Insurance policy deleted successfully");
    });
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Read details of a specific insurance policy
exports.policy_read = async (req, res) => {
    // const aggrement_id = req.params.aggrement_id;

    // Query to fetch insurance policy details
    const query = 'SELECT * FROM insurance_policy ';

    mydata.query(query,  (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading insurance policy details");
            return;
        }

        // Check if insurance policy exists
        if (result.length === 0) {
            res.status(404).send("Insurance policy not found");
            return;
        }

        // Insurance policy found, send details
        res.status(200).send(result);
    });
};


/////////////////////////////////////////////////////////////////////////////////////////////////


// Create a new premium payment
exports.payment_create = async (req, res) => {
    const { premium_payment_id, cust_id, policy_number, premium_payment_schedule, premium_payment_amount } = req.body;

    // Check if the premium_payment_id already exists
    const checkQuery = 'SELECT * FROM premium_payment WHERE premium_payment_id = ?';
    mydata.query(checkQuery, [premium_payment_id], (checkError, checkResult) => {
        if (checkError) {
            console.error(checkError);
            res.status(500).send("Error checking premium payment ID");
            return;
        }

        if (checkResult.length > 0) {
            res.status(400).send("Premium payment ID already exists");
            return;
        }

        // Proceed with creating the premium payment
        const createQuery = 'INSERT INTO premium_payment (premium_payment_id, cust_id, policy_number, premium_payment_schedule, premium_payment_amount) VALUES (?, ?, ?, ?, ?)';
        mydata.query(createQuery, [premium_payment_id, cust_id, policy_number, premium_payment_schedule, premium_payment_amount], (createError, createResult) => {
            if (createError) {
                console.error(createError);
                res.status(500).send("Error creating premium payment");
                return;
            }
            
            res.status(200).send("Premium payment created successfully");
        });
    });
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Edit an existing premium payment
exports.payment_edit = async (req, res) => {
    const payment_id = req.params.payment_id;
    const fieldsToUpdate = req.body;

    // Check if the payment exists
    const checkQuery = 'SELECT * FROM premium_payment WHERE premium_payment_id = ?';
    mydata.query(checkQuery, [payment_id], (checkError, checkResult) => {
        if (checkError) {
            console.error(checkError);
            res.status(500).send("Error checking payment details");
            return;
        }

        // Check if payment ID exists
        if (checkResult.length === 0) {
            res.status(404).send("Payment ID not found");
            return;
        }

        let query = `UPDATE premium_payment SET `;
        const values = [];

        // Construct the query dynamically based on fieldsToUpdate
        Object.keys(fieldsToUpdate).forEach((key, index) => {
            query += `${key} = ?`;
            values.push(fieldsToUpdate[key]);
            if (index < Object.keys(fieldsToUpdate).length - 1) {
                query += `, `;
            }
        });

        query += ` WHERE premium_payment_id = ?`;
        values.push(payment_id);

        mydata.query(query, values, (error, result) => {
            if (error) {
                console.error(error);
                res.status(500).send("Error editing payment");
            } else {
                console.log("Payment edited successfully");
                res.status(200).send("Payment edited successfully");
            }
        });
    });
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Delete an existing premium payment
exports.payment_delete = async (req, res) => {
    const payment_id = req.params.payment_id;

    // Delete operation
    const deleteQuery = 'DELETE FROM premium_payment WHERE premium_payment_id = ?';
    mydata.query(deleteQuery, [payment_id], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send("Error deleting payment");
            return;
        }
        
        res.status(200).send("Payment deleted successfully");
    });
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Read details of a specific premium payment
exports.ppayment_read = async (req, res) => {
    // const payment_id = req.params.payment_id;

    // Query to fetch payment details
    const query = 'SELECT * FROM premium_payment';

    mydata.query(query,  (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading payment details");
            return;
        }

        // Check if payment exists
        if (result.length === 0) {
            res.status(404).send("Payment not found");
            return;
        }

        // Payment found, send details
        res.status(200).send(result);
    });
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Create a new incident
exports.incident_create = async (req, res) => {
    const { INCIDENT_ID, INCIDENT_TYPE, INCIDENT_DATE, DESCRIPTION } = req.body;

    // Check if the incident ID already exists
    const checkQuery = 'SELECT * FROM incident WHERE INCIDENT_ID = ?';
    mydata.query(checkQuery, [INCIDENT_ID], (checkError, checkResult) => {
        if (checkError) {
            console.error(checkError);
            res.status(500).send("Error checking incident ID");
            return;
        }

        if (checkResult.length > 0) {
            res.status(400).send("Incident ID already exists");
            return;
        }

        // Proceed with creating the incident
        const createQuery = 'INSERT INTO incident (INCIDENT_ID, INCIDENT_TYPE, INCIDENT_DATE, DESCRIPTION) VALUES (?, ?, ?, ?)';
        mydata.query(createQuery, [INCIDENT_ID, INCIDENT_TYPE, INCIDENT_DATE, DESCRIPTION], (createError, createResult) => {
            if (createError) {
                console.error(createError);
                res.status(500).send("Error creating incident");
                return;
            }
            
            res.status(200).send("Incident created successfully");
        });
    });
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// Edit an existing incident
exports.incident_edit = async (req, res) => {
    const INCIDENT_ID = req.params.INCIDENT_ID;
    const fieldsToUpdate = req.body;

    let query = `UPDATE incident SET `;
    const values = [];

    // Construct the query dynamically based on fieldsToUpdate
    Object.keys(fieldsToUpdate).forEach((key, index) => {
        query += `${key} = ?`;
        values.push(fieldsToUpdate[key]);
        if (index < Object.keys(fieldsToUpdate).length - 1) {
            query += `, `;
        }
    });

    query += ` WHERE INCIDENT_ID = ?`;
    values.push(INCIDENT_ID);

    mydata.query(query, values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error editing incident");
        } else {
            console.log("Incident edited successfully");
            res.status(200).send("Incident edited successfully");
        }
    });
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Delete an existing incident
exports.incident_delete = async (req, res) => {
    const INCIDENT_ID = req.params.INCIDENT_ID;

    // Delete operation
    const deleteQuery = 'DELETE FROM incident WHERE INCIDENT_ID = ?';
    mydata.query(deleteQuery, [INCIDENT_ID], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send("Error deleting incident");
            return;
        }
        
        res.status(200).send("Incident deleted successfully");
    });
};




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Read details of a specific incident
exports.incident_read = async (req, res) => {
    // const INCIDENT_ID = req.params.INCIDENT_ID;

    // Query to fetch incident details
    const query = 'SELECT * FROM incident ';

    mydata.query(query, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading incident details");
            return;
        }

        // Check if incident exists
        if (result.length === 0) {
            res.status(404).send("Incident not found");
            return;
        }

        // Incident found, send details
        res.status(200).send(result);
    });
};




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Create a new incident report
exports.incident_report_create = async (req, res) => {
    const { incident_report_id, incident_id, cust_id, incident_inspector, incident_cost, incident_type, incident_report_description } = req.body;

    // Check if the incident ID exists
    const incidentQuery = 'SELECT * FROM incident WHERE incident_id = ?';
    mydata.query(incidentQuery, [incident_id], (incidentError, incidentResult) => {
        if (incidentError) {
            console.error(incidentError);
            res.status(500).send("Error validating incident details");
            return;
        }

        if (incidentResult.length === 0) {
            res.status(400).send("Incident ID doesn't exist");
            return;
        }

        // Check if the customer ID exists
        const customerQuery = 'SELECT * FROM customer WHERE cust_id = ?';
        mydata.query(customerQuery, [cust_id], (customerError, customerResult) => {
            if (customerError) {
                console.error(customerError);
                res.status(500).send("Error validating customer details");
                return;
            }

            if (customerResult.length === 0) {
                res.status(400).send("Customer ID doesn't exist");
                return;
            }

            // Check if the staff (inspector) ID exists
            const inspectorQuery = 'SELECT * FROM staff WHERE staff_id = ?';
            mydata.query(inspectorQuery, [incident_inspector], (inspectorError, inspectorResult) => {
                if (inspectorError) {
                    console.error(inspectorError);
                    res.status(500).send("Error validating inspector details");
                    return;
                }

                if (inspectorResult.length === 0) {
                    res.status(400).send("Inspector (Staff) ID doesn't exist");
                    return;
                }

                // Check if the incident report ID already exists
                const checkQuery = 'SELECT * FROM incident_report WHERE incident_report_id = ?';
                mydata.query(checkQuery, [incident_report_id], (checkError, checkResult) => {
                    if (checkError) {
                        console.error(checkError);
                        res.status(500).send("Error checking incident report ID");
                        return;
                    }

                    if (checkResult.length > 0) {
                        res.status(400).send("Incident report ID already exists");
                        return;
                    }

                    // Proceed with creating the incident report
                    const createQuery = 'INSERT INTO incident_report (incident_report_id, incident_id, cust_id, incident_inspector, incident_cost, incident_type, incident_report_description) VALUES (?, ?, ?, ?, ?, ?, ?)';
                    mydata.query(createQuery, [incident_report_id, incident_id, cust_id, incident_inspector, incident_cost, incident_type, incident_report_description], (createError, createResult) => {
                        if (createError) {
                            console.error(createError);
                            res.status(500).send("Error creating incident report");
                            return;
                        }
                        
                        res.status(200).send("Incident report created successfully");
                    });
                });
            });
        });
    });
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Read details of a specific incident report
exports.incident_report_read = async (req, res) => {
    const incident_report_id = req.params.incident_report_id;

    // Query to fetch incident report details
    const query = 'SELECT * FROM incident_report WHERE incident_report_id = ?';

    mydata.query(query, [incident_report_id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading incident report details");
            return;
        }

        // Check if incident report exists
        if (result.length === 0) {
            res.status(404).send("Incident report not found");
            return;
        }

        // Incident report found, send details
        res.status(200).json(result[0]);
    });
};




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// Edit an existing incident report
exports.incident_report_edit = async (req, res) => {
    const incident_report_id = req.params.incident_report_id;
    const fieldsToUpdate = req.body;

    let query = `UPDATE incident_report SET `;
    const values = [];

    // Construct the query dynamically based on fieldsToUpdate
    Object.keys(fieldsToUpdate).forEach((key, index) => {
        query += `${key} = ?`;
        values.push(fieldsToUpdate[key]);
        if (index < Object.keys(fieldsToUpdate).length - 1) {
            query += `, `;
        }
    });

    query += ` WHERE incident_report_id = ?`;
    values.push(incident_report_id);

    mydata.query(query, values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error editing incident report");
        } else {
            console.log("Incident report edited successfully");
            res.status(200).send("Incident report edited successfully");
        }
    });
};



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// Delete an existing incident report
exports.incident_report_delete = async (req, res) => {
    const incident_report_id = req.params.incident_report_id;

    // Delete operation
    const deleteQuery = 'DELETE FROM incident_report WHERE incident_report_id = ?';
    mydata.query(deleteQuery, [incident_report_id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error deleting incident report");
            return;
        }

        if (result.affectedRows === 0) {
            res.status(404).send("Incident report not found");
            return;
        }

        res.status(200).send("Incident report deleted successfully");
    });
};





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to check if the incident ID exists
const checkIncidentExists = (incident_id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM incident WHERE incident_id = ?';
        mydata.query(sql, [incident_id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.length > 0);
            }
        });
    });

};

// Function to check if the customer ID exists
const checkCustomerExists = (cust_id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM customer WHERE cust_id = ?';
        mydata.query(sql, [cust_id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.length > 0);
            }
        });
    });
};

// Function to check if the staff (inspector) ID exists
const checkInspectorExists = (staff_id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM staff WHERE staff_id = ?';
        mydata.query(sql, [staff_id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.length > 0);
            }
        });
    });
};
// create a claim 
exports.createClaim = async (req, res) => {
    const { claim_id, cust_id, agreement_id, claim_amount, incident_id, damage_type, date_of_claim } = req.body;

    try {
        // Check if the customer ID exists
        const customerExists = await checkCustomerExists(cust_id);
        if (!customerExists) {
            return res.status(400).send("Customer ID doesn't exist");
        }

        // Check if the incident ID exists
        const incidentExists = await checkIncidentExists(incident_id);
        if (!incidentExists) {
            return res.status(400).send("Incident ID doesn't exist");
        }

        

        // Check if the claim ID already exists
        const checkQuery = 'SELECT * FROM claim WHERE claim_id = ?';
        mydata.query(checkQuery, [claim_id], (checkError, checkResult) => {
            if (checkError) {
                console.error(checkError);
                res.status(500).send("Error checking claim ID");
                return;
            }

            if (checkResult.length > 0) {
                res.status(400).send("Claim ID already exists");
                return;
            }

            // Proceed with creating the claim
            const createQuery = 'INSERT INTO claim (claim_id, cust_id, agreement_id, claim_amount, incident_id, damage_type, date_of_claim) VALUES (?, ?, ?, ?, ?, ?, ?)';
            mydata.query(createQuery, [claim_id, cust_id, agreement_id, claim_amount, incident_id, damage_type, date_of_claim], (createError, createResult) => {
                if (createError) {
                    console.error(createError);
                    res.status(500).send("Error creating claim");
                    return;
                }
                
                res.status(200).send("Claim created successfully");
            });
        });
    } catch (error) {
        console.error("Error creating claim:", error);
        res.status(500).send("An error occurred");
    }
};







// Edit an existing claim
exports.claim_edit = async (req, res) => {
    const claim_id = req.params.claim_id;
    const fieldsToUpdate = req.body;

    let query = `UPDATE claim SET `;
    const values = [];

    // Construct the query dynamically based on fieldsToUpdate
    Object.keys(fieldsToUpdate).forEach((key, index) => {
        query += `${key} = ?`;
        values.push(fieldsToUpdate[key]);
        if (index < Object.keys(fieldsToUpdate).length - 1) {
            query += `, `;
        }
    });

    query += ` WHERE claim_id = ?`;
    values.push(claim_id);

    mydata.query(query, values, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error editing claim");
        } else {
            console.log("Claim edited successfully");
            res.status(200).send("Claim edited successfully");
        }
    });
};




// Delete an existing claim
exports.claim_delete = async (req, res) => {
    const claim_id = req.params.claim_id;

    // Delete operation
    const deleteQuery = 'DELETE FROM claim WHERE claim_id = ?';
    mydata.query(deleteQuery, [claim_id], (deleteError, deleteResult) => {
        if (deleteError) {
            console.error(deleteError);
            res.status(500).send("Error deleting claim");
            return;
        }
        
        res.status(200).send("Claim deleted successfully");
    });
};







// Read details of a specific claim
exports.claim_read = async (req, res) => {
    // const claim_id = req.params.claim_id;

    // Query to fetch claim details
    const query = 'SELECT * FROM claim';

    mydata.query(query,  (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error reading claim details");
            return;
        }

        // Check if claim exists
        if (result.length === 0) {
            res.status(404).send("Claim not found");
            return;
        }

        // Claim found, send details
        res.status(200).send(result);
    });
};



// Implement CRUD operations for claim tables in a similar manner
    