import logo from './logo.svg';
import './App.css';
import './akira.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Nav from './Nav';
import Menu2 from './Menu2';
import Footer from './Footer';
import OwlCarousel from 'react-owl-carousel2';
import CarouselContainer from './component/CarouselContainer';
import Carousel from 'react-multi-carousel';
import MultipleItems from './component/MultiCarousel';








function App() {
  return (
    <div className="">
      <Header/>
      <Menu/>
      <Nav/>
      <Menu2/>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      
       <MultipleItems/>
       
      <Footer/>
    </div>
  );
}

export default App;
