import React from 'react';
import { Link } from 'react-router-dom';

const LoginBoxes = () => {
  return (
    <div className='min-h-screen'>
    <div className="container mx-auto mt-8 flex justify-center">
      {/* Consumer Login */}
      <div className="w-1/3 p-8 border border-gray-300 rounded-lg mr-4">
  <h2 className="text-xl font-semibold mb-4">Customer</h2>
  <p className="text-gray-600 mb-4">Login as an customer .</p>
  <div className="flex flex-col space-y-4">
    <Link to="/customer/login">
      <a href="/customer/login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</a>
    </Link>
    <Link to="/customer/signup">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Sign Up
      </button>
    </Link>
  </div>
</div>


      {/* Insurance Agent Login */}
      <div className="w-1/3 p-8 border border-gray-300 rounded-lg mr-4">
  <h2 className="text-xl font-semibold mb-4">Insurance Agent</h2>
  <p className="text-gray-600 mb-4">Login as an insurance agent to manage  your clients.</p>
  <div className="flex flex-col space-y-4">
    <Link to="/agent/login">
      <a href="/agent/login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</a>
    </Link>
    <Link to="/agent/signup">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Sign Up
        
      </button>
    </Link>
  </div>
</div>

      {/* Damage Inspector Login */}
      <div className="w-1/3 p-8 border border-gray-300 rounded-lg mr-4">
  <h2 className="text-xl font-semibold mb-4">Damage inspector</h2>
  <p className="text-gray-600 mb-4">Login as an Damage inspector agent to manage reports incident of your clients.</p>
  <div className="flex flex-col space-y-4">
    <Link to="/inspector/login">
      <a href="/inspector/login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</a>
    </Link>
    <Link to="/inspector/signup">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Sign Up
      </button>
    </Link>
  </div>
</div>
    </div>

    </div>
  );
};

export default LoginBoxes;
