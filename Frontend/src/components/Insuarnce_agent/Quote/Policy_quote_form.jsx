import React, { useState } from 'react';

const Policy_quote_form = () => {
  const [formData, setFormData] = useState({
    quote_id: '',
    application_id: '',
    cust_id: '',
    issue_date: '',
    valid_from_date: '',
    valid_till_date: '',
    description: '',
    product_id: '',
    coverage_level: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      quote_id: '',
      application_id: '',
      cust_id: '',
      issue_date: '',
      valid_from_date: '',
      valid_till_date: '',
      description: '',
      product_id: '',
      coverage_level: ''
    });

    try {
      const response = await fetch('/api/agentlayout/quote_create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Optionally handle success response
        console.log(' data submitted successfully');

        let json = await response.json();
        // iternaryData.current = json;
        // navigate('/agentlayout/customer');
      } else {
        // Optionally handle error response
        console.error('Failed to submit  data');
      }
    } catch (error) {
      console.error('Error occurred while submitting  data:', error);
    }



  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Policy Quote Form</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="quote_id"
            value={formData.quote_id}
            onChange={handleChange}
            placeholder="Quote ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="application_id"
            value={formData.application_id}
            onChange={handleChange}
            placeholder="Application ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="cust_id"
            value={formData.cust_id}
            onChange={handleChange}
            placeholder="Customer ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="datetime-local"
            name="issue_date"
            value={formData.issue_date}
            onChange={handleChange}
            placeholder="Issue Date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="datetime-local"
            name="valid_from_date"
            value={formData.valid_from_date}
            onChange={handleChange}
            placeholder="Valid From Date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="datetime-local"
            name="valid_till_date"
            value={formData.valid_till_date}
            onChange={handleChange}
            placeholder="Valid Till Date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          
          <input
            type="text"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            placeholder="Product ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="coverage_level"
            value={formData.coverage_level}
            onChange={handleChange}
            placeholder="Coverage Level"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Policy_quote_form;
