import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalState from './context/ModalState';
function App() {
 
  return (
    <>
    <ModalState>
    <Navbar/>
    <Home />
    {/* <BookCard/> */}
    <Modal/>
    <Footer/>
    </ModalState>
    </>
  );
}

export default App;
