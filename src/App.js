import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalState from './context/modal/ModalState';
import Cart from './components/Cart';
import Content from './components/Content';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartState from './context/cart/CartState';
import Genre from './components/Genre';
import { useState } from 'react';
import AlertState from './context/alert/AlertState';
function App() {
  return (
    <>
    <ModalState>
    <AlertState>
    <CartState>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route  path="content/:search" element={<Content />} />
        <Route  path="cart" element={<Cart />} />
        <Route exact path="genre" element={<Genre />}/>
    </Routes>
    <Modal/>
    <Footer/>
    </BrowserRouter> 
    </CartState>
    </AlertState>
    </ModalState>  
    </>
  );
}

export default App;
