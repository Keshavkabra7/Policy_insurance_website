import React, { useState } from 'react';

const Incident_report_form = () => {
  const [formData, setFormData] = useState({
    incident_report_id: '',
    incident_id: '',
    cust_id: '',
    incident_inspector: '',
    incident_cost: '',
    incident_type: '',
    incident_report_description: ''
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
      incident_report_id: '',
      incident_id: '',
      cust_id: '',
      incident_inspector: '',
      incident_cost: '',
      incident_type: '',
      incident_report_description: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Incident Report</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="incident_report_id"
            value={formData.incident_report_id}
            onChange={handleChange}
            placeholder="Incident Report ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="incident_id"
            value={formData.incident_id}
            onChange={handleChange}
            placeholder="Incident ID"
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
            name="incident_inspector"
            value={formData.incident_inspector}
            onChange={handleChange}
            placeholder="Incident Inspector"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="incident_cost"
            value={formData.incident_cost}
            onChange={handleChange}
            placeholder="Incident Cost"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="incident_type"
            value={formData.incident_type}
            onChange={handleChange}
            placeholder="Incident Type"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <textarea
            name="incident_report_description"
            value={formData.incident_report_description}
            onChange={handleChange}
            placeholder="Incident Report Description"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Incident_report_form;
