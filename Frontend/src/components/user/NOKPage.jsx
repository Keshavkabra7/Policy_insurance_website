import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NOKPage = () => {
 
  // Simulated data
  const tempData = [
    {
      nok_id: "NOK001",
      agreement_id: "AG001",
      application_id: "APP001",
      cust_id: "C001",
      nok_name: "John Doe",
      nok_address: "123 Main Street",
      nok_phone_number: "1234567890",
      nok_marital_status: "married",
      nok_gender: "m"
    },
    {
      nok_id: "NOK002",
      agreement_id: "AG002",
      application_id: "APP002",
      cust_id: "C002",
      nok_name: "Jane Doe",
      nok_address: "456 Elm Street",
      nok_phone_number: "9876543210",
      nok_marital_status: "unmarried",
      nok_gender: "f"
    }
  ];

  const [noks, setNOKs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect( ()=> {
    axios.get('/api/userlayout/nok')
    .then((response) => {
      setNOKs(response.data)
      setLoading(false)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Next of Kin Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">ID</th>
              <th className="py-2 px-4 border border-gray-300">Agreement ID</th>
              <th className="py-2 px-4 border border-gray-300">Application ID</th>
              <th className="py-2 px-4 border border-gray-300">Customer ID</th>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Address</th>
              <th className="py-2 px-4 border border-gray-300">Phone Number</th>
              <th className="py-2 px-4 border border-gray-300">Marital Status</th>
              <th className="py-2 px-4 border border-gray-300">Gender</th>
            </tr>
          </thead>
          <tbody>
            {noks.map(nok => (
              <tr key={nok.nok_id}>
                <td className="py-2 px-4 border border-gray-300">{nok.nok_id}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.agreement_id}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.application_id}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.cust_id}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.nok_name}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.nok_address}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.nok_phone_number}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.nok_marital_status}</td>
                <td className="py-2 px-4 border border-gray-300">{nok.nok_gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NOKPage;
