import { useEffect } from 'react';
import bgImg from '../Assets/Desktop - 16.png';
import logoImg from '../Assets/Vector.png';
import NavBar from '../components/auth/Navbar'


export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);
  return (
    <div className="relative min-h-screen text-white overflow-hidden font-sans">
      {/* Background image */}
      <img
        src={bgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />
      <div className="absolute inset-0 bg-[#0f0122]/55" />

      {/* Top bar (same style as other page) */}
      <NavBar />

      <main className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {/* Title */}
          <section className="text-center mt-[120px] ">
            <h1 className="text-[26px]  md:text-[30px] font-extrabold">Contact Us</h1>
            <p className="mt-2 text-white/85 text-xs ">
              Please reach out to us, we want to hear from you
            </p>
          </section>

          {/* Card */}
          <section className="mt-8 flex justify-center">
            {/* Responsive scale wrapper to reduce overall size on desktop */}
            <div className="w-full flex">
              {/* Frame 454 */}
              <div className="relative md:w-[73%] w-[100%] md:h-[851px] h-[721px] md:rounded-[50px] rounded-[30px] bg-white/15 border border-white/20 backdrop-blur-2xl shadow-[0_10px_80px_rgba(153,0,255,0.2)] md:ml-[13.5%]">
              {/* Contact Information */}
              <h2 className="absolute md:left-[50px] left-[24%] md:top-[60px] top-[30px] text-white md:text-[24px] text-lg leading-[29px] font-extrabold">
                Contact Information
              </h2>

              {/* Email pill with icon */}
              <div className="absolute md:left-[50px] left-[5%] md:top-[117px] top-[77px] md:w-[60px] md:h-[60px] rounded-[15px] p-3 bg-white/50 border border-white/30 grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-.25a.75.75 0 0 0-.75.75v.24l7 4.2 7-4.2V7.25a.75.75 0 0 0-.75-.75H5.75Zm14.5 3.2-6.47 3.88a1.75 1.75 0 0 1-1.76 0L5.5 9.7v7.55c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V9.7Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <span className="absolute md:left-[126px] left-[24%] md:top-[135px] top-[90px] text-white md:text-[20px] text-xs leading-[24px]">
                afrivatetech@gmail.com
              </span>

              {/* Labels */}
              <label htmlFor="name" className="absolute md:left-[50px] left-[10%] md:top-[229px] top-[139px] text-white font-extrabold md:text-[16px] text-xs leading-[19px]">
                Name
              </label>
              <label htmlFor="email" className="absolute md:left-[50px] left-[10%] md:top-[349px] top-[259px] text-white font-extrabold md:text-[16px] text-xs leading-[19px]">
                Email
              </label>
              <label htmlFor="message" className="absolute md:left-[50px] left-[10%] md:top-[469px] top-[379px] text-white font-extrabold md:text-[16px] text-xs leading-[19px]">
                Your Message
              </label>

              {/* Inputs */}
              <input
                id="name"
                type="text"
                className="absolute md:left-[50px] left-[5%] md:top-[258px] top-[168px] md:w-[85%] h-[60px] rounded-[15px] bg-white/50 border border-white/40 px-4 text-[#0F0122] outline-none w-[90%]"
              />
              <input
                id="email"
                type="email"
                className="absolute md:left-[50px] left-[5%] md:top-[378px] top-[288px] md:w-[85%] w-[90%] h-[60px] rounded-[15px] bg-white/50 border border-white/40 px-4 text-[#0F0122] outline-none"
              />
              <textarea
                id="message"
                className="absolute w-[90%] md:left-[50px] left-[5%] md:top-[498px] top-[408px] md:w-[85%] h-[120px] rounded-[30px] bg-white/50 border border-white/40 px-4 py-3 text-[#0F0122] outline-none resize-none overflow-hidden"
              />

              {/* CTA button - Frame 452 */}
              <button
                type="button"
                className="absolute md:left-[86px] left-[5%] md:top-[678px] top-[560px] md:w-[548px] w-[90%] md:h-[89px] rounded-[50px] p-4 bg-white text-[#6A00B1] font-bold font-montserrat md:text-[24px] text-lg leading-[29px] grid place-items-center"
                style={{ boxShadow: '0 18px 50px -12px rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.85)' }}
              >
                Get in Touch
              </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}


