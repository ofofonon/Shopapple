import { useContext, useState, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { doc, getDoc} from "firebase/firestore"
import { db } from "../firebase"
import logo5 from "../Assets/image 12.png"
import logo6 from "../Assets/image 32.png"


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const { cart, removeItem, increaseQty, decreaseQty} = useContext(CartContext)
  const { user, role } = useContext(AuthContext)
  const navigate = useNavigate()
  

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  // NEW STATES FOR MODALS
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const [showProfilePrompt, setShowProfilePrompt] = useState(false)
  const [orderReady, setOrderReady] = useState(null)

  const [loading, setLoading] = useState(false)
  
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleCheckout = async () => {
    if (!user) {
      setShowLoginPrompt(true)
      return
    }

    setLoading(true)

    try {
     
      const userRef = doc(db, "users", user.uid)
      const userSnap = await getDoc(userRef)
      
      if (!userSnap.exists()){
        setLoading(false)
        return
      } 

      const userData = userSnap.data()

      if (!userData.transferAccount || userData.transferAccount.trim() === "") {
        setShowProfilePrompt(true)
        setLoading(false)
        return
      }

      const order = {
        userId: user.uid,
        name: userData.name,
        email: user.email,
        phone: userData.phone,
        transferAccount: userData.transferAccount,
        deliveryLocation: userData.deliveryLocation,
        state: userData.state,
        landmark: userData.landmark || "",
        items: cart,
        total: subtotal,
        createdAt: new Date()
      }

      setOrderReady(order)
    } catch (err) {
      console.error("Error checking out:", err)
    }
    setLoading(false)
  }

  return (
    <>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-10 lg:py-2 py-4 flex items-center justify-between transition-all duration-500 rounded-b-2xl 
        ${isScrolled ? "bg-blue-500 text-white shadow-lg" : "bg-white text-blue-500"}`}
      >

        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
         <img src={` ${isScrolled ? logo5 : logo6}`} alt="logo" className="lg:w-[16%] w-[80%]"/>
        </div>

        {/* SEARCH BAR (hidden on small screens) */}
        <div className="relative w-[50%] hidden md:block">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2"></i>
          <input
            type="text"
            placeholder="Search here"
            className={`w-full pl-10 pr-4 mr-4 py-2 rounded-full outline-none border border-[1px] transition-colors duration-500
            ${isScrolled
              ? "bg-blue-500 border-white placeholder-white text-white"
              : "bg-white border-blue-500 placeholder-black"
            }`}
          />
        </div>

        <div className="flex items-center gap-6 text-xl">

          <i className="fa-solid fa-house cursor-pointer" onClick={() => navigate("/")}></i>

          <i
            className="fa-solid fa-user cursor-pointer"
            onClick={() =>
              navigate(
                !user
                  ? "/signup"
                  : role === "admin"
                  ? "/admin"
                  : "/profile"
              )
            }
          ></i>

          <div className="relative cursor-pointer" onClick={() => setCartOpen(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <i
            className="fa-solid fa-bars cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          ></i>

        </div>
      </nav>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-72 z-50 transform transition-transform duration-500 rounded-l-2xl shadow-2xl
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        ${isScrolled ? "bg-blue-500 text-white" : "bg-white text-blue-500"}
        `}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <i
            className="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          ></i>
        </div>

        <div className="flex flex-col h-full p-8">

          <div className="space-y-6 text-lg">
            <p onClick={()=>navigate("/about")} className="cursor-pointer">About</p>
            <p onClick={()=>navigate("/contactus")} className="cursor-pointer">Contact</p>
            <p onClick={()=>navigate("/faq")} className="cursor-pointer">FAQ</p>
            <p onClick={()=>navigate("/tnc")} className="cursor-pointer">Terms</p>
          </div>

          <div className="mt-auto mb-[50px] ">
            <button
              className={`w-full py-3 rounded-full font-semibold transition-colors duration-500
              ${isScrolled
                ? "bg-white text-blue-500"
                : "bg-blue-500 text-white"
              }`}
              onClick={() =>
                navigate(
                  !user
                    ? "/signup"
                    : role === "admin"
                    ? "/admin"
                    : "/profile"
                )
              }
            >
              {user ? "Profile" : "Signup"}
            </button>
          </div>

        </div>
      </div>

      {/* CART */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-500 shadow-2xl
        ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4 pb-0">
          <i
            className="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={() => setCartOpen(false)}
          ></i>
        </div>

        <div className="p-6 flex flex-col h-full">
          <h2 className="text-xl font-bold mb-6">My Cart</h2>

          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
              <i className="fa-solid fa-cart-shopping text-4xl text-gray-300"></i>
              <p className="text-gray-500">Your cart is empty</p>
              <button
                onClick={() => {
                  setCartOpen(false)
                  navigate("/")
                 document.getElementById("target-section")?.scrollIntoView({behavior: "smooth"})
                }}
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto space-y-4">
              {cart.map(item => (
                <div
                  key={`${item.id}-${item.storage}-${item.color}-${item.sim}-${item.condition}`}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <img
                      alt="ttt"
                      src={item.image}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">₦{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => decreaseQty(item)} className="w-7 h-7 bg-gray-300 rounded-full">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item)} className="w-7 h-7 bg-blue-500 text-white rounded-full">+</button>
                  </div>

                  <button onClick={() => removeItem(item)} className=" text-blue-500 p-2 rounded-lg">
                    <i className="fa-solid fa-trash"></i>
                  </button>

                </div>
              ))}
            </div>
          )}

          <div className="mt-6">
            <div className="flex justify-between mb-4 font-semibold">
              <span>Subtotal</span>
              <span>₦{subtotal}</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={cart.length === 0 || loading }
              className={`w-full py-3 rounded-xl text-white mb-[50px]
              ${cart.length === 0 || loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500"}
              `}
            >
              {loading ? (
              <span className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-spinner fa-spin"></i> 
              </span>
            ) : "Check Out"}
            </button>


            {showLoginPrompt && ( <div className="fixed inset-0 z-50 flex items-center justify-center"> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowLoginPrompt(false)} ></div> <div className="relative bg-white p-6 rounded-3xl z-10 w-80 md:w-96 mx-4 text-center"> <h2 className="text-xl font-bold mb-4">Please Log In</h2> <p className="text-gray-600 mb-6">You need to log in to proceed to checkout.</p> <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={() => navigate("/login")} > Log In </button> </div> </div> )}


            {showProfilePrompt && ( <div className="fixed inset-0 z-50 flex items-center justify-center"> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowProfilePrompt(false)} ></div> <div className="relative bg-white p-6 rounded-3xl z-10 w-80 md:w-96 mx-4 text-center"> <h2 className="text-xl font-bold mb-4">Complete Your Profile</h2> <p className="text-gray-600 mb-6"> You need to add your Transfer Account name in your profile before checking out. </p> <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={() => navigate("/profile")} > Complete Profile </button> </div> </div> )}

            {orderReady && ( <div className="fixed inset-0 z-50 flex items-center justify-center"> <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOrderReady(null)} ></div> <div className="relative bg-white p-6 rounded-3xl z-10 w-80 md:w-96 mx-4 text-center"> <h2 className="text-xl font-bold mb-4">Order Ready</h2> <p className="text-gray-600 mb-4"> Your order is ready to be submitted. Verify your items before proceeding. </p> <div className="text-left max-h-48 overflow-y-auto mb-4"> {orderReady.items.map((item, idx) => ( <p key={idx} className="text-sm">{item.name} - {item.quantity} - ₦{item.price}</p> ))} <p className="font-semibold mt-2">Total: ₦{orderReady.total}</p> </div> <button className="bg-blue-500 text-white py-2 px-4 rounded-full" 
            onClick={() => { // Here you could call a function to send order to admin / firebase 
              navigate("/payment", { state: { order: orderReady }, replace: true }) 
              console.log("Order ready to send:", orderReady) }}
              disabled={loading} >
                 {loading ? (
              <span className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-spinner fa-spin"></i> 
              </span>
            ) : "Confirm Order"} 
                 </button> 
                 </div> 
                 </div> )} 
          </div>
        </div>
      </div>

      {(sidebarOpen || cartOpen) && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => {
            setSidebarOpen(false)
            setCartOpen(false)
          }}
        ></div>
      )}

    </>
  )
}

export default Navbar