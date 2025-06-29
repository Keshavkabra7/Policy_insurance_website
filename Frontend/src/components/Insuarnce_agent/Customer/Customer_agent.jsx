
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Customer_agent = () => {
  const temp =[
      {
        cust_id: 'CUST001',
        cust_fname: 'John',
        cust_lname: 'Doe',
        cust_DOB: '1990-05-15',
        cust_gender: 'M',
        cust_mob_number: 1234567890,
        cust_email: 'john@example.com',
        cust_passport_number: 'AB123456',
        cust_martial_status: 'Single',
        cust_ppS_number: '123456789'
      },
      {
        cust_id: 'CUST002',
        cust_fname: 'Jane',
        cust_lname: 'Smith',
        cust_DOB: '1985-09-20',
        cust_gender: 'F',
        cust_mob_number: 9876543210,
        cust_email: 'jane@example.com',
        cust_passport_number: 'CD789012',
        cust_martial_status: 'Married',
        cust_ppS_number: '987654321'
      }
    ];


const [customers, setCustomers] = useState([])
// customer_read
//data coming from back end
// data  comig from back end 
useEffect( ()=> {
  axios.get('/api/agentlayout/customer_read')
  .then((response) => {
    setCustomers(response.data)

  } )
  .catch( (error) => {
    console.log(error )

  } )
} , [])




return (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Customer Details</h1>
    <div>
        <Link to='/agentlayout/customerform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {customers.map(customer => (
        <div key={customer.cust_id} className="border rounded p-4">
          <p className="text-lg font-semibold">{customer.cust_fname} {customer.cust_lname}</p>
          <p>Cust id: {customer.cust_id}</p>
          <p>Date of Birth: {customer.cust_DOB}</p>
          <p>Gender: {customer.cust_gender}</p>
          <p>Mobile Number: {customer.cust_mob_number}</p>
          <p>Email: {customer.cust_email}</p>
          <p>Passport Number: {customer.cust_passport_number}</p>
          <p>Marital Status: {customer.cust_martial_status}</p>
          <p>PPS Number: {customer.cust_ppS_number}</p>
          <div className=''>
             {/* <button className="bg-green-300 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-2">Accept</button> */}
            
             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  m-2">Edit</button>
             <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50  m-2">Delete</button>
          
            </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Customer_agent;
