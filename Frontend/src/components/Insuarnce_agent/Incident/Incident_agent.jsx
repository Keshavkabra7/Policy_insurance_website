import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Incident_agent = () => {
  const [incidents, setIncidents] = useState([
    // {
    //   INCIDENT_ID: 'INC001',
    //   INCIDENT_TYPE: 'Accident',
    //   INCIDENT_DATE: '2024-04-01',
    //   DESCRIPTION: 'Car accident on highway'
    // },
    // {
    //   INCIDENT_ID: 'INC002',
    //   INCIDENT_TYPE: 'Theft',
    //   INCIDENT_DATE: '2024-04-05',
    //   DESCRIPTION: 'Stolen vehicle from parking lot'
    // },
    // {
    //   INCIDENT_ID: 'INC003',
    //   INCIDENT_TYPE: 'Vandalism',
    //   INCIDENT_DATE: '2024-04-10',
    //   DESCRIPTION: 'Broken windows and scratches on vehicle'
    // }
  ]);
  useEffect( ()=> {
    axios.get('/api/agentlayout/incident_read')
    .then((response) => {
      setIncidents(response.data)
      

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])




  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Incident Details</h1>
      <div>
        <Link to='/agentlayout/iform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incidents.map(incident => (
          <div key={incident.INCIDENT_ID} className="border rounded p-4">
            <p className="text-lg font-semibold">Incident ID: {incident.INCIDENT_ID}</p>
            <p>Type: {incident.INCIDENT_TYPE}</p>
            <p>Date: {incident.INCIDENT_DATE}</p>
            <p>Description: {incident.DESCRIPTION}</p>

            <div className=''>
             <button className="bg-green-300 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-2">Accept</button>
            
             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  m-2">Reject</button>
             <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50  m-2">Delete</button>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incident_agent;
