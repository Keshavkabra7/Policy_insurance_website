import React, { useState, useEffect } from 'react';

const ProductPage = () => {
 

  // Simulated data
  const tempData = [
    {
      product_number: "P001",
      company_name: "ABC Insurance",
      product_price: 200,
      product_type: "Life Insurance"
    },
    {
      product_number: "P002",
      company_name: "XYZ Insurance",
      product_price: 100,
      product_type: "Health Insurance"
    }
  ];
  const [products, setProducts] = useState(tempData);
  const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     // Simulated API call
//     setTimeout(() => {
//       setProducts(tempData);
//       setLoading(false);
//     }, 1000);
//   }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Product Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Product Number</th>
              <th className="py-2 px-4">Company Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.product_number} className="border-b border-gray-200">
                <td className="py-2 px-4">{product.product_number}</td>
                <td className="py-2 px-4">{product.company_name}</td>
                <td className="py-2 px-4">{product.product_price}</td>
                <td className="py-2 px-4">{product.product_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductPage;
