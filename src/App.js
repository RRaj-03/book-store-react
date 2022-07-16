import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import BookCard from './components/BookCard';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <BookCard/> */}
    <Footer/>
    </>
  );
}

export default App;
