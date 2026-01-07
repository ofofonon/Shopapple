import React from 'react';
import { Link } from 'react-router-dom';
import img5 from '../../Assets/image 23 (1).png';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2a0240] text-white py-12 sm:py-14 md:py-16 h-[23.125rem] md:h-[31.25rem]">
      <img
        className="absolute bottom-0 right-0 w-[100%] md:w-[50%]"
        alt="decor"
        src={img5}
        loading="lazy"
        decoding="async"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <ul className="space-y-3 sm:space-y-4 text-sm font-semibold">
            <li>
              <Link
                to="/"
                onClick={scrollTop}
                className="hover:text-purple-200 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/whyf"
                onClick={scrollTop}
                className="hover:text-purple-200 transition-colors"
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={scrollTop}
                className="hover:text-purple-200 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="mt-[7.5rem] md:mt-[17.5rem] flex items-center gap-4 sm:gap-8">
          {/* X / Twitter */}
          <a href="https://x.com/Afrivate_tech?t=qyFrRGry9MgLvriCOLlaCw&s=09" aria-label="X (Twitter)" className="hover:opacity-90">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white">
              <path d="M18.244 2H21l-6.54 7.48L22 22h-6.8l-4.74-6.2L4.9 22H2l7.06-8.08L2 2h6.9l4.28 5.72L18.244 2Zm-2.38 18h2.1L8.21 4H6.05l9.81 16Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/afrivate_tech?igsh=MzJtMTg3anhoeXZ5" aria-label="Instagram" className="hover:opacity-90">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7Zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-5 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm4.75-.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
            </svg>
          </a>

          {/* LinkedIn (boxed) */}
          <a href="https://www.linkedin.com/company/afrivate/" aria-label="LinkedIn" className="hover:opacity-90">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white">
              <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5ZM10.25 19H7V9h3.25v10ZM8.63 7.75a1.88 1.88 0 1 1 0-3.75 1.88 1.88 0 0 1 0 3.75ZM20 19h-3.25v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.86V19H9.62V9h3.12v1.37h.04c.43-.82 1.5-1.69 3.09-1.69 3.31 0 3.92 2.18 3.92 5.02V19Z" />
            </svg>
          </a>

          <p className="hidden md:block font-montserrat text-white text-[0.625rem] md:ml-[27%]">
            © Afrivate 2026 — Elevating Life in Africa
          </p>
        </div>

        <p className="font-montserrat text-white text-[0.625rem] text-center md:hidden mt-[2.5rem]">
          © Afrivate 2026 — Elevating Life in Africa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
