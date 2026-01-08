import React from 'react';
import { Link } from 'react-router-dom';

import CountdownTimer from '../components/auth/countdowntimer';
import ModalWaitlist from '../components/auth/modalwaitlist';
import NavBar from '../components/auth/Navbar';
import Footer from '../components/auth/footer';
import ModalWaitlist2 from '../components/auth/modalwaitlist2';

import rec1 from '../Assets/Rectangle 492.png';
import rec2 from '../Assets/Rectangle 489.png';
import img1 from '../Assets/image 16 (2).png';
import img2 from '../Assets/Subtract (4).png';
import img3 from '../Assets/image 22.png';
import img4 from '../Assets/image 19.png';
import img5 from '../Assets/image 23 (1).png';
import aboutBg from '../Assets/Desktop - 16.png';












const Landing = () => {

  React.useEffect(() => {
    document.title = 'Afrivate - Elevating life in africa for the landing page';
  }, []);

  React.useEffect(() => {
    const urls = [
      aboutBg,
      rec1, rec2,
      img1, img2, img3, img4, img5,
    ];
    const prefetch = () => {
      urls.forEach((src) => {
        const img = new Image();
        img.decoding = 'async';
        img.src = src;
      });
    };
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(prefetch, { timeout: 2000 });
    } else {
      setTimeout(prefetch, 0);
    }
  }, []);
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

    
    
      

     
      <div className="bg-[#FAFAFA] relative min-h-screen text-white hero-bg overflow-x-hidden font-montserrat">
        
        <NavBar />
      
     
      <div class=" relative md:h-[43.75rem] h-[37.5rem] 
        bg-gradient-to-b 
        from-[#200035] 
        via-[#620C9B] 
        to-[#200035] 
         md:w-full w-full  overflow-hidden    text-center">


          <picture>
            <source
              type="image/webp"
              srcSet="/optimized/Rectangle%20492/Rectangle%20492-640.webp 640w, /optimized/Rectangle%20492/Rectangle%20492-1280.webp 1280w, /optimized/Rectangle%20492/Rectangle%20492-1920.webp 1920w"
              sizes="(min-width: 768px) 60vw, 110vw"
            />
            <source
              type="image/png"
              srcSet="/optimized/Rectangle%20492/Rectangle%20492-640.png 640w, /optimized/Rectangle%20492/Rectangle%20492-1280.png 1280w, /optimized/Rectangle%20492/Rectangle%20492-1920.png 1920w"
              sizes="(min-width: 768px) 60vw, 110vw"
            />
            <img src={rec1} alt="" className='absolute md:w-[60%] w-[110%] ml-[30%] md:ml-[40%] top-0 z-2' loading="eager" decoding="async" fetchpriority="high" />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet="/optimized/Rectangle%20489/Rectangle%20489-640.webp 640w, /optimized/Rectangle%20489/Rectangle%20489-1280.webp 1280w, /optimized/Rectangle%20489/Rectangle%20489-1920.webp 1920w"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
            <source
              type="image/png"
              srcSet="/optimized/Rectangle%20489/Rectangle%20489-640.png 640w, /optimized/Rectangle%20489/Rectangle%20489-1280.png 1280w, /optimized/Rectangle%20489/Rectangle%20489-1920.png 1920w"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
            <img src={rec2} alt="" className='absolute md:w-[60%] w-[100%] top-0 z-2 ml-[-30%] md:ml-0' loading="lazy" decoding="async" fetchpriority="low" />
          </picture>

         
          <div className='md:w-[15%] w-[64%] md:ml-[42.5%] ml-[18%] text-center font-sans p-1 md:p-2 text-xs   md:text-sm text-white rounded-full bg-white/10 backdrop-blur-lg border border-white/20 md:mt-[8.75rem] mt-[9.375rem] font-extrabold'>
            Get Early access to launch
          </div>
          
          <div className='relative z-10'>
            <p className='text-[1.875rem] md:text-[3.4375rem]  font-montserrat text-white font-extrabold md:mt-[0rem] mt-[1.25rem]'>Join the Wait-list</p>
          <p className='text-xs md:text-base font-montserrat text-white mx-6 md:m-0 md:mt-[0rem] mt-[0.375rem] '>Afrivate empowers organizations and individuals to work, volunteer,<br className='hidden md:block'/>and grow — building a smarter, more connected future powered by AI.</p>

          <ModalWaitlist />

          
          </div>

          
            <div className='relative flex md:gap-3 gap-1 z-12   ml-2 md:ml-[31.5%] md:mt-11 mt-5  '>
              
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

      <p className='font-poppins md:text-[2.875rem] text-[1.625rem] text-[#6A00B1] font-bold md:m-10 mt-8 mb-0 mx-[10%]'>WHY JOIN AFRIVATE?</p>


      <picture>
        <source
          type="image/webp"
          srcSet="/optimized/image%2016%20(2)/image%2016%20(2)-640.webp 640w, /optimized/image%2016%20(2)/image%2016%20(2)-1280.webp 1280w, /optimized/image%2016%20(2)/image%2016%20(2)-1920.webp 1920w"
          sizes="(min-width: 768px) 60vw, 90vw"
        />
        <source
          type="image/png"
          srcSet="/optimized/image%2016%20(2)/image%2016%20(2)-640.png 640w, /optimized/image%2016%20(2)/image%2016%20(2)-1280.png 1280w, /optimized/image%2016%20(2)/image%2016%20(2)-1920.png 1920w"
          sizes="(min-width: 768px) 60vw, 90vw"
        />
        <img src={img1} alt="img1" className='md:w-[60%] w-[90%] md:ml-[20%] ml-[5%] md:mt-[3.125rem] mt-[3.125rem]' loading="lazy" decoding="async" />
      </picture>
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
        Access Real Volunteering<br className=' md:hidden'/> Opportunities
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans  mx-10'>
          Find Volunteering opportunities and communities that match your skills, interests, and<br className='hidden md:block'/>passions—all in one place.
        </p>
      </div>


      <picture>
        <source
          type="image/webp"
          srcSet="/optimized/Subtract%20(4)/Subtract%20(4)-640.webp 640w, /optimized/Subtract%20(4)/Subtract%20(4)-1280.webp 1280w, /optimized/Subtract%20(4)/Subtract%20(4)-1920.webp 1920w"
          sizes="(min-width: 768px) 50vw, 90vw"
        />
        <source
          type="image/png"
          srcSet="/optimized/Subtract%20(4)/Subtract%20(4)-640.png 640w, /optimized/Subtract%20(4)/Subtract%20(4)-1280.png 1280w, /optimized/Subtract%20(4)/Subtract%20(4)-1920.png 1920w"
          sizes="(min-width: 768px) 50vw, 90vw"
        />
        <img src={img2} alt="img1" className='md:w-[50%] w-[90%] md:ml-[25%] ml-[5%] md:mt-[-1.25rem] mt-[0rem]' loading="lazy" decoding="async" />
      </picture>
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
        Personalized Growth with AI
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans mx-10'>
        Get a personalized roadmap with tailored opportunities and an AI companion<br className='hidden md:block'/>that guides your growth every step of the way.
        </p>
      </div>

      <picture>
        <source
          type="image/webp"
          srcSet="/optimized/image%2022/image%2022-640.webp 640w, /optimized/image%2022/image%2022-1280.webp 1280w, /optimized/image%2022/image%2022-1920.webp 1920w"
          sizes="(min-width: 768px) 40vw, 80vw"
        />
        <source
          type="image/png"
          srcSet="/optimized/image%2022/image%2022-640.png 640w, /optimized/image%2022/image%2022-1280.png 1280w, /optimized/image%2022/image%2022-1920.png 1920w"
          sizes="(min-width: 768px) 40vw, 80vw"
        />
        <img src={img3} alt="img1" className='md:w-[40%] w-[80%] md:ml-[30%] ml-[10%] mt-[2.1875rem]' loading="lazy" decoding="async" />
      </picture>
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
        Hands-on Experience
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans mx-10'>
        Get the experience that moves you forward with Volunteering opportunities<br className='hidden md:block'/>built around your goals.
        </p>
      </div>

      <picture>
        <source
          type="image/webp"
          srcSet="/optimized/image%2019/image%2019-640.webp 640w, /optimized/image%2019/image%2019-1280.webp 1280w, /optimized/image%2019/image%2019-1920.webp 1920w"
          sizes="(min-width: 768px) 40vw, 80vw"
        />
        <source
          type="image/png"
          srcSet="/optimized/image%2019/image%2019-640.png 640w, /optimized/image%2019/image%2019-1280.png 1280w, /optimized/image%2019/image%2019-1920.png 1920w"
          sizes="(min-width: 768px) 40vw, 80vw"
        />
        <img src={img4} alt="img1" className='md:w-[40%] w-[80%] md:ml-[28%] ml-[10%] mt-[2.1875rem]' loading="lazy" decoding="async" />
      </picture>
      <div className='w-full text-center mt-3'>
        <p className='md:text-2xl text-lg text-[#6A00B1] font-sans font-bold'>
        Join Purposeful Volunteering Communities
        </p>

        <p className='md:text-lg text-xs text-[#BEBEBE] font-sans mx-10'>
        Connect, collaborate, and engage with people who share your passions.
        </p>
      </div>




      <div className='bg-gradient-to-b 
        from-[#200035] 
        via-[#620C9B] 
        to-[#200035] md:w-[60%] w-[95%] rounded-3xl md:h-[31.25rem] h-[18.75rem] md:ml-[20%] ml-[2.5%] text-center mt-[7.5rem] '>

          <p className='md:text-[3.125rem] text-[1.875rem] text-white  font-extrabold pt-5 font-poppins'>
          Ready to Start Your<br className='hidden md:block'/> Journey?
          </p>
          <p className='text-white md:text-3xl text-sm mx-6 md:mx-0'>
          Join a Growing community of<br className='hidden md:block'/> change-makers and innovators<br className='hidden md:block'/> across Africa. Your next opportunity<br className='hidden md:block'/> is just a click away. 
          </p>

          <ModalWaitlist2 />

          

      </div>
      
         

       

      
















     <div className='mt-[6.25rem] md:mt-[25rem]'></div>
      <Footer />
   

    </div>
      

     
  );
};

export default Landing;
