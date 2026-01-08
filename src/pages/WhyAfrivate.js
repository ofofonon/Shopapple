import { useEffect } from 'react';
import bgImg from '../Assets/Desktop - 16.png';
import NavBar from '../components/auth/Navbar';
import ModalWaitlist from '../components/auth/modalwaitlist';
import Footer from '../components/auth/footer';


export default function WhyAfrivate() {

  useEffect(() => {
    document.title = 'About Us';
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
      <NavBar />
      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0f0122]/55" />

      {/* Top bar */}
     

      <main className="relative z-10 mt-[9.375rem]">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 pb-20 md:pb-16">
          {/* Why Afrivate card */}
          <section className="mt-8">
            <div className="rounded-2xl sm:rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl p-3 sm:p-6 md:p-8 shadow-[0_10px_80px_rgba(153,0,255,0.2)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 font-poppins">Why Afrivate?</h2>
              <p className="text-white/90 leading-relaxed text-xs sm:text-sm md:text-base">
                Afrivate is a movement powered by Africa’s creativity, resilience, and ambition—built to elevate the continent
                through technology, innovation, and collabortion. As a tech-driven ecosystem, we design scalable, inclusive
                solutions that improve daily life across Africa, guided by our vision to expand opportunities and uplift
                communities. Rooted in seven impact pillars, Afrivate embodies a youthful, confident, and forward-thinking
                identity committed to driving meaningful change for individuals, societies, and the continent as a whole.
              </p>
            </div>
          </section>

          {/* Heading */}
          <section className="mt-8 sm:mt-10 md:mt-12">
            <h3 className="text-[1.375rem] sm:text-[2rem] md:text-[2.5rem] leading-tight font-extrabold whitespace-normal sm:whitespace-nowrap font-poppins">
              What Africans stand to Gain by Joining Afrivate
            </h3>
            <p className="mt-2 text-white/85 text-[11px] sm:text-sm whitespace-normal">
              When individuals register with Afrivate, they become part of a transformative ecosystem built for empowerment,
              opportunity, and growth.<br /> Here’s what they gain:
            </p>
          </section>

          {/* Benefits list */}
          <section className="mt-5 space-y-3.5">
            {[
              {
                title: '1. The Afrivate Volunteer Module ',
                body:
                  'is a core part of the ecosystem. It is designed for individuals who want real experience, structure, and growth, while contributing to something meaningful.',
              },
              {
                title: '2. The Afrivate Volunteer Module',
                body:
                  'offers structured, role-specific professional exposure across areas like Product, Tech, Media, Operations, Research, and Community. Volunteers work with clear expectations, defined timelines, and measurable deliverables, supported by proper onboarding, training, and continuous guidance. Contributions are recognized, ensuring this is a growth-focused experience, not unpaid labor.',
              },
              {
                title: '3. The Afrivate Volunteer Module ',
                body:
                  'exists to help individuals gain real experience without exploitation, while preparing them for internships, jobs, and leadership opportunities. It creates a sustainable pipeline of skilled contributors within Afrivate, ensuring volunteers grow professionally while making meaningful impact. Volunteers don’t just help out, they build capacity.',
              },
              {
                title: '4. By joining the Afrivate Volunteer Module,',
                body:
                  'participants gain verifiable experience and references, increased confidence and competence, a stronger professional profile, and a practical understanding of how real teams and platforms operate, often leading to leadership roles, paid opportunities, or external career wins.',
              },
              {
                title: '5. Afrivate',
                body:
                  'is built for students and early-career professionals, curious learners ready to apply themselves, growth-focused volunteers, and builders committed to contributing to Africa’s future. If you’re seeking clarity, real experience, and a purpose-driven community, Afrivate was designed with you in mind.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-2.5 sm:p-4 md:p-5 mt-10 shadow-[0_6px_40px_rgba(255,255,255,0.08)]"
              >
                <h4 className="font-extrabold text-xs sm:text-base md:text-lg font-poppins">{item.title}<span className="mt-1 text-white/90 font-thin text-[11px] sm:text-sm leading-relaxed"> {item.body}</span></h4>
                
              </div>
            ))}
          </section>

          {/* CTA */}
          <div className='md:w-[25%] w-[64%] md:ml-[37.5%] ml-[18%] text-center font-sans p-1 md:p-2 text-xs   md:text-sm text-white rounded-full bg-white/10 backdrop-blur-lg border border-white/20 md:mt-[8.75rem] mt-[9.375rem] font-extrabold'>
            Get Early access to launch
          </div>
          
          <div className='relative z-10 text-center'>
            <p className='text-[1.875rem] md:text-[3.4375rem]  font-poppins text-white font-extrabold md:mt-[0rem] mt-[1.25rem]'>Join the Wait-list</p>
          <p className='text-xs md:text-base font-montserrat text-white mx-6 md:m-0 md:mt-[0rem] mt-[0.375rem] '>Afrivate empowers organizations and individuals to work, volunteer,<br className='hidden md:block'/>and grow — building a smarter, more connected future powered by AI.</p>

          <ModalWaitlist /><br/>

          <button className="p-3 mt-5 bg-[#089E00] text-white font-bold rounded-xl font-extrabold font-montserrat " onClick={handleShare} >
              Share to friends
            </button>

        </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}


