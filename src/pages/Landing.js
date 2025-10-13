import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import bgVideo from '../Assets/bg-video.mp4';
import logoImg from '../Assets/Vector (1).png';

const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const words = useMemo(() => ["Purpose", "Passion", "Impact", "Change"], []);
  const [displayedWord, setDisplayedWord] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 180 : 180; // slower, more natural typing

    const handleTyping = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedWord(currentWord.slice(0, displayedWord.length + 1));
        if (displayedWord === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedWord(currentWord.slice(0, displayedWord.length - 1));
        if (displayedWord === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(handleTyping);
  }, [displayedWord, isDeleting, index, words]);

  // Cursor blinking
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="relative min-h-screen text-white hero-bg flex flex-col">
      {/* Background video (no overlays) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navigation */}
      <nav className="font-sans navbar-bg sticky top-0 z-20 px-4 md:px-8 py-5 flex flex-col md:flex-row gap-6 md:gap-0 w-[100%]">
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Afrivate"
            className="sm:h-8 h-8 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:pl-10"
          />
          <span className="ml-3 sm:text-4xl lg:text-2xl font-poppins font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white">
            AFRIVATE
          </span>
          <i
            className="flex fa-solid fa-bars ml-auto p-4 text-purple-100 md:hidden lg:hidden"
            onClick={() => setIsOpen(true)}
          ></i>
        </div>

        <div className="hidden sm:hidden md:block lg:block w-[70%]">
          <div className="flex flex-wrap justify-center lg:text-sm font-bold items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 mx-[15%] pt-2">
            <Link to="/dashe" className="transition-all">
              Dashboard
            </Link>
            <Link href="#" className="nav-link transition-all">
              Community
            </Link>
            <Link href="#" className="nav-link transition-all">
              Course
            </Link>
            <Link href="#" className="nav-link transition-all">
              Wallet
            </Link>
            <Link href="#" className="nav-link transition-all">
              Settings
            </Link>
          </div>
        </div>

        <Link to="/login">
          <button className="bg-[#9900FF33] py-2 px-11 rounded-xl lg:text-sm font-bold font-montserrat hidden sm:hidden md:block lg:block">
            Log in
          </button>
        </Link>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-[270px] rounded-tr-3xl rounded-br-3xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="">
          <div className="flex px-3 py-5">
            <div className="flex w-[50px] h-[50px] bg-gray-300 rounded-full"></div>
            <p className="flex font-sans text-xl text-black mt-[13px] font-bold">
              Tech Innovators
            </p>
          </div>

          <div className="mr-[5%]">
            <ul className="p-4 space-y-5 text-sm text-black font-medium font-sans">
              <Link to="/dashe">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-grip-horizontal pr-4 pl-2 m-2"></i>
                  Dashboard
                </li>
              </Link>
              <Link to="#">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-users pr-4 pl-2 m-2"></i>
                  Community
                </li>
              </Link>
              <Link to="#">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-school pr-4 pl-2 m-2"></i>
                  Course
                </li>
              </Link>
              <Link to="#">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-wallet pr-4 pl-2 m-2"></i>
                  Wallet
                </li>
              </Link>
              <Link to="#">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-wrench pr-4 pl-2 m-2"></i>
                  Settings
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <Link to="/login">
          <button className="w-[80%] bg-purple-900 mt-[150px] mb-3 text-white text-sm font-extrabold py-3 rounded-xl px-3 mx-3 ml-[10%]">
            Log in
          </button>
        </Link>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center mt-0 mt-[-180px] lg:mt-0 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto text-center  mt-0 sm:mt-[-150px] lg:mt-0 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-montserrat font-bold mb-6 sm:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white filter drop-shadow-[0_8px_16px_rgba(255,255,255,0.15)]">
            Where Jobs Meet{" "}
            <span className="text-purple-200">
              {displayedWord}
              <span className="text-white">{cursorVisible ? "|" : " "}</span>
            </span>
          </h1>

          <p className="text-xs text-center font-montserrat font-bold sm:text-lg md:text-xl lg:text-base mb-8 sm:mb-10 text-gray-100/90 mx-auto px-1 leading-relaxed tracking-wide">
            Afrivate is a smart web platform that connects youths with businesses, NGOs, and organizations for jobs, volunteering and professional growth.
          </p>

          <Link to="/signup" >
            <button className="bg-[#9900FF80] px-5 py-5 rounded-3xl btn btn-lg font-montserrat font-bold lg:mt-[-15px]">
              Find your next Opportunity
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Landing;
