import React from 'react'
import backgroundImage from './DesignImages/Background.jpg';
import image1 from './DesignImages/Accenture.svg.png';
import image2 from './DesignImages/Per-Scholas-Secondary-Logo-Dark.png';

function Footer() {
  return (
   <>
    <div>
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <footer className="footer">
        
           <div className="footer-content">
            <p><span>
              Get out and get INyc. &copy; 2024 INyc LLC, All rights reserved.
            </span></p>
            <p>Powered by:</p>
            <img src={image1} alt="Accenture" style={{width: '60px', height: '25px'}}/>
            <img src={image2}  alt="Perscholas" style={{width: '60px', height: '25px'}}/>
            </div>
       
    </footer>
    </div>
</div>
    </>
  )
}

export default Footer;
