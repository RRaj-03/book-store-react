import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalState from './context/modal/ModalState';
import Cart from './components/Cart';
import Content from './components/Content';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CartState from './context/cart/CartState';
function App() {
  
  return (
    <>
    <ModalState>
    <CartState>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="content/:search" element={<Content />} />
        <Route  path="cart" element={<Cart/>} />
    </Routes>
    <Modal/>
    <Footer/>
    </BrowserRouter> 
    </CartState>
    </ModalState>  
    </>
  );
}

export default App;
