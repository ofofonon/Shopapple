// src/App.jsx
import React, { useState } from "react";
import SlidersHorizontal from "../Assets/Vector (4).png"; 
import NavBar from '../components/auth/Navbar';

const opportunitiesDB = [
  // === JOBS ===
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Startup-Remote",
    category: "Jobs",
    button: "Apply",
  },
  {
    id: 2,
    title: "Cloud Engineer",
    company: "Tech Startup-Remote",
    category: "Jobs",
    button: "Apply",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Tech Startup-Remote",
    category: "Jobs",
    button: "Apply",
  },

  // === INTERNSHIPS ===
  {
    id: 4,
    title: "Frontend Developer Intern",
    company: "Creative Hub-Lagos",
    category: "Internships",
    button: "Apply",
  },
  {
    id: 5,
    title: "Backend Developer Intern",
    company: "Innovate Labs-Remote",
    category: "Internships",
    button: "Apply",
  },

  // === VOLUNTEER ===
  {
    id: 6,
    title: "Volunteer (Hardware Engineer)",
    company: "Local NGO-Accra",
    category: "Volunteer",
    button: "Learn More",
  },
  {
    id: 7,
    title: "Volunteer (UI/UX Designer)",
    company: "Local NGO-Remote",
    category: "Volunteer",
    button: "Learn More",
  },
];

const Opportunity = () => {
  const [activeFilter, setActiveFilter] = useState("Jobs");
  const [search, setSearch] = useState("");

  // logic: "Jobs" shows everything
  const filteredList = opportunitiesDB.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
    if (activeFilter === "Jobs") return matchSearch;
    return item.category === activeFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col items-center  font-sans">
        <NavBar />
     
      <h1 className="text-4xl font-bold text-black mb-4 w-full max-w-2xl mt-7 ml-6">
        Opportunities
      </h1>

      
      <div className="flex items-center justify-between w-full max-w-2xl mb-4">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 mx-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-3 mb-6 w-full max-w-2xl">
      <img src={SlidersHorizontal} alt="filter" className="  w-5 h-5 mt-1 ml-3" />
        {["Jobs", "Internships", "Volunteer"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1 rounded-xl text-sm font-medium ${
              activeFilter === cat
                ? "bg-[#6A00B1] text-white"
                : "bg-gray-100 text-[#6A00B1] hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="w-full max-w-2xl flex flex-col gap-3">
        {filteredList.map((item) => (
          <div
            key={item.id}
            className="items-center justify-between bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition mx-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
              <div>
                <h2 className="font-semibold text-gray-800">
                  {item.title}{" "}
                  {item.category === "Volunteer" && (
                    <span className="text-sm font-normal text-gray-500">
                      ({item.title.includes("(") ? "" : item.category})
                    </span>
                  )}
                </h2>
                <p className="text-sm text-gray-500">{item.company}</p>
              </div>
            </div>

            <button
              className={`px-4 py-1 ml-12  mt-2 rounded-md text-sm font-medium ${
                item.button === "Apply"
                  ? "bg-[#6A00B1] text-white hover:bg-purple-700"
                  : "bg-purple-100 text-[#6A00B1] hover:bg-purple-200"
              }`}
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredList.length === 0 && (
        <p className="text-gray-500 mt-6">No results found...</p>
      )}
    </div>
  );
}

export default Opportunity;
