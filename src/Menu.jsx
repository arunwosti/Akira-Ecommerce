import React from 'react';
import './akira.css';
import'./responsive.css';

export default function Menu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light menu">
    <div class="container-fluid ">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 pt-3 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><p className='menup'>
            <i class="fad fa-headphones headphone"></i> Support:
                                (+64) 123 456 7890
                                - Email:
                                Contacts@yourssite.com</p></a>
          </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pt-3 ">
          <li className="nav-item dropdown  ">
            <a class="nav-link dropdown-toggle ms-auto" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              $USD
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">EUR</a></li>
              <li><a class="dropdown-item" href="#">USD$</a></li>
              
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <img src='https://akira-elementor.axonvip.com/supper-market/img/l/1.jpg' /> ENGLISH
            </a>
            <ul class="dropdown-menu ms-auto" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#"><img src='https://akira-elementor.axonvip.com/supper-market/img/l/1.jpg' />ENGLISH</a></li>
              <li><a class="dropdown-item" href="#"><img src="https://akira-elementor.axonvip.com/supper-market/img/l/2.jpg"/>ESPANOL</a></li>
              <li><a class="dropdown-item" href="#"><img src="https://akira-elementor.axonvip.com/supper-market/img/l/3.jpg"/>FRANCOS</a></li>
              <li><a class="dropdown-item" href="#"><img src="https://akira-elementor.axonvip.com/supper-market/img/l/3.jpg"/>ITALINO</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">MY ACCOUNT</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  );
}
