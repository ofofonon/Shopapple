import { useState } from "react";

export default function ModalWaitlist2() {
  const [open, setOpen] = useState(false);
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setErrorMessage("");
  
    try {
      const res = await fetch(
        "https://afrivate-backend.onrender.com/waitlist/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.detail || data.message || "Request failed");
      }
  
      setSuccessMessage(data.message);
      setName("");
      setEmail("");
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {/* Button to open modal */}
      <button
        className="w-[50%] py-6 bg-white text-[#6A00B1] font-extrabold md:text-2xl text-sm rounded-full md:mt-10 mt-5"
        onClick={() => setOpen(true)}
      >
        
            Join Waitlist
          </button>
      

      {/* Background overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
      )}

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-[340px] sm:w-[380px] p-8 rounded-3xl shadow-xl backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-300 pb-[100px] ${
            open ? "scale-100" : "scale-95"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 bg-white px-[8px] py-[1px] rounded-full text-black text-lg font-bold hover:text-gray-300 text-purple-700 font-extrabold"
          >
            <i class="fa-solid fa-xmark font-extrabold text-black"></i>
          </button>

          {/* Title */}
          <h2 className="text-white text-center  text-lg font-bold mb-4 font-sans mt-[10px]">
            Input your Details for the Waitlist
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-white text-sm text-start ml-[-75%]">Name</label><br/>
              <input
               value={name}
               onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 outline-none border border-white/30"
                placeholder=""
              />
            </div>

            <div>
              <label className="text-white text-sm ml-[-75%]">Email</label><br/>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full mt-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 outline-none border border-white/30"
                placeholder=""
              />
            </div>

            <button className='w-full py-3 mt-2 bg-white text-purple-700 font-bold rounded-full font-extrabold font-montserrat   hover:bg-white/70
            ${
              loading || !name || !email
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-purple-700 "
            }'
            type="submit"
            disabled={loading || !name || !email}
            >
             {loading ? "Joining waitlist..." : "Join waitlist"}
            </button>

            {errorMessage && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      {/* Success message */}
      {successMessage && (
        <p className="text-sm text-white">{successMessage}</p>
      )}
          </form>
        </div>
      </div>
    </>
  );
}
