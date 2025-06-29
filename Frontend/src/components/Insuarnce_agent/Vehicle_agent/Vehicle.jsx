

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Vehicle = () => {
  const [vehicles, setVehicles] = useState([
    // {
    //   vehicle_id: 'VEH001',
    //   cust_id: 'CUST001',
    //   policy_id: 'POL001',
    //   dependent_nok_id: 'NOK001',
    //   vehicle_registration_number: 'ABC123',
    //   vehicle_value: 5000,
    //   vehicle_type: 'Car',
    //   vehicle_size: 4,
    //   vehicle_number_of_seat: 5,
    //   vehicle_manufacturer: 'Toyota',
    //   vehicle_chasis_number: 'CHASIS001',
    //   vehicle_number: 'VEH001',
    //   vehicle_model_number: 'Model123'
    // },
    // {
    //   vehicle_id: 'VEH002',
    //   cust_id: 'CUST002',
    //   policy_id: 'POL002',
    //   dependent_nok_id: 'NOK002',
    //   vehicle_registration_number: 'XYZ456',
    //   vehicle_value: 8000,
    //   vehicle_type: 'SUV',
    //   vehicle_size: 5,
    //   vehicle_number_of_seat: 7,
    //   vehicle_manufacturer: 'Honda',
    //   vehicle_chasis_number: 'CHASIS002',
    //   vehicle_number: 'VEH002',
    //   vehicle_model_number: 'Model456'
    // },
    // {
    //   vehicle_id: 'VEH003',
    //   cust_id: 'CUST003',
    //   policy_id: 'POL003',
    //   dependent_nok_id: 'NOK003',
    //   vehicle_registration_number: 'PQR789',
    //   vehicle_value: 6000,
    //   vehicle_type: 'Truck',
    //   vehicle_size: 6,
    //   vehicle_number_of_seat: 2,
    //   vehicle_manufacturer: 'Ford',
    //   vehicle_chasis_number: 'CHASIS003',
    //   vehicle_number: 'VEH003',
    //   vehicle_model_number: 'Model789'
    // }
  ]);

  useEffect( ()=> {
    axios.get('/api/agentlayout/vehicle_read')
    .then((response) => {
      setVehicles(response.data)
      

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Vehicle Details</h1>
      <div>
        <Link to='/agentlayout/vform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map(vehicle => (
          <div key={vehicle.vehicle_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Vehicle ID: {vehicle.vehicle_id}</p>
            <p>Customer ID: {vehicle.cust_id}</p>
            <p>Policy ID: {vehicle.policy_id}</p>
            <p>Dependent NOK ID: {vehicle.dependent_nok_id}</p>
            <p>Registration Number: {vehicle.vehicle_registration_number}</p>
            <p>Value: {vehicle.vehicle_value}</p>
            <p>Type: {vehicle.vehicle_type}</p>
            <p>Size: {vehicle.vehicle_size}</p>
            <p>Number of Seats: {vehicle.vehicle_number_of_seat}</p>
            <p>Manufacturer: {vehicle.vehicle_manufacturer}</p>
            <p>Chasis Number: {vehicle.vehicle_chasis_number}</p>
            <p>Vehicle Number: {vehicle.vehicle_number}</p>
            <p>Model Number: {vehicle.vehicle_model_number}</p>
            <div className=''>
             {/* <button className="bg-green-300 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 m-2">Accept</button> */}
            
             <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  m-2">Edit</button>
             <button className="bg-yellow-400 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50  m-2">Delete</button>
          
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
