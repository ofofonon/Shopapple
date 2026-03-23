import { useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/Footer"

const FAQ = () => {

  const [question, setQuestion] = useState("")

  const suggestions = [
    "How long does delivery take?",
    "Are your products original?",
    "Do you offer refunds?",
    "How do I confirm my payment?",
    "Can I track my order?"
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-montserrat">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-20 space-y-6">

        <h1 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h1>

        {/* Input */}
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          className="w-full border p-4 rounded-xl"
          rows={4}
        />

        {/* Suggestions */}
        <div className="flex flex-wrap gap-2">
          {suggestions.map((q, i) => (
            <div
              key={i}
              onClick={() => setQuestion(q)}
              className="bg-white px-4 py-2 rounded-full shadow cursor-pointer hover:bg-blue-50"
            >
              {q}
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default FAQ