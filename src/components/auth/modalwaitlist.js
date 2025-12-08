import { useState } from "react";

export default function ModalWaitlist() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        className="md:text-base text-sm bg-[#A559FF] py-4 w-[88%] md:w-[35%] rounded-full font-extrabold font-montserrat mt-6"
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
            <i class="fa-solid fa-xmark font-extrabold"></i>
          </button>

          {/* Title */}
          <h2 className="text-white text-center  text-lg font-bold mb-4 font-sans mt-[10px]">
            Input your Details for the Waitlist
          </h2>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-white text-sm text-start ml-[-75%]">Name</label><br/>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 outline-none border border-white/30"
                placeholder=""
              />
            </div>

            <div>
              <label className="text-white text-sm ml-[-75%]">Email</label><br/>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 outline-none border border-white/30"
                placeholder=""
              />
            </div>

            <button className="w-full py-3 mt-2 bg-white text-purple-700 font-bold rounded-full font-extrabold font-montserrat ">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
