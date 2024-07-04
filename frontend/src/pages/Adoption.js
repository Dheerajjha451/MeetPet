import React from "react";
import Navbar from "../assets/components/Navbar";
import DogAdoptionCenters from "../assets/components/DogCenters";
import Footer from "../assets/components/Footer";

export default function Adoption() {
  return (
    <div className="bg-customBg flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-grow my-20">
      <DogAdoptionCenters/>
      </div>
      <Footer/>
    </div>
);
}
