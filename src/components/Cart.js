import React, { useContext,useEffect,useState } from "react";
import CartContext from "../context/cart/cartContext";
import CartCard from "./CartCard";
import Alertcontext from '../context/alert/alertContext'


function Cart(props) {
    const alertcontext= useContext(Alertcontext)
    const cartContext = useContext(CartContext)
    const {showAlert} = alertcontext

  const { cart}=cartContext
  function Total() {
    let sum = 0
    cart.forEach(element => {
      sum+=(parseFloat(element.Book.price.slice(1))*element.qty)
    });
    return sum
  }
  const [Subtotal, setSubtotal] = useState(Total())
  useEffect(() => {
    let temp=Total()
    setSubtotal(temp)
  }, [cart])
  
    return (
        <>
            <div>    
                    <div className="container m-auto h-full bg-white" id="chec-div">
                        <div className="  z-10 h-full" id="checkout">
                            <div className="flex md:flex-row flex-col justify-around my-4" id="cart">
                                <div className="lg:w-1/2 w-full  pl-4  pr-4 md:py-12 py-8 bg-white  " id="scroll">
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3 mb-4">Books</p>
                                    {cart.map(element=>{
                                      return(
                                        <div className="md:flex items-center py-8 border-t border-b border-gray-200" key={element.Book.isbn13}>
                                            <CartCard element={element}/>  
                                        </div>
                                      )
                                    })}
                                    
                                </div>
                                <div className="xl:w-1/4 md:w-1/3 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col px-14 py-20 justify-between ">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800">{parseFloat(Subtotal).toFixed(2)}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Shipping(3%)</p>
                                                <p className="text-base leading-none text-gray-800">{parseFloat(Subtotal*0.03).toFixed(2)}</p>
                                            </div>
                                            <div className="flex items-center justify-between pt-5">
                                                <p className="text-base leading-none text-gray-800">Tax(3%)</p>
                                                <p className="text-base leading-none text-gray-800">{parseFloat(Subtotal*0.03).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">{parseFloat(Subtotal*(1.06)).toFixed(2)}</p>
                                            </div>
                                            <button  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white" onClick={()=>{
                                                showAlert("You have checkedOut Successfully","success")
                                            }}>
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Cart;
