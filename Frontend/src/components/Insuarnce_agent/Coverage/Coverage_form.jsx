import React, { useState } from 'react';

const Coverage_form = () => {
  const [formData, setFormData] = useState({
    coverage_id: '',
    company_name: '',
    coverage_amount: '',
    coverage_type: '',
    coverage_level: '',
    product_id: '',
    coverage_description: '',
    coverage_terms: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      coverage_id: '',
      company_name: '',
      coverage_amount: '',
      coverage_type: '',
      coverage_level: '',
      product_id: '',
      coverage_description: '',
      coverage_terms: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Coverage Form</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="coverage_id"
            value={formData.coverage_id}
            onChange={handleChange}
            placeholder="Coverage ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            placeholder="Company Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="coverage_amount"
            value={formData.coverage_amount}
            onChange={handleChange}
            placeholder="Coverage Amount"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="coverage_type"
            value={formData.coverage_type}
            onChange={handleChange}
            placeholder="Coverage Type"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="coverage_level"
            value={formData.coverage_level}
            onChange={handleChange}
            placeholder="Coverage Level"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            placeholder="Product ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <textarea
            name="coverage_description"
            value={formData.coverage_description}
            onChange={handleChange}
            placeholder="Coverage Description"
            className="border border-gray-300 rounded px-3 py-2 w-full h-32 resize-none"
          />
          <input
            type="text"
            name="coverage_terms"
            value={formData.coverage_terms}
            onChange={handleChange}
            placeholder="Coverage Terms"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Coverage_form;
