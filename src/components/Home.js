import React from 'react'
import { useState,useEffect } from 'react';
import BookCard from './BookCard';
const Home = () => {
    const [Article, setArticle] = useState([])
    const [ViewMore, setViewMore] = useState(false)
    const fetchData= async () => {   
        const url = `https://api.itbook.store/1.0/new`;
        const data = await fetch(url);
        let parsedData = await data.json()
        setArticle(parsedData.books)
      };
      
useEffect(() => {
  fetchData()
}, [])

         
    return (<>
        <div className='mt-10'>
            <div className="flex flex-wrap m-auto my-container container justify-center">
            <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">GENRES</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
                <div className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                            <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2">
                    <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                        <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                        <div className="text-center relative z-10 w-full">
                            <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                            <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460"/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
                    <div className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 w-full my-2 lg:w-1/3 sm:w-1/2">
                        <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460" />
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container my-container px-5 py-14 mx-auto">
                <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">New Arrivals</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
                    <div className="flex flex-wrap justify-center m-4">
                        {Article.slice(0,8).map(element=>{
                            return(
                            <BookCard element={element} category={"NEW ARRIVALS"} id={element.isbn13}/>
)})}
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={(event)=>{event.target.remove();
                        setViewMore(true)}}>View All</button>
                        {ViewMore&&Article.slice(8).map(element=>{
                            return(
                            <BookCard element={element} category={"NEW ARRIVALS"} id={element.isbn13}/>
)})}
                    </div>
                </div>
            </section>
        </>
        )
}

        export default Home