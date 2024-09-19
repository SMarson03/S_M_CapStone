import React from 'react'
import backgroundImage from './DesignImages/Background.jpg';
import Navbar from './Navbar';


function Arts() {
    return (<div style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
      }}>
        <Navbar/>
        <div className="Arts" style={{fontFamily: 'Gloria Hallelujah', fontSize: '100px', textAlign: 'center'}}>
        INArt
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: '300px'
      }}>
        <div className="image-container" style={{
        backgroundImage: `url(http://localhost:8080/api/INyc/arts/1)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
       
      }}>
      </div>
      <div className="image-container" style={{
        backgroundImage: `url(http://localhost:8080/api/INyc/arts/2)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
      }}>

      </div>
      <div className="image-container" style={{
        backgroundImage: `url(http://localhost:8080/api/INyc/arts/3)`,
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

export default Arts
