const mydata = require('../db/configmain')

//////////////////////////////////////////
exports.home =async(req,res)=>{
    console.log('Existing  cookie in controller:', req.cookies.userId)
    console.log("inspector os ready ")
    res.send('inspector server is ready ')
    };
    



 //////////////////////////////////////////
exports.insuracepolicypage1 =async(req,res)=>{

    console.log('Existing  cookie in controller:', req.cookies.userId)
    const sql = 'SELECT* FROM insurance_policy '
    
      mydata.query(sql ,(error, result, field)=>{
          if(error) throw error;
          // console.log(result)
          res.send(result);
        })
    };
    


 //////////////////////////////////////////
exports.incident1 =async(req,res)=>{

    console.log('Existing  cookie in controller:', req.cookies.userId)
    const sql = '  SELECT* FROM incident'
      
      mydata.query(sql ,(error, result, field)=>{
          if(error) throw error;
          // console.log(result)
          res.send(result);
        })
    };
    




 //////////////////////////////////////////
 exports.productpage1 =async(req,res)=>{

    console.log('Existing  cookie in controller:', req.cookies.userId)
    const sql = 'SELECT* FROM product'
    
      mydata.query(sql ,(error, result, field)=>{
          if(error) throw error;
          // console.log(result)
          res.send(result);
        })
    };


    
    

 //////////////////////////////////////////
 exports.incidentreportpage =async(req,res)=>{

    console.log('Existing  cookie in controller:', req.cookies.userId)
    const sql = 'SELECT* FROM incident_report'
    
      mydata.query(sql ,(error, result, field)=>{
          if(error) throw error;
          // console.log(result)
          res.send(result);
        })
    };


    