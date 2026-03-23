import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
const [error,setError] = useState("")
const { login, role } = useContext(AuthContext)

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = async (e)=>{
e.preventDefault()

try{

await login(email,password)

}catch(err){

    if(err.code === "auth/user-not-found"){
    setError("No account found with this email.")
    }
    
    else if(err.code === "auth/wrong-password"){
    setError("Incorrect password.")
    }
    
    else if(err.code === "auth/invalid-email"){
    setError("Invalid email address.")
    }
    
    else{
    setError("Login failed. Try again.")
    }
    
    }

}


useEffect(()=>{

if(role === "admin"){
navigate("/admin")
}

if(role === "user"){
navigate("/profile")
}

},[role])


return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-500 to-blue-700 p-6 font-montserrat">

<div className="w-full max-w-md">

{/* CARD */}

<div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 text-white">

<h1 className="text-3xl font-bold text-center mb-2">
Welcome Back
</h1>

<p className="text-center text-sm text-blue-100 mb-8">
Login to continue
</p>

<form onSubmit={handleSubmit} className="space-y-5">

{/* EMAIL */}

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
/>


{/* PASSWORD */}

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
/>

{error && (
<p className="text-red-300 text-sm text-center">
{error}
</p>
)}
<button
type="submit"
className="w-full bg-white text-blue-500 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-all"
>

Login

</button>

</form>


<p className="text-center text-sm text-blue-100 mt-6">

Don't have an account?

<span
onClick={()=>navigate("/signup")}
className="ml-2 underline cursor-pointer"
>

Sign Up

</span>

</p>

</div>

</div>

</div>

)

}

export default Login