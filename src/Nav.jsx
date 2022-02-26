import React from 'react';

export default function Nav() {
  return <div className='container navv2'>
            <div className='row me-auto'>
                <div className='col-lg-2  logo'>
                    <img src='https://akira-elementor.axonvip.com/modules/axoncreator/img/spm/spm-logo-b.png'/>
                </div>
                <div className='col-lg-9  '>
                <nav class="navbar navbar-expand-lg navbar-light bg-white">
  
    
    
      
      <form class="d-flex  srch">
        <input class="form-control me-1 px-5" type="search" placeholder="Enter your keywords....." aria-label="Search"/>
        <button class="btn btn-outline-success " type="submit"><i class="fas fa-search"></i></button>
      </form>
    
 
        </nav>
                </div>
                
                  
                <div className='col-lg-1 pt-1  cart'><a href='#'><i class="far fa-heart fonte love"></i></a><i class="far fa-shopping-bag fonte pt-2"></i></div>
                  
                
                
                
            </div>
            </div> 
  ;
}
