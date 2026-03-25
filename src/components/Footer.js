import { useNavigate } from "react-router-dom"
import logo2 from "../Assets/image 3.png"

const Footer = () => {

const navigate = useNavigate()

return (

<footer className="bg-white border-t mt-20">

  <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

    {/* BRAND */}
    <div className="space-y-4">
      <div className="cursor-pointer"
        onClick={()=>navigate("/")}>
        <img
      src={logo2}
      alt="moving"
      className="w-[60%] mt-[-50px]"
    />
      </div>

      <div className="mt-[-700px] relative">
      <p className="text-gray-500 text-sm ">
        Premium devices, seamless shopping experience.  
        We deliver quality tech products you can trust.
      </p>
      </div>

      {/* SOCIALS */}
      <div className="flex gap-4 text-lg text-gray-600">
        <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-500"></i>
        <i className="fa-brands fa-instagram cursor-pointer hover:text-blue-500"></i>
        <i className="fa-brands fa-twitter cursor-pointer hover:text-blue-500"></i>
      </div>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h2 className="font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2 text-gray-500 text-sm">
        <li onClick={()=>navigate("/")} className="cursor-pointer hover:text-blue-500">Home</li>
        <li onClick={()=>navigate("/about")} className="cursor-pointer hover:text-blue-500">About</li>
        <li onClick={()=>navigate("/contactus")} className="cursor-pointer hover:text-blue-500">Contact</li>
      </ul>
    </div>

    {/* SUPPORT */}
    <div>
      <h2 className="font-semibold mb-4">Support</h2>
      <ul className="space-y-2 text-gray-500 text-sm">
        <li onClick={()=>navigate("/faq")} className="cursor-pointer hover:text-blue-500">FAQ</li>
        <li onClick={()=>navigate("/tnc")} className="cursor-pointer hover:text-blue-500">Terms and Conditions</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h2  className="font-semibold mb-4">Contact</h2>
      <ul className="space-y-3 text-gray-500 text-sm">

        <li className="flex items-center gap-2">
          <i className="fa-solid fa-phone text-blue-500"></i>
          +2348086267740, +2348131162131
        </li>

        <li className="flex items-center gap-2">
          <i className="fa-solid fa-envelope text-blue-500"></i>
          shopapplereach@gmail.com
        </li>

        <li className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot text-blue-500"></i>
          Abuja, Nigeria
        </li>

      </ul>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t py-4 text-center text-sm text-gray-500">

    © {new Date().getFullYear()} ShopApple. All rights reserved.

  </div>

</footer>

)

}

export default Footer