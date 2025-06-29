
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';




const Application = () => {



  const [applications, setApplications] = useState([
    // {
    //   application_id: 'APP001',
    //   cust_id: 'CUST001',
    //   vehicle_id: 'VEH001',
    //   application_status: 'accepted',
    //   coverage: 'Full coverage'
    // },
    // {
    //   application_id: 'APP002',
    //   cust_id: 'CUST002',
    //   vehicle_id: 'VEH002',
    //   application_status: 'pending',
    //   coverage: 'Basic coverage'
    // },
    // {
    //   application_id: 'APP003',
    //   cust_id: 'CUST003',
    //   vehicle_id: 'VEH003',
    //   application_status: 'rejected',
    //   coverage: 'No coverage'
    // }
  ]);

    // Function to fetch application data from the backend
    useEffect( ()=> {
      axios.get('/api/agentlayout/application_read')
      .then((response) => {
          setApplications(response.data)
        
  
      } )
      .catch( (error) => {
        console.log(error )
  
      } )
    } , [])
  
    
return (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Application Details</h1>
    <div>
      <Link to='/agentlayout/applicationform'>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
      </Link>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {applications.map(application => (
        <div key={application.application_id} className="border rounded p-4">
          <p className="text-lg font-semibold">Application ID: {application.application_id}</p>
          <p>Customer ID: {application.cust_id}</p>
          <p>Vehicle ID: {application.vehicle_id}</p>
          <p>Status: {application.application_status}</p>
          <p>Coverage: {application.coverage}</p>
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


export default Application;
