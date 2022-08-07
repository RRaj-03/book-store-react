import React,{useContext,useState} from 'react'
import CartContext from "../context/cart/cartContext";
const CartCard = (props) => {
    const cartContext = useContext(CartContext)
    const { cart,setcart}=cartContext
    const Book = props.element.Book
    const [qty, setqty] = useState(props.element.qty)
    
    return (
        <>
            
                <div className="h-full w-1/4">
                    <img src={Book.image} className="w-full h-full object-center object-cover" />
                </div>
                <div className="md:pl-3 md:w-3/4 w-full">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">ID: {Book.isbn13}</p>
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">{Book.title}</p>
                        <div className='flex'>
                        <button type="button" className=" block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-tl-md rounded-bl-md text-sm px-3 py-1 text-center " onClick={() => {cart.forEach((element,index) => {
                           if(element.Book.isbn13===props.element.Book.isbn13) {
                            if(qty===1){
                                cart.splice(index,1)
                                setcart(cart.splice(0))
                                setqty(0)
                            }else{
                                setqty(qty-1)
                                let newCart =  cart.slice()
                                newCart[index].qty--
                                setcart(newCart)
                           }}
                        });
                }} id="viewMore">-</button>
                        <div className="py-1  border border-gray-400 px-3 focus:outline-none">
                            {qty}
                        </div>
                        <button type="button" className=" block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-tr-md rounded-br-md text-sm px-3 py-1 text-center " onClick={() => { cart.forEach((element,index) => {
                           if(element.Book.isbn13===props.element.Book.isbn13) {
                                setqty(qty+1)
                                let newCart =  cart.slice()
                                newCart[index].qty++
                                setcart(newCart)
                           }
                        });
                }} id="viewMore">+</button>
                        
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 pt-2">Language: {Book.language}</p>
                    <p className="text-xs leading-3 text-gray-600 py-4">Pages: {Book.pages}</p>
                    <p className=" text-xs leading-3 text-gray-600">Year: {Book.year}</p>
                    <div className="flex items-center justify-between pt-5  ">
                        <p className="text-base font-black leading-none text-gray-800">{Book.price}</p>
                    </div>
                </div>
            
        </>
    )
}

export default CartCard