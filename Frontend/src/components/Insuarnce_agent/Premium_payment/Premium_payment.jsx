import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from 'react';

const Premium_payment= () => {
  const [premiumPayments, setPremiumPayments] = useState([
    // {
    //   premium_payment_id: 'PREM001',
    //   cust_id: 'CUST001',
    //   policy_number: 'POL001',
    //   premium_payment_schedule: '2024-04-30T00:00:00Z',
    //   premium_payment_amount: 500
    // },
    // {
    //   premium_payment_id: 'PREM002',
    //   cust_id: 'CUST002',
    //   policy_number: 'POL002',
    //   premium_payment_schedule: '2024-04-30T00:00:00Z',
    //   premium_payment_amount: 700
    // },
    // {
    //   premium_payment_id: 'PREM003',
    //   cust_id: 'CUST003',
    //   policy_number: 'POL003',
    //   premium_payment_schedule: '2024-04-30T00:00:00Z',
    //   premium_payment_amount: 600
    // }
  ]);
  const [loading, setLoading] = useState(true);
  useEffect( ()=> {
    axios.get('/api/agentlayout/ppayment_read')
    .then((response) => {
      setPremiumPayments(response.data)
      setLoading(false);

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , []);

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Premium Payment Details</h1>

      <div>
        <Link to='/agentlayout/paymentform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {premiumPayments.map(payment => (
          <div key={payment.premium_payment_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Premium Payment ID: {payment.premium_payment_id}</p>
            <p>Customer ID: {payment.cust_id}</p>
            <p>Policy Number: {payment.policy_number}</p>
            <p>Payment Schedule: {payment.premium_payment_schedule}</p>
            <p>Payment Amount: {payment.premium_payment_amount}</p>
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

export default Premium_payment;
