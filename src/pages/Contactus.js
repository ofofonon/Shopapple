import { useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // EMAIL PLACEHOLDER (you will connect backend later)
    console.log("Send to: ofinaboy1@gmail.com", form)

    alert("Message sent successfully!")
    setForm({ name:"", email:"", message:"" })
  }

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-20">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full border p-3 rounded"
            required
          />

          <button className="w-full bg-blue-500 text-white py-3 rounded-xl">
            Send Message
          </button>

        </form>

      </div>
      <Footer />
    </div>
  )
}

export default Contact