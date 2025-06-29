import React from 'react';
import { Link } from 'react-router-dom';


const AdminPanel = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Admin Panel</h1>
      <div className="flex justify-center space-x-4">
        <Link to = '/inspectorlayout/incidentform1'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
        </Link>

        <Link to = '/inspectorlayout/incidentreportpage'>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Read</button>
        </Link>

        <Link to = '/inspectorlayout/incidentform1'>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Update</button>
        </Link>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
      </div>
    </div>
  );
};

export default AdminPanel;
