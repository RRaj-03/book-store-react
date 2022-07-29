import React from 'react'
const BookCard = (props) => {
    
    return (
        <>
        <div className='hover:bg-gray-300 p-4'>
            
        <a className="block relative h-48 rounded overflow-hidden ">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={props.element.image} />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{props.category.toUpperCase()}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{props.element.title}</h2>
                <p className="mt-1">{props.element.price}</p>
            </div>
        </div>
        
        </>
    )
}

export default BookCard