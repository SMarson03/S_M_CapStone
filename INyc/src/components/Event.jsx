import React from 'react';
import backgroundImage from './DesignImages/Background.jpg';
import { useEffect, useState } from 'react'

import Navbar from './Navbar';

function Event() {

  const [mydata, setMyData] = useState([]);
  

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/INyc/events');
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.error(error);
    }
   }
    fetchData();
  }, []);
 console.log(mydata);

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
    <div className='container' style={{fontFamily:'Gloria Hallelujah', display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-around', 
        alignItems: 'center'}}>
        {mydata.map((item, index) => {
          return (
            <>
             
             <div key={index} >
             <img src={item.image_Url} alt="restaurant" style={{ width: '200px', height: '190px', margin: 'auto', borderRadius: '8px' }} />
              <h1 style={{ margin: '10px 0' }}>{item.name}</h1>
              <p style={{ margin: '5px 0' }}>{item.address}</p>
              <p style={{ margin: '5px 0' }}>{item.location}</p>
              <p style={{ margin: '5px 0' }}>{item.price_Per_Person}</p>
             
                         
            </div>
            
            
            </>
          );
         })} 
          
         </div>   
        </div>
      
            
      );
  }

export default Event;
