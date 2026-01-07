import bgImg from '../Assets/Desktop - 16.png';
import NavBar from '../components/auth/Navbar';
import ModalWaitlist from '../components/auth/modalwaitlist';


export default function WhyAfrivate() {

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
      <img
        src={bgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />
      <NavBar />
      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-[#0f0122]/55" />

      {/* Top bar */}
     

      <main className="relative z-10 mt-[150px]">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 pb-20 md:pb-16">
          {/* Why Afrivate card */}
          <section className="mt-8">
            <div className="rounded-2xl sm:rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl p-3 sm:p-6 md:p-8 shadow-[0_10px_80px_rgba(153,0,255,0.2)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">Why Afrivate?</h2>
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
            <h3 className="text-[22px] sm:text-[32px] md:text-[40px] leading-tight font-extrabold">
              What Africans Stand to
              <br className="hidden sm:block" />
              Gain by Joining Afrivate
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl text-[11px] sm:text-sm">
              When individuals register with Afrivate, they become part of a transformative ecosystem built for empowerment,
              opportunity, and growth. Here’s what they gain:
            </p>
          </section>

          {/* Benefits list */}
          <section className="mt-5 space-y-3.5">
            {[
              {
                title: '1. Access to Opportunities That Elevate Their Lives',
                body:
                  'From jobs to internships to tech-driven platforms, Afrivate creates pathways for Africans to participate in the digital economy and unlock new career possibilities.',
              },
              {
                title: '2. Skills and Education for a Future-Ready Africa',
                body:
                  'Through learning tools, upskilling programs, and capacity-building platforms, members gain the knowledge they need to stay competitive in a fast-changing world.',
              },
              {
                title: '3. Inclusion—For Everyone',
                body:
                  'Afrivate ensures access to marginalized and underserved communities, including internally displaced persons (IDPs), people with disabilities (PWDs), and young people with limited exposure to opportunities.',
              },
              {
                title: '4. Technology That Works for Them',
                body:
                  'Afrivate develops solutions designed around African realities—affordable, relevant, accessible, and focused on solving everyday challenges.',
              },
              {
                title: '5. Improved Quality of Life',
                body:
                  'Whether through educational tools, infrastructure solutions, or empowerment platforms, Afrivate is built to uplift living standards and create long-term impact.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-2.5 sm:p-4 md:p-5 shadow-[0_6px_40px_rgba(255,255,255,0.08)]"
              >
                <h4 className="font-extrabold text-xs sm:text-base md:text-lg">{item.title}</h4>
                <p className="mt-1 text-white/90 text-[11px] sm:text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <div className='md:w-[25%] w-[64%] md:ml-[37.5%] ml-[18%] text-center font-sans p-1 md:p-2 text-xs   md:text-sm text-white rounded-full bg-white/10 backdrop-blur-lg border border-white/20 md:mt-[140px] mt-[150px] font-extrabold'>
            Get Early access to launch
          </div>
          
          <div className='relative z-10 text-center'>
            <p className='text-[30px] md:text-[55px]  font-montserrat text-white font-extrabold md:mt-[0px] mt-[20px]'>Join the Wait-list</p>
          <p className='text-xs md:text-base font-montserrat text-white mx-6 md:m-0 md:mt-[0px] mt-[6px] '>Afrivate empowers organizations and individuals to work, volunteer,<br className='hidden md:block'/>and grow — building a smarter, more connected future powered by AI.</p>

          <ModalWaitlist /><br/>

          <button className="p-3 mt-5 bg-[#089E00] text-white font-bold rounded-xl font-extrabold font-montserrat " onClick={handleShare} >
              Share to friends
            </button>

        </div>
        </div>
      </main>
    </div>
  )
}


