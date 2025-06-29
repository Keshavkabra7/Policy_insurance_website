
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

const Receipt = () => {
const [receipts, setReceipts] = useState([
{
receipt_id: 'REC001',
premium_payment_id: 'PREM001',
cust_id: 'CUST001',
cost: 500,
time: '2024-04-25'
},
{
receipt_id: 'REC002',
premium_payment_id: 'PREM002',
cust_id: 'CUST002',
cost: 750,
time: '2024-04-26'
},
{
receipt_id: 'REC003',
premium_payment_id: 'PREM003',
cust_id: 'CUST003',
cost: 1000,
time: '2024-04-27'
}
]);

return (
<div className="container mx-auto p-4">
<h1 className="text-3xl font-bold mb-4">Receipt Details</h1>
<div>
        <Link to='/agentlayout/rform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{receipts.map(receipt => (
<div key={receipt.receipt_id} className="border rounded p-4">
<p className="text-lg font-semibold">Receipt ID: {receipt.receipt_id}</p>
<p>Premium Payment ID: {receipt.premium_payment_id}</p>
<p>Customer ID: {receipt.cust_id}</p>
<p>Cost: {receipt.cost}</p>
<p>Time: {receipt.time}</p>
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

export default Receipt;






