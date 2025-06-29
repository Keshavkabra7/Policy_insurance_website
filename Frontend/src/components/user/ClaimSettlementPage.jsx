import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClaimSettlementPage = () => {


    const tempdata = [
        {
          "claim_settlement_id": "CS001",
          "claim_id": "CL001",
          "cust_id": "C001",
          "vehicle_id": "V001",
          "date_settled": "2023-07-15",
          "amount_paid": 5000,
          "coverage_id": "COV001"
        },
        {
          "claim_settlement_id": "CS002",
          "claim_id": "CL002",
          "cust_id": "C002",
          "vehicle_id": "V002",
          "date_settled": "2023-08-20",
          "amount_paid": 7500,
          "coverage_id": "COV002"
        },
        {
          "claim_settlement_id": "CS003",
          "claim_id": "CL003",
          "cust_id": "C003",
          "vehicle_id": "V003",
          "date_settled": "2023-09-10",
          "amount_paid": 6000,
          "coverage_id": "COV003"
        }
      ]
      
  const [claimSettlements, setClaimSettlements] = useState([]);
  const [loading, setLoading] = useState(true);
  

useEffect( ()=> {
  axios.get('/api/userlayout/claimsettlement')
  .then((response) => {
    setClaimSettlements(response.data)
    setLoading(false)

  } )
  .catch( (error) => {
    console.log(error )

  } )
} , [])

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Claim Settlement Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">Claim Settlement ID</th>
              <th className="py-2 px-4 border border-gray-300">Claim ID</th>
              <th className="py-2 px-4 border border-gray-300">Customer ID</th>
              <th className="py-2 px-4 border border-gray-300">Vehicle ID</th>
              <th className="py-2 px-4 border border-gray-300">Date Settled</th>
              <th className="py-2 px-4 border border-gray-300">Amount Paid</th>
              <th className="py-2 px-4 border border-gray-300">Coverage ID</th>
            </tr>
          </thead>
          <tbody>
            {claimSettlements.map(claimSettlement => (
              <tr key={claimSettlement.claim_settlement_id}>
                <td className="py-2 px-4 border border-gray-300">{claimSettlement.claim_settlement_id}</td>
                <td className="py-2 px-4 border border-gray-300">{claimSettlement.claim_id}</td>
                <td className="py-2 px-4 border border-gray-300">{claimSettlement.cust_id}</td>
                <td className="py-2 px-4 border border-gray-300">{claimSettlement.vehicle_id}</td>
                <td className="py-2 px-4 border border-gray-300">{claimSettlement.date_settled}</td>
                <td className="py-2 px-4 border border-gray-300">{claimSettlement.amount_paid}</td>
                <td className="py-2 px-4 border border-gray-300">{claimSettlement.coverage_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClaimSettlementPage;
