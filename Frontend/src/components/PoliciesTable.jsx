import React from 'react';
import { Link } from 'react-router-dom';

function InsuranceTable() {
  const carPolicies = [
    {
      id: 1111101,
      policyName: 'Bajaj car insurance cover1',
      description: ['This policy provides coverage for damage to your own vehicle caused by accidents, theft, vandalism, natural disasters, and other unforeseen events. It offers extensive protection beyond just collisions, giving you peace of mind on the road.', "PIP covers medical expenses, lost wages, and other accident-related costs for you and your passengers, regardless of fault. It's especially beneficial for covering immediate medical needs and ensuring financial stability after an injury"],
      type: '1st person',
      pricing: 9999
    },
    {
      id: 1111102,
      policyName: 'Bajaj car insurance cover2',
      description: 'This policy covers damages and injuries you cause to other people and their property in an accident. It\'s essential for meeting legal requirements and protecting your financial assets from lawsuits if you\'re at fault in a collision.',
      type: '3rd party',
      pricing: 2499
    }
  ];

  const bikePolicies = [
    {
      id: 1111201,
      policyName: 'Bajaj Bike insurance cover1',
      description: 'This policy provides comprehensive protection for your motorcycle against various risks, including accidents, theft, vandalism, natural disasters, and more. It ensures that you\'re financially covered for damages to your bike in a wide range of situations.',
      type: '1st person',
      pricing: 1999
    },
    {
      id: 1111202,
      policyName: 'Bajaj Bike insurance cover2',
      description: 'This policy covers the costs of damages and injuries you cause to others and their property while riding your motorcycle. It\'s essential for meeting legal requirements and protecting yourself from financial liabilities in case of accidents.',
      type: '3rd party',
      pricing: 799
    }
  ];

  const truckPolicies = [
    {
      id: 1111301,
      policyName: 'Mobility truck insurance',
      description: ['This policy provides comprehensive protection for your truck against various risks, including accidents, theft, vandalism, natural disasters, and more. It ensures that you\'re financially covered for damages to your truck in a wide range of situations.', 'This policy covers the costs of damages and injuries you cause to others and their property while driving your truck. It\'s essential for meeting legal requirements and protecting yourself from financial liabilities in case of accidents.'],
      type: '1st person',
      pricing: 14999
    }
  ];

  return (
    <div className="flex flex-wrap justify-around">
      <div className="policy-container bg-gray-100 p-4 rounded-md m-4">
        <h2 className="text-xl font-semibold mb-4">Car Policies</h2>
        {carPolicies.map(policy => (
          <div key={policy.id} className="policy bg-white rounded-md shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{policy.policyName}</h3>
            <p className="mb-2">{Array.isArray(policy.description) ? policy.description.map((desc, index) => <span key={index}>{desc}<br /></span>) : policy.description}</p>
            <p className="mb-2">Type: {policy.type}</p>
            <p className="mb-2">Pricing: {policy.pricing} rs</p>
            <Link to='/vehicleform'>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Buy</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="policy-container bg-gray-100 p-4 rounded-md m-4">
        <h2 className="text-xl font-semibold mb-4">Bike Policies</h2>
        {bikePolicies.map(policy => (
          <div key={policy.id} className="policy bg-white rounded-md shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{policy.policyName}</h3>
            <p className="mb-2">{policy.description}</p>
            <p className="mb-2">Type: {policy.type}</p>
            <p className="mb-2">Pricing: {policy.pricing} rs</p>
            <Link to='/vehicleform'>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Buy</button>
            </Link>
          </div>
        ))}
      </div>

      <div className="policy-container bg-gray-100 p-4 rounded-md m-4">
        <h2 className="text-xl font-semibold mb-4">Truck Policies</h2>
        {truckPolicies.map(policy => (
          <div key={policy.id} className="policy bg-white rounded-md shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{policy.policyName}</h3>
            <p className="mb-2">{policy.description.map((desc, index) => <span key={index}>{desc}<br /></span>)}</p>
            <p className="mb-2">Type: {policy.type}</p>
            <p className="mb-2">Pricing: {policy.pricing} rs</p>
            <Link to='/vehicleform'>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Buy</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsuranceTable;
