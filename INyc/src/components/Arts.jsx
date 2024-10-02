import { useEffect, useState } from 'react'
import backgroundImage from './DesignImages/Background.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import arts_icon from './DesignImages/mona-lisa.png';




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
        height: '100%',
        width: 'wv'
      }}>
        <Navbar/>
        <div className="Arts" style={{fontFamily: 'Gloria Hallelujah', fontSize: '100px', textAlign: 'center'}}>
        INArt
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
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.artists}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.exhibits}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.address}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.location}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.price_Per_Person}</p>
              <button style={{display: 'flex', justifyContent:'center', margin: 'auto', padding: '2px', backgroundColor: 'goldenrod', color: 'white', 
                borderRadius: '8px', border: 'none', marginBottom: '100px'}}>
                <a href={item.url} target="_blank" style={{fontFamily:'Gloria Hallelujah'}}>
                  <img src={arts_icon}style={{height: '40px', width:'40px', display: 'flex', justifyContent:'center', margin: 'auto'}}/></a></button> 
                         
            </div>
            
            </>
          );
         })} 
          
         </div>   
        </div>
        <Footer/>
        </>
        
      );
  }

export default Arts
