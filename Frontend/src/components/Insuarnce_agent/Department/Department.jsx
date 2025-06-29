import { Link } from "react-router-dom";


import React, { useState } from 'react';

const Department = () => {
  const [departments, setDepartments] = useState([
    {
      department_name: 'Claims',
      company_name: 'ABC Insurance',
      contact_information: '123-456-7890',
      department_staff: 'John Doe, Jane Smith',
      department_leader: 'Alice Johnson'
    },
    {
      department_name: 'Underwriting',
      company_name: 'XYZ Insurance',
      contact_information: '987-654-3210',
      department_staff: 'Michael Brown, Emily Wilson',
      department_leader: 'David Lee'
    },
    {
      department_name: 'Policy Administration',
      company_name: 'PQR Insurance',
      contact_information: '456-789-0123',
      department_staff: 'Sarah Clark, Robert Taylor',
      department_leader: 'Mary White'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Department Details</h1>
      <div>
        <Link to='/agentlayout/dform'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-">Create</button>
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map(department => (
          <div key={department.department_name} className="border rounded p-4">
            <p className="text-lg font-semibold">Department Name: {department.department_name}</p>
            <p>Company Name: {department.company_name}</p>
            <p>Contact Information: {department.contact_information}</p>
            <p>Department Staff: {department.department_staff}</p>
            <p>Department Leader: {department.department_leader}</p>
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



export default Department;
