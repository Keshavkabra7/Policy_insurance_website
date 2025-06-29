import React, { useState } from 'react';

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    claimId: '',
    agreementId: '',
    claimAmount: '',
    incidentId: '',
    damageType: '',
    dateOfClaim: '',
    claimStatus: '',
    custId: ''
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
    // Handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      claimId: '',
      agreementId: '',
      claimAmount: '',
      incidentId: '',
      damageType: '',
      dateOfClaim: '',
      claimStatus: '',
      custId: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create Claim</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="claimId" className="block text-gray-700 font-semibold mb-2">Claim ID</label>
          <input
            type="text"
            id="claimId"
            name="claimId"
            value={formData.claimId}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter Claim ID"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="agreementId" className="block text-gray-700 font-semibold mb-2">Agreement ID</label>
          <input
            type="text"
            id="agreementId"
            name="agreementId"
            value={formData.agreementId}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter Agreement ID"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="claimAmount" className="block text-gray-700 font-semibold mb-2">Claim Amount</label>
          <input
            type="number"
            id="claimAmount"
            name="claimAmount"
            value={formData.claimAmount}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter Claim Amount"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="incidentId" className="block text-gray-700 font-semibold mb-2">Incident ID</label>
          <input
            type="text"
            id="incidentId"
            name="incidentId"
            value={formData.incidentId}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter Incident ID"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="damageType" className="block text-gray-700 font-semibold mb-2">Damage Type</label>
          <input
            type="text"
            id="damageType"
            name="damageType"
            value={formData.damageType}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter Damage Type"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfClaim" className="block text-gray-700 font-semibold mb-2">Date of Claim</label>
          <input
            type="date"
            id="dateOfClaim"
            name="dateOfClaim"
            value={formData.dateOfClaim}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="claimStatus" className="block text-gray-700 font-semibold mb-2">Claim Status</label>
          <input
            type="text"
            id="claimStatus"
            name="claimStatus"
            value={formData.claimStatus}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter Claim Status"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="custId" className="block text-gray-700 font-semibold mb-2">Customer ID</label>
          <input
            type="text"
            id="custId"
            name="custId"
            value={formData.custId}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter Customer ID"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClaimForm;
