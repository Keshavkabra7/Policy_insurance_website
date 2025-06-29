
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

const Claim_settlement_read = () => {
  const [claimSettlements, setClaimSettlements] = useState([
    {
      claim_settlement_id: 'SETTLE001',
      claim_id: 'CLAIM001',
      cust_id: 'CUST001',
      vehicle_id: 'VEH001',
      date_settled: '2024-04-25',
      amount_paid: 800,
      coverage_id: 'COV001'
    },
    {
      claim_settlement_id: 'SETTLE002',
      claim_id: 'CLAIM002',
      cust_id: 'CUST002',
      vehicle_id: 'VEH002',
      date_settled: '2024-04-26',
      amount_paid: 1200,
      coverage_id: 'COV002'
    },
    {
      claim_settlement_id: 'SETTLE003',
      claim_id: 'CLAIM003',
      cust_id: 'CUST003',
      vehicle_id: 'VEH003',
      date_settled: '2024-04-27',
      amount_paid: 1500,
      coverage_id: 'COV003'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Claim Settlement Details</h1>
      
      <div>
        <Link to='/agentlayout/csform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 " >Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {claimSettlements.map(settlement => (
          <div key={settlement.claim_settlement_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Settlement ID: {settlement.claim_settlement_id}</p>
            <p>Claim ID: {settlement.claim_id}</p>
            <p>Customer ID: {settlement.cust_id}</p>
            <p>Vehicle ID: {settlement.vehicle_id}</p>
            <p>Date Settled: {settlement.date_settled}</p>
            <p>Amount Paid: {settlement.amount_paid}</p>
            <p>Coverage ID: {settlement.coverage_id}</p>
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


export default Claim_settlement_read ;
