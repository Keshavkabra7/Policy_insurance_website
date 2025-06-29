import React, { useState } from 'react';
import Image from '../Images/HomeBg.png';
import { Link } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    consumerMobileNumber: '',
    email: '',
    agreeToTerms: false,
    vehicleType: '' // New field for vehicle type
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      registrationNumber: '',
      consumerMobileNumber: '',
      email: '',
      agreeToTerms: false,
      vehicleType: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-end relative">
      <img src={Image} className="w-full h-screen " alt="" />
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="bg-white shadow-lg rounded-lg p-6 relative z-10">
          <h2 className="text-xl font-semibold mb-2">Get a Quote</h2>

          {/* Form fields */}
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Registration Number"
            className="border border-gray-300 rounded px-3 py-2 mt-4 w-full"
          />
          <input
            type="tel"
            name="consumerMobileNumber"
            value={formData.consumerMobileNumber}
            onChange={handleChange}
            placeholder="Consumer Mobile Number"
            className="border border-gray-300 rounded px-3 py-2 mt-4 w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            className="border border-gray-300 rounded px-3 py-2 mt-4 w-full"
          />

          {/* Vehicle type selection */}
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 mt-4 w-full"
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="autorickshaw">Auto-Rickshaw</option>
            <option value="truck">Truck</option>
          </select>

          {/* Checkbox for terms and conditions */}
          <label className="inline-flex items-center mt-4">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">I agree to the terms and conditions</span>
          </label>

          {/* Apply button */}
          <Link to='/policytable'>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded hover:bg-blue-600 transition duration-300">
            Apply
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Home;
