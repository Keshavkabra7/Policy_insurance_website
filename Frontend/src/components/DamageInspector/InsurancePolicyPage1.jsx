import React, { useState, useEffect } from 'react';
  
const InsurancePolicyPage1 = () => {

  const tempdata = [
    {
      "aggrement_id": "A001",
      "application_id": "APP001",
      "cust_id": "C001",
      "department_name": "Auto",
      "policy_number": "POL001",
      "start_date": "2024-05-01",
      "expiry_date": "2025-05-01",
      "term_condition_description": "Standard coverage for auto insurance"
    },
    {
      "aggrement_id": "A002",
      "application_id": "APP002",
      "cust_id": "C002",
      "department_name": "Home",
      "policy_number": "POL002",
      "start_date": "2024-04-15",
      "expiry_date": "2025-04-15",
      "term_condition_description": "Comprehensive coverage for home insurance"
    },
    {
      "aggrement_id": "A003",
      "application_id": "APP003",
      "cust_id": "C003",
      "department_name": "Life",
      "policy_number": "POL003",
      "start_date": "2024-06-01",
      "expiry_date": "2034-06-01",
      "term_condition_description": "Term life insurance with coverage of $500,000"
    }
  ]


  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch insurance policies data from the backend API
    const fetchPolicies = async () => {
      try {
        // Replace 'your-backend-api-url' with your actual backend API URL
        const response = await fetch('/api/inspectorlayout/insuracepolicypage1');
        const data = await response.json();
        setPolicies(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching insurance policies data:', error);
      }
    };

    fetchPolicies();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Insurance Policies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">Agreement ID</th>
              <th className="py-2 px-4 border border-gray-300">Application ID</th>
              <th className="py-2 px-4 border border-gray-300">Customer ID</th>
              <th className="py-2 px-4 border border-gray-300">Department Name</th>
              <th className="py-2 px-4 border border-gray-300">Policy Number</th>
              <th className="py-2 px-4 border border-gray-300">Start Date</th>
              <th className="py-2 px-4 border border-gray-300">Expiry Date</th>
              <th className="py-2 px-4 border border-gray-300">Term Condition Description</th>
            </tr>
          </thead>
          <tbody>
            {policies.map(policy => (
              <tr key={policy.aggrement_id}>
                <td className="py-2 px-4 border border-gray-300">{policy.aggrement_id}</td>
                <td className="py-2 px-4 border border-gray-300">{policy.application_id}</td>
                <td className="py-2 px-4 border border-gray-300">{policy.cust_id}</td>
                <td className="py-2 px-4 border border-gray-300">{policy.department_name}</td>
                <td className="py-2 px-4 border border-gray-300">{policy.policy_number}</td>
                <td className="py-2 px-4 border border-gray-300">{policy.start_date}</td>
                <td className="py-2 px-4 border border-gray-300">{policy.expiry_date}</td>
                <td className="py-2 px-4 border border-gray-300">{policy.term_condition_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InsurancePolicyPage1;
