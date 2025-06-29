const mydata = require('../db/configmain')

//////////////////////////////////////

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
            res.cookie('userId', cust_id);
            res.status(200).send("Customer created successfully");
        }
    });
};

//////////////////////////////////////////
exports.customer_read =async(req,res)=>{

console.log('Existing  cookie in controller:', req.cookies.userId)
const sql = 'select * from customer where cust_id =	? '
  mydata.query(sql , [req.cookies.userId],(error, result, field)=>{
      if(error) throw error;
      // console.log(result)
      res.send(result);
    })
};



//////////////////////////////////////////
exports.application =async(req,res)=>{
  const sql = 'select * from Application where cust_id =	? '

    mydata.query(sql , [req.cookies.userId],(error, result, field)=>{
        if(error) throw error;
        console.log(result)
        res.send(result);
      })
};

////////////////////////////////////
exports.quote_read =async(req,res)=>{
  mydata.query("select * from quote where  quote_id =101  or cust_id = 'CUST004' ",(error, result, field)=>{
      if(error) throw error;
      // console.log(result)
      res.send(result);
    })
}

//////////////////////
exports.insurance_read =async(req,res)=>{
  mydata.query("select * from quote where  quote_id =101  or cust_id = 'CUST004' ",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////


exports.claimsettlement =async(req,res)=>{
  mydata.query("select * from claim_settlement where cust_id = 'CUST004'  ",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////



exports.officepage =async(req,res)=>{
  mydata.query("	select * from office where office_name = 'Branch Office' or company_name = 'Insurance Co' or department_name = 'Claims Processing'  ",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////



exports.memberpage =async(req,res)=>{
  mydata.query("	select * from membership where membership_id ='MEMB004' or cust_id = 'CUST004'",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////



exports.vehicleservicepage =async(req,res)=>{
  mydata.query("select * from vehicle_service where vehicle_service = 'SERV004' or vehicle_id  = 'VEH004' or cust_id = 'CUST004'",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////



exports.nok =async(req,res)=>{
  mydata.query("	select * from NOK where nok_id = 'NOK004' or application_id = 'APP004' or cust_id = 'CUST004';",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////

exports.ICP =async(req,res)=>{
  mydata.query("select * from vehicle_service where vehicle_service = 'SERV004' or vehicle_id  = 'VEH004' or cust_id = 'CUST004'",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////



exports.IRP =async(req,res)=>{
  mydata.query("	select * from incident_report where incident_report_id = 'REPORT004' or cust_id = 'CUST004' or INCIDENT_ID = 'INC004'",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////


exports.CoverageP =async(req,res)=>{
  mydata.query("	select * from coverage where coverage_id = 'COV004' or company_name = 'Insurance Co'",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////



exports.PP =async(req,res)=>{
  mydata.query("	select * from product where product_number = 'PROD004' or company_name = 'Insurance Co'",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////


exports.RP =async(req,res)=>{
  mydata.query("select * from receipt where  receipt_id = 'RCPT004' or cust_id = 'CUST004' or premium_payment_id = 'PREM004'",(error, result, field)=>{
      if(error) throw error;
      console.log(result)
      res.send(result);
    })
}

///////////////////////////////////////
