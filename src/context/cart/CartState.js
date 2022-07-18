import React from 'react'
import CartContext from './cartContext'
import { useState } from 'react'


const CartState = (props) => {
    const [cart, setcart] = useState([])
  return (
    <CartContext.Provider value={{cart,setcart}}>
                  {props.children}
    </CartContext.Provider>
  )
}

export default CartState