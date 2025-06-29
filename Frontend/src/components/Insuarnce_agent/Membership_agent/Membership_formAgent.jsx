import React, { useState } from 'react';

const Membership_formAgent = () => {
  const [formData, setFormData] = useState({
    membership_id: '',
    cust_id: '',
    membership_type: '',
    organisation_contact: ''
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
      membership_id: '',
      cust_id: '',
      membership_type: '',
      organisation_contact: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Membership Form</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="membership_id"
            value={formData.membership_id}
            onChange={handleChange}
            placeholder="Membership ID"
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
            type="text"
            name="membership_type"
            value={formData.membership_type}
            onChange={handleChange}
            placeholder="Membership Type"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="organisation_contact"
            value={formData.organisation_contact}
            onChange={handleChange}
            placeholder="Organisation Contact"
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

export default Membership_formAgent;
