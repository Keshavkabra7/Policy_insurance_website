import React, { useState } from 'react';

const Receipt_form = () => {
  const [formData, setFormData] = useState({
    receipt_id: '',
    premium_payment_id: '',
    cust_id: '',
    cost: '',
    time: ''
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
      receipt_id: '',
      premium_payment_id: '',
      cust_id: '',
      cost: '',
      time: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Receipt</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="receipt_id"
            value={formData.receipt_id}
            onChange={handleChange}
            placeholder="Receipt ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            name="premium_payment_id"
            value={formData.premium_payment_id}
            onChange={handleChange}
            placeholder="Premium Payment ID"
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
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            placeholder="Cost"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <input
            type="date"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Time"
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

export default Receipt_form;
