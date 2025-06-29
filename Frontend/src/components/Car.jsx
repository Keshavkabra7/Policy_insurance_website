import React from 'react';

const CarLink = () => {
  return (
    <a href="link-to-your-car-page" className="block w-32 mx-auto mt-4">
      <img src="/path/to/car.png" alt="Car" className="w-full h-auto rounded-lg shadow-md hover:opacity-80" />
    </a>
  );
};

export default CarLink;
