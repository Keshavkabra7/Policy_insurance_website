import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function OfficePage() {


    const temp = [
        {
          "office_name": "Office A",
          "department_name": "HR",
          "company_name": "ABC Company",
          "office_leader": "John Doe",
          "contact_information": "123-456-7890",
          "address": "123 Main St, City, Country",
          "admin_cost": 10000,
          "staff": "Alice, Bob, Charlie"
        },
        {
          "office_name": "Office B",
          "department_name": "Finance",
          "company_name": "XYZ Corporation",
          "office_leader": "Jane Smith",
          "contact_information": "987-654-3210",
          "address": "456 Elm St, City, Country",
          "admin_cost": 12000,
          "staff": "David, Emily, Frank"
        }
      ]
      
  // Sample data for testing
  const [offices, setOffices] = useState(temp);



  useEffect( ()=> {
    axios.get('/api/userlayout/officepage')
    .then((response) => {
      setOffices(response.data)
      setLoading(false)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])
  

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-5">Office Details</h1>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Office Name</th>
            <th className="py-3 px-6 text-left">Department Name</th>
            <th className="py-3 px-6 text-left">Company Name</th>
            <th className="py-3 px-6 text-left">Office Leader</th>
            <th className="py-3 px-6 text-left">Contact Information</th>
            <th className="py-3 px-6 text-left">Address</th>
            <th className="py-3 px-6 text-left">Admin Cost</th>
            <th className="py-3 px-6 text-left">Staff</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {offices.map((office, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.office_name}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.department_name}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.company_name}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.office_leader}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.contact_information}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.address}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.admin_cost}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">{office.staff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// export default OfficePage;
