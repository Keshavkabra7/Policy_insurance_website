import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Membership_agent= () => {
  const [memberships, setMemberships] = useState([
    {
      membership_id: 'MEMB001',
      cust_id: 'CUST001',
      membership_type: 'Type1',
      organisation_contact: 'Contact1'
    },
    {
      membership_id: 'MEMB002',
      cust_id: 'CUST002',
      membership_type: 'Type2',
      organisation_contact: 'Contact2'
    },
    {
      membership_id: 'MEMB003',
      cust_id: 'CUST003',
      membership_type: 'Type3',
      organisation_contact: 'Contact3'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Membership Details</h1>
      <div>
        <Link to='/agentlayout/memberform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memberships.map(membership => (
          <div key={membership.membership_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Membership ID: {membership.membership_id}</p>
            <p>Customer ID: {membership.cust_id}</p>
            <p>Membership Type: {membership.membership_type}</p>
            <p>Organisation Contact: {membership.organisation_contact}</p>
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


export default Membership_agent;
