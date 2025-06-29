import { Link } from "react-router-dom";

import React, { useState } from 'react';

const Staff= () => {
  const [staffList, setStaffList] = useState([
    {
      staff_id: 'STAFF001',
      company_name: 'ABC Insurance',
      staff_fname: 'John',
      staff_lname: 'Doe',
      staff_address: '123 Main St',
      staff_contact: 1234567890,
      staff_gender: 'M',
      staff_marital_status: 'Single',
      staff_nationality: 'American',
      staff_qualification: 'Bachelor Degree',
      staff_allowance: 1000,
      staff_pps_number: 123456789
    },
    {
      staff_id: 'STAFF002',
      company_name: 'XYZ Insurance',
      staff_fname: 'Jane',
      staff_lname: 'Smith',
      staff_address: '456 Elm St',
      staff_contact: 9876543210,
      staff_gender: 'F',
      staff_marital_status: 'Married',
      staff_nationality: 'Canadian',
      staff_qualification: 'Master Degree',
      staff_allowance: 1200,
      staff_pps_number: 987654321
    },
    {
      staff_id: 'STAFF003',
      company_name: 'PQR Insurance',
      staff_fname: 'Michael',
      staff_lname: 'Brown',
      staff_address: '789 Oak St',
      staff_contact: 4567890123,
      staff_gender: 'M',
      staff_marital_status: 'Single',
      staff_nationality: 'British',
      staff_qualification: 'PhD',
      staff_allowance: 1500,
      staff_pps_number: 456789012
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Staff Details</h1>
      <div>
        <Link to='/agentlayout/sform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staffList.map(staff => (
          <div key={staff.staff_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Staff ID: {staff.staff_id}</p>
            <p>Company Name: {staff.company_name}</p>
            <p>First Name: {staff.staff_fname}</p>
            <p>Last Name: {staff.staff_lname}</p>
            <p>Address: {staff.staff_address}</p>
            <p>Contact: {staff.staff_contact}</p>
            <p>Gender: {staff.staff_gender}</p>
            <p>Marital Status: {staff.staff_marital_status}</p>
            <p>Nationality: {staff.staff_nationality}</p>
            <p>Qualification: {staff.staff_qualification}</p>
            <p>Allowance: {staff.staff_allowance}</p>
            <p>PPS Number: {staff.staff_pps_number}</p>
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
export default Staff;
