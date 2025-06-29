import React, { useState } from 'react';

const Policy_renewable_form= () => {
  const [formData, setFormData] = useState({
    policy_renewable_id: '',
    agreement_id: '',
    application_id: '',
    cust_id: '',
    date_of_renewal: '',
    type_of_renewal: ''
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
      policy_renewable_id: '',
      agreement_id: '',
      application_id: '',
      cust_id: '',
      date_of_renewal: '',
      type_of_renewal: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Policy Renewable Form</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="policy_renewable_id"
            value={formData.policy_renewable_id}
            onChange={handleChange}
            placeholder="Policy Renewable ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="agreement_id"
            value={formData.agreement_id}
            onChange={handleChange}
            placeholder="Agreement ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="application_id"
            value={formData.application_id}
            onChange={handleChange}
            placeholder="Application ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="cust_id"
            value={formData.cust_id}
            onChange={handleChange}
            placeholder="Customer ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="date"
            name="date_of_renewal"
            value={formData.date_of_renewal}
            onChange={handleChange}
            placeholder="Date of Renewal"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="type_of_renewal"
            value={formData.type_of_renewal}
            onChange={handleChange}
            placeholder="Type of Renewal"
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

export default Policy_renewable_form;
