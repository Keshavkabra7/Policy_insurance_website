import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleServicePage = () => {
 

  // Simulated data
  const tempData = [
    {
      vehicle_service_id: "VS001",
      vehicle_id: "V001",
      cust_id: "C001",
      department_name: "Service Department",
      vehicle_service_address: "123 Main Street",
      vehicle_service_contact: "123-456-7890",
      vehicle_service_incharge: "John Doe",
      vehicle_service_type: "Maintenance"
    },
    {
      vehicle_service_id: "VS002",
      vehicle_id: "V002",
      cust_id: "C002",
      department_name: "Repair Department",
      vehicle_service_address: "456 Elm Street",
      vehicle_service_contact: "987-654-3210",
      vehicle_service_incharge: "Jane Doe",
      vehicle_service_type: "Repair"
    }
  ];

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( ()=> {
    axios.get('/api/userlayout/vehicleservicepage')
    .then((response) => {
      setServices(response.data)
      setLoading(false)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])


  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Vehicle Service Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">ID</th>
              <th className="py-2 px-4 border border-gray-300">Vehicle ID</th>
              <th className="py-2 px-4 border border-gray-300">Customer ID</th>
              <th className="py-2 px-4 border border-gray-300">Department Name</th>
              <th className="py-2 px-4 border border-gray-300">Service Address</th>
              <th className="py-2 px-4 border border-gray-300">Service Contact</th>
              <th className="py-2 px-4 border border-gray-300">Service Incharge</th>
              <th className="py-2 px-4 border border-gray-300">Service Type</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.vehicle_service_id}>
                <td className="py-2 px-4 border border-gray-300">{service.vehicle_service}</td>
                <td className="py-2 px-4 border border-gray-300">{service.vehicle_id}</td>
                <td className="py-2 px-4 border border-gray-300">{service.cust_id}</td>
                <td className="py-2 px-4 border border-gray-300">{service.department_name}</td>
                <td className="py-2 px-4 border border-gray-300">{service.vehicle_service_address}</td>
                <td className="py-2 px-4 border border-gray-300">{service.vehicle_service_contact}</td>
                <td className="py-2 px-4 border border-gray-300">{service.vehicle_service_incharge}</td>
                <td className="py-2 px-4 border border-gray-300">{service.vehicle_service_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VehicleServicePage;
