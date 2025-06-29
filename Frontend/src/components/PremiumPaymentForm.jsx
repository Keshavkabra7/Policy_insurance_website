import React, { useState } from 'react';

const PremiumPaymentForm = () => {
  const [formData, setFormData] = useState({
    premium_payment_id: '',
    cust_id: '',
    policy_number: '',
    premium_payment_schedule: '',
    premium_payment_amount: ''
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
      premium_payment_id: '',
      cust_id: '',
      policy_number: '',
      premium_payment_schedule: '',
      premium_payment_amount: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Premium Payment Form</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="premium_payment_id">Premium Payment ID</label>
          <input
            type="text"
            id="premium_payment_id"
            name="premium_payment_id"
            value={formData.premium_payment_id}
            onChange={handleChange}
            placeholder="Premium Payment ID"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="cust_id">Customer ID</label>
          <input
            type="text"
            id="cust_id"
            name="cust_id"
            value={formData.cust_id}
            onChange={handleChange}
            placeholder="Customer ID"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="policy_number">Policy Number</label>
          <input
            type="text"
            id="policy_number"
            name="policy_number"
            value={formData.policy_number}
            onChange={handleChange}
            placeholder="Policy Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="premium_payment_schedule">Premium Payment Schedule</label>
          <input
            type="datetime-local"
            id="premium_payment_schedule"
            name="premium_payment_schedule"
            value={formData.premium_payment_schedule}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="premium_payment_amount">Premium Payment Amount</label>
          <input
            type="number"
            id="premium_payment_amount"
            name="premium_payment_amount"
            value={formData.premium_payment_amount}
            onChange={handleChange}
            placeholder="Premium Payment Amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PremiumPaymentForm;
