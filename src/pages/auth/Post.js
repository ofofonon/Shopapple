import React, { useState } from 'react';
import NavBar from '../../components/auth/Navbar';

const CreateOpportunity = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    time: "",
    category: "",
    salary: "",
    others: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    setError(""); // Clear any existing errors
    if (step === 1 && (!formData.title || !formData.description)) {
      setError("Please fill in all fields before proceeding.");
      return false;
    }
    if (step === 2 && (!formData.requirements || !formData.location || !formData.time)) {
      setError("Please complete all fields in this step.");
      return false;
    }
    if (step === 3 && (!formData.category || !formData.salary)) {
      setError("Please fill all required fields before posting.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 3) setStep(step + 1);
      else alert("Opportunity posted successfully!");
    }
  };

  const steps = [1, 2, 3];

  return (
    <div className="min-h-screen bg-gray-50 ">
        <NavBar />
        <div className="flex items-center justify-center px-3 mt-12 font-sans">
        

        <div className="bg-white shadow-md rounded-3xl p-[8%] pt-8  w-full max-w-2xl text-center">
          <h1 className="text-3xl font-semibold mb-6">Create an Opportunity</h1>
  
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-6">
            {steps.map((num, i) => (
              <React.Fragment key={num}>
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                    step === num
                      ? "bg-[#6A00B1] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-20 h-[2px] ${
                      step > num ? "bg-purple-700" : "bg-gray-300"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
  
          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">
                  Opportunity Title
                </label>
                <input
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">
                  Opportunity Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                  rows="3"
                />
              </div>
              <div className='flex w-full'>
              <button
                onClick={handleNext}
                className="w-[50%] bg-[#6A00B1] text-white py-2 rounded-xl font-semibold mt-2 ml-auto"
              >
                Proceed
              </button>
              </div>
            </div>
          )}
  
          {step === 2 && (
            <div className="space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">
                  Specific Requirements and Benefits
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                  rows="3"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                >
                  <option value="">Select</option>
                  <option>Remote</option>
                  <option>On-site</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">
                  Time Commitment
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-3 py-2 text-sm"
                >
                  <option value="">Select</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Flexible</option>
                </select>
              </div>
              <div className='flex w-full'>
              <button
                onClick={handleNext}
                className="w-[50%] bg-[#6A00B1] text-white py-2 rounded-xl font-semibold mt-2 ml-auto"
              >
                Proceed
              </button>
              </div>
            </div>
          )}
  
          {step === 3 && (
            <div className="space-y-4">
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  <option value="">Select</option>
                  <option>Tech</option>
                  <option>Design</option>
                  <option>Business</option>
                </select>
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">
                  Salary or Stipends
                </label>
                <input
                  name="salary"
                  type="text"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium mb-1">Others</label>
                <textarea
                  name="others"
                  value={formData.others}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  rows="2"
                />
              </div>
              <div className='flex w-full'>
              <button
                onClick={handleNext}
                className="w-[50%] bg-[#6A00B1] text-white py-2 rounded-xl font-semibold mt-2 ml-auto"
              >
                Post
              </button>
              </div>
            </div>
          )}
  
          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateOpportunity;
