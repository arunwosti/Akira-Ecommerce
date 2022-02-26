import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './akira.css';
import'./responsive.css';

export default function Menu2() {
  return  (
    
        <nav class="navbar navbar-expand-lg navbar-dark custombg">
        <div class="container-fluid">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse custom-nav" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 men2">
              
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li class="nav-item  ">
                <Link class="nav-link active" to="/shop">SHOP</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/blog">BLOG</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/pages">PAGES</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/contact">CONTACT US</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/buy">BUY</Link>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
      
      
  );
}
