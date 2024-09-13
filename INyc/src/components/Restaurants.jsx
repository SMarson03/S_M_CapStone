import React from 'react'
import backgroundImage from './DesignImages/Background.jpg';
import image from './RestaurantImages/Cornbread.jpg';
import image2 from './RestaurantImages/Tatian.png';
import image3 from './RestaurantImages/Winson.jpg';
import Navbar from './Navbar';

function Restaurants() {
  return (<div style={{ 
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }}>
    <Navbar/>
    <div className="Restaurant" style={{fontFamily: 'Gloria Hallelujah', fontSize: '100px', textAlign: 'center'}}>
    INFood
    </div>
    <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: '300px'
      }}>
    <div className="image-container" style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
       
      }}>
      </div>
      <div className="image-container" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
      }}>

      </div>
      <div className="image-container" style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
      }}>
</div>
      </div>
  </div>
    
  );
}

export default Restaurants
