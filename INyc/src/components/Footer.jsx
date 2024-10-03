import React from 'react'
import backgroundImage from './DesignImages/Background.jpg';
import image1 from './DesignImages/Accenture.svg.png';
import image2 from './DesignImages/Per-Scholas-Secondary-Logo-Dark.png';
import image3 from './DesignImages/PSlogo.png'


function Footer() {
  return (
   <>
    <div>
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
      <footer className="footer" style={{border: '4px solid black'}}>
        
           <div className="footer-content">
            <p><span>
              Get out and get INyc. &copy; 2024 INyc LLC, All rights reserved.
            </span></p>
            <p>Powered by:</p>
            <div className="footer-logos" style={{display:'flex', gap:'20px'}}>
            <img src={image1} alt="Accenture" style={{width: '80px', height: '30px'}}/>
            <img src={image2}  alt="Perscholas" style={{width: '80px', height: '40px'}}/>
            <img src={image3}  alt="Perscholas" style={{width: '100px', height: '45px'}}/>

            </div>
            </div>
       
    </footer>
    </div>
</div>
    </>
  )
}

export default Footer;
