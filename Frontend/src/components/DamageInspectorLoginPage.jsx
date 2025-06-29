import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DamageInspectorLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
    console.warn(username, password);
    let result=  await fetch('/api//inspector/login',{
      method: 'post',
      body: JSON.stringify({ username,  password}),
      headers:{
        'Content-Type' : 'application/json'
      },
    })

  
    if (result.ok) {
      const data = await result.json();
      localStorage.setItem('user', JSON.stringify(data))  ;
     
      navigate(`/inspectorlayout`);
    }
    
    else {
      setUsername('')
      setPassword('')
      alert("invalid details ")
    }
  };


  return (
    <div className="container mx-auto mt-8 min-h-screen justify-items-center" >
      <h1 className="text-2xl font-bold mb-4">Damage inspector </h1>
      <form onSubmit={handleSubmit} className="max-w-sm">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
       
      </form>
    </div>
  );
};

export default DamageInspectorLoginPage;
