import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalState from './context/ModalState';
import Content from './components/Content';
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  
  return (
    <>
    <ModalState>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="content/:search" element={<Content />} />
        
    </Routes>
    <Modal/>
    <Footer/>
    </BrowserRouter> 
    </ModalState>  
    </>
  );
}

export default App;
