import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import Nav from './Nav';
import Menu2 from './Menu2';
import Products from './Products';
import './akira.css';
import './responsive.css';
import img1 from './images/airplane_icon.png';
import img2 from './images/back_icon.png';
import img3 from './images/music_icon.png';
import CarouselContainer from './component/CarouselContainer';
import LNewsContainer from './component/LNewsContainer';
import Electronics from './Electronics';
import Abovepart from './Abovepart';


const Category = [
  {
      id : 1,
      cname : "COOKING",
  },
  {
      id : 1,
      cname : "FASHION",
  },
  {
      id : 1,
      cname : "ACCESSORIES",
  },
  {
      id : 1,
      cname : "TOYS",
  },
  {
      id : 1,
      cname : "CLOCKS",
  },
  {
      id : 1,
      cname : "ELECTRONICS",
  }

]

export default function Home() {
  return (<div className=''>
            <div className='row'>
              <div className='col-lg-3 cat '>
              <div class="btn-group bg-dark ms-3 px-5">
              <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      = ALL CATEGORY
              </button>
                  
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                  <a href="#" className="list-group-item list-group-item-action">FURNITURE</a>
                           {Category.map((i)=>(
                  <a href="#" className="list-group-item ">{i.cname}</a>
                ))}
                  </ul>
                </div>
              </div>
              <div className='col-lg-9'>
                <CarouselContainer/>
              </div>
            </div>
            <div className='container mt-5'>
              <div className='row ms-auto me-auto'>
                <div className='col-lg-4  bg-white text-white   '>
                <div className='cont box'>
                  <div className='row'>
                      <div className='col-lg-2 pt-2 '>
                        <img src={img1} className='img-fluid icon'/>
                      </div>
                      <div className='col-lg-10 '>
                      <h7>NO LIMITED</h7>
                      <p >Worldwide free shipping</p>
                      </div>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4  bg-white text-white  '>
                <div className='cont box'>
                  <div className='row'>
                      <div className='col-lg-2 pt-2'>
                        <img src={img2} className='img-fluid icon'/>
                      </div>
                      <div className='col-lg-10 '>
                      <h7>MONEY BACK</h7>
                      <p >7 days money back guranteed</p>
                      </div>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 bg-white text-white '>
                <div className='cont box'>
                  <div className='row'>
                      <div className='col-lg-2 pt-2'>
                        <img src={img3} className='img-fluid icon'/>
                      </div>
                      <div className='col-lg-10 '>
                      <h7>SAFETY</h7>
                      <p >We never share your personal info</p>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <Products/>
            <Electronics/>
            <Abovepart/>
           
            
            
  </div>
  )
}
