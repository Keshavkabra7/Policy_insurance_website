import React, { useState } from 'react';

const Incident_formagent = () => {
  const [formData, setFormData] = useState({
    INCIDENT_ID: '',
    INCIDENT_TYPE: '',
    INCIDENT_DATE: '',
    DESCRIPTION: ''
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
    setFormData({
      INCIDENT_ID: '',
      INCIDENT_TYPE: '',
      INCIDENT_DATE: '',
      DESCRIPTION: ''
    });
    
    try {
      const response = await fetch('/api/agentlayout/incident_create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Optionally handle success response
        console.log(' data submitted successfully');

        let json = await response.json();
        // iternaryData.current = json;
        // navigate('/agentlayout/customer');
      } else {
        // Optionally handle error response
        console.error('Failed to submit  data');
      }
    } catch (error) {
      console.error('Error occurred while submitting trip data:', error);
    }

      


  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add New Incident</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="INCIDENT_ID"
            value={formData.INCIDENT_ID}
            onChange={handleChange}
            placeholder="Incident ID"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="text"
            name="INCIDENT_TYPE"
            value={formData.INCIDENT_TYPE}
            onChange={handleChange}
            placeholder="Incident Type"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <input
            type="date"
            name="INCIDENT_DATE"
            value={formData.INCIDENT_DATE}
            onChange={handleChange}
            placeholder="Incident Date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          <textarea
            name="DESCRIPTION"
            value={formData.DESCRIPTION}
            onChange={handleChange}
            placeholder="Description"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Incident_formagent;
