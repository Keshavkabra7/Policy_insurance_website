import axios from 'axios';
import React, { useState, useEffect } from 'react';

const InsuranceCompaniesPage = () => {
  

  // Simulated data
  const tempData = [
    {
      company_name: "ABC Insurance",
      company_address: "123 Main Street",
      company_contact_number: "1234567890",
      company_fax: "9876543210",
      company_email: "info@abcinsurance.com",
      company_website: "www.abcinsurance.com",
      company_location: "City",
      company_department_name: "Sales",
      company_office_name: "Main Office"
    },
    {
      company_name: "XYZ Insurance",
      company_address: "456 Elm Street",
      company_contact_number: "9876543210",
      company_fax: "1234567890",
      company_email: "info@xyzinsurance.com",
      company_website: "www.xyzinsurance.com",
      company_location: "Town",
      company_department_name: "Customer Service",
      company_office_name: "Branch Office"
    },
    
  ];
  
  const [insuranceCompanies, setInsuranceCompanies] = useState(tempData);
  
  const [loading, setLoading] = useState(true);

  useEffect( ()=> {
    axios.get('/api/userlayout/ICP')
    .then((response) => {
      setInsuranceCompanies(response.data)
      setLoading(false)

    } )
    .catch( (error) => {
      console.log(error )

    } )
  } , [])

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Insurance Companies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insuranceCompanies.map(company => (
            <div key={company.company_name} className="border border-gray-300 p-4 rounded-md shadow-md">
              <h2 className="text-lg font-semibold mb-2">{company.company_name}</h2>
              <p className="text-gray-600 mb-2">{company.company_address}</p>
              <p className="text-gray-600 mb-2">Contact: {company.company_contact_number}</p>
              <p className="text-gray-600 mb-2">Fax: {company.company_fax}</p>
              <p className="text-gray-600 mb-2">Email: {company.company_email}</p>
              <p className="text-gray-600 mb-2">Website: {company.company_website}</p>
              <p className="text-gray-600 mb-2">Location: {company.company_location}</p>
              <p className="text-gray-600 mb-2">Department: {company.company_department_name}</p>
              <p className="text-gray-600 mb-2">Office: {company.company_office_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InsuranceCompaniesPage;
