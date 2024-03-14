// HeroSection.js
import React from 'react';
import './Styles.css'; 
import Laptop from '../assets/laptop.jpg';
import ArrowDown from '../assets/arrow-down.svg';

function ScreenPage() {
    return (
        <div className="ScreenPage">
            <div> <h1>Earn Your First Income</h1> </div>
            <div> <button className="DownloadAppButton">Download App</button> </div>

            <div className='TagLine'> Real companies, real projects, real earnings and real money. Smart opportunities for the smart generation </div>
            <div className='LaptopImage'> <img src={Laptop} alt='Img' /></div>
            <div className='ArrowDown'> <img src={ArrowDown} alt='Down' /> </div>
        </div>
    );
}

export default ScreenPage;
