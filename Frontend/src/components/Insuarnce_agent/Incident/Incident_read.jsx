// import axios from 'axios';

// useEffect(() => {
//   const fetchMemberships = async () => {
//     try {
//       const response = await axios.get('your_backend_api_endpoint');
//       setMemberships(response.data);
//     } catch (error) {
//       console.error('Error fetching memberships:', error);
//     }
//   };

//   fetchMemberships();
// }, []);


import React, { useState } from 'react';

const Incident_read = () => {
  const [incidents, setIncidents] = useState([
    {
      INCIDENT_ID: 'INC001',
      INCIDENT_TYPE: 'Accident',
      INCIDENT_DATE: '2024-04-01',
      DESCRIPTION: 'Car accident on highway'
    },
    {
      INCIDENT_ID: 'INC002',
      INCIDENT_TYPE: 'Theft',
      INCIDENT_DATE: '2024-04-05',
      DESCRIPTION: 'Stolen vehicle from parking lot'
    },
    {
      INCIDENT_ID: 'INC003',
      INCIDENT_TYPE: 'Vandalism',
      INCIDENT_DATE: '2024-04-10',
      DESCRIPTION: 'Broken windows and scratches on vehicle'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Incident Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incidents.map(incident => (
          <div key={incident.INCIDENT_ID} className="border rounded p-4">
            <p className="text-lg font-semibold">Incident ID: {incident.INCIDENT_ID}</p>
            <p>Type: {incident.INCIDENT_TYPE}</p>
            <p>Date: {incident.INCIDENT_DATE}</p>
            <p>Description: {incident.DESCRIPTION}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incident_read;
