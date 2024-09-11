import React from 'react';
import backgroundImage from './DesignImages/Background.jpg';
import video from './GalleryImages/HomeArt2.mp4';
import video2 from './RestaurantImages/HomeRestaurants.mp4';
import video3 from './EventImages/HomeEvent.mp4';


function Home() {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%'
    }}>
      <div className='container mx-auto text-center'></div>
      <div className="Home gloria-hallelujah-regular" style={{
        fontSize: '100px', 
        textAlign: 'center'
      }}>
      INyc
      </div>
      <p className='text-lg mx-auto text-center gloria-hallelujah-regular' style={{
        whiteSpace: 'normal',
        wordWrap: 'break-word'
      }}>
        Welcome to INyc, a platform that shares up-and-coming restaurants and
        various cultural events around the city. Search places, spaces, and activities
        by borough, price, or category. Now that you're INyc, let's get you around.
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
          justifyContent: 'flex-end'
        }}>
          <video
            src={video}
            controls
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
        <div className="video-container" style={{
          height: '100%',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}>
          <video
            src={video2}
            controls
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
        <div className="video-container" style={{
          height: '100%',
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}>
          <video
            src={video3}
            controls
            autoPlay
            muted
            loop
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
