import React, { useState } from 'react';

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    vehicleId: '',
    make: '',
    model: '',
    year: '',
    type: 'car',
    vin: '',
    registration: '',
    ownerId: ''
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
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      vehicleId: '',
      make: '',
      model: '',
      year: '',
      type: 'car',
      vin: '',
      registration: '',
      ownerId: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Vehicle</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="number"
            name="vehicleId"
            value={formData.vehicleId}
            onChange={handleChange}
            placeholder="Vehicle ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleChange}
            placeholder="Make"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Model"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="truck">Truck</option>
          </select>
          <input
            type="text"
            name="vin"
            value={formData.vin}
            onChange={handleChange}
            placeholder="VIN (Vehicle Identification Number)"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="registration"
            value={formData.registration}
            onChange={handleChange}
            placeholder="Registration Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="ownerId"
            value={formData.ownerId}
            onChange={handleChange}
            placeholder="Owner ID"
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

export default VehicleForm;
