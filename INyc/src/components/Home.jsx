import React from 'react';
import backgroundImage from './DesignImages/Background.jpg';
import video from './GalleryImages/HomeArt2.mp4';
import video2 from './RestaurantImages/HomeRestaurants.mp4';
import video3 from './EventImages/HomeEvent.mp4';
import Navbar from './Navbar';

function Home() {
  return (
      <>
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100%',
      width: '100%'
    }}>
        <Navbar/>
        <div className='container mx-auto text-center'></div>
        <div className="Home gloria-hallelujah-regular" style={{
          fontSize: '100px', 
          textAlign: 'center'
        }}>
       
      INyc
      </div>
      <p className='text-lg mx-auto text-center gloria-hallelujah-regular' style={{
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        maxWidth: '800px', 
        margin: '0 auto' 
      }}>
        Welcome to INyc, sharing a bi-monthly round up of some IN restaurants, events, and artists to catch around the city. 
        Featured is our favorite at the Brooklyn museum, First Saturdays, one of the most coveted parties by all culture 
        mavens that claim to be "outside". Pumpkin Nights a fun multi-night family event where visitors peruse through unique jack-o-lanterns 
        on display. Even though its fall outdoor movies are still a thing and a must at Hudson Yard. 
        Now that you're INyc, let's get you around.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: '300px'
      }}>
        <div className="video-container" style={{
          height: '100%',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          flex:  1,
          margin: '0 10px'
        }}>
          <video
            src={video2}
            controls
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              height: '300px'
            }}
          />
        </div>
        <div className="video-container" style={{
          height: '100%',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          flex:  1,
          margin: '0 10px'
        }}>
          <video
            src={video}
            controls
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              height: '400px'
            }}
          />
        </div>
        <div className="video-container" style={{
          height: '100%',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          flex:  1,
          margin: '0 10px'
        }}>
          <video
            src={video3}
            controls
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              height: '400px'
            }}
          />
        </div>
      </div>
    </div>
    <Footer/>
          
</>
    );
}

export default Home;
