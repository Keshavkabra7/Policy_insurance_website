import React, { useState } from 'react';

const Claim_form = () => {
  const [formData, setFormData] = useState({
    cust_id: '',
    claim_id: '',
    agreement_id: '',
    claim_amount: '',
    incident_id: '',
    damage_type: '',
    date_of_claim: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
   
    try {
      const response = await fetch('/api/agentlayout/createClaim', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Optionally handle success response
         setFormData({
          cust_id: '',
      claim_id: '',
      agreement_id: '',
      claim_amount: '',
      incident_id: '',
      damage_type: '',
      date_of_claim: ''
    });
        console.log(' data submitted successfully');

        let json = await response.json();
        // iternaryData.current = json;
        // navigate('/agentlayout/customer');
      } else {
        // Optionally handle error response
        console.error('Failed to submit  data');
      }
    } catch (error) {
      console.error('Error occurred while submitting  data:', error);
    }


  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Claim Form</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
       
          <input
            type="text"
            name="claim_id"
            value={formData.claim_id}
            onChange={handleChange}
            placeholder="Claim ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
           <input
            type="text"
            name="cust_id"
            value={formData.cust_id}
            onChange={handleChange}
            placeholder="cust ID"
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
            type="number"
            name="claim_amount"
            value={formData.claim_amount}
            onChange={handleChange}
            placeholder="Claim Amount"
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
            name="damage_type"
            value={formData.damage_type}
            onChange={handleChange}
            placeholder="Damage Type"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
           <input
            type="date"
            name="date_of_claim"
            value={formData.date_of_claim}
            onChange={handleChange}
            placeholder="date_of_claim "
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

export default Claim_form;
