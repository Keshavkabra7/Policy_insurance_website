
import { Link } from 'react-router-dom';


import React, { useState } from 'react';

const Product= () => {
  const [products, setProducts] = useState([
    {
      product_number: 'PROD001',
      company_name: 'Company1',
      product_price: 100,
      product_type: 'Type1'
    },
    {
      product_number: 'PROD002',
      company_name: 'Company2',
      product_price: 200,
      product_type: 'Type2'
    },
    {
      product_number: 'PROD003',
      company_name: 'Company3',
      product_price: 300,
      product_type: 'Type3'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Details</h1>
      <div>
        <Link to='/agentlayout/pform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Add new product</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.product_number} className="border rounded p-4">
            <p className="text-lg font-semibold">Product Number: {product.product_number}</p>
            <p>Company Name: {product.company_name}</p>
            <p>Price: {product.product_price}</p>
            <p>Type: {product.product_type}</p>
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
export default Product;
