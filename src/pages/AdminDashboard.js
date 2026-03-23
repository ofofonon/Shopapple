import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { doc, getDoc, collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import Navbar from "../components/navbar"
import products from "../data/products"; 


const AdminProfile = () => {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [loading,setLoading] = useState(true)

  

  const [stats,setStats] = useState({
    products:0,
    orders:0,
    users:0
  })

  

  useEffect(() => {
    if (!user) return;
  
    // fetch admin profile once
    const loadAdminProfile = async () => {
      try {
        const adminRef = doc(db, "users", user.uid);
        const adminSnap = await getDoc(adminRef);
        if (adminSnap.exists()) {
          const data = adminSnap.data();
          setName(data.name || "Admin");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
  
    loadAdminProfile();
  
    // products count from local array
    setStats((prev) => ({ ...prev, products: products.length }));
  
    // real-time orders and users
    const unsubscribeOrders = onSnapshot(collection(db, "orders"), (snap) => {
      setStats((prev) => ({ ...prev, orders: snap.size }));
    });
  
    const unsubscribeUsers = onSnapshot(collection(db, "users"), (snap) => {
      setStats((prev) => ({ ...prev, users: snap.size }));
    });
  
    return () => {
      unsubscribeOrders();
      unsubscribeUsers();
    };
  }, [user]);

  const handleLogout = async ()=>{
    await logout()
    navigate("/login")
  }

  if(loading){
    return (
      <div className="min-h-screen flex items-center justify-center font-montserrat">
        <p className="text-gray-600">Loading admin profile...</p>
      </div>
    )
  }

  return (

    <div className="min-h-screen bg-gray-50 flex justify-center p-4 font-montserrat">
        <Navbar />
      <div className="w-full max-w-md space-y-6 mt-20">
      <h1 className="text-4xl text-black font-bold ">Admin</h1>
        {/* Admin Card */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold text-white">
              {name[0].toUpperCase()}
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800">{name}</p>
              <p className="text-gray-500 text-sm">{user?.email}</p>
              <p className="text-purple-600 text-xs uppercase tracking-wide font-semibold">
                Admin
              </p>
            </div>

          </div>

        </div>


        {/* Admin Stats */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">

          <h2 className="font-semibold text-gray-700">
            Platform Statistics
          </h2>

          <div className="grid grid-cols-3 gap-4 text-center">

            <div>
              <p className="text-2xl font-bold text-blue-500">{stats.products}</p>
              <p className="text-xs text-gray-500">Products</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-green-600">{stats.orders}</p>
              <p className="text-xs text-gray-500">Orders</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-purple-600">{stats.users}</p>
              <p className="text-xs text-gray-500">Users</p>
            </div>

          </div>

        </div>


        {/* Admin Actions */}
        <div className="bg-white rounded-xl shadow divide-y divide-gray-200">

          

          <button
          onClick={()=>navigate("/admin/orders")}
          className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3">
            <i className="fa-solid fa-shopping-cart"></i>
            Manage Orders
          </button>

          <button
          onClick={()=>navigate("/admin/users")}
          className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3">
            <i className="fa-solid fa-users"></i>
            Manage Users
          </button>

          <button
          onClick={handleLogout}
          className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3 text-red-600">
            <i className="fa-solid fa-sign-out-alt"></i>
            Logout
          </button>

        </div>
        
      </div>
   
    </div>

  )
}

export default AdminProfile