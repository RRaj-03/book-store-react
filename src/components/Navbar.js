import React from 'react'
import { useState,useContext } from 'react'
import { useNavigate, Link } from "react-router-dom";
import CartContext from "../context/cart/cartContext";
import Alert from './Alert.js';
const Navbar = (props) => {
    const cartContext = useContext(CartContext)
    const { cart}=cartContext
    const [HamburgerMenu, setHamburgerMenu] = useState(false)
    let navigate = useNavigate();
    const searchFor = (event) => {
        event.preventDefault()
        const search = document.getElementById('search-dropdown')
        navigate(`/content/${search.value}`)
        search.value = ""
    }
    return (

        <header className=" body-font z-50 sticky top-0 my-navBoxShadow bg-white">
            <div className="mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
                <nav className="flex flex-wrap items-center text-base justify-start">

                    <button className="relative group">
                        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-indigo-500 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md" onClick={() => {
                            if (HamburgerMenu) {
                                setHamburgerMenu(false)
                            } else {
                                setHamburgerMenu(true)
                            }
                        }}>
                            <div className="flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div className="bg-white h-[3px] w-7 transform transition-all duration-300 origin-left "></div>
                                <div className="bg-white h-[3px] w-7 transform transition-all duration-300 origin-left "></div>
                                <div className="bg-white h-[3px] w-7 transform transition-all duration-300 origin-left "></div>


                            </div>
                        </div>
                    </button>


                </nav>
                <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-0 lg:absolute lg:left-[45%]" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl mmm:block hidden">Book-store</span>
                </Link>
                <Link to={"/cart"}>
                    <button className="inline-flex relative  items-center mx-2 text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0"><span className="mmm:block hidden">Cart</span>
                        <span className="absolute top-0 left-full -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-xs text-white rounded-md bg-red-600">
                            {cart.length}
                            <span className="hidden">unread messages</span>
                        </span>
                        <svg className="flex-shrink-0 h-6 w-6 mmm:ml-2 text-white group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </Link>
            </div>
            <div className={'bg-gray-300 h-auto sm:h-full fixed w-[100%] sm:w-[40%] lg:w-[30%] top-0 transition-all  left-[-100%] sm:left-[-40%] lg:left-[-30%] my-navBoxShadow' + (HamburgerMenu ? " transform  lg:translate-x-[100%] sm:translate-x-[100%] translate-x-[100%]" : "")}>
                <nav className="md:m-auto flex flex-col items-center text-base justify-center">
                    <button type="button" className="ml-auto mr-2 my-2 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => {
                        if (HamburgerMenu) {
                            setHamburgerMenu(false)
                        } else {
                            setHamburgerMenu(true)
                        }
                    }}>
                        <span className="sr-only">Close menu</span>

                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <form className='w-[80%] my-5'>
                        <div className="flex">
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search ..." required="" />
                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={async (event) => {
                                    searchFor(event)
                                }}>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className='w-full text-center flex flex-col items-center text-base justify-center mb-10 '>
                        <Link to={"/genre"} className='text-3xl mt-3 font-bold rounded-md hover:text-gray-200 hover:bg-indigo-500 w-full px-4 py-1'>Genres</Link>
                        <Link to={"/content/tech"} className="w-full text-xl px-4 py-2 rounded-md hover:text-gray-200 hover:bg-indigo-500 my-1 mt-3">Tech</Link>
                        <Link to={"/content/sports"} className="w-full text-xl px-4 py-2 rounded-md hover:text-gray-200 hover:bg-indigo-500 my-1 ">Sports</Link>
                        <Link to={"/content/physics"} className="w-full text-xl px-4 py-2 rounded-md hover:text-gray-200 hover:bg-indigo-500 my-1 ">Physics</Link>
                        <Link to={"/content/chem"} className="w-full text-xl px-4 py-2 rounded-md hover:text-gray-200 hover:bg-indigo-500 my-1 ">Chemistry</Link>
                        <Link to={"/content/math"} className="w-full text-xl px-4 py-2 rounded-md hover:text-gray-200 hover:bg-indigo-500 my-1 ">Math</Link>
                    </div>
                </nav>
            </div>
<Alert/>

        </header>
    )
}

export default Navbar