import React from 'react';
import './Styles.css'; 
function Footer() {
  return (
    <footer>
      <div>
        <span id="footer-header"><p>Got Questions?</p></span>
        <span id="footer-desc"><p>Reach out to our friendly team for any queries or support around the clock.</p></span>
      </div>
      <div className="row text-white">
        {/* Footer content goes here */}
      </div>
    </footer>
  );
}

export default Footer;
