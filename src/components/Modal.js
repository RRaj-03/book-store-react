import React, { useContext,useEffect } from 'react'
import CartContext from '../context/cart/cartContext'
import modalContext from '../context/modal/modalContext'
const Modal = () => {
    const Modalcontext = useContext(modalContext)
    const cartContext = useContext(CartContext)
    const { reset,Book,modal,fetchData } =Modalcontext
    const { cart,setcart}=cartContext
    var newcartitem = true
    useEffect(() => {
        if(modal.id){
          fetchData(modal.id).then(()=>{})   
          
        }
        }, [modal])
    return (
        modal.id && <>
            <div id="extralarge-modal" tabIndex="-1" className=" overflow-y-scroll overflow-x-hidden fixed top-0 right-0 left-0 z-[51] w-full md:inset-0 h-modal" >
                <div className="relative p-4 w-full max-w-7xl h-full md:h-auto m-auto z-[52]" >
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex justify-between items-center p-5 rounded-t border-b bg-[#1717197a]">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Books
                            </h3>
                            <button type="button" className="text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="extralarge-modal" onClick={() => { 
                            reset()
                        }}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <section className="text-gray-600 body-font overflow-hidden" tabIndex={-2}>
                            <div className="container px-5 py-14 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{Book.authors + "'s"}</h2>
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{Book.title}</h1>
                                        <div className="flex mb-4">
                                            <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Detail</a>
                                        </div>
                                        <p className="leading-relaxed mb-4">{Book.desc} </p>
                                        <div className="flex border-t border-gray-200 py-2">
                                            <span className="text-gray-500">Pages</span>
                                            <span className="ml-auto text-gray-900">{Book.pages}</span>
                                        </div>
                                        <div className="flex border-t border-gray-200 py-2">
                                            <span className="text-gray-500">Rating</span>
                                            <span className="ml-auto text-gray-900">{Book.rating}</span>
                                        </div>
                                        <div className="flex border-t border-gray-200 py-2">
                                            <span className="text-gray-500">Language</span>
                                            <span className="ml-auto text-gray-900">{Book.language}</span>
                                        </div>
                                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                            <span className="text-gray-500">Publish Year</span>
                                            <span className="ml-auto text-gray-900">{Book.year}</span>
                                        </div>

                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-gray-900">{Book.price}</span>
                                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={(event)=>{
                                                event.preventDefault();
                                                const newitem = Book;
                                                newcartitem= true
                                                cart.forEach(element => {
                                                    if(element.Book.isbn13===newitem.isbn13){
                                                        element.qty++
                                                        newcartitem=false
                                                    }
                                                });
                                                if(newcartitem){
                                                    setcart(cart.concat({Book:newitem,qty:1}))
                                                }
                                            }}>Add to Cart</button>

                                        </div>
                                    </div>
                                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={Book.image} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal