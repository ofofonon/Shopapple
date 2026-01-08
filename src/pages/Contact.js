import { useEffect } from 'react';
import bgImg from '../Assets/Desktop - 16.png';
import logoImg from '../Assets/Vector.png';
import NavBar from '../components/auth/Navbar';
import Footer from '../components/auth/footer';


export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us';
  }, []);
  return (
    <div className="relative min-h-screen text-white overflow-hidden font-sans">
      {/* Background image */}
      <picture>
        <source
          type="image/webp"
          srcSet="/optimized/Desktop%20-%2016/Desktop%20-%2016-1280.webp 1280w, /optimized/Desktop%20-%2016/Desktop%20-%2016-1920.webp 1920w, /optimized/Desktop%20-%2016/Desktop%20-%2016-2560.webp 2560w"
          sizes="100vw"
        />
        <source
          type="image/png"
          srcSet="/optimized/Desktop%20-%2016/Desktop%20-%2016-1280.png 1280w, /optimized/Desktop%20-%2016/Desktop%20-%2016-1920.png 1920w, /optimized/Desktop%20-%2016/Desktop%20-%2016-2560.png 2560w"
          sizes="100vw"
        />
        <img
          src={bgImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          draggable="false"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-[#0f0122]/55" />

      {/* Top bar (same style as other page) */}
      <NavBar />

      <main className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 pb-16">
          {/* Title */}
          <section className="text-center mt-[7.5rem] ">
            <h1 className="text-[1.625rem]  md:text-[1.875rem] font-extrabold font-poppins">Contact Us</h1>
            <p className="mt-2 text-white/85 text-xs ">
              Please reach out to us, We would love to hear from You.
            </p>
          </section>

          {/* Card */}
          <section className="mt-8 flex justify-center">
            {/* Responsive scale wrapper to reduce overall size on desktop */}
            <div className="w-full flex">
              {/* Frame 454 */}
              <div className="relative md:w-[73%] w-[100%] md:h-[53.1875rem] h-[45.0625rem] md:rounded-[3.125rem] rounded-[1.875rem] bg-white/15 border border-white/20 backdrop-blur-2xl shadow-[0_10px_80px_rgba(153,0,255,0.2)] md:ml-[13.5%]">
              {/* Contact Information */}
              <h2 className="absolute md:left-[3.125rem] left-[24%] md:top-[3.75rem] top-[1.875rem] text-white md:text-[1.5rem] text-lg leading-[1.8125rem] font-extrabold font-poppins">
                Contact Information
              </h2>

              {/* Email pill with icon */}
              <div className="absolute md:left-[3.125rem] left-[5%] md:top-[7.3125rem] top-[4.8125rem] md:w-[3.75rem] md:h-[3.75rem] rounded-[0.9375rem] p-3 bg-white/50 border border-white/30 grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.75-.25a.75.75 0 0 0-.75.75v.24l7 4.2 7-4.2V7.25a.75.75 0 0 0-.75-.75H5.75Zm14.5 3.2-6.47 3.88a1.75 1.75 0 0 1-1.76 0L5.5 9.7v7.55c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V9.7Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <span className="absolute md:left-[7.875rem] left-[24%] md:top-[8.4375rem] top-[5.625rem] text-white md:text-[1.25rem] text-xs leading-[1.5rem]">
                info@afrivate.org
              </span>

              {/* Labels */}
              <label htmlFor="name" className="absolute md:left-[3.125rem] left-[10%] md:top-[14.3125rem] top-[8.6875rem] text-white font-extrabold md:text-[1rem] text-xs leading-[1.1875rem]">
                Name
              </label>
              <label htmlFor="email" className="absolute md:left-[3.125rem] left-[10%] md:top-[21.8125rem] top-[16.1875rem] text-white font-extrabold md:text-[1rem] text-xs leading-[1.1875rem]">
                Email
              </label>
              <label htmlFor="message" className="absolute md:left-[3.125rem] left-[10%] md:top-[29.3125rem] top-[23.6875rem] text-white font-extrabold md:text-[1rem] text-xs leading-[1.1875rem]">
                Your Message
              </label>

              {/* Inputs */}
              <input
                id="name"
                type="text"
                className="absolute md:left-[3.125rem] left-[5%] md:top-[16.125rem] top-[10.5rem] md:w-[85%] h-[3.75rem] rounded-[0.9375rem] bg-white/50 border border-white/40 px-4 text-[#0F0122] outline-none w-[90%]"
              />
              <input
                id="email"
                type="email"
                className="absolute md:left-[3.125rem] left-[5%] md:top-[23.625rem] top-[18rem] md:w-[85%] w-[90%] h-[3.75rem] rounded-[0.9375rem] bg-white/50 border border-white/40 px-4 text-[#0F0122] outline-none"
              />
              <textarea
                id="message"
                className="absolute w-[90%] md:left-[3.125rem] left-[5%] md:top-[31.125rem] top-[25.5rem] md:w-[85%] h-[7.5rem] rounded-[1.875rem] bg-white/50 border border-white/40 px-4 py-3 text-[#0F0122] outline-none resize-none overflow-hidden"
              />

              {/* CTA button - Frame 452 */}
              <button
                type="button"
                className="absolute md:left-[5.375rem] left-[5%] md:top-[42.375rem] top-[35rem] md:w-[34.25rem] w-[90%] md:h-[5.5625rem] rounded-[3.125rem] p-4 bg-white text-[#6A00B1] font-bold font-montserrat md:text-[1.5rem] text-lg leading-[1.8125rem] grid place-items-center"
                style={{ boxShadow: '0 18px 50px -12px rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.85)' }}
              >
                Get in Touch
              </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}


