import React from 'react';

const AdoptionCenter = ({ center }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={center.image} alt={center.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{center.name}</div>
        <p className="text-gray-700 text-base">
          <strong>Contact:</strong> {center.contact}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Breed:</strong> {center.breed}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Location:</strong> {center.location}
        </p>
      </div>
    </div>
  );
};

export default AdoptionCenter;
