import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import modalContext from '../context/modal/modalContext';
import BookCard from './BookCard';
const Home = (props) => {
    const context = useContext(modalContext)
    const { showModal } =context
    const [Article, setArticle] = useState([])
    const [ViewMore, setViewMore] = useState(false)
    const fetchDataBooks = async () => {
        const url = `https://api.itbook.store/1.0/new`;
        const data = await fetch(url);
        let parsedData = await data.json()
        setArticle(parsedData.books)
    };

    useEffect(() => {
        fetchDataBooks()
    }, [])
    return (<>
        <div className="container m-auto">
        </div>
        <div className='mt-10'>
            <div className="flex flex-wrap m-auto my-container container justify-center">
                <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">GENRES</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet ullam iusto numquam explicabo tempore, sed debitis </p>
                </div>
                <Link className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2" to={"/content/math"}>
                    <div className="flex flex-wrap w-full bg-[#eaeaec] sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-gray-300">
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Maths</h2>
                        </div>
                    </div>
                </Link>
                <Link className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2" to={"/content/chem"}>
                    <div className="flex flex-wrap w-full bg-[#eaeaec] sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-gray-300">
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Chemistry</h2>
                        </div>
                    </div>
                </Link>
                <Link className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2" to={"/content/physics"}>
                    <div className="flex flex-wrap w-full bg-[#eaeaec] sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-gray-300">
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Physics</h2>
                        </div>
                    </div>
                </Link>
                <Link className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2" to={"/content/sports"}>
                    <div className="flex flex-wrap w-full bg-[#eaeaec] sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-gray-300">
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Sports</h2>
                        </div>
                    </div>
                </Link>
                <Link className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2" to={"/content/tech"}>
                    <div className="flex flex-wrap w-full bg-[#eaeaec] sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-gray-300">
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Tech</h2>
                        </div>
                    </div>
                </Link>
                <Link className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2" to={"/genre"}>
                    <div className="flex flex-wrap w-full bg-[#eaeaec] sm:py-24 py-16 sm:px-10 px-6 relative hover:bg-gray-300">
                        <div className="text-center relative z-10 w-full mt-3 text-indigo-500 justify-center inline-flex items-center">
                            <h2 className="text-xl text-gray-900 font-medium title-font">View ALL</h2>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <section className="text-gray-600 body-font">
            <div className="container my-container px-5 py-14 mx-auto">
                <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">New Arrivals</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                </div>
                <div className="flex flex-wrap justify-center m-4">
                    {Article.slice(0, 8).map(element => {
                        return (
                            <div className="lg:w-1/4 mmm:w-1/3 "  key={element.isbn13} onClick={()=>{
                                showModal(element.isbn13)
                            }}>
                            <BookCard element={element} category={"NEW ARRIVALS"} />
                            </div>
                        )
                    })}
                    {ViewMore && Article.slice(8).map(element => {
                        return (
                            <div className="lg:w-1/4 mmm:w-1/3 p-4"  key={element.isbn13} onClick={()=>{
                                showModal(element.isbn13)
                            }}>
                            <BookCard element={element} category={"NEW ARRIVALS"} />
                            </div>
                        )
                    })}
                </div>
                <button type="button" className="m-auto block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={(event) => {
                    event.target.remove();
                    setViewMore(true)
                }}>View All</button>
            </div>
        </section>
    </>
    )
}

export default Home