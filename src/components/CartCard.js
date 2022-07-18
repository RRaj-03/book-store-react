import React from 'react'

const CartCard = (props) => {
    console.log('props.element', props.element)
    const Book = props.element.Book
    const qty = props.element.qty
    return (
        <>
            
                <div className="h-full w-1/4">
                    <img src={Book.image} className="w-full h-full object-center object-cover" />
                </div>
                <div className="md:pl-3 md:w-3/4 w-full">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">ID: {Book.isbn13}</p>
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">{Book.title}</p>
                        <div className="py-1  border border-gray-400 rounded-md px-3 mr-6 focus:outline-none">
                            {qty}
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