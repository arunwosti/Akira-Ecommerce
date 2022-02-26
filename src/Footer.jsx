import React from 'react';
import './akira.css';



export default function Footer() {
  return <div className=' bg-dark text-white fbox'>
      <div className='row fimg '>
        <div className='col-lg-12 text-center pt-5 px-5'>
        
        <img src='https://akira-elementor.axonvip.com/modules/axoncreator/img/spm/spm-logo-w.png' className='img-fluid '/>
        
      </div>
      </div>
      <div className='row  '>
        <div className='col-lg-2'></div>
        <div className='col-lg-8 text-center '>
        
        
        <p className='footp'>Akira is a Nepali apparel retailer based in Kathmandu,Nepal. The company specializes in fast fashion, and products include clothing, accessories, shoes, swimwear, beauty, and perfumes.</p>
      </div>
      <div className='col-lg-2'></div>
      </div>
      <hr></hr>
      <div className='container'>
     <div className='row list '>
        <div className='col-lg-3 back'>
        <h5>CONTACT US</h5>
        <div className='row '>
          <div className='col-lg-2 '><i class="fad fa-home-lg"></i></div>
           <div className='col-lg-10 footpb '><a href='#' className='aref'>
           123 New Design<br></br>
            Str ABC
                            Building,<br></br>
                            Melbourne,
                             Australia
            </a>
          </div>
          
        </div>
        <div className='row pt-2'>
          <div className='col-lg-2'><i class="fas fa-phone-alt"></i></div>
          <div className='col-lg-10 '>
          <a href='#' className='aref'>
            (+1)866-550-3669
            </a>
          </div>
          
        </div> 
        <div className='row pt-2'>
          <div className='col-lg-2'><i class="fas fa-envelope"></i></div>
          <div className='col-lg-10 '>
          <a href='#' className='aref'>
           Contact@yoursite.com
           </a>
          </div>
          
        </div>
        <div className='row pt-2'>
          <div className='col-lg-2'><i class="far fa-clock"></i></div>
          <div className='col-lg-10 footpb'>
          <a href='#' className='aref'>
            Mon-Sat: 8AM-5PM<br></br>
            Sun:9AM-8PM
            
            </a> 
          </div>
          
        </div>
        </div>
        <div className='col-lg-2 pt-2 text-left'>
        <ul>
            <li><h5>INFORMATION</h5></li>
            <a href='#' className='aref'>
            <li className='footpb'>My account</li>
            </a>
            <a href='#' className='aref'> <li className='footpb'>Cart</li></a>
            <a href='#' className='aref'><li className='footpb'>Order history</li></a>
            <a href='#' className='aref'> <li className='footpb'>Addresses</li></a>
            <a href='#' className='aref'> <li className='footpb'>Identity</li></a>
            <a href='#' className='aref'> <li className='footpb'>Sitemap</li></a>
            <a href='#' className='aref'> <li className='footpb'>Order history</li>
            </a>
          </ul>
        </div>
        <div className='col-lg-2 pt-2'>
        <ul>
            <li><h5>QUICK LINKS</h5></li>
            <a href='#' className='aref'> <li className='footpb'>Delivery</li></a>
            <a href='#' className='aref'> <li className='footpb'>Legal Notice</li></a>
            <a href='#' className='aref'> <li className='footpb'>About us</li></a>
            <a href='#' className='aref'> <li className='footpb'>Secure payment</li></a>
            <a href='#' className='aref'><li className='footpb'>Prices drop</li></a>
            <a href='#' className='aref'><li className='footpb'>New products</li></a>
            <a href='#' className='aref'><li className='footpb'>Best sales</li></a>
            
          </ul>
        </div>
        <div className='col-lg-5 text-white back' >
          <h5>NEWSLETTER</h5>
          <p className='footp'>Suspendisse urna nibh, viverra non, semper suscipit.</p>
        <form>
           <div className="mb-3 bg-dark">
             <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" placeholder='Your email address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
           <button type="submit" className="btn btn-secondary">SUBSCRIBE</button>
        </form>
        </div>
     </div>
     </div>
     
     <hr></hr>

     <div className='container pe-3'>
     <div className='row '>
       <div className='col-lg-12 social'>
      <a href='#'><i class="fab fa-instagram icone icone2"></i></a>
      <a href='#'><i class="fab fa-facebook-f icone2"></i></a>
      <a href='#'><i class="fab fa-twitter icone2"></i></a>
      <a href='#'><i class="fab fa-whatsapp icone2"></i></a>
      <a href='#'><i class="fab fa-youtube"></i></a>
       
       </div>
     </div>
     </div>
     
     <hr></hr>
     <div className='container text-center pb-4'><strong className='smcolor'>SUPPER MARKET</strong>
© 2021 Made with. All Rights Reserved</div>
  </div>;
}