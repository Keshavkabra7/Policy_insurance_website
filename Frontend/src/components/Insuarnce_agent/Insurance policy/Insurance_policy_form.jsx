import React, { useState } from 'react';

const Insurance_policy_form = () => {
  const [formData, setFormData] = useState({
    aggrement_id: '',
    application_id: '',
    cust_id: '',
    department_name: '',
    policy_number: '',
    start_date: '',
    expiry_date: '',
    term_condition_description: ''
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
      aggrement_id: '',
      application_id: '',
      cust_id: '',
      department_name: '',
      policy_number: '',
      start_date: '',
      expiry_date: '',
      term_condition_description: ''
    });

    try {
      const response = await fetch('/api/agentlayout/policy_create', {
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
      <h1 className="text-3xl font-bold mb-4">Add New Insurance Policy</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="aggrement_id"
            value={formData.aggrement_id}
            onChange={handleChange}
            placeholder="Agreement ID"
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
            type="text"
            name="department_name"
            value={formData.department_name}
            onChange={handleChange}
            placeholder="Department Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="policy_number"
            value={formData.policy_number}
            onChange={handleChange}
            placeholder="Policy Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <p>Start Date </p>
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
            placeholder="Start Date"  
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <p>Expiry Date </p>
          <input
            type="date"
            name="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            placeholder="Expiry Date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="term_condition_description"
            value={formData.term_condition_description}
            onChange={handleChange}
            placeholder="Term Condition Description"
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

export default Insurance_policy_form;
