import React, { useState, useEffect } from 'react';

const MembershipPage = () => {


   const temp = [
        {
          "membership_id": "M001",
          "cust_id": "C001",
          "membership_type": "Gold",
          "organisation_contact": "Organization A"
        },
        {
          "membership_id": "M002",
          "cust_id": "C002",
          "membership_type": "Silver",
          "organisation_contact": "Organization B"
        },
        {
          "membership_id": "M003",
          "cust_id": "C003",
          "membership_type": "Bronze",
          "organisation_contact": "Organization C"
        }
      ]
      
  const [memberships, setMemberships] = useState(temp);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMemberships = async () => {
//       try {
//         // Replace 'your-backend-api-url' with the actual URL of your backend API
//         const response = await fetch('your-backend-api-url');
//         const data = await response.json();
//         setMemberships(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching membership data:', error);
//       }
//     };

//     fetchMemberships();
//   }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Membership Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">Membership ID</th>
              <th className="py-2 px-4 border border-gray-300">Customer ID</th>
              <th className="py-2 px-4 border border-gray-300">Membership Type</th>
              <th className="py-2 px-4 border border-gray-300">Organization Contact</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map(membership => (
              <tr key={membership.membership_id}>
                <td className="py-2 px-4 border border-gray-300">{membership.membership_id}</td>
                <td className="py-2 px-4 border border-gray-300">{membership.cust_id}</td>
                <td className="py-2 px-4 border border-gray-300">{membership.membership_type}</td>
                <td className="py-2 px-4 border border-gray-300">{membership.organisation_contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MembershipPage;
