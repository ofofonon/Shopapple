import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import topimg from "../Assets/topimage2.png";
import logo from "../Assets/Vector.png";
import dimg from "../Assets/Layer_x0020_1 (1).png"
import main2 from "../Assets/main.png"
import apple from "../Assets/Group 216 (1).png"
import play from "../Assets/Group 217 (1).png"
import menu from "../Assets/iconamoon_menu-burger-horizontal-bold.png"









const LandingPage = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-8 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex  items-center">
        <img src={menu} alt="menu button" className="flex ml-[-3%] lg:ml-[2%] py-2  md:w-[7%] lg:w-[2.4%] w-[10%]  cursor-pointer"  onClick={() => setIsOpen(true)}/>
          <div className="flex  px-0 ml-[28%] lg:ml-[3%]">
            <img src={logo} alt="AfriVate Logo" className="h-10 w-10 px-0" />
          </div>
          <div className="flex items-center space-x-4 ml-auto">
          
                      <Link 
              to="/login" 
              className="hidden lg:inline-block text-purple-900 hover:text-purple-700 px-4 py-2"
            >
              About Aspire
            </Link>  

            <Link 
              to="/davy" 
              className="hidden lg:inline-block text-purple-900 hover:text-purple-700 px-4 py-2"
            >
              Blog
            </Link>

            <Link 
              to="/login" 
              className="hidden lg:inline-block text-purple-900 hover:text-purple-700 px-4 py-2"
            >
              Sign In
            </Link>

            <Link to="/Signup" className="bg-gradient-to-r from-purple-900 to-purple-300 text-white px-6 py-2 rounded-full  hover:bg-purple-800">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>





 {/* Sidebar Menu */}
 <div
        className={`fixed top-0 left-0 h-full w-[270px] rounded-tr-3xl rounded-br-3xl bg-gray-400 shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <div className="flex px-3 py-5">
          <div className="flex w-[50px] h-[50px] bg-gray-100 rounded-full">

          </div >
          <p className="flex text-sm text-purple-900 mt-[15px] font-extrabold">
            Welcome,  <span className="text-white text-2xl font-bold mt-[-7px]"> Joshua</span>
          </p>
          </div>

          <div className=" opacity-100 bg-gray-200 mr-[5%]">
          <ul className="p-3 space-y-5 text-sm bg-gray-200 text-purple-900 font-extrabold">
            <li><Link to="#">Find Freelancers</Link></li>
            <li><Link to="#">Find a Job</Link></li>
            <li><Link to="#">How it Works</Link></li>
            <li><Link to="#">About Aspire</Link></li>
            <li><Link to="#">Why Aspire</Link></li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">Enterprise Solutions</Link></li>
            <li><Link to="#">Agency Solutions</Link></li>
            <li><Link to="#">Purchase Order Solutions</Link></li>
            <li><Link to="#">Work Agreements</Link></li>
            <li><Link to="#">DeepPay</Link></li>
          </ul>
          </div>
        </div>
        <Link to="/login">
        <div className=" w-[95%] bg-purple-900 mt-[20px] text-white text-sm font-extrabold py-2  rounded-tr-full rounded-br-full px-3">
            Log in        
        </div>
        </Link>
      </div>

      {/* Overlay (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}







     




      {/* Hero Section */}
<section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
  <div className="max-w-7xl mx-auto px-0">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0">
          <img 
            src={topimg} 
            alt="African Dream" 
            className="w-full h-full object-cover rounded-xl opacity-30" 
          />
        </div>

        {/* Text Content (above image) */}
        <div className="relative p-[20px] z-10">
          <h1 className="text-5xl font-bold mb-6">
            GROWING<br />
            THE <span className="text-purple-900">AFRICAN DREAM</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Connect with top companies and build your freelancing career on Africa's leading professional marketplace.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-purple-900 to-blue-300 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block">
        <div className="bg-purple-600 bg-opacity-10 rounded-2xl p-12">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-purple-900">10K+</h3>
              <p className="text-gray-600">Active Freelancers</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-purple-900">5K+</h3>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-purple-900">$2M+</h3>
              <p className="text-gray-600">Paid Out</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-purple-900">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose AfriVate?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We connect zealous African freelancers with companies around the globe, providing opportunities for growth and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-600">Our escrow system ensures secure transactions and timely payments for completed work.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Matching</h3>
              <p className="text-gray-600">Advanced algorithms match your skills with the perfect projects and opportunities.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support to help you succeed in your freelancing journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" relative py-20 mt-[0px]">
        <div className="max-w-7xl mx-auto px-8">
        <img src={dimg} alt="down" className=" lg:ml-[30%] md:ml-[30%] lg:w-[40%] sm:w-[50%]  " />
          <div className="relative bg-purple-900 rounded-2xl py-16 px-8 text-center text-white">
          
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of African professionals building successful careers through our platform.
            </p>
            <Link to="/signup" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-purple-50 transition-all">
              Create Your Account
            </Link>
          </div>
        </div>
      </section>
        
      <section className=" relative lg:hidden bg-gradient-to-br from-purple-50 via-white to-purple-50 mt-[0px]">
      <div className=" relative  w-full mt-[65px] h-[325px] pt-[25px]">
    <img src={main2} alt="Hero" className="absolute w-[47%] left-[3%]"
        />
        <p className="absolute text-lg font-montserrat text-blue-900 text-right left-[56%]">
          Start a Growing <br />Career <br /> <span className="text-1xl font-montserrat text-blue-500 text-right font-bold">With Us!</span>
        </p>

        <img
          src={apple}
          alt="Hero"
          className="absolute w-[40%] left-[56%] top-[115px]"
        />
         <img
          src={play}
          alt="Hero"
          className="absolute w-[40%] left-[56%] top-[190px]"
        />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link to="/press" className="text-gray-400 hover:text-white">Press</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link to="/safety" className="text-gray-400 hover:text-white">Safety Center</Link></li>
                <li><Link to="/community" className="text-gray-400 hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link to="/newsletter" className="text-gray-400 hover:text-white">Newsletter</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookies Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 AfriVate. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;