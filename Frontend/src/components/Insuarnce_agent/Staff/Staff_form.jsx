import React, { useState } from 'react';

const Staff_form = () => {
  const [formData, setFormData] = useState({
    staff_id: '',
    company_name: '',
    staff_fname: '',
    staff_lname: '',
    staff_address: '',
    staff_contact: '',
    staff_gender: '',
    staff_marital_status: '',
    staff_nationality: '',
    staff_qualification: '',
    staff_allowance: '',
    staff_pps_number: ''
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
      staff_id: '',
      company_name: '',
      staff_fname: '',
      staff_lname: '',
      staff_address: '',
      staff_contact: '',
      staff_gender: '',
      staff_marital_status: '',
      staff_nationality: '',
      staff_qualification: '',
      staff_allowance: '',
      staff_pps_number: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4"> Staff Form</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="staff_id"
            value={formData.staff_id}
            onChange={handleChange}
            placeholder="Staff ID"
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
            type="text"
            name="staff_fname"
            value={formData.staff_fname}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="staff_lname"
            value={formData.staff_lname}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="staff_address"
            value={formData.staff_address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="tel"
            name="staff_contact"
            value={formData.staff_contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="staff_gender"
            value={formData.staff_gender}
            onChange={handleChange}
            placeholder="Gender"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="staff_marital_status"
            value={formData.staff_marital_status}
            onChange={handleChange}
            placeholder="Marital Status"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="staff_nationality"
            value={formData.staff_nationality}
            onChange={handleChange}
            placeholder="Nationality"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="staff_qualification"
            value={formData.staff_qualification}
            onChange={handleChange}
            placeholder="Qualification"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="staff_allowance"
            value={formData.staff_allowance}
            onChange={handleChange}
            placeholder="Allowance"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="number"
            name="staff_pps_number"
            value={formData.staff_pps_number}
            onChange={handleChange}
            placeholder="PPS Number"
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



export default Staff_form;
