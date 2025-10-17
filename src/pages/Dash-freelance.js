import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Volunteer from '../Assets/volunteer.png';
import Job from '../Assets/job.png';
import Learning from '../Assets/learning.png';
import Aiicon from '../Assets/Vector (2).png';
import Aiassist from '../Assets/Group 267.png';
import NavBar from '../components/auth/Navbar';


const DashF = () => {
  const jobs = [
    { id: 1, title: "UI/UX Designer", type: "Remote", location: "New York, USA" },
    { id: 2, title: "Product Designer", type: "Remote", location: "California, USA" },
    { id: 3, title: "Frontend Developer", type: "Hybrid", location: "Lagos, Nigeria" },
    { id: 4, title: "Backend Engineer", type: "Remote", location: "Berlin, Germany" },
    { id: 5, title: "Project Manager", type: "On-site", location: "London, UK" },
  ];


  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] hero-bg">
      
     
      <NavBar />


      <div
        className={`fixed top-0 left-0 h-full w-[270px] rounded-tr-3xl rounded-br-3xl bg-[#FAFAFA] shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <div className=" px-3 py-5">
          <div className="w-[50px] h-[50px] bg-gray-300 ml-[40%] rounded-full">

          </div >
          <p className="font-sans text-xl text-black text-center mt-[13px] font-bold ">
            Joshua
          </p>
          <p className="font-sans text-sm text-[#797979] text-center">Product Designer</p>
          </div>

          <div className="   mr-[5%]">
          <ul className="p-4 space-y-5 text-sm  text-black font-medium font-sans">

          <Link to="/" > <li className="bg-white  w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 m-3"><i class="fas fa-house pr-4 pl-2 m-2"></i>
          Home</li></Link>
          <Link to="#" > <li className="bg-white  w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 m-3"><i class="fas  fa-users pr-4 pl-2 m-2"></i>
          Community</li></Link>
          <Link to="#" > <li className="bg-white  w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 m-3"><i class="fas fa-school pr-4 pl-2 m-2"></i>
         Learning</li></Link>
          <Link to="#" > <li className="bg-white  w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 m-3"><i class="fas fa-dollar-sign pr-4 pl-2 m-2"></i>
          Wallet</li></Link>
          <Link to="#" > <li className="bg-white  w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 m-3"><i class="fas fa-wrench pr-4 pl-2 m-2"></i>
          Settings</li></Link>
          <Link to="#" > <li className="flex bg-white  w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300 m-3">
          <img src={Aiicon} alt="Ai" className="flex w-[15px] h-[15px] ml-4 mr-5 " />
          AI Assistant</li></Link>

          </ul>
          </div>
        </div>
        <Link to="/login">
        <button className=" w-[80%] bg-purple-900 mt-[50px] mb-3 text-white text-sm font-extrabold py-3  rounded-xl px-3 mx-3 ml-[10%]">
            Log in        
        </button>
        </Link>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}










      
      <div className="text-center mt-12 md:mt-28 lg:mt-24">
        <p className="text-[#6A00B1] font-sans text-4xl md:text-6xl font-bold">Welcome, Joshua!</p>
        <p className="text-[#7E7E7E] mt-3 md:mt-5 text-base md:text-lg">Let’s Find your next opportunity</p>
      </div>

      
      <div className="relative w-[90%] md:w-[60%] mx-auto mt-6">
        <i className="fa fa-search text-lg absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input
          type="text"
          placeholder="Search opportunities..."
          className="w-full pl-10 pr-4 py-2 font-montserrat border border-[#E9E9E9] rounded-2xl 
                     focus:outline-none focus:ring-2 focus:ring-[#6A00B1] text-sm md:text-base"
        />
      </div>

      
      <div className="w-[90%] md:w-[80%] mx-auto rounded-2xl p-6 md:p-12 font-montserrat mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { label: "Active Applications", value: "10", note: "You have 10 Active Applications" },
            { label: "Learning Progress", value: "2", note: "You have completed 2 courses" },
            { label: "Wallet Balance", value: "$20,000", note: "Tap to view balance" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border-[1px] border-[#E9E9E9]">
              <p className="text-[#6A00B1] font-semibold">{item.label}</p>
              <div className="flex items-center mt-2">
                <p className="text-[#6A00B1] font-black text-2xl">{item.value}</p>
                <button className="text-white bg-[#6A00B1] px-4 rounded-lg ml-auto py-2">View</button>
              </div>
              <p className="text-sm text-[#BDBDBD] mt-2">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

     
      <p className="font-montserrat font-black text-[#6A00B1] text-center text-xl md:text-2xl mt-4">Discover your Path</p>

      <div className="w-[90%] md:w-[80%] mx-auto rounded-2xl p-6 md:p-12 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[ 
            { img: Volunteer, title: "Volunteering", desc: "Explore volunteering opportunities" },
            { img: Job, title: "Job", desc: "Find your dream Job" },
            { img: Learning, title: "Learning", desc: "Continue your learning Journey" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-3 rounded-3xl shadow-sm border-[2px] border-[#E9E9E9]">
              <img src={item.img} alt={item.title} className="w-[80%] md:w-[90%] mx-auto" />
              <p className="font-black text-[#6A00B1] ml-5 mt-2 text-lg">{item.title}</p>
              <p className="text-[#BCBCBC] ml-5 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Recommendations ===== */}
      <p className="font-montserrat font-black text-[#6A00B1] text-center text-xl md:text-2xl mt-4 mb-8">
        Recommendations
      </p>

      <div className="flex flex-col gap-4 p-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row w-[90%] md:w-[70%] mx-auto justify-between 
                       items-start md:items-center bg-white border border-gray-200 rounded-2xl 
                       px-4 py-5 shadow-sm hover:shadow-md transition-shadow duration-300 font-montserrat"
          >
            {/* Left */}
            <div className="flex items-start md:items-center gap-4 md:gap-5">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <h3 className="font-semibold text-lg md:text-2xl text-gray-900">{job.title}</h3>
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 text-sm">
                  <span className="text-red-500 font-medium">{job.type}</span>
                  <span className="text-gray-500">{job.location}</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <button className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-5 py-2 
                               rounded-xl font-medium mt-3 md:mt-0 self-end md:self-auto">
              View
            </button>
          </div>
        ))}
      </div>


      <img src={Aiassist} alt="ai assistant" className="fixed top-[80%] left-[76%]  lg:left-[83%] z-50 w-[20%] lg:w-[7%]" />

      
    </div>
  );
};

export default DashF;
