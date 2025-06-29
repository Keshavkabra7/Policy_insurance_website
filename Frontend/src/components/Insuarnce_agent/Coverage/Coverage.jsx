import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Coverage= () => {
  const [coverages, setCoverages] = useState([
    {
      coverage_id: 'COV001',
      company_name: 'ABC Insurance',
      coverage_amount: 50000,
      coverage_type: 'Vehicle',
      coverage_level: 'Basic',
      product_id: 'PROD001',
      coverage_description: 'Coverage for vehicle damages',
      coverage_terms: 'Standard terms and conditions'
    },
    {
      coverage_id: 'COV002',
      company_name: 'XYZ Insurance',
      coverage_amount: 100000,
      coverage_type: 'Home',
      coverage_level: 'Premium',
      product_id: 'PROD002',
      coverage_description: 'Coverage for home damages',
      coverage_terms: 'Custom terms and conditions'
    },
    {
      coverage_id: 'COV003',
      company_name: 'PQR Insurance',
      coverage_amount: 75000,
      coverage_type: 'Health',
      coverage_level: 'Gold',
      product_id: 'PROD003',
      coverage_description: 'Health insurance coverage',
      coverage_terms: 'Flexible terms and conditions'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Coverage Details</h1>

      <div>
        <Link to='/agentlayout/coform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coverages.map(coverage => (
          <div key={coverage.coverage_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Coverage ID: {coverage.coverage_id}</p>
            <p>Company Name: {coverage.company_name}</p>
            <p>Amount: {coverage.coverage_amount}</p>
            <p>Type: {coverage.coverage_type}</p>
            <p>Level: {coverage.coverage_level}</p>
            <p>Product ID: {coverage.product_id}</p>
            <p>Description: {coverage.coverage_description}</p>
            <p>Terms: {coverage.coverage_terms}</p>
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
export default Coverage;
