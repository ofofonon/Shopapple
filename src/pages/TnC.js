import Navbar from "../components/navbar"
import Footer from "../components/Footer"

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-6">

        <h1 className="text-3xl font-bold">
          Terms & Conditions
        </h1>

        <p className="text-gray-600">
          By accessing and using ShopApple, you agree to be bound by these Terms and Conditions.
        </p>

        <h2 className="font-semibold text-xl">Agreement</h2>
        <p className="text-gray-600">
          Using our services means you have automatically agreed to these terms. If you do not agree, please do not use our platform.
        </p>

        <h2 className="font-semibold text-xl">Products</h2>
        <p className="text-gray-600">
          We provide original devices. However, availability and pricing may change without notice.
        </p>

        <h2 className="font-semibold text-xl">Payments</h2>
        <p className="text-gray-600">
          All payments are verified before order confirmation. False payment claims may result in account restrictions.
        </p>

        <h2 className="font-semibold text-xl">No Refund Policy</h2>
        <p className="text-red-600 font-semibold">
          All sales are final. We do not offer refunds once a purchase has been made.
        </p>

        <h2 className="font-semibold text-xl">Delivery</h2>
        <p className="text-gray-600">
          Delivery timelines may vary depending on location and logistics conditions.
        </p>

        <h2 className="font-semibold text-xl">Contact</h2>
        <p className="text-gray-600">
          For any inquiries, please contact us via the Contact page.
        </p>

      </div>
      <Footer />
    </div>
  )
}

export default Terms