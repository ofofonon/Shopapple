import { createContext, useState, useEffect} from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
      })


      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
      }, [cart])


      
      

const addToCart = (item) => {

const existing = cart.find(
product =>
product.id === item.id &&
product.storage === item.storage &&
product.color === item.color &&
product.sim === item.sim &&
product.condition === item.condition
)

if(existing){

setCart(cart.map(product =>
product === existing
? {...product, quantity: product.quantity + 1}
: product
))

}else{

setCart([...cart,{...item,quantity:1}])

}

}

const removeItem = (itemToRemove) => {
setCart(cart.filter(item =>
!(
item.id === itemToRemove.id &&
item.storage === itemToRemove.storage &&
item.color === itemToRemove.color &&
item.sim === itemToRemove.sim &&
item.condition === itemToRemove.condition
)
))
}

const increaseQty = (targetItem)=>{
setCart(cart.map(item =>
item.id === targetItem.id &&
item.storage === targetItem.storage &&
item.color === targetItem.color &&
item.sim === targetItem.sim &&
item.condition === targetItem.condition
? {...item,quantity:item.quantity + 1}
: item
))
}

const decreaseQty = (targetItem)=>{
setCart(cart.map(item =>
item.id === targetItem.id &&
item.storage === targetItem.storage &&
item.color === targetItem.color &&
item.sim === targetItem.sim &&
item.condition === targetItem.condition &&
item.quantity > 1
? {...item,quantity:item.quantity - 1}
: item
))
}

const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

return(
<CartContext.Provider
value={{
cart,
addToCart,
removeItem,
increaseQty,
decreaseQty,
clearCart
}}
>
{children}
</CartContext.Provider>
)

}