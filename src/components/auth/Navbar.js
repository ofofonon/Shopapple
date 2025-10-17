import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile_pic from '../../Assets/Ellipse 148.png';
import Aiicon from '../../Assets/Vector (2).png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed font-sans navbar-bg bg-[#FAFAFA] sticky top-0 z-20 px-4 py-2 
                      flex flex-col md:flex-row gap-4 md:gap-0 w-full shadow-[0_8px_5px_#D4D4D4]">
        <div className="flex items-center justify-between w-full md:w-auto">
          <i
            className="fa-solid fa-bars text-xl font-bold pl-3 cursor-pointer"
            onClick={() => setIsOpen(true)}
          ></i>
          <i className="fa-regular fa-house text-xl pl-5 font-bold md:flex"></i>
          <div className="flex items-center gap-4 ml-auto md:hidden">
            <i className="fa-regular fa-bell text-xl"></i>
            <img src={Profile_pic} alt="Profile" className="w-[35px] h-[35px]" />
          </div>
        </div>

        <div className="hidden md:flex ml-auto items-center">
          <i className="fa-regular fa-bell text-2xl mr-6"></i>
          <img src={Profile_pic} alt="Profile" className="w-[35px] h-[35px]" />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[270px] rounded-tr-3xl rounded-br-3xl bg-[#FAFAFA] shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="px-3 py-5 text-center">
            <div className="w-[50px] h-[50px] bg-gray-300 mx-auto rounded-full"></div>
            <p className="font-sans text-xl text-black mt-3 font-bold">Joshua</p>
            <p className="font-sans text-sm text-[#797979]">Product Designer</p>
          </div>

          <ul className="p-4 space-y-5 text-sm text-black font-medium font-sans">
            <Link to="/">
              <li className="bg-white py-2 px-3 rounded-xl hover:bg-gray-300 flex items-center gap-3 m-2">
                <i className="fas fa-house"></i> Home
              </li>
            </Link>
            <Link to="/community">
              <li className="bg-white py-2 px-3 rounded-xl hover:bg-gray-300 flex items-center gap-3 m-2">
                <i className="fas fa-users"></i> Community
              </li>
            </Link>
            <Link to="/road">
              <li className="bg-white py-2 px-3 rounded-xl hover:bg-gray-300 flex items-center gap-3 m-2">
                <i className="fas fa-school"></i> Learning
              </li>
            </Link>
            <Link to="#">
              <li className="bg-white py-2 px-3 rounded-xl hover:bg-gray-300 flex items-center gap-3 m-2">
                <i className="fas fa-dollar-sign"></i> Wallet
              </li>
            </Link>
            <Link to="#">
              <li className="bg-white py-2 px-3 rounded-xl hover:bg-gray-300 flex items-center gap-3 m-2">
                <i className="fas fa-wrench"></i> Settings
              </li>
            </Link>
            <Link to="/discover">
              <li className="bg-white py-2 px-3 rounded-xl hover:bg-gray-300 flex items-center gap-3">
                <img src={Aiicon} alt="Ai" className="w-[15px] h-[15px]" /> AI Assistant
              </li>
            </Link>
          </ul>

          <Link to="/login">
            <button className="w-[80%] bg-purple-900 mt-10 mb-3 text-white text-sm font-extrabold py-3 rounded-xl mx-auto block">
              Log in
            </button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 "
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
