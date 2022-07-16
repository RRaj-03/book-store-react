import React from 'react'
import { useState } from 'react'
const Navbar = () => {
    const [HamburgerMenu, setHamburgerMenu] = useState(false)

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
                <a className="flex title-font font-medium items-center text-gray-900 mb-0 lg:absolute lg:left-[45%]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <div className='lg:block hidden'>

                    <button className="inline-flex items-center mx-2 text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Log IN
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    <button className="inline-flex items-center mx-2 text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">Sign UP
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={'bg-gray-300 h-[100%] fixed w-[100%] sm:w-[40%] lg:w-[30%] top-0 transition-all  left-[-100%] sm:left-[-40%] lg:left-[-30%] my-navBoxShadow' + (HamburgerMenu ? " transform  lg:translate-x-[100%] sm:translate-x-[100%] translate-x-[100%]" : "")}>
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
                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className='md:m-auto flex flex-col items-center text-base justify-center'>
                        <div className='text-3xl mt-3'>Geners</div>
                        <a className="m-auto text-xl hover:text-gray-900 my-1 mt-3">First Link</a>
                        <a className="m-auto text-xl hover:text-gray-900 my-1">Second Link</a>
                        <a className="m-auto text-xl hover:text-gray-900 my-1">Third Link</a>
                        <a className="m-auto text-xl hover:text-gray-900 my-1">Fourth Link</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar