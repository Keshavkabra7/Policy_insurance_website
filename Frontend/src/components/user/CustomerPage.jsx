import React, { useEffect, useState } from 'react';
import axios from 'axios'

const CustomerPage = () => {
  const tempdata = [
    {
      "cust_id": "C001",
      "cust_fname": "John",
      "cust_lname": "Doe",
      "cust_DOB": "1990-05-15",
      "cust_gender": "M",
      "cust_mob_number": "1234567890",
      "cust_email": "john@example.com",
      "cust_passport_number": "ABC123456",
      "cust_martial_status": "Married",
      "cust_ppS_number": "123456789"
    },
    {
      "cust_id": "C002",
      "cust_fname": "Jane",
      "cust_lname": "Doe",
      "cust_DOB": "1992-08-25",
      "cust_gender": "F",
      "cust_mob_number": "9876543210",
      "cust_email": "jane@example.com",
      "cust_passport_number": "DEF789012",
      "cust_martial_status": "Single",
      "cust_ppS_number": "987654321"
    }
  ];

  const [customers, setCustomers] = useState(tempdata);
  const [loading, setLoading] = useState(true);
  useEffect( ()=> {
    axios.get('/api/userlayout/customer_read')
    .then((response) => {
      setCustomers(response.data)
      setLoading(false)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])




  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Customer Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passport Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marital Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PPS Number</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map(customer => (
              <tr key={customer.cust_id}>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_fname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_lname}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_DOB}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_mob_number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_passport_number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_martial_status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.cust_ppS_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerPage;
