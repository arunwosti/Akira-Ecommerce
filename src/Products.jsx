import React from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './akira.css';

const ProductList = [
    {
        id : 1,
        img : "https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product1.jpg",
        pname : "Black Coat",
        pprice : "$38.00",
    },
    {
        id : 2,
        img : "https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product4.jpg",
        pname : "Black Dress",
        pprice : "$45.00",
    },
    {
        id : 3,
        img : "https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product3.jpg",
        pname : "Check Shirt",
        pprice : "$78.00" ,
    },
    {
        id : 4,
        img : "https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product9.jpg",
        pname : "Heel Shoes",
        pprice : "$35.00",
    },
    {
        id : 5,
        img : "https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product8.jpg",
        pname : "Party Sunglass",
        pprice : "$50.00",
    },
    {
        id : 6,
        img : "https://demo.bosathemes.com/bosa/shop/wp-content/uploads/sites/56/2021/12/shop-product2.jpg",
        pname : "Sport Trouser",
        pprice : "$32.00",
    }
]

export default function Products() {
  return <div className='container mt-5 py-3'>
           <div className='row'>
                <div className='col-lg-12 lnews'>
                    <p>PRODUCTS</p>
                </div>
           </div>
            <div className='row'>
                {ProductList.map((i)=>(
                    <div className='col-lg-4 py-3 pedit'>
                        <div className='card'>
                        
                    <img src={i.img} className='img-fluid '/>
                    </div>
                    
                        
                    <h5><a href='#'> {i.pname}</a></h5>
                    
                    
                    <h7>Price : {i.pprice} </h7><br></br>
                    
                    <button className='btn btn-danger btn-sm mt-2'>ADD TO CART </button>
                </div>
                
                ))}
                
            </div>
  </div>;
}

