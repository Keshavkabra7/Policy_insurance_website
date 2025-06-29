import React, { useState } from 'react';

const Application_form = () => {
  const [formData, setFormData] = useState({
    application_id: '',
    cust_id: '',
    vehicle_id: '',
    application_status: 'pending',
    coverage: ''
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
      application_id: '',
      cust_id: '',
      vehicle_id: '',
      application_status: 'pending',
      coverage: ''
    });

    
    try {
      const response = await fetch('/api/agentlayout/application_create', {
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
      console.error('Error occurred while submitting trip data:', error);
    }

    
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Submit Application</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
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
            name="vehicle_id"
            value={formData.vehicle_id}
            onChange={handleChange}
            placeholder="Vehicle ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <select
            name="application_status"
            value={formData.application_status}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          >
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="pending">Pending</option>
          </select>
          <input
            type="text"
            name="coverage"
            value={formData.coverage}
            onChange={handleChange}
            placeholder="Coverage"
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

export default Application_form;
