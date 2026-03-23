import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {

const { cart,removeItem,increaseQty,decreaseQty } = useContext(CartContext)

const subtotal = cart.reduce(
(total,item)=> total + item.price * item.quantity,
0
)

return (

<div className="max-w-md mx-auto p-6">

<h1 className="text-xl font-bold mb-6 text-center">
My Cart
</h1>

<div className="space-y-4">

{cart.map(item => (

<div
key={item.id}
className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
>

<div className="flex items-center gap-3">

<img
src={item.image}
alt="img"
className="w-14 h-14 rounded-lg object-cover"
/>

<div>

<p className="font-semibold">{item.name}</p>

<p className="text-sm text-gray-500">
${item.price}
</p>

</div>

</div>

<div className="flex items-center gap-2">

<button
onClick={()=>decreaseQty(item)}
className="w-7 h-7 bg-gray-200 rounded-full"
>
-
</button>

<span>{item.quantity}</span>

<button
onClick={()=>increaseQty(item)}
className="w-7 h-7 bg-blue-500 text-white rounded-full"
>
+
</button>

</div>

<button
onClick={()=>removeItem(item)}
className="bg-blue-500 text-white p-3 rounded-xl"
>
<i className="fa-solid fa-trash"></i>
</button>

</div>

))}

</div>

<div className="bg-white mt-6 p-4 rounded-xl shadow">

<div className="flex justify-between mb-3">

<span>Sub Total</span>

<span>${subtotal}</span>

</div>

<button
className="w-full bg-blue-500 text-white py-3 rounded-xl"
>
Checkout1
</button>

</div>

</div>

)

}

export default Cart