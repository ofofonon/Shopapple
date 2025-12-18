import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../Assets/Vector (1).png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
  className={`bg-black/5 backdrop-blur-xl border border-white/20 font-sans fixed top-[15px] left-[4%] z-20 px-4 md:px-8 h-[75px] md:h-[80px] py-2 md:py-5 flex flex-col md:flex-row gap-6 md:gap-0 w-[92%] transition-all duration-500 rounded-full `}
>
  
        <div className="flex items-center w-[100%] ">
          <img
            src={logoImg}
            alt="Afrivate"
            className="sm:h-8 h-8 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:pl-10"
          />
          <span className="ml-0 sm:text-4xl lg:text-2xl font-poppins font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white ">
            Afrivate
          </span>
          
          <i
            className="flex ml-auto fa-solid fa-bars  md:text-3xl text-lg p-4 text-purple-100 cursor-pointer  "
            onClick={() => setIsOpen(true)}
          ></i>
        </div>

       

        
      </nav>

      <div
        className={`fixed  top-0 mt-2  p-3  w-[270px] rounded-3xl  bg-black/5 backdrop-blur-xl border border-white/20 shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="">
         

          <div className="w-full ">
            <ul className="p-4 space-y-5 text-sm text-white font-medium font-sans">
              <Link to="/">
                <li className="bg-white/50 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mb-5">
                  <i className="fa-solid fa-house pr-4 pl-2 m-2"></i>
                  Home
                </li>
              </Link>
              <Link to="/whyf">
                <li className="bg-white/50 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mb-5">
                  <i className="fa-solid fa-user pr-4 pl-2 m-2"></i>
                  About us
                </li>
              </Link>
              <Link to="/contact">
                <li className="bg-white/50 w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 mb-5">
                  <i className="fa-solid fa-comment pr-4 pl-2 m-2"></i>
                  Contact
                </li>
              </Link>
              
            </ul>
          </div>
        </div>
        
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NavBar;
