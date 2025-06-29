import React, { useState } from 'react';

const Vehicle_service_form = () => {
  const [formData, setFormData] = useState({
    vehicle_service: '',
    vehicle_id: '',
    cust_id: '',
    department_name: '',
    vehicle_service_address: '',
    vehicle_service_contact: '',
    vehicle_service_incharge: '',
    vehicle_service_type: ''
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
      vehicle_service: '',
      vehicle_id: '',
      cust_id: '',
      department_name: '',
      vehicle_service_address: '',
      vehicle_service_contact: '',
      vehicle_service_incharge: '',
      vehicle_service_type: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Vehicle Service</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="vehicle_service"
            value={formData.vehicle_service}
            onChange={handleChange}
            placeholder="Vehicle Service"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_id"
            value={formData.vehicle_id}
            onChange={handleChange}
            placeholder="Vehicle ID"
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
            name="department_name"
            value={formData.department_name}
            onChange={handleChange}
            placeholder="Department Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_service_address"
            value={formData.vehicle_service_address}
            onChange={handleChange}
            placeholder="Vehicle Service Address"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_service_contact"
            value={formData.vehicle_service_contact}
            onChange={handleChange}
            placeholder="Vehicle Service Contact"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_service_incharge"
            value={formData.vehicle_service_incharge}
            onChange={handleChange}
            placeholder="Vehicle Service Incharge"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="vehicle_service_type"
            value={formData.vehicle_service_type}
            onChange={handleChange}
            placeholder="Vehicle Service Type"
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

export default Vehicle_service_form;
