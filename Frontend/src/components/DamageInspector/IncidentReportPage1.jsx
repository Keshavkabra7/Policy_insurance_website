import React, { useState, useEffect } from 'react';

const IncidentReportPage1 = () => {
  
  // Simulated data
  const tempData = [
    {
      incident_report_id: "IR001",
      incident_id: "INC001",
      cust_id: "C001",
      incident_inspector: "John Doe",
      incident_cost: 500,
      incident_type: "Accident",
      incident_report_description: "Detailed description of the accident."
    },
    {
      incident_report_id: "IR002",
      incident_id: "INC002",
      cust_id: "C002",
      incident_inspector: "Jane Doe",
      incident_cost: 300,
      incident_type: "Theft",
      incident_report_description: "Detailed description of the theft incident."
    }
  ];

  const [incidentReports, setIncidentReports] = useState(tempData);
  const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     // Simulated API call
//     setTimeout(() => {
//       setIncidentReports(tempData);
//       setLoading(false);
//     }, 1000);
//   }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Incident Reports</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Report ID</th>
              <th className="py-2 px-4">Incident ID</th>
              <th className="py-2 px-4">Customer ID</th>
              <th className="py-2 px-4">Inspector</th>
              <th className="py-2 px-4">Cost</th>
              <th className="py-2 px-4">Incident Type</th>
              <th className="py-2 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {incidentReports.map(report => (
              <tr key={report.incident_report_id} className="border-b border-gray-200">
                <td className="py-2 px-4">{report.incident_report_id}</td>
                <td className="py-2 px-4">{report.incident_id}</td>
                <td className="py-2 px-4">{report.cust_id}</td>
                <td className="py-2 px-4">{report.incident_inspector}</td>
                <td className="py-2 px-4">{report.incident_cost}</td>
                <td className="py-2 px-4">{report.incident_type}</td>
                <td className="py-2 px-4">{report.incident_report_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IncidentReportPage1;
