
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

const Vehicle_service= () => {
  const [vehicleServices, setVehicleServices] = useState([
    {
      vehicle_service: 'VS001',
      vehicle_id: 'VEH001',
      cust_id: 'CUST001',
      department_name: 'Department1',
      vehicle_service_address: 'Address1',
      vehicle_service_contact: 'Contact1',
      vehicle_service_incharge: 'Incharge1',
      vehicle_service_type: 'Type1'
    },
    {
      vehicle_service: 'VS002',
      vehicle_id: 'VEH002',
      cust_id: 'CUST002',
      department_name: 'Department2',
      vehicle_service_address: 'Address2',
      vehicle_service_contact: 'Contact2',
      vehicle_service_incharge: 'Incharge2',
      vehicle_service_type: 'Type2'
    },
    {
      vehicle_service: 'VS003',
      vehicle_id: 'VEH003',
      cust_id: 'CUST003',
      department_name: 'Department3',
      vehicle_service_address: 'Address3',
      vehicle_service_contact: 'Contact3',
      vehicle_service_incharge: 'Incharge3',
      vehicle_service_type: 'Type3'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Vehicle Service Details</h1>
      <div>
        <Link to='/agentlayout/vsform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicleServices.map(service => (
          <div key={service.vehicle_service} className="border rounded p-4">
            <p className="text-lg font-semibold">Service ID: {service.vehicle_service}</p>
            <p>Vehicle ID: {service.vehicle_id}</p>
            <p>Customer ID: {service.cust_id}</p>
            <p>Department Name: {service.department_name}</p>
            <p>Service Address: {service.vehicle_service_address}</p>
            <p>Service Contact: {service.vehicle_service_contact}</p>
            <p>Service Incharge: {service.vehicle_service_incharge}</p>
            <p>Service Type: {service.vehicle_service_type}</p>
            {/* <div className=''>
             <button className="bg-green-300 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-2">Accept</button>
            
             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  m-2">Reject</button>
             <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50  m-2">Delete</button>
          
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Vehicle_service;
