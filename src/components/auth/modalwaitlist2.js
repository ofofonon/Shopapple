import { useState } from "react";

export default function ModalWaitlist2() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(
        "https://afrivate-backend-production.up.railway.app/api/waitlist/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
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
      setShowSuccessPopup(true);
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
          className={`relative w-[21.25rem] sm:w-[23.75rem] p-8 rounded-3xl shadow-xl backdrop-blur-xl bg-white/10 border border-white/20 transition-all duration-300 pb-[6.25rem] ${
            open ? "scale-100" : "scale-95"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 bg-white px-[0.5rem] py-[0.0625rem] rounded-full text-black text-lg font-bold hover:text-gray-300 text-purple-700 font-extrabold"
          >
            <i className="fa-solid fa-xmark font-extrabold text-black"></i>
          </button>

          {/* Title */}
          <h2 className="text-white text-center text-lg font-bold mb-4 font-sans mt-[0.625rem]">
            Input your Details for the Waitlist
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-white text-sm text-start ml-[-75%]">
                Name
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 outline-none border border-white/30"
              />
            </div>

            <div>
              <label className="text-white text-sm ml-[-75%]">Email</label>
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full mt-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder-gray-200 outline-none border border-white/30"
              />
            </div>

            <button
              className={`w-full py-3 mt-2 bg-white text-purple-700 font-bold rounded-full font-extrabold font-montserrat hover:bg-white/70 ${
                loading || !name || !email
                  ? "bg-gray-400 cursor-not-allowed"
                  : ""
              }`}
              type="submit"
              disabled={loading || !name || !email}
            >
              {loading ? "Joining waitlist..." : "Join waitlist"}
            </button>

            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </form>

          {/* SUCCESS POPUP */}
          {showSuccessPopup && (
            <div className="absolute inset-0 flex rounded-[0.9375rem] items-center justify-center bg-black/70 backdrop-blur-sm rounded-3xl z-50">
              <div className="bg-white text-[#200035] p-6 rounded-2xl w-[85%] text-center shadow-xl">
                <h3 className="font-extrabold text-lg mb-2">Success 🎉</h3>
                <p className="text-sm mb-4">{successMessage}</p>

                <button
                  className="bg-purple-700 text-white px-6 py-2 rounded-full font-bold"
                  onClick={() => {
                    setShowSuccessPopup(false);
                    setOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
