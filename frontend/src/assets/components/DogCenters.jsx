import React from 'react';
import AdoptionCenter from './AdoptionCenter';
import happyTailsImg from '../help_pet_logo.png';
import pawsClawsImg from '../help_pet_logo.png';
import furryFriendsImg from '../help_pet_logo.png';

const centers = [
  {
    name: 'Happy Tails Rescue',
    image: happyTailsImg,
    contact: '123-456-7890',
    breed: 'Labrador Retriever',
    location: 'New York, NY',
  },
  {
    name: 'Paws & Claws Shelter',
    image: pawsClawsImg,
    contact: '987-654-3210',
    breed: 'German Shepherd',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Furry Friends Adoption',
    image: furryFriendsImg,
    contact: '555-123-4567',
    breed: 'Golden Retriever',
    location: 'Chicago, IL',
  },
  {
    name: 'Happy Tails Rescue',
    image: happyTailsImg,
    contact: '123-456-7890',
    breed: 'Labrador Retriever',
    location: 'New York, NY',
  },
  {
    name: 'Paws & Claws Shelter',
    image: pawsClawsImg,
    contact: '987-654-3210',
    breed: 'German Shepherd',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Furry Friends Adoption',
    image: furryFriendsImg,
    contact: '555-123-4567',
    breed: 'Golden Retriever',
    location: 'Chicago, IL',
  },
  {
    name: 'Happy Tails Rescue',
    image: happyTailsImg,
    contact: '123-456-7890',
    breed: 'Labrador Retriever',
    location: 'New York, NY',
  },
  {
    name: 'Paws & Claws Shelter',
    image: pawsClawsImg,
    contact: '987-654-3210',
    breed: 'German Shepherd',
    location: 'Los Angeles, CA',
  },
  {
    name: 'Furry Friends Adoption',
    image: furryFriendsImg,
    contact: '555-123-4567',
    breed: 'Golden Retriever',
    location: 'Chicago, IL',
  },
];

const DogAdoptionCenters = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Dog Adoption Centers</h1>
      <div className="flex flex-wrap justify-center">
        {centers.map((center, index) => (
          <AdoptionCenter key={index} center={center} />
        ))}
      </div>
    </div>
  );
};

export default DogAdoptionCenters;
