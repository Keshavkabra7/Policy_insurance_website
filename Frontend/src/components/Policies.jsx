import React from 'react';
//import './styles.css'; // Import your Tailwind CSS file here

const Policies = () => {
  const carPolicies = [
    {
      id: 1111101,
      policyName: 'Bajaj car insurance cover1',
      description: [
        'This policy provides coverage for damage to your own vehicle caused by accidents, theft, vandalism, natural disasters, and other unforeseen events. It offers extensive protection beyond just collisions, giving you peace of mind on the road.',
        'PIP covers medical expenses, lost wages, and other accident-related costs for you and your passengers, regardless of fault. It\'s especially beneficial for covering immediate medical needs and ensuring financial stability after an injury.'
      ],
      type: '1st person',
      pricing: '9999rs per year'
    },
    {
      id: 1111102,
      policyName: 'Bajaj car insurance cover2',
      description: 'This policy covers damages and injuries you cause to other people and their property in an accident. It\'s essential for meeting legal requirements and protecting your financial assets from lawsuits if you\'re at fault in a collision.',
      type: '3rd party',
      pricing: '2499rs per year'
    }
  ];

  const bikePolicies = [
    {
      id: 1111201,
      policyName: 'Bajaj Bike insurance cover1',
      description: 'This policy provides comprehensive protection for your motorcycle against various risks, including accidents, theft, vandalism, natural disasters, and more. It ensures that you\'re financially covered for damages to your bike in a wide range of situations.',
      type: '1st person',
      pricing: '1999rs per year'
    },
    {
      id: 1111202,
      policyName: 'Bajaj Bike insurance cover2',
      description: 'This policy covers the costs of damages and injuries you cause to others and their property while riding your motorcycle. It\'s essential for meeting legal requirements and protecting yourself from financial liabilities in case of accidents.',
      type: '3rd party',
      pricing: '799rs per year'
    }
  ];

  const truckPolicies = [
    {
      id: 1111301,
      policyName: 'Mobility Truck insurance',
      description: [
        'This policy provides comprehensive protection for your truck against various risks, including accidents, theft, vandalism, natural disasters, and more. It ensures that you\'re financially covered for damages to your truck in a wide range of situations.',
        'This policy covers the costs of damages and injuries you cause to others and their property while driving your truck. It\'s essential for meeting legal requirements and protecting yourself from financial liabilities in case of accidents.'
      ],
      type: '1st person',
      pricing: '14999rs per year'
    }
  ];

  return (
    <div className="container mx-auto m-4">
      <h1 className="text-2xl font-bold mb-4">Insurance Policies</h1>

      {/* Car Policies Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Car Policies</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">ID</th>
              <th className="border border-gray-200 px-4 py-2">Policy Name</th>
              <th className="border border-gray-200 px-4 py-2">Description</th>
              <th className="border border-gray-200 px-4 py-2">Type</th>
              <th className="border border-gray-200 px-4 py-2">Pricing</th>
              {/* <th className="border border-gray-200 px-4 py-2">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {carPolicies.map(policy => (
              <tr key={policy.id}>
                <td className="border border-gray-200 px-4 py-2">{policy.id}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.policyName}</td>
                <td className="border border-gray-200 px-4 py-2">{Array.isArray(policy.description) ? policy.description.map((desc, index) => <p key={index}>{desc}</p>) : policy.description}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.type}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.pricing}</td>
                {/* <td className="border border-gray-200 px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">File a claim</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bike Policies Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Bike Policies</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">ID</th>
              <th className="border border-gray-200 px-4 py-2">Policy Name</th>
              <th className="border border-gray-200 px-4 py-2">Description</th>
              <th className="border border-gray-200 px-4 py-2">Type</th>
              <th className="border border-gray-200 px-4 py-2">Pricing</th>
              {/* <th className="border border-gray-200 px-4 py-2">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {bikePolicies.map(policy => (
              <tr key={policy.id}>
                <td className="border border-gray-200 px-4 py-2">{policy.id}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.policyName}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.description}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.type}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.pricing}</td>
                {/* <td className="border border-gray-200 px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">File a claim</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Truck Policies Table */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Truck Policies</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">ID</th>
              <th className="border border-gray-200 px-4 py-2">Policy Name</th>
              <th className="border border-gray-200 px-4 py-2">Description</th>
              <th className="border border-gray-200 px-4 py-2">Type</th>
              <th className="border border-gray-200 px-4 py-2">Pricing</th>
              {/* <th className="border border-gray-200 px-4 py-2">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {truckPolicies.map(policy => (
              <tr key={policy.id}>
                <td className="border border-gray-200 px-4 py-2">{policy.id}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.policyName}</td>
                <td className="border border-gray-200 px-4 py-2">{Array.isArray(policy.description) ? policy.description.map((desc, index) => <p key={index}>{desc}</p>) : policy.description}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.type}</td>
                <td className="border border-gray-200 px-4 py-2">{policy.pricing}</td>
                {/* <td className="border border-gray-200 px-4 py-2"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">File a claim</button></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Policies;
