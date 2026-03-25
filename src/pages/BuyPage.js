import { useState, useRef } from "react"
import products from "../data/products"
import ProductCard from "../components/ProductCard"
import Navbar from "../components/navbar"
import { motion, AnimatePresence } from "framer-motion"
import scrolimg from "../Assets/maximus-mazar-OXdcdsqTUhs-unsplash.jpg"
import logo1 from "../Assets/image 2.png"
import oleg from "../Assets/freepik_br_78d73e3c-1759-498a-af71-da4c220c16aa.png"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

const BuyPage = () => {
  const [category, setCategory] = useState("iphone")
  const scrollRef = useRef(null) // for horizontal scroll
  const navigate = useNavigate()
  const filteredProducts = products.filter(
    (product) => product.category === category
  )

  const categories = [
    { name: "iphone", iconClass: "fa-solid fa-mobile text-3xl lg:text-[40px] " },
    { name: "ipad", iconClass: "fa-solid fa-tablet text-3xl lg:text-[40px] " },
    { name: "mac", iconClass: "fa-solid fa-laptop text-3xl lg:text-[40px] " },
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth / 2
      const newScrollLeft =
        direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
   
  }



  

  return (
    <div className="min-h-screen lg:p-10 p-6 font-montserrat relative max-w-screen">
        <Navbar />
      {/* TITLE */}
    <div className="lg:flex  w-full relative">


    
          
      <div className="relative mb-10 ">
        <h1 className=" lg:text-[70px] text-4xl font-bold mt-20 lg:leading-[80px] leading-[50px] ">Meet your next <span className="text-blue-500">Device</span></h1>
        <h1 className="lg:text-2xl text-base font-bold mr-10">Your trusted destination for Iphones, MacBooks and Ipads. </h1>
     

      <div className="flex">
      <button className="bg-blue-500 rounded-full py-3 lg:px-12 px-5 lg:text-xl text-sm font-extrabold text-white  mt-5" onClick={()=>navigate("/signup")}>
        Get Started
      </button>
      <button className="bg-transparent rounded-full py-3 lg:px-12 px-5 lg:text-xl text-sm font-extrabold border border-[2px] border-blue-500 text-blue-500 ml-2 mt-5" onClick={() => {document.getElementById("target-section")?.scrollIntoView({behavior: "smooth"})}}>
        Start Shopping
      </button>
      </div>
      </div>

     
  
  <div className="lg:flex items-center lg:w-[60%] w-[100%] ">
  <div className="w-[100%] lg:h-[250px] h-[200px] overflow-hidden rounded-3xl relative  ">


<img
  src={scrolimg}
  alt="moving"
  className="absolute lg:mt-[-300px] mt-[-135px] z-5  w-[200%] max-w-none animate-slide"
/>

<img
    src={logo1}
    alt="logo1"
    className="absolute lg:w-[80%] w-[100%] lg:mt-[-116px] mt-[-50px] z-10  "
  />

</div>
  </div>

  



      </div>

      <div id="target-section"></div>

      {/* TOGGLE */}
    <div className="flex justify-center mt-10 lg:w-[100%] w-[100%]" >
      <div className="bg-gray-100 mb-12 px-2 lg:px-20 py-4 w-max rounded-3xl text-sm lg:text-base">
        <div className="relative flex justify-center lg:gap-12 gap-2 ">
          {categories.map((item) => (
            <button
              key={item.name}
              onClick={() => setCategory(item.name)}
              className={`relative px-6 py-2 z-10 flex flex-col items-center font-medium capitalize transform transition-transform duration-300 hover:scale-110 ${
                category === item.name ? "text-white" : "text-black"
              }`}
            >
              {/* ICON */}
              <i className={`${item.iconClass} mb-1`}></i>
              {item.name}

              {category === item.name && (
                <motion.div
                  layoutId="toggle"
                  className="absolute inset-0 bg-black  rounded-3xl -z-10 "
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      </div>

      {/* PRODUCTS - HORIZONTAL SCROLL WITH FADE ANIMATION */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-0 right-0 flex gap-2 mt-4">
          <button
            onClick={() => scroll("left")}
            className="bg-black text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-black text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>



      <div className="relative w-[100%] mt-[70px] lg:flex ">
              <div className="lg:w-[50%] w-[100%] lg:text-right text-center lg:text-lg text-sm text-black font-bold mt-[50px]">
                <img
                  src={logo1}
                  alt="logo1"
                  className="lg:w-[20%] w-[50%] lg:ml-auto lg:mr-0 ml-auto mr-auto"
                />


                <p className="lg:mt-[-10px] mt-[-30px]"><i class="fa-solid fa-check text-black"></i> 100% <span className="text-blue-500">Original</span> Devices</p>
               
                <p className="mt-5 lg:mt-10"><i class="fa-solid fa-location-dot text-black"></i> <span className="text-blue-500">Delivery</span> to Abuja, Lagos, Uyo<br/>and PortHarcourt</p>
                <p className="mt-5 lg:mt-10"><i class="fa-solid fa-credit-card text-black-600"></i><span className="text-blue-500"> Secure</span> Payments</p>
                <p className="mt-5 lg:mt-10"><i class="fa-solid fa-user text-black"></i> Manage your <span className="text-blue-500">Profile</span></p>
                
                <button className="bg-blue-500 rounded-full px-10 py-3 text-white font-bold mt-8" onClick={() => {document.getElementById("target-section")?.scrollIntoView({behavior: "smooth"})}}>
                  Get Started
                </button>
              </div>
              <div>
                <img
                  src={oleg}
                  alt="moving"
                  className="relative lg:w-[50%] w-[100%] z-3"
                />
              </div>
      </div>

     <div className="relative lg:mt-0 mt-[-300px] z-10">
     <Footer />
     </div>

    </div>
  )
}

export default BuyPage