
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ClaimAgent = () => {
  const [claims, setClaims] = useState([
    // {
    //   claim_id: 'CLAIM001',
    //   cust_id: 'CUST001',
    //   agreement_id: 'AGREEMENT001',
    //   claim_amount: 1000,
    //   incident_id: 'INC001',
    //   damage_type: 'Collision',
    //   date_of_claim: '2024-04-25',
    //   claim_status: 'pending'
    // },
    // {
    //   claim_id: 'CLAIM002',
    //   cust_id: 'CUST002',
    //   agreement_id: 'AGREEMENT002',
    //   claim_amount: 1500,
    //   incident_id: 'INC002',
    //   damage_type: 'Fire',
    //   date_of_claim: '2024-04-26',
    //   claim_status: 'accepted'
    // },
    // {
    //   claim_id: 'CLAIM003',
    //   cust_id: 'CUST003',
    //   agreement_id: 'AGREEMENT003',
    //   claim_amount: 2000,
    //   incident_id: 'INC003',
    //   damage_type: 'Theft',
    //   date_of_claim: '2024-04-27',
    //   claim_status: 'rejected'
    // }
  ]);

  useEffect( ()=> {
    axios.get('/api/agentlayout/claim_read')
    .then((response) => {
      setClaims(response.data)
      

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])




  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold m-4">Claim Details</h1>
      <div>
        <Link to='/agentlayout/clform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 " >Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        {claims.map(claim => (
          <div key={claim.claim_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Claim ID: {claim.claim_id}</p>
            <p>Customer ID: {claim.cust_id}</p>
            <p>Agreement ID: {claim.agreement_id}</p>
            <p>Claim Amount: {claim.claim_amount}</p>
            <p>Incident ID: {claim.incident_id}</p>
            <p>Damage Type: {claim.damage_type}</p>
            <p>Date of Claim: {claim.date_of_claim}</p>
            <p>Claim Status: {claim.claim_status}</p>
            <div className=''>
             {/* <button className="bg-green-300 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-2">Edit</button> */}
             <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50  m-2">Edit</button>
          
             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  m-2">Delete</button>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimAgent;





























// import React from 'react';
// import { Link } from 'react-router-dom';

// const Claim = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-center space-x-4 mb-4">
//         <Link to='/agentlayout/clform'>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Create</button>
//         </Link>
//       </div>
//       <div className="border rounded p-4">
//         <div className="flex justify-between mb-4">
//           <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Accept</button>
//           <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Reject</button>
//           <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">Delete</button>
//           <Link to='/agentlayout/clread'>
//             <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Read</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Claim;
