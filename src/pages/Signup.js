import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [error,setError] = useState("")
  const { signup, user  } = useContext(AuthContext)
  
  const navigate = useNavigate()

  // Fields
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [state, setState] = useState("Abuja")
  const [deliveryLocation, setDeliveryLocation] = useState("")
  const [landmark, setLandmark] = useState("")
  const country = "Nigeria"

  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (user) {
      navigate("/profile")
    }
  }, [user, navigate])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
  
    // Validation
    if (!name || !email || !password || !phone || !state || !deliveryLocation) {
      setError("Please fill in all required fields.")
      return
    }
  
    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }
  
    
    try {
      setLoading(true)
  
      await signup({
        name,
        email,
        password,
        phone,
        state,
        deliveryLocation,
        landmark,
        country
      })
  
      // ❌ DO NOT navigate here
      // Firebase will log the user in automatically
      // The redirect will happen in useEffect when user updates
  
    } catch (err) {
  
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered.")
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email.")
      } else if (err.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.")
      } else {
        setError("Something went wrong. Try again.")
      }
  
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 font-montserrat">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required className="w-full px-3 py-2 border rounded-lg"/>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded-lg"/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded-lg"/>
          <input type="text" placeholder="Phone Number" value={phone} onChange={e=>setPhone(e.target.value)} required className="w-full px-3 py-2 border rounded-lg"/>
          <select value={state} onChange={e=>setState(e.target.value)} required className="w-full px-3 py-2 border rounded">
            <option>Abuja</option>
            <option>Lagos</option>
            <option>Uyo</option>
            <option>Port Harcourt</option>
          </select>
          <input type="text" value={country} readOnly className="w-full px-3 py-2 border rounded-lg bg-gray-200"/>
          <input type="text" placeholder="Delivery Location" value={deliveryLocation} onChange={e=>setDeliveryLocation(e.target.value)} required className="w-full px-3 py-2 border rounded-lg"/>
          <input type="text" placeholder="Landmark (optional)" value={landmark} onChange={e=>setLandmark(e.target.value)} className="w-full px-3 py-2 border rounded-lg"/>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button type="submit" disabled={loading} className={`w-full py-2 rounded-full font-semibold ${loading ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"}`}>
            {loading ? (
              <span className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-spinner fa-spin"></i> Creating Account...
              </span>
            ) : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-3">
          Already have an account? <span className="text-blue-500 cursor-pointer" onClick={()=>navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  )
}

export default Signup