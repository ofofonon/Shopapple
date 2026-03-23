import { useEffect, useState } from "react"
import { collection, getDocs, doc, updateDoc, query, orderBy } from "firebase/firestore"
import { db } from "../firebase"
import Navbar from "../components/navbar"

const AdminOrders = () => {

  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        
        const q = query(
          collection(db,"orders"),
          orderBy("createdAt","desc") // 🔥 newest first
        )
        
        const ordersSnap = await getDocs(q)
  
        const ordersList = ordersSnap.docs.map((doc) => {
          const data = doc.data();
  
          // Convert Firestore timestamp to JS Date
          const date = data.createdAt?.toDate();
  
          // Format to Nigerian time
          const formattedDate = date
            ? new Intl.DateTimeFormat("en-NG", {
                timeZone: "Africa/Lagos",
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
              }).format(date)
            : "Processing...";
  
          return {
            id: doc.id,
            ...data,
            formattedDate,
          };
        });
  
        setOrders(ordersList);
      } catch (err) {
        console.log(err);
      }
  
      setLoading(false);
    };
  
    fetchOrders();
  }, []);


  // update order status
  const updateStatus = async (orderId,newStatus)=>{

    try{

      const orderRef = doc(db,"orders",orderId)

      await updateDoc(orderRef,{
        status:newStatus
      })

      setOrders(prev =>
        prev.map(order =>
          order.id === orderId ? { ...order, status:newStatus } : order
        )
      )

    }catch(err){
      console.log(err)
    }

  }


  if(loading){
    return(
      <div className="min-h-screen flex items-center justify-center font-montserrat">
        Loading orders...
      </div>
    )
  }

  return(

    <div className="min-h-screen bg-gray-50 p-6 font-montserrat">

      <Navbar/>

      <div className="max-w-5xl mx-auto mt-20 space-y-6">

        <h1 className="text-3xl font-bold">
          Manage Orders
        </h1>

        {orders.length === 0 && (
          <p>No orders yet</p>
        )}

        {orders.map(order => {

          const date = order.createdAt?.toDate()

          return(

          <div
          key={order.id}
          className="bg-white p-6 rounded-xl shadow space-y-4"
          >

            {/* CUSTOMER INFO */}
            <div>

              <h2 className="font-semibold text-lg">
                {order.customer.name}
              </h2>

              <p className="text-sm text-gray-600">
                {order.customer.email}
              </p>

              <p className="text-sm text-gray-600">
                {order.customer.phone}
              </p>

              <p className="text-sm text-gray-600">
                {order.customer.state} - {order.customer.deliveryLocation}
              </p>

              {order.customer.landmark && (
                <p className="text-sm text-gray-500">
                  Landmark: {order.customer.landmark}
                </p>
              )}

              {/* ORDER TIME */}
              <p className="text-sm text-gray-400 mt-1">
                Ordered on: {order.formattedDate}
              </p>

            </div>


            {/* ORDER ITEMS */}
            <div className="space-y-2">

              {order.items.map((item,index)=>(

                <div
                key={index}
                className="flex justify-between text-sm p-3 bg-gray-200 rounded-lg "
                >

                  <span>
                    {item.productName}
                    {item.color && ` | ${item.color}`}
                    {item.storage && ` | ${item.storage}`}
                    {item.sim && ` | ${item.sim}`}
                    {item.condition && ` | ${item.condition}`}
                  </span>

                  <span>
                    {item.quantity} x ${item.pricePerProduct}
                  </span>

                </div>

              ))}

            </div>


            {/* ORDER TOTAL */}
            <div className="flex justify-between font-semibold">

              <span>Total</span>
              <span>${order.orderTotal}</span>

            </div>


            {/* ORDER STATUS */}
            <div className="flex items-center justify-between">

              <span
              className={`text-sm font-semibold
                ${order.status === "pending" && "text-yellow-600"}
                ${order.status === "confirmed" && "text-blue-500"}
                ${order.status === "delivered" && "text-green-600"}
              `}
              >
                Status: {order.status}
              </span>

              <div className="flex gap-2">

                <button
                onClick={()=>updateStatus(order.id,"confirmed")}
                className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                >
                  Confirm
                </button>

                <button
                onClick={()=>updateStatus(order.id,"delivered")}
                className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                >
                  Delivered
                </button>

              </div>

            </div>

          </div>

        )})}

      </div>

    </div>

  )
}

export default AdminOrders