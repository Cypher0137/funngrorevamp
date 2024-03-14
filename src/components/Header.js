// Header.js
import React from 'react';
import './Styles.css';
// import Laptop from '../assets/laptop.jpg';

function Header() {
  return (
    <div className='Header'>
        <div>
            <div className='CompanyName'>FunnGro</div>
        </div>


        <div className="MenuOptions">
          <div className='Home'>Home</div>
          <div className='Aboutus'>AboutUs</div>
          <div className='Works'>Works</div>
        </div>

        <div>
            <div className='LetsTalkButton'>Let's Talk</div>
        </div>
    </div>
  );
}

export default Header;
