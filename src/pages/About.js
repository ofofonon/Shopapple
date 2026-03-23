import Navbar from "../components/navbar"
import logo1 from "../Assets/image 2.png"
import Footer from "../components/Footer"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Navbar />

        <div className="flex justify-center">
        <img src={logo1} alt="logo" className="lg:w-[30%] w-[100%]"/>
        </div>
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-10 mt-[-100px]">

        <h1 className="text-3xl md:text-4xl font-bold text-center">
          About ShopApple
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          ShopApple is a modern tech store focused on delivering authentic Apple devices with a seamless and secure shopping experience.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-xl mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To provide customers with genuine products, transparent pricing, and a smooth buying experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-xl mb-2">Why Choose Us</h2>
            <ul className="text-gray-600 space-y-2">
              <li>✔ 100% Original Devices</li>
              <li>✔ Fast Delivery</li>
              <li>✔ Secure Payments</li>
              <li>✔ Reliable Customer Support</li>
            </ul>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default About