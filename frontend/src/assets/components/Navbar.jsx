import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaPaw } from "react-icons/fa";
import { useState } from "react";
import Image from "../help_pet_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-customBlue to-customButton py-2 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={Image} alt="logo" className="w-10 h-10" />
          <h1 className="text-white text-2xl font-bold ml-2">Help a pet</h1>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white font-semibold hover:text-indigo-900 flex items-center">
                <FaHome className="mr-1" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/adoption" className="text-white font-semibold hover:text-indigo-900 flex items-center">
                <FaPaw className="mr-1" />
                Adoption
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-customBlue to-customGreen">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="text-white hover:text-indigo-900 font-semibold flex items-center" onClick={toggleMenu}>
                <FaHome className="mr-1" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/adoption" className="text-white hover:text-indigo-900 font-semibold flex items-center" onClick={toggleMenu}>
                <FaPaw className="mr-1" />
                Adoption
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
