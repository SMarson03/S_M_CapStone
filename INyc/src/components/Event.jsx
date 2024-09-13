import React from 'react';
import backgroundImage from './DesignImages/Background.jpg';
import image from './EventImages/BF.png';
import image2 from './EventImages/nycwff2.jpg';
import image3 from './EventImages/bkmuseumunion.jpg';
import Navbar from './Navbar';

function Event() {
  return (<div style={{ 
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%'
  }}>
    <Navbar/>
    <div className="Events" style={{fontFamily: 'Gloria Hallelujah', fontSize: '100px', textAlign: 'center'}}>
    INEvents
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
        backgroundPosition: 'start',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end',
          marginLeft: '10px'
       
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
</div>
  </div>
    
  );
}

export default Event;
