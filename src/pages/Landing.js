import React from 'react';


import CountdownTimer from '../components/auth/countdowntimer';
import ModalWaitlist from '../components/auth/modalwaitlist';
import NavBar from '../components/auth/Navbar';
import ModalWaitlist2 from '../components/auth/modalwaitlist2';

import rec1 from '../Assets/Rectangle 492.png';
import rec2 from '../Assets/Rectangle 489.png';
import img1 from '../Assets/image 16 (2).png';
import img2 from '../Assets/Subtract (4).png';
import img3 from '../Assets/image 22.png';
import img4 from '../Assets/image 19.png';












const Landing = () => {

  const handleShare = async () => {
    if (!navigator.share) {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
      return;
    }
  
    try {
      await navigator.share({
        title: "Afrivate",
        text: "Join the Afrivate waitlist 🚀",
        url: window.location.href,
      });
    } catch (err) {
      // User cancelled or share failed
      console.log("Share cancelled", err);
    }
  };
  
 

 

  
  

  

  return (

    
    
      

     
      <div className="bg-[#FAFAFA] relative min-h-screen text-white hero-bg overflow-x-hidden">
        
        <NavBar />
      
     
      <div class=" relative md:h-[700px] h-[600px] 
        bg-gradient-to-b 
        from-[#200035] 
        via-[#620C9B] 
        to-[#200035] 
         md:w-full w-full  overflow-hidden   font-montserrat  text-center">


          <img src={rec1} alt="" className='absolute md:w-[60%] w-[110%] ml-[30%] md:ml-[40%] top-0 z-2' />
         <img src={rec2} alt="" className='absolute md:w-[60%] w-[100%] top-0 z-2 ml-[-30%] md:ml-0' />

         
          <div className='md:w-[15%] w-[64%] md:ml-[42.5%] ml-[18%] text-center font-sans p-1 md:p-2 text-xs   md:text-sm text-white rounded-full bg-white/10 backdrop-blur-lg border border-white/20 md:mt-[140px] mt-[150px] font-extrabold'>
            Get Early access to launch
          </div>
          
          <div className='relative z-10'>
            <p className='text-[30px] md:text-[55px]  font-montserrat text-white font-extrabold md:mt-[0px] mt-[20px]'>Join the Wait-list</p>
          <p className='text-xs md:text-base font-montserrat text-white mx-6 md:m-0 md:mt-[0px] mt-[6px] '>Afrivate empowers organizations and individuals to work, volunteer,<br className='hidden md:block'/>and grow — building a smarter, more connected future powered by AI.</p>

          <ModalWaitlist />

          
          </div>

          
            <div className='relative flex md:gap-3 gap-1 z-12 font-montserrat  ml-2 md:ml-[31.5%] md:mt-11 mt-5  '>
              
            <button className='md:w-[26%] w-[48%] bg-white p-4 rounded-3xl text-[#089E00] font-extrabold md:text-base text-xs'><a
              href="https://chat.whatsapp.com/FMHF97ul4k18alJNwieFxB?mode=hqrt3"
              target="_blank"
              rel="noopener noreferrer"
            > <i class="fa-brands fa-whatsapp font-extrabold "></i> Join our Channel
            </a>
            </button>
            <button className='md:w-[26%] w-[48%] bg-[#089E00] p-4 rounded-3xl text-white font-extrabold md:text-base text-xs' onClick={handleShare} >Share to Friends</button>
          </div>



          <div className='md:mt-7 mt-3'>
            <CountdownTimer />
          </div>

          </div>

      <p className='font-monserrat md:text-[46px] text-[26px] text-[#6A00B1] font-bold md:m-10 mt-8 mb-0 mx-[10%]'>WHY JOIN AFRIVATE?</p>


      <img src={img1} alt="img1" className='md:w-[60%] w-[90%] md:ml-[20%] ml-[5%] md:mt-[50px] mt-[50px]' />
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
          Access Real Opportunities
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans  mx-10'>
          Find opportunities and communities that match your skills, interests, and<br className='hidden md:block'/>passions—all in one place.
        </p>
      </div>


      <img src={img2} alt="img1" className='md:w-[50%] w-[90%] md:ml-[25%] ml-[5%] md:mt-[-20px] mt-[0px]' />
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
        Personalized Growth with AI
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans mx-10'>
        Get a personalized roadmap with tailored opportunities and an AI companion<br className='hidden md:block'/>that guides your growth every step of the way.
        </p>
      </div>

      <img src={img3} alt="img1" className='md:w-[40%] w-[80%] md:ml-[30%] ml-[10%] mt-[35px]' />
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
        Learn New Skills
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans mx-10'>
        Build the skills that move you forward with simple, guided learning built around<br className='hidden md:block' mx-10/>your goals.
        </p>
      </div>

      <img src={img4} alt="img1" className='md:w-[40%] w-[80%] md:ml-[28%] ml-[10%] mt-[35px]' />
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
        Join Purposeful Communities
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans mx-10'>
        Connect, collaborate, and engage with people who share your passions.
        </p>
      </div>




      <div className='bg-gradient-to-b 
        from-[#200035] 
        via-[#620C9B] 
        to-[#200035] md:w-[60%] w-[95%] rounded-3xl md:h-[500px] h-[300px] md:ml-[20%] ml-[2.5%] text-center mt-[120px] font-montserrat'>

          <p className='md:text-[50px] text-[30px] text-white  font-extrabold pt-5'>
          Ready to Start Your<br className='hidden md:block'/> Journey?
          </p>
          <p className='text-white md:text-3xl text-sm mx-6 md:mx-0'>
          Join a Growing community of<br className='hidden md:block'/> change-makers and innovators<br className='hidden md:block'/> across Africa. Your next opportunity<br className='hidden md:block'/> is just a click away. 
          </p>

          <ModalWaitlist2 />

          

      </div>
      
         

       

      
















     
    
    {/* Footer (built from S5 design) */}
    <footer className="bg-[#2a0240] text-white py-12 sm:py-14 md:py-16 mt-[100px] md:mt-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-sm font-semibold">
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Home</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">About us</a></li>
            <li><a href="/#" className="hover:text-purple-200 transition-colors">Contact</a></li>
           
          </ul>
          
        </div>
        <div className="mt-5 sm:mt-14 md:mt-16 flex items-center gap-6 sm:gap-8">
          {/* X/Twitter */}
          <a href="/#" aria-label="X (Twitter)" className="hover:opacity-90 transition-opacity">
            <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-white" aria-hidden="true">
              <path d="M18.244 2H21l-6.54 7.48L22 22h-6.8l-4.74-6.2L4.9 22H2l7.06-8.08L2 2h6.9l4.28 5.72L18.244 2Zm-2.38 18h2.1L8.21 4H6.05l9.81 16Z"/>
            </svg>
          </a>
          {/* WhatsApp */}
          
        </div>
      </div>
    </footer>

    </div>
      

     
  );
};

export default Landing;
