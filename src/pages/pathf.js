import React, { useState } from "react";
import NavBar from "../components/auth/Navbar";

const RecommendedPathfinders = () => {
  // Mock "database"
  const pathfinderData = {
    topMatches: [
      {
        name: "Carmela Fisher",
        experience: "5 years in non-profit sector",
        skills: "Management, Communication, Leadership",
        match: 90,
      },
      {
        name: "John Wick",
        experience: "3 years in youth development",
        skills: "Community Outreach, Event Planning, Fundraising",
        match: 85,
      },
      {
        name: "Joshua Komolafe",
        experience: "4 years in Social Impact",
        skills: "Data Analysis, Reporting, Strategic Planning",
        match: 82,
      },
    ],
    otherMatches: [
      {
        name: "Jason Williams",
        experience: "2 years in Digital Marketing",
        skills: "Content Creation, Social Media Marketing",
        match: 50,
      },
      {
        name: "James Anderson",
        experience: "6 years in Public Policy",
        skills: "Research, Policy Analysis, Advocacy",
        match: 20,
      },
    ],
  };

  const [search, setSearch] = useState("");

  const filterPathfinders = (list) =>
    list.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  const renderCard = (pathfinder, index) => (
    <div
      key={index}
      className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-4 shadow-sm hover:shadow-md transition-all"
    >
      {/* Left section: Profile info */}
      <div className="flex items-center gap-4 w-full sm:w-[60%]">
        <div className="bg-gray-200 rounded-full h-12 w-12 sm:h-14 sm:w-14"></div>
        <div>
          <h3 className="text-gray-900 font-semibold text-base sm:text-lg">
            {pathfinder.name}
          </h3>
          <p className="text-gray-600 text-sm">
            Experience: {pathfinder.experience}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Skills: {pathfinder.skills}
          </p>
        </div>
      </div>

      {/* Right section: Match progress + buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 sm:mt-0">
        <div className="flex items-center gap-2 w-[120px]">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${pathfinder.match}%` }}
            ></div>
          </div>
          <span className="text-gray-700 text-sm font-medium">
            {pathfinder.match}%
          </span>
        </div>

        <div className="flex gap-2">
          <button className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-purple-200 transition-all">
            View Profile
          </button>
          <button className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-purple-700 transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen ">
        <NavBar />
        <div className="bg-gray-50 flex flex-col items-center font-sans px-4 sm:px-8 md:px-12 ">
        
      <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900 mb-6  sm:text-left mt-7">
        Recommended Pathfinders
      </h1>

      {/* Search bar */}
      <div className="w-full max-w-4xl mb-6">
        <input
          type="text"
          placeholder="Search pathfinders"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="w-full max-w-4xl">
        {/* Top Matches */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          Top Matches
        </h2>
        {filterPathfinders(pathfinderData.topMatches).map(renderCard)}

        {/* Other Matches */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-8 mb-4">
          Other Matches
        </h2>
        {filterPathfinders(pathfinderData.otherMatches).map(renderCard)}
      </div>
    </div>
    </div>
  );
};

export default RecommendedPathfinders;
