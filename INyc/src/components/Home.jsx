import React from 'react';
import backgroundImage from './DesignImages/Background.jpg';
import video from './GalleryImages/HomeArt2.mp4';
import video2 from './RestaurantImages/HomeRestaurants.mp4';
import video3 from './EventImages/HomeEvent.mp4';
import Navbar from './Navbar';
import Footer from './Footer';

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
       You're INyc
      </div>
      <p className='text-lg mx-auto text-center gloria-hallelujah-regular' style={{
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        maxWidth: '800px', 
        margin: '0 auto', 
        marginTop: '2%',
      }}>
        Welcome to INyc, Each month, we curate a selection of the IN restaurants, 
        exciting events, and talented artists to help you discover the hidden gems and 
        must-visit spots around town. Join us as we explore the rich cultural tapestry 
        that makes our city so special! For information on menus, reservations, and dates,
        click the yellow link at the bottom of the event.
        Now that you're INyc, let's get you around.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        height: '300px',
        margin: '0 10px',
        marginTop: '12%',
        gap: '10px'
      }}>
        <div className="video-container" style={{
          height: '100%',
          width: '30%',
          display: 'flex',
          
          justifyContent: 'flex-end',
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          flex:  1          
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
          justifyContent: 'flex-end',
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          flex:  1,
          
        }}>
          <video
            src={video}
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
          justifyContent: 'flex-end',
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          flex:  1         
        }}>
          <video
            src={video3}
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
        
      </div>
      
    </div>
    <Footer/>
     
</>

    );
}

export default Home;
