import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import Navbar from "../components/navbar"
import { CartContext } from "../context/CartContext"
import emailjs from "@emailjs/browser"

const Payment = () => {

const { state } = useLocation()
const navigate = useNavigate()
const { clearCart } = useContext(CartContext)

const order = state?.order

const [methodSelected,setMethodSelected] = useState(false)
const [timeLeft,setTimeLeft] = useState(600)
const [showPopup,setShowPopup] = useState(false)

useEffect(() => {
    if (!state?.order) {
      navigate("/", { replace: true })
    }
  }, [state, navigate])

useEffect(()=>{

if(!methodSelected) return

const timer = setInterval(()=>{

setTimeLeft(prev=>{
if(prev<=1){
clearInterval(timer)
return 0
}
return prev-1
})

},1000)

return ()=>clearInterval(timer)

},[methodSelected])

const minutes = Math.floor(timeLeft/60)
const seconds = timeLeft % 60

// ✅ THIS NOW WORKS LIKE YOUR NAVBAR SEND ORDER
const confirmPayment = async () => {

    if(!order) return
    
    try{
    
    const orderData = {
    
    userId: order.userId,
    
    customer:{
    name: order.name,
    email: order.email,
    phone: order.phone,
    transferAccount: order.transferAccount,
    state: order.state,
    deliveryLocation: order.deliveryLocation,
    landmark: order.landmark || ""
    },
    
    items: order.items.map(item => ({
    productName: item.name,
    color: item.color,
    storage: item.storage || null,
    sim: item.sim || null,
    condition: item.condition || "boxed",
    pricePerProduct: item.price,
    quantity: item.quantity,
    total: item.price * item.quantity
    })),
    
    orderTotal: order.total,
    
    status:"pending",
    
    createdAt: serverTimestamp()
    
    }
    
    await addDoc(collection(db,"orders"),orderData)

    await emailjs.send(
        "service_8525w7l",
        "template_abd2hsh",
        {
          name: order.name,
          email: order.email,
          phone: order.phone,
          transferAccount: order.transferAccount,
          state: order.state,
          deliveryLocation: order.deliveryLocation,
          landmark: order.landmark || "None",
          total: order.total
        },
        "acn5iRbpm8_vilvsV"
      )
    
    clearCart()
    
    setShowPopup(true)
    
    }catch(err){
    
    console.log("Error sending order:",err)
    
    }
    
    }

return(

<div className="min-h-screen bg-gray-100 font-montserrat">

<Navbar/>

<div className="max-w-2xl lg:mx-auto mx-0 mt-24 p-6">

<div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 mt-[-50px]">

<h1 className="text-2xl font-bold text-center">
Select Payment Option
</h1>

{/* Payment Option */}

<div
onClick={()=>setMethodSelected(true)}
className={`border rounded-xl p-4 flex items-center gap-4 cursor-pointer transition
${methodSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"}
`}
>

<i className="fa-solid fa-building-columns text-2xl text-blue-500"></i>

<div>

<p className="font-semibold">
Bank Transfer
</p>

<p className="text-sm text-gray-500">
Pay securely using bank transfer
</p>

</div>

</div>


{/* Bank Details */}

{methodSelected && (

<div className="space-y-6">

<div className="bg-gray-50 border rounded-xl p-6 text-center space-y-2">

<p className="text-sm text-gray-500">
Transfer the exact amount to
</p>

<p className="text-2xl font-bold tracking-wider">
6103936868
</p>

<p className="font-semibold">
VICTOR UKPONO UKPE
</p>

<p className="text-sm text-gray-500">
Opay
</p>

</div>


{/* Timer */}

<div className="text-center">

<p className="text-sm text-gray-500">
Payment window
</p>

<p className="text-xl font-semibold text-red-500">
{minutes}:{seconds.toString().padStart(2,"0")}
</p>

</div>


{/* Total */}

<div className="flex justify-between font-semibold text-lg">

<span>Total Amount</span>
<span>₦{order?.total}</span>

</div>


<button
onClick={confirmPayment}
className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
>

Confirm Payment

</button>

</div>

)}

</div>

</div>


{/* Success Popup */}

{showPopup && (

<div className="fixed inset-0 flex items-center justify-center bg-black/40">

<div className="bg-white rounded-2xl p-8 max-w-sm text-center space-y-4">

<i className="fa-solid fa-circle-check text-4xl text-green-500"></i>

<h2 className="text-xl font-semibold">
Payment Confirmation Received
</h2>

<p className="text-gray-600 text-sm">

ShopApple will reach out to you via call or email to confirm your payment and order.

</p>

<button
onClick={()=>navigate("/my-orders", { replace: true })}
className="bg-blue-500 text-white px-6 py-2 rounded-lg"
>

Ok I Understand

</button>

</div>

</div>

)}

</div>

)

}

export default Payment