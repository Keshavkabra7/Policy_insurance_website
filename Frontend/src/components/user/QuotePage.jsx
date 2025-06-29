import React, { useEffect, useState} from 'react';
import axios from 'axios';

const QuotePage = () => {

    const tempdata = [
        
            {
              "quote_id": "Q001",
              "application_id": "A001",
              "cust_id": "C001",
              "issue_date": "2024-04-22 10:00:00",
              "valid_from_date": "2024-04-23 00:00:00",
              "valid_till_date": "2024-05-22 23:59:59",
              "description": "Comprehensive coverage for a sedan",
              "product_id": "P001",
              "coverage_level": "High"
            },
            {
              "quote_id": "Q002",
              "application_id": "A002",
              "cust_id": "C002",
              "issue_date": "2024-04-23 09:30:00",
              "valid_from_date": "2024-04-24 00:00:00",
              "valid_till_date": "2024-05-23 23:59:59",
              "description": "Basic coverage for an SUV",
              "product_id": "P002",
              "coverage_level": "Medium"
            },
            {
              "quote_id": "Q003",
              "application_id": "A003",
              "cust_id": "C003",
              "issue_date": "2024-04-24 11:15:00",
              "valid_from_date": "2024-04-25 00:00:00",
              "valid_till_date": "2024-05-24 23:59:59",
              "description": "Standard coverage for a hatchback",
              "product_id": "P003",
              "coverage_level": "Low"
            }
          
          
    ]
  // State to store quote data
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect( ()=> {
    axios.get('/api/userlayout/quote_read')
    .then((response) => {
      setQuotes(response.data)
      setLoading(false)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Quote Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid From Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid Till Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coverage Level</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {quotes.map(quote => (
              <tr key={quote.quote_id}>
                <td className="px-6 py-4 whitespace-nowrap">{quote.quote_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.application_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.cust_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.issue_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.valid_from_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.valid_till_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.product_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{quote.coverage_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuotePage;
