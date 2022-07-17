import React from 'react'
import ModalContext from './modalContext'
import { useState } from 'react'


const ModalState = (props) => {
  
    const [Book, setBook] = useState({})
  const [modal, setModal] = useState({})
  function showModal(id) {
    setModal({
      id:id
    })
  }
  function reset() {
    setBook({});
    setModal({});
  }
  const fetchData = async () => {
    const url = `https://api.itbook.store/1.0/books/${modal.id}`;
    const data = await fetch(url);
    let parsedData = await data.json()
    setBook(parsedData)
};

    
    return (
        <ModalContext.Provider value={{ showModal,reset,fetchData,Book,modal }}>
          {props.children}
        </ModalContext.Provider>
      )
}

export default ModalState