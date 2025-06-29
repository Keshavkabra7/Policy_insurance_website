import React, { useState, useEffect } from 'react';

const ReceiptPage = () => {
  

  // Simulated data
  const tempData = [
    {
      receipt_id: "R001",
      premium_payment_id: "PP001",
      cust_id: "C001",
      cost: 100,
      time: "2024-04-25"
    },
    {
      receipt_id: "R002",
      premium_payment_id: "PP002",
      cust_id: "C002",
      cost: 150,
      time: "2024-04-26"
    }
  ];

  const [receipts, setReceipts] = useState(tempData);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulated API call
  //   setTimeout(() => {
  //     setReceipts(tempData);
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Receipt Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Receipt ID</th>
              <th className="py-2 px-4">Premium Payment ID</th>
              <th className="py-2 px-4">Customer ID</th>
              <th className="py-2 px-4">Cost</th>
              <th className="py-2 px-4">Time</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map(receipt => (
              <tr key={receipt.receipt_id} className="border-b border-gray-200">
                <td className="py-2 px-4">{receipt.receipt_id}</td>
                <td className="py-2 px-4">{receipt.premium_payment_id}</td>
                <td className="py-2 px-4">{receipt.cust_id}</td>
                <td className="py-2 px-4">{receipt.cost}</td>
                <td className="py-2 px-4">{receipt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReceiptPage;
