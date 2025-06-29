import React, { useState, useEffect } from 'react';

const PolicyRenewablePage = () => {
  const [policyRenewables, setPolicyRenewables] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated data
  const tempData = [
    {
      policy_renewable_id: "PR001",
      agreement_id: "AG001",
      application_id: "APP001",
      cust_id: "C001",
      date_of_renewal: "2024-04-30",
      type_of_renewal: "Automatic"
    },
    {
      policy_renewable_id: "PR002",
      agreement_id: "AG002",
      application_id: "APP002",
      cust_id: "C002",
      date_of_renewal: "2024-05-05",
      type_of_renewal: "Manual"
    }
  ];

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setPolicyRenewables(tempData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Policy Renewals</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Agreement ID</th>
              <th className="py-2 px-4">Application ID</th>
              <th className="py-2 px-4">Customer ID</th>
              <th className="py-2 px-4">Date of Renewal</th>
              <th className="py-2 px-4">Type of Renewal</th>
            </tr>
          </thead>
          <tbody>
            {policyRenewables.map(renewable => (
              <tr key={renewable.policy_renewable_id} className="border-b border-gray-200">
                <td className="py-2 px-4">{renewable.policy_renewable_id}</td>
                <td className="py-2 px-4">{renewable.agreement_id}</td>
                <td className="py-2 px-4">{renewable.application_id}</td>
                <td className="py-2 px-4">{renewable.cust_id}</td>
                <td className="py-2 px-4">{renewable.date_of_renewal}</td>
                <td className="py-2 px-4">{renewable.type_of_renewal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PolicyRenewablePage;
