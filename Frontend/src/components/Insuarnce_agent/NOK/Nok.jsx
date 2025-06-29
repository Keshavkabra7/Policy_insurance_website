
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

const Nok = () => {
  const [noks, setNOKs] = useState([
    {
      nok_id: 'NOK001',
      agreement_id: 'AGREEMENT001',
      application_id: 'APP001',
      cust_id: 'CUST001',
      nok_name: 'NOK1',
      nok_address: 'Address1',
      nok_phone_number: 1234567890,
      nok_marital_status: 'married',
      nok_gender: 'm'
    },
    {
      nok_id: 'NOK002',
      agreement_id: 'AGREEMENT002',
      application_id: 'APP002',
      cust_id: 'CUST002',
      nok_name: 'NOK2',
      nok_address: 'Address2',
      nok_phone_number: 9876543210,
      nok_marital_status: 'unmarried',
      nok_gender: 'f'
    },
    {
      nok_id: 'NOK003',
      agreement_id: 'AGREEMENT003',
      application_id: 'APP003',
      cust_id: 'CUST003',
      nok_name: 'NOK3',
      nok_address: 'Address3',
      nok_phone_number: 4567890123,
      nok_marital_status: 'married',
      nok_gender: 'o'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Next of Kin (NOK) Details</h1>

      <div>
        <Link to='/agentlayout/nokform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {noks.map(nok => (
          <div key={nok.nok_id} className="border rounded p-4">
            <p className="text-lg font-semibold">NOK ID: {nok.nok_id}</p>
            <p>Agreement ID: {nok.agreement_id}</p>
            <p>Application ID: {nok.application_id}</p>
            <p>Customer ID: {nok.cust_id}</p>
            <p>NOK Name: {nok.nok_name}</p>
            <p>NOK Address: {nok.nok_address}</p>
            <p>NOK Phone Number: {nok.nok_phone_number}</p>
            <p>NOK Marital Status: {nok.nok_marital_status}</p>
            <p>NOK Gender: {nok.nok_gender}</p>
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
export default Nok;
