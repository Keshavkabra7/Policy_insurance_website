import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CoveragePage = () => {
  

  // Simulated data
  const tempData = [
    {
      coverage_id: "C001",
      company_name: "ABC Insurance",
      coverage_amount: 10000,
      coverage_type: "Life Insurance",
      coverage_level: "Basic",
      product_id: "P001",
      coverage_description: "Coverage for life insurance with basic benefits.",
      coverage_terms: "Terms and conditions apply."
    },
    {
      coverage_id: "C002",
      company_name: "XYZ Insurance",
      coverage_amount: 5000,
      coverage_type: "Health Insurance",
      coverage_level: "Comprehensive",
      product_id: "P002",
      coverage_description: "Comprehensive health insurance coverage.",
      coverage_terms: "Terms and conditions apply."
    }
  ];
  const [coverages, setCoverages] = useState(tempData);
  const [loading, setLoading] = useState(true);
  
  useEffect( ()=> {
    axios.get('/api/userlayout/CoverageP')
    .then((response) => {
      setCoverages(response.data)
      setLoading(false)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Coverage Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Coverage ID</th>
              <th className="py-2 px-4">Company Name</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Level</th>
              <th className="py-2 px-4">Product ID</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Terms</th>
            </tr>
          </thead>
          <tbody>
            {coverages.map(coverage => (
              <tr key={coverage.coverage_id} className="border-b border-gray-200">
                <td className="py-2 px-4">{coverage.coverage_id}</td>
                <td className="py-2 px-4">{coverage.company_name}</td>
                <td className="py-2 px-4">{coverage.coverage_amount}</td>
                <td className="py-2 px-4">{coverage.coverage_type}</td>
                <td className="py-2 px-4">{coverage.coverage_level}</td>
                <td className="py-2 px-4">{coverage.product_id}</td>
                <td className="py-2 px-4">{coverage.coverage_description}</td>
                <td className="py-2 px-4">{coverage.coverage_terms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoveragePage;
