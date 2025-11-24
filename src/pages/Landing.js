import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../Assets/Vector (1).png';
import vector11 from '../Assets/Vector 11.png';
import vector12 from '../Assets/Vector 12.png';
import vector13 from '../Assets/Vector 13.png';
import airob from '../Assets/AI rob.png';
import airob1 from '../Assets/AI rob (1).png';
import star1 from '../Assets/Star 1.png';
import robb from '../Assets/image 11 (2).png';
import money from '../Assets/image 12.png';
import generate from '../Assets/Generated.png';
import vid from '../Assets/STQ6.png';



import whatsappIcon from '../Assets/img/Group.png'
import instagramIcon from '../Assets/img/Group (1).png'







const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i}>⭐</span>
    ));
  };
 
  
  const jobs = [
    {
    title: "Product Designer",
    company: "Paystack",
    location: "Lagos, Nigeria",
    button: "Apply",
    },
    {
    title: "AI/ML Engineer",
    company: "Apple",
    location: "Cape Town, SA",
    button: "Apply",
    },
    {
    title: "Mobile Developer",
    company: "Dell",
    location: "Nairobi, Kenya",
    button: "Apply",
    },
    {
      title: "Mobile Developer",
      company: "Dell",
      location: "Nairobi, Kenya",
      button: "Apply",
      },
      {
        title: "Mobile Developer",
        company: "Dell",
        location: "Nairobi, Kenya",
        button: "Apply",
        },
        {
          title: "Mobile Developer",
          company: "Dell",
          location: "Nairobi, Kenya",
          button: "Apply",
          },
    // Add more...
    ];
    
    
    const courses = [
    {
    title: "Creative Designing",
    school: "University of Bordeaux",
    rating: 4.5,
    button: "Get",
    },
    {
    title: "Video Editing",
    school: "University of Connecticut",
    rating: 4.5,
    button: "Get",
    },
    {
    title: "Web Development",
    school: "MIT",
    rating: 5,
    button: "Get",
    },
    // Add more...
    ];
  



 





  return (
    <div className="bg-[#FAFAFA] relative min-h-screen text-white hero-bg overflow-x-hidden">
     
      {/* Background video (with image placeholder) */}
      <div className="inset-0 w-full h-full">
        
        <div className="bg-gradient-to-b from-[#290043] via-[#47116B] to-[#200035] absolute inset-0 w-full h-[700px] object-cover"
        ></div>

        
      </div>
      <img src={vector13} alt='image1' className='absolute  w-[100%]'/>
      <img src={vector12} alt='image2' className='absolute'/>
      <img src={vector11} alt='image3' className='absolute'/>
      <img src={star1} alt='image4' className='absolute md:w-[4.5%] w-[9.5%] top-[410px] left-[8%]'/>
      <img src={star1} alt='image4' className='absolute md:w-[3%] w-[8%] top-[550px] left-[15%]'/>
      <img src={star1} alt='image5' className='absolute md:w-[2%] w-[7%]  top-[150px] left-[26%]'/>
      <img src={star1} alt='image6' className='absolute md:w-[2%] w-[7%] top-[480px] right-[13%]'/>
      <img src={star1} alt='image7' className='absolute md:w-[4.5%] w-[9.5%] top-[160px] right-[16%]'/>
      <img src={star1} alt='image8' className='absolute md:w-[2%] w-[7%] top-[600px] left-[36%]'/>
      <img src={star1} alt='image9' className='absolute md:w-[3%] w-[8%] top-[610px] right-[25%]'/>
      

      {/* Navigation */}
      <nav
  className={`bg-black/5 backdrop-blur-xl border border-white/20 font-sans fixed top-[15px] left-[4%] z-20 px-4 md:px-8 h-[75px] md:h-[80px] py-2 md:py-5 flex flex-col md:flex-row gap-6 md:gap-0 w-[92%] transition-all duration-500 rounded-full `}
>
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="Afrivate"
            className="sm:h-8 h-8 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] sm:pl-10"
          />
          <span className="ml-3 sm:text-4xl lg:text-2xl font-poppins font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white">
            AFRIVATE
          </span>
          <Link to="/login">
          <button className="flex bg-[#9900FF4D] py-3 px-5 rounded-xl text-xs font-bold font-montserrat   md:hidden block ml-10">
            Log in
          </button>
        </Link>
          <i
            className="flex fa-solid fa-bars ml-auto text-xl p-4 text-purple-100 md:hidden lg:hidden"
            onClick={() => setIsOpen(true)}
          ></i>
        </div>

        <div className="hidden sm:hidden md:block lg:block w-[70%]">
          <div className="flex flex-wrap justify-center lg:text-base font-semibold items-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 mx-[15%] pt-2">
            <Link to="/signup" className="transition-all">
            Volunteering 
            </Link>
            <Link to="/community" className="nav-link transition-all">
              Community
            </Link>
            <Link to="/road" className="nav-link transition-all">
              Courses
            </Link>
            <Link to="#" className="nav-link transition-all">
            Access Jobs
            </Link>
            
          </div>
        </div>

        <Link to="/login">
          <button className="bg-[#9900FF4D] py-3 px-8 rounded-2xl lg:text-sm font-bold font-montserrat hidden sm:hidden md:block lg:block mt-[-5px]">
            Log out
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
              <Link to="/signup">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-grip-horizontal pr-4 pl-2 m-2"></i>
                  Dashboard
                </li>
              </Link>
              <Link to="/community">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-users pr-4 pl-2 m-2"></i>
                  Community
                </li>
              </Link>
              <Link to="/road">
                <li className="bg-white w-[100%] py-2 pr-4 pl-1 rounded-xl hover:bg-gray-300">
                  <i className="fas fa-school pr-4 pl-2 m-2"></i>
                  Learning
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
      <main className="relative z-10 flex-1 md:flex items-center justify-center mt-[130px] md:mt-[130px]  px-6 sm:p-6 md:p-8">
        <div className=" mx-auto md:text-center mt-20  md:mt-20 sm:mt-[-150px] lg:mt-0 ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-montserrat text-center font-bold mb-6 sm:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-purple-300 text-glow-white filter drop-shadow-[0_8px_16px_rgba(255,255,255,0.15)] ">
          Elevating Lives in<br className='hidden md:block'/> Africa—One Opportunity at a Time
          </h1>

          <p className="md:text-lg text-sm text-center font-montserrat mb-8 sm:mb-10 text-gray-100/90 mx-auto px-1  tracking-wide font-base ">
          Afrivate empowers organizations and individuals to work, volunteer,<br/>and grow — building a smarter, more connected future powered by AI.
          </p>

          <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 flex items-center shadow-lg mb-10">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>

            {/* Input */}
            <input
              type="text"
              className="ml-3 bg-transparent outline-none text-white placeholder-white/50 w-full"
            />
          </div>


          <div className="md:ml-[23%] ml-[0%] flex items-center gap-2 md:gap-10">
          <Link to="/signup" >
            <button className="md:px-20 px-7 py-2 font-montserrat text-sm rounded-3xl bg-[#9F4EFF] md:text-base text-white font-semibold shadow-md font-bold hover:bg-purple-700 transition">
              Join as Pathfinder
            </button>
            </Link>

            <Link to="/signup" >
            <button className="md:px-20 px-7 py-2 font-montserrat rounded-3xl border-[2px] border-white text-sm md:text-base  text-white font-semibold bg-transparent font-bold hover:bg-purple-400/10 transition">
              Join as Enabler
            </button>
            </Link>
          </div>

         
        </div>
      </main>


       




      <div className="w-full px-6 md:px-16 md:py-16 py-6  md:mt-[160px] mt-[120px] font-montserrat">
      {/* Section Title */}
      <h2 className="text-[#6A00B1] font-extrabold text-2xl md:mb-10 md:ml-[8%]">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left – Image Space */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="h-96 w-[90%]  rounded-3xl flex items-center justify-center hidden md:block">
           <img src={generate} alt='prop'/>
          </div>
        </div>

        {/* Right – Steps */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:ml-4 ml-0">
          
          {/* Step 1 */}
          <div className="p-6 rounded-3xl border border-purple-200 md:w-[70%] w-[100%]">
            <h3 className="font-bold text-2xl text-black">
              1. Create Profile
            </h3>
            <p className="text-gray-600 text-base mt-1">
              Highlight your skills and aspirations.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl border border-purple-200 md:w-[70%] w-[100%]">
            <h3 className="font-bold text-2xl text-black">
              2. AI Matches You
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Our tech connects you to opportunities.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-3xl border border-purple-200 md:w-[70%] w-[100%]">
            <h3 className="font-bold text-2xl text-black">
              3. Apply & Grow
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Take the next step in your career.
            </p>
          </div>

          {/* Button */}
          <button className="mt-4 md:ml-[12%] w-[50%] bg-[#6A00B1] hover:bg-purple-700 text-white py-3 rounded-2xl font-semibold">
            Get Started
          </button>
        </div>

      </div>
    </div>






   

    <div className="w-full  p-6 min-h-screen font-montserrat mt-20">

{/* Jobs Section */}
<h2 className="text-[#6A00B1] font-extrabold text-2xl mb-10 ml-[8%]">
  Explore Live Opportunites
</h2>

<div className="flex gap-4 overflow-x-auto whitespace-nowrap pb-8 px-4 scrollbar-hide ml-[4%] thin-scrollbar">
  {jobs.map((job, index) => (
    <div
      key={index}
      className="inline-block min-w-[300px] bg-white rounded-2xl shadow p-6 py-8 flex flex-col gap-2"
    >
      <h3 className="font-semibold text-lg text-black">{job.title}</h3>
      <p className="text-[#797979] text-lg">{job.company}</p>

      <div className="flex items-center gap-2 text-gray-600 text-xs font-bold mt-2 text-[#797979]">
        <span><i class="fa-solid fa-location-dot text-2xl text-[#797979]"></i></span>
        <span>{job.location}</span>
      </div>

      <button className="bg-[#6A00B1] text-white text-sm px-5 py-2 rounded-xl mt-4 self-end mt-[-50px]">
        {job.button}
      </button>
    </div>
  ))}
</div>

{/* Courses Section */}
<h2 className="text-[#6A00B1] font-extrabold text-2xl mb-10 ml-[8%] mt-20">
  Courses And Skills to Learn
</h2>

<div className="flex gap-6 overflow-x-auto whitespace-nowrap pb-4 px-4 scrollbar-hide ml-[4%]">
  {courses.map((course, index) => (
    <div
      key={index}
      className="inline-block min-w-[300px] bg-white rounded-2xl shadow p-6 py-10 flex flex-col gap-2"
    >
      <h3 className="font-semibold text-lg text-black">{course.title}</h3>
      <p className="text-gray-500 text-sm">{course.school}</p>

      <p><span className="ml-2 text-black">{course.rating} {renderStars(course.rating)}</span></p>
       

      <button className="bg-[#6A00B1] text-white text-sm px-5 py-2 rounded-xl  self-end mt-[-50px]">
        {course.button}
      </button>
    </div>
  ))}
</div>

</div>





    <div class=" relative h-64 
        bg-gradient-to-br 
        from-[#2D004B] 
        via-[#6A00B1] 
        via-[#8500DE] 
        to-[#2D004B] 
        rounded-3xl md:w-[70%] w-[95%] h-[550px] md:ml-[15%] ml-[2.5%] md:mt-[180px] mt-[60px] text-center font-montserrat overflow-hidden md:overflow-visible">
          
        <p className='text-4xl font-extrabold text-white md:pt-20 pt-10'>Afrivate AI </p>
        <p className='text-lg font-extrabold text-white pt-2'>Where Opportunity Meets<br/>Intelligence. </p>
        <p className='md:text-base text-xs  text-white pt-2 md:pt-10'>Afrivate’s AI features make it easier for anyone<br/>to discover the right opportunities and<br/>connections — helping organizations find top<br/>talent faster, and helping individuals get<br/>matched with roles that fit their skills and<br/>goals. </p>
        <button className="px-12 mt-5 py-3 font-montserrat rounded-3xl border-[2px] border-white text-white font-semibold bg-transparent font-bold hover:bg-purple-400/10 transition">
              Try Now
            </button>

        <img src={airob} alt='image8' className='absolute  w-[80%] md:w-[47%] top-[230px] md:top-[-50px] md:left-[-90px] left-[10%]'  />
        <img src={airob1} alt='image9' className='hidden md:block absolute w-[37%] top-[90px] right-[-70px]'  />


    </div>






    <p className='text-4xl font-extrabold text-[#6A00B1] pt-20 md:ml-[22%] ml-[10%] md:mt-[180px] font-montserrat mt-[30px]'>Afrivate Escrow </p>
    <p className='text-xl font-extrabold text-[#6A00B1] pt-2 md:ml-[20%] ml-[10%]  font-montserrat'>Where Trust Meets Transparency</p>

    <div class=" relative h-64 
        bg-gradient-to-br 
        from-[#2D004B] 
        via-[#6A00B1] 
        via-[#8500DE] 
        to-[#2D004B] 
        rounded-3xl md:w-[54%] w-[95%] h-[350px] md:h-[520px] md:ml-[15%] ml-[2.5%] md:mt-20 mt-10  font-montserrat md:p-14 p-5 text-center">

          <p className='md:text-4xl text-3xl font-extrabold text-white'>Secure payments<br/>you can trust, every time.</p>
          <p className='md:text-lg text-xs font-base text-white md:mt-8 mt-5'>Afrivate’s secure escrow payment system<br className='hidden md:block'/>protects everyone involved — ensuring<br className='hidden md:block'/>payments are only released when work is<br className='hidden md:block'/>completed, so both organizations and talents<br className='hidden md:block'/>can collaborate with confidence and trust.</p>

          

            <img src={robb} alt='image10' className='absolute md:top-[-60px] md:left-[300px] hidden md:block'/>
            <img src={money} alt='image14' className='absolute md:top-[350px] md:w-[40%] w-[60%] md:left-[-50px] overflow-hidden left-[-30px] top-[250px]'/>
            <button className="px-14 md:mt-10 mt-5 py-3 font-montserrat rounded-3xl border-[2px] border-white text-white font-semibold bg-transparent md:ml-[13%]  font-bold hover:bg-purple-400/10 transition">
              Try Now
            </button>
        </div>




      <img src={vid} alt='video' className='md:w-[60%] w-[100%] md:ml-[20%] mt-20'/>






        <div class=" relative h-100 
        bg-gradient-to-br 
        from-[#2D004B] 
        via-[#6A00B1] 
        via-[#8500DE] 
        to-[#2D004B] 
        rounded-3xl md:w-[54%] w-[95%] ml-[2.5%]  md:ml-[23%] mt-10   font-montserrat md:p-14 p-5 text-center">
           <p className='md:text-4xl text-3xl font-extrabold text-white'>Ready to Start Your<br className='hidden md:block'/>Journey?</p>
           <p className='md:text-2xl text-xs font-base text-white md:mt-8 mt-5'>Join a Growing community of<br className='hidden md:block'/>change-makers and innovators<br className='hidden md:block'/>across Africa. Your next opportunity<br className='hidden md:block'/>is just a click away. </p>
           <button className="md:px-16 px-10 md:mt-10 mt-5 py-3 font-montserrat rounded-xl border-[2px] border-white text-[#6A00B1] font-extrabold bg-white   font-bold  transition">
              Create Your Profile Now
            </button>
        </div>







        <div className='relative font-sans '>
          <p className='md:text-[55px] text-[40px] text-[#6A00B1] font-medium italic font-sans p-3 md:p-3 md:ml-[25%] md:mt-[250px] mt-[150px]'>
          
          What Our People Have<br className='hidden md:block'/>To Say…
          
          </p>

                <div className=" absolute md:top-[-100px] top-[-95px] max-w-xl py-7 p-6 md:py-10 rounded-3xl text-[#6A00B1] font-semibold
              bg-white/20 backdrop-blur-sm
              shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              bg-gradient-to-br from-purple-100/70 via-purple-200/40 to-purple-100/80 md:ml-[53%] ml-[3%] m-5 md:m-0
            "
            >
              <p className=" text-xs md:text-base leading-relaxed">
                “Afrivate helped me land a remote marketing<br className='hidden md:block'/>job with a Canadian
                company. Life-changing<br className='hidden md:block'/>platform!” 
                <span className="text-purple-600 font-semibold"> – Komolafe O</span>
              </p>
            </div>

            <div className=" absolute md:top-[140px] top-[90px] max-w-xl p-6 py-10 rounded-3xl text-[#6A00B1] font-semibold
              bg-white/20 backdrop-blur-sm
              shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              bg-gradient-to-br from-purple-100/70 via-purple-200/40 to-purple-100/80 md:ml-[20%] ml-[3%] m-5 md:m-0 
            "
            >
              <p className="text-xs leading-relaxed">
              "Afrivate connected me to a U.S. startup as a<br/>Product designer. My career has grown<br/>globally." 
                <span className="text-purple-600 font-semibold"> – Don K</span>
              </p>
            </div>
          
        </div>


        <div className="w-full flex justify-center md:justify-end md:px-[300px] gap-16 md:mt-[170px] mt-[120px] font-sans">
      {/* Stat 1 */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#6A00B1]">10,000+</h2>
        <p className="text-gray-600 text-xs">Happy Clients</p>
      </div>

      {/* Stat 2 */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#6A00B1]">1200+</h2>
        <p className="text-gray-600 text-xs">Reviews</p>
      </div>
    </div>

















     
    
    {/* Footer (built from S5 design) */}
    <footer className="bg-[#2a0240] text-white py-12 sm:py-14 md:py-16 mt-[100px] md:mt-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-sm font-semibold">
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Find Freelancers</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Find a Job</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">How it Works</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">About Afrivate</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Pricing</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Why Afrivate</a></li>
          </ul>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-sm font-semibold md:justify-self-end">
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Blog</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Enterprise Solutions</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Agency Solutions</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Purchase Order Solutions</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Work Agreements</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">DeepPay</a></li>
          </ul>
        </div>
        <div className="mt-12 sm:mt-14 md:mt-16 flex items-center gap-6 sm:gap-8">
          {/* X/Twitter */}
          <a href="/#" aria-label="X (Twitter)" className="hover:opacity-90 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white" aria-hidden="true">
              <path d="M18.244 2H21l-6.54 7.48L22 22h-6.8l-4.74-6.2L4.9 22H2l7.06-8.08L2 2h6.9l4.28 5.72L18.244 2Zm-2.38 18h2.1L8.21 4H6.05l9.81 16Z"/>
            </svg>
          </a>
          {/* WhatsApp */}
          <a href="/#" aria-label="WhatsApp" className="hover:opacity-90 transition-opacity">
            <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 sm:w-9 sm:h-9" />
          </a>
          {/* Instagram */}
          <a href="/#" aria-label="Instagram" className="hover:opacity-90 transition-opacity">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8 sm:w-9 sm:h-9" />
          </a>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default Landing;
