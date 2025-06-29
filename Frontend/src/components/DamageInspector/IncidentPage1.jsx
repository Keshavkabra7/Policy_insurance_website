import React, { useState, useEffect } from 'react';

const IncidentPage1 = () => {
  

  // Simulated data
  const tempData = [
    {
      INCIDENT_ID: "INC001",
      INCIDENT_TYPE: "Accident",
      INCIDENT_DATE: "2024-04-20",
      DESCRIPTION: "Car accident on the highway."
    },
    {
      INCIDENT_ID: "INC002",
      INCIDENT_TYPE: "Theft",
      INCIDENT_DATE: "2024-04-22",
      DESCRIPTION: "Theft of personal belongings from the vehicle."
    },
    {
      INCIDENT_ID: "INC002",
      INCIDENT_TYPE: "Theft",
      INCIDENT_DATE: "2024-04-22",
      DESCRIPTION: "Theft of personal belongings from the vehicle."
    },
    {
      INCIDENT_ID: "INC002",
      INCIDENT_TYPE: "Theft",
      INCIDENT_DATE: "2024-04-22",
      DESCRIPTION: "Theft of personal belongings from the vehicle."
    }
  ];

  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch insurance policies data from the backend API
    const fetchIncident = async () => {
      try {
        // Replace 'your-backend-api-url' with your actual backend API URL
        const response = await fetch('/api/inspectorlayout/incident1');
        const data = await response.json();
        setIncidents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching insurance policies data:', error);
      }
    };

    fetchIncident();
  }, []);

  return (
    <div className="container mx-auto mt-10 w-screen h-screen">
      <h1 className="text-3xl font-bold mb-5">Incident Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Incident ID</th>
              <th className="py-2 px-4">Incident Type</th>
              <th className="py-2 px-4">Incident Date</th>
              <th className="py-2 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map(incident => (
              <tr key={incident.INCIDENT_ID} className="border-b border-gray-200">
                <td className="py-2 px-4">{incident.INCIDENT_ID}</td>
                <td className="py-2 px-4">{incident.INCIDENT_TYPE}</td>
                <td className="py-2 px-4">{incident.INCIDENT_DATE}</td>
                <td className="py-2 px-4">{incident.DESCRIPTION}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IncidentPage1;
