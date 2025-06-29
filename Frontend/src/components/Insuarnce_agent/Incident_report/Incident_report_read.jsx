import React, { useState } from 'react';

const Incident_report_read = () => {
  const [incidentReports, setIncidentReports] = useState([
    {
      incident_report_id: 'INC001',
      incident_id: 'INCID001',
      cust_id: 'CUST001',
      incident_inspector: 'Inspector A',
      incident_cost: 1000,
      incident_type: 'Accident',
      incident_report_description: 'Car accident on highway'
    },
    {
      incident_report_id: 'INC002',
      incident_id: 'INCID002',
      cust_id: 'CUST002',
      incident_inspector: 'Inspector B',
      incident_cost: 1500,
      incident_type: 'Theft',
      incident_report_description: 'Stolen vehicle from parking lot'
    },
    {
      incident_report_id: 'INC003',
      incident_id: 'INCID003',
      cust_id: 'CUST003',
      incident_inspector: 'Inspector C',
      incident_cost: 800,
      incident_type: 'Vandalism',
      incident_report_description: 'Broken windows and scratches on vehicle'
    }
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Incident Report Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incidentReports.map(report => (
          <div key={report.incident_report_id} className="border rounded p-4">
            <p className="text-lg font-semibold">Report ID: {report.incident_report_id}</p>
            <p>Incident ID: {report.incident_id}</p>
            <p>Customer ID: {report.cust_id}</p>
            <p>Inspector: {report.incident_inspector}</p>
            <p>Cost: ${report.incident_cost}</p>
            <p>Type: {report.incident_type}</p>
            <p>Description: {report.incident_report_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Incident_report_read;
