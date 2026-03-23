import { useEffect, useState, useContext } from "react"
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import { db } from "../firebase"
import { AuthContext } from "../context/AuthContext"
import Navbar from "../components/navbar"

const UserOrders = () => {

  const { user } = useContext(AuthContext)

  const [orders,setOrders] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    const fetchOrders = async () => {

      if(!user) return

      try{

        const q = query(
          collection(db,"orders"),
          where("userId","==",user.uid),
        
        )

        const snap = await getDocs(q)

        const ordersList = snap.docs.map(doc => {

          const data = doc.data()

          const date = data.createdAt?.toDate()

          const formattedDate = date
          ? new Intl.DateTimeFormat("en-NG",{
              timeZone:"Africa/Lagos",
              year:"numeric",
              month:"short",
              day:"2-digit",
              hour:"2-digit",
              minute:"2-digit",
              hour12:true
          }).format(date)
          : "Processing..."

          return{
            id:doc.id,
            ...data,
            formattedDate
          }

          

        })

        ordersList.sort((a,b)=>{
            return b.createdAt?.seconds - a.createdAt?.seconds
          })

        setOrders(ordersList)

      }catch(err){
        console.log(err)
      }

      setLoading(false)

    }

    fetchOrders()

  },[user])



  if(loading){
    return(
      <div className="min-h-screen flex items-center justify-center font-montserrat">
        Loading your orders...
      </div>
    )
  }



  return(

    <div className="min-h-screen bg-gray-50 p-6 font-montserrat">

      <Navbar/>

      <div className="max-w-4xl mx-auto mt-20 space-y-6">

        <h1 className="text-3xl font-bold">
          My Orders
        </h1>

        {orders.length === 0 && (
          <p>You haven't made any orders yet.</p>
        )}

        {orders.map(order => (

          <div
          key={order.id}
          className="bg-white p-6 rounded-xl shadow space-y-4"
          >

            {/* Order time */}

            <p className="text-sm text-gray-500">
              Ordered on: {order.formattedDate}
            </p>

            {/* Items */}

            <div className="space-y-2">

              {order.items.map((item,index)=>(
                
                <div
                key={index}
                className="flex justify-between text-sm"
                >

                  <span>
                    {item.productName}
                    {item.color && ` | ${item.color}`}
                    {item.storage && ` | ${item.storage}`}
                    {item.sim && ` | ${item.sim}`}
                    {item.condition && ` | ${item.condition}`}
                  </span>

                  <span>
                    {item.quantity} × ${item.pricePerProduct}
                  </span>

                </div>

              ))}

            </div>

            {/* Total */}

            <div className="flex justify-between font-semibold">

              <span>Total</span>
              <span>${order.orderTotal}</span>

            </div>

            {/* Status */}

            <p
            className={`font-semibold text-sm
              ${order.status === "pending" && "text-yellow-600"}
              ${order.status === "confirmed" && "text-blue-500"}
              ${order.status === "delivered" && "text-green-600"}
            `}
            >
              Status: {order.status}
            </p>

          </div>

        ))}

      </div>

    </div>

  )

}

export default UserOrders