
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const useritem = localStorage.getItem('user');
{console.log(useritem);
}
export default function ApllicationRead() {
    const tempapp = [
        {
          "application_id": "APP001",
          "cust_id": "CUST001",
          "vehicle_id": "VHCL001",
          "application_status": "accepted",
          "coverage": "Comprehensive"
        },
        {
          "application_id": "APP002",
          "cust_id": "CUST002",
          "vehicle_id": "VHCL002",
          "application_status": "pending",
          "coverage": "Third Party"
        },
        {
          "application_id": "APP003",
          "cust_id": "CUST003",
          "vehicle_id": "VHCL003",
          "application_status": "rejected",
          "coverage": "Collision"
        }
      ]
      
    const [applications, setApplications] = useState([]);

    useEffect( ()=> {
        axios.get('/api/userlayout/application')
        .then((response) => {
            setApplications(response.data)
          
    
        } )
        .catch( (error) => {
          console.log(error )
    
        } )
      } , [])
    
    
    if (!Array.isArray(applications)) {
        return <div>Loading...</div>; // Or handle the loading state however you prefer
    }
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-8">Application Details</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Application ID</th>
                            <th className="px-4 py-2">Customer ID</th>
                            <th className="px-4 py-2">Vehicle ID</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Coverage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(application => (
                            <tr key={application.application_id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{application.application_id}</td>
                                <td className="border px-4 py-2">{application.cust_id}</td>
                                <td className="border px-4 py-2">{application.vehicle_id}</td>
                                <td className={`border px-4 py-2 ${
                                    application.application_status === 'accepted' ? 'text-green-600' :
                                    application.application_status === 'rejected' ? 'text-red-600' :
                                    'text-yellow-600'
                                }`}>{application.application_status}</td>
                                <td className="border px-4 py-2">{application.coverage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
