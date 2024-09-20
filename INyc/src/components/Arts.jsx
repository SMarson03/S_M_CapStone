import { useEffect, useState } from 'react'

import backgroundImage from './DesignImages/Background.jpg';
import Navbar from './Navbar';


function Arts() {
  
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/INyc/arts');
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.error(error);
    }
   }
    fetchData();
  }, []);
 console.log(mydata);
    return (
    <>
    
      <div style={{ 
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
       
        {mydata.map((item, index) => {
          return (
            <>
            <div key={index}>
              {item.name}
            </div>
            </>
          );
         })}
          

        {/* <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        height: '300px'
      }}>
        <div className="image-container" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
       
      }}>
      </div>
      <div className="image-container" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
      }}>

      </div>
      <div className="image-container" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
          justifyContent: 'flex-end'
      }}>

      </div>
      </div> */}
      
      
      </div>
      
        </>
        
      );
  }

export default Arts
