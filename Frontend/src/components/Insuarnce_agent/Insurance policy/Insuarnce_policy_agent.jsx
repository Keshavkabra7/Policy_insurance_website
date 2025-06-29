
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Insuarnce_policy_agent= () => {
  const [insurancePolicies, setInsurancePolicies] = useState([
    // {
    //   "aggrement_id": "AGREEMENT001",
    //   "application_id": "APP001",
    //   "cust_id": "CUST001",
    //   "department_name": "Claims",
    //   "policy_number": "POL001",
    //   "start_date": "2024-01-01T00:00:00Z",
    //   "expiry_date": "2025-01-01T00:00:00Z",
    //   "term_condition_description": "Standard policy terms and conditions"
    // },
    // {
    //   "aggrement_id": "AGREEMENT002",
    //   "application_id": "APP002",
    //   "cust_id": "CUST002",
    //   "department_name": "Underwriting",
    //   "policy_number": "POL002",
    //   "start_date": "2024-02-01T00:00:00Z",
    //   "expiry_date": "2025-02-01T00:00:00Z",
    //   "term_condition_description": "Premium policy terms and conditions"
    // },
    // {
    //   "aggrement_id": "AGREEMENT003",
    //   "application_id": "APP003",
    //   "cust_id": "CUST003",
    //   "department_name": "Policy Administration",
    //   "policy_number": "POL003",
    //   "start_date": "2024-03-01T00:00:00Z",
    //   "expiry_date": "2025-03-01T00:00:00Z",
    //   "term_condition_description": "Custom policy terms and conditions"
    // }
  ]);
  const [loading, setLoading] = useState(true);
  useEffect( ()=> {
    axios.get('/api/agentlayout/policy_read')
    .then((response) => {
      setInsurancePolicies(response.data)
      setLoading(false);

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Insurance Policy Details</h1>

      <div>
        <Link to='/agentlayout/policyform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insurancePolicies.map(policy => (
          <div key={policy.aggrement_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Policy Number: {policy.policy_number}</p>
            <p>Agreement ID: {policy.aggrement_id}</p>
            <p>Application ID: {policy.application_id}</p>
            <p>Customer ID: {policy.cust_id}</p>
            <p>Department Name: {policy.department_name}</p>
            <p>Start Date: {policy.start_date}</p>
            <p>Expiry Date: {policy.expiry_date}</p>
            <p>Term Condition Description: {policy.term_condition_description}</p>
            {/* <div className=''>
             <button className="bg-green-300 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-2">Accept</button>
            
             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  m-2">Reject</button>
             <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50  m-2">Delete</button>
          
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Insuarnce_policy_agent;
