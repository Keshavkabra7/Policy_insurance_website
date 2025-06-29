import React, { useState } from 'react';

const Nok_form = () => {
  const [formData, setFormData] = useState({
    nok_id: '',
    agreement_id: '',
    application_id: '',
    cust_id: '',
    nok_name: '',
    nok_address: '',
    nok_phone_number: '',
    nok_marital_status: 'married',
    nok_gender: 'm'
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
      nok_id: '',
      agreement_id: '',
      application_id: '',
      cust_id: '',
      nok_name: '',
      nok_address: '',
      nok_phone_number: '',
      nok_marital_status: 'married',
      nok_gender: 'm'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Policy NOK Form</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="nok_id"
            value={formData.nok_id}
            onChange={handleChange}
            placeholder="NOK ID"
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
            type="text"
            name="nok_name"
            value={formData.nok_name}
            onChange={handleChange}
            placeholder="NOK Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="nok_address"
            value={formData.nok_address}
            onChange={handleChange}
            placeholder="NOK Address"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="tel"
            name="nok_phone_number"
            value={formData.nok_phone_number}
            onChange={handleChange}
            placeholder="NOK Phone Number"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <select
            name="nok_marital_status"
            value={formData.nok_marital_status}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
          </select>
          <select
            name="nok_gender"
            value={formData.nok_gender}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Other</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Nok_form;
