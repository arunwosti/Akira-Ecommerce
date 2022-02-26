import React from 'react';
import './akira.css';
import LNewsContainer from './component/LNewsContainer';

export default function Electronics() {
  return <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-12 lnews'><p>LATEST NEWS</p></div>
            </div>
            <div>
            
            <LNewsContainer/>
            </div>
            
  </div>;
}
