
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Office_agent= () => {
  const [offices, setOffices] = useState([
    {
      office_name: 'Office1',
      department_name: 'Department1',
      company_name: 'Company1',
      office_leader: 'Leader1',
      contact_information: '123-456-7890',
      address: '123 Main St',
      admin_cost: 1000,
      staff: 'Staff1, Staff2'
    },
    {
      office_name: 'Office2',
      department_name: 'Department2',
      company_name: 'Company2',
      office_leader: 'Leader2',
      contact_information: '987-654-3210',
      address: '456 Elm St',
      admin_cost: 1500,
      staff: 'Staff3, Staff4'
    },
    {
      office_name: 'Office3',
      department_name: 'Department3',
      company_name: 'Company3',
      office_leader: 'Leader3',
      contact_information: '456-789-0123',
      address: '789 Oak St',
      admin_cost: 2000,
      staff: 'Staff5, Staff6'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Office Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {offices.map(office => (
          <div key={office.office_name} className="border rounded p-4">
            <p className="text-lg font-semibold">Office Name: {office.office_name}</p>
            <p>Department Name: {office.department_name}</p>
            <p>Company Name: {office.company_name}</p>
            <p>Office Leader: {office.office_leader}</p>
            <p>Contact Information: {office.contact_information}</p>
            <p>Address: {office.address}</p>
            <p>Admin Cost: {office.admin_cost}</p>
            <p>Staff: {office.staff}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};
export default Office_agent;
