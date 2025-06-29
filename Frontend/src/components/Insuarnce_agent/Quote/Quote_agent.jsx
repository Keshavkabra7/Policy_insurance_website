import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Quote_agent= () => {
  const [quotes, setQuotes] = useState([
    // {
    //   quote_id: 'QUOTE001',
    //   application_id: 'APP001',
    //   cust_id: 'CUST001',
    //   issue_date: '2024-01-01T00:00:00Z',
    //   valid_from_date: '2024-01-01T00:00:00Z',
    //   valid_till_date: '2024-02-01T00:00:00Z',
    //   description: 'Sample quote description 1',
    //   product_id: 'PROD001',
    //   coverage_level: 'Basic coverage'
    // },
    // {
    //   quote_id: 'QUOTE002',
    //   application_id: 'APP002',
    //   cust_id: 'CUST002',
    //   issue_date: '2024-02-01T00:00:00Z',
    //   valid_from_date: '2024-02-01T00:00:00Z',
    //   valid_till_date: '2024-03-01T00:00:00Z',
    //   description: 'Sample quote description 2',
    //   product_id: 'PROD002',
    //   coverage_level: 'Full coverage'
    // },
    // {
    //   quote_id: 'QUOTE003',
    //   application_id: 'APP003',
    //   cust_id: 'CUST003',
    //   issue_date: '2024-03-01T00:00:00Z',
    //   valid_from_date: '2024-03-01T00:00:00Z',
    //   valid_till_date: '2024-04-01T00:00:00Z',
    //   description: 'Sample quote description 3',
    //   product_id: 'PROD003',
    //   coverage_level: 'Premium coverage'
    // }
  ]);

  useEffect( ()=> {
    axios.get('/api/agentlayout/quote_read')
    .then((response) => {
      setQuotes(response.data)
      

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Quote Details</h1><div>
        <Link to='/agentlayout/quoteform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 " >Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quotes.map(quote => (
          <div key={quote.quote_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Quote ID: {quote.quote_id}</p>
            <p>Application ID: {quote.application_id}</p>
            <p>Customer ID: {quote.cust_id}</p>
            <p>Issue Date: {quote.issue_date}</p>
            <p>Valid From Date: {quote.valid_from_date}</p>
            <p>Valid Till Date: {quote.valid_till_date}</p>
            <p>Description: {quote.description}</p>
            <p>Product ID: {quote.product_id}</p>
            <p>Coverage Level: {quote.coverage_level}</p>
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

export default Quote_agent;
