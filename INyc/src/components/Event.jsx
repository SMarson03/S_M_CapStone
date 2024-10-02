import React from 'react';
import backgroundImage from './DesignImages/Background.jpg';
import { useEffect, useState } from 'react'
import Navbar from './Navbar';
import event_icon from './DesignImages/event.png';
import Footer from './Footer';


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
    height: '100%',
    width: '100%'
  }}>
    <Navbar/>
    <div className="Events" style={{fontFamily: 'Gloria Hallelujah', fontSize: '100px', textAlign: 'center'}}>
    INEvents
    </div>
    <div className='container-events ' style={{fontFamily:'Gloria Hallelujah',
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      margin: 'auto', 
      alignItems: 'flex-start', 
      flexWrap: 'wrap' 
    }}>
        {mydata.map((item, index) => {
          return (
            <>
             
             <div key={index} >
             <img src={item.image_Url} style={{ display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: '20px', 
              padding: '10px', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              width: '400px',
              height: '340px'
              }} />
              <h3 style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.name}</h3>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.address}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.location}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.category}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.price_Per_Person}</p>
              <button style={{display: 'flex', justifyContent:'center', margin: 'auto', padding: '2px', backgroundColor: 'goldenrod', color: 'white', 
                borderRadius: '8px', border: 'none', marginBottom: '100px'}}>
                <a href={item.url} target="_blank" style={{fontFamily:'Gloria Hallelujah'}}>
                  <img src={event_icon}style={{height: '40px', width:'40px', display: 'flex', justifyContent:'center', margin: 'auto'}}/></a></button> 
                         
                         
            </div>
            
            
            </>
          );
         })} 
          
         </div>   
         <Footer/>
        </div>
      
            
      );
  }

export default Event;
