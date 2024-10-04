import React from 'react'
import backgroundImage from './DesignImages/Background.jpg';
import Navbar from './Navbar';
import { useEffect, useState } from 'react'
import Footer from './Footer';
import food_icon from './DesignImages/cooking.png';





function Restaurants() {
  
  const [mydata, setMyData] = useState([]);
  

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/INyc/restaurants');
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
    width: '100%'
  }}>
    <Navbar/>
    <div className="Restaurant" style={{fontFamily: 'Gloria Hallelujah', fontSize: '100px', 
      textAlign: 'center'}}>
    INFood
    </div>
    <p className='text-lg mx-auto text-center gloria-hallelujah-regular' style={{
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        maxWidth: '800px', 
        margin: '0 auto', 
        marginTop: '2%',
      }}>
          Hole in the wall takeout and michellin starred restaurants are culinary treasures alike. 
          INyc is the cornerstone of diverse flavors and innovative dishes crafted by the worlds most 
          talented chefs. Explore some hidden gems and beloved classics that satisfy every craving 
          and palate. For up to date menus and reservations, click the yellow icon.
      </p>
    
    <div className='container-events ' style={{fontFamily:'Gloria Hallelujah',
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      margin: 'auto', 
      alignItems: 'flex-start', 
      flexWrap: 'wrap' 
    }}>
      <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Create 3 equal columns
  gap: '20px', // Add space between grid items
  padding: '20px'
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
              border: '4px solid black', 
              borderRadius: '8px', 
              width: '400px',
              height: '320px'
              }} />
             <h3 style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.name}</h3>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.address}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.location}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.cuisine}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.top_Dish}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.reservation}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.price_Per_Person}</p>
              <button style={{display: 'flex', justifyContent:'center', margin: 'auto', padding: '2px', backgroundColor: 'goldenrod', color: 'white', 
                borderRadius: '8px', border: 'none', marginBottom: '100px', border: '2px solid black'}}>
                <a href={item.url} target="_blank" style={{fontFamily:'Gloria Hallelujah'}}>
                  <img src={food_icon}style={{height: '40px', width:'40px', display: 'flex', justifyContent:'center', margin: 'auto'}}/></a></button>      
            </div>
                              
            </>
            
          );
         })} 
          
         </div>
           </div>
  </div>
  <Footer/>
    </>
  );
}

export default Restaurants
