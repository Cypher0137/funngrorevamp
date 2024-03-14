// TrustedCompanies.js
import React from 'react';
import './Styles.css';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

function TrustedCompanies() {
    return (
        <div className='TrustedCompanies'>
            <div className="section-content-img">
                        <div className="sub-section">
                            <span className="sub-header"><p>Trusted by High-Ranking Companies</p></span>
                            <div className="sub-desc-container">
                                <span className="sub-desc"><p>Join the league of freelancers contributing to the success of high-ranking global companies.</p></span>
                            </div>
                        </div>
                        <div className="sub-section">
                            <span className="sub-header"><p>Reliable</p></span>
                            <div className="sub-desc-container">
                                <span className="sub-desc"><p>Work with trusted companies, ensuring stability and consistent pay.</p></span>
                            </div>
                        </div>



                        <div className="view-more-container">
                            <img src={ArrowRight} alt='arrow' className='ArrowRight' />
                            <span className="view-more-btn"><p>View more</p></span>
                            <img src={ArrowLeft} alt='arrow' />

                        </div>

            </div>
        </div>
    );
}

export default TrustedCompanies;
