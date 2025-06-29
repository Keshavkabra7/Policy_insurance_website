import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPage = () => {
  return (
    <div className="container mx-auto mt-10 flex justify-center items-center">
      <div className="space-x-4">
        <Link to = '/userlayout/memberform'>       
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
        </Link>

        <Link to ='/userlayout/memberpage'>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Read
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonPage;
