import React, { useState } from 'react';

const Company_read = () => {
  const [insuranceCompanies, setInsuranceCompanies] = useState([
    {
      company_name: 'Company1',
      company_address: 'Address1',
      company_contact_number: 1234567890,
      company_fax: 9876543210,
      company_email: 'company1@example.com',
      company_website: 'www.company1.com',
      company_location: 'Location1',
      company_department_name: 'Department1',
      company_office_name: 'Office1'
    },
    {
      company_name: 'Company2',
      company_address: 'Address2',
      company_contact_number: 2345678901,
      company_fax: 8765432109,
      company_email: 'company2@example.com',
      company_website: 'www.company2.com',
      company_location: 'Location2',
      company_department_name: 'Department2',
      company_office_name: 'Office2'
    },
    {
      company_name: 'Company3',
      company_address: 'Address3',
      company_contact_number: 3456789012,
      company_fax: 7654321098,
      company_email: 'company3@example.com',
      company_website: 'www.company3.com',
      company_location: 'Location3',
      company_department_name: 'Department3',
      company_office_name: 'Office3'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Insurance Companies Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insuranceCompanies.map(company => (
          <div key={company.company_name} className="border rounded p-4">
            <p className="text-lg font-semibold">Company Name: {company.company_name}</p>
            <p>Company Address: {company.company_address}</p>
            <p>Contact Number: {company.company_contact_number}</p>
            <p>Fax: {company.company_fax}</p>
            <p>Email: {company.company_email}</p>
            <p>Website: {company.company_website}</p>
            <p>Location: {company.company_location}</p>
            <p>Department Name: {company.company_department_name}</p>
            <p>Office Name: {company.company_office_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company_read;

// import axios from 'axios';

// useEffect(() => {
//   const fetchMemberships = async () => {
//     try {
//       const response = await axios.get('your_backend_api_endpoint');
//       setMemberships(response.data);
//     } catch (error) {
//       console.error('Error fetching memberships:', error);
//     }
//   };

//   fetchMemberships();
// }, []);

