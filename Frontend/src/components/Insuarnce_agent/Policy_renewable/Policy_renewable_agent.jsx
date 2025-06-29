import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Renewable_renewable_agent = () => {
  const [policyRenewables, setPolicyRenewables] = useState([
    {
      policy_renewable_id: 'RENEW001',
      agreement_id: 'AGREEMENT001',
      application_id: 'APP001',
      cust_id: 'CUST001',
      date_of_renewal: '2023-01-01',
      type_of_renewal: 'Auto-renewal'
    },
    {
      policy_renewable_id: 'RENEW002',
      agreement_id: 'AGREEMENT002',
      application_id: 'APP002',
      cust_id: 'CUST002',
      date_of_renewal: '2023-02-01',
      type_of_renewal: 'Manual-renewal'
    },
    {
      policy_renewable_id: 'RENEW003',
      agreement_id: 'AGREEMENT003',
      application_id: 'APP003',
      cust_id: 'CUST003',
      date_of_renewal: '2023-03-01',
      type_of_renewal: 'Auto-renewal'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Policy Renewable Details</h1>
      <div>
        <Link to='/agentlayout/prform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {policyRenewables.map(renewable => (
          <div key={renewable.policy_renewable_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Renewable ID: {renewable.policy_renewable_id}</p>
            <p>Agreement ID: {renewable.agreement_id}</p>
            <p>Application ID: {renewable.application_id}</p>
            <p>Customer ID: {renewable.cust_id}</p>
            <p>Date of Renewal: {renewable.date_of_renewal}</p>
            <p>Type of Renewal: {renewable.type_of_renewal}</p>

            <div className=''>
             <button className="bg-green-300 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-2">Accept</button>
            
             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  m-2">Reject</button>
             <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50  m-2">Delete</button>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Renewable_renewable_agent;
