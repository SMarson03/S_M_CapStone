import React from 'react';
import logo_icon from './DesignImages/WhiteINyc.png';
import Search from './Search';
import art_icon from './DesignImages/mona-lisa.png';
import food_icon from './DesignImages/cooking.png';
import event_icon from './DesignImages/event.png';
import home_icon from './DesignImages/statue.png'


function Navbar() {
  


    return (
    <>
<div className='navbar'style={{display:'flex',
  border: '4px solid black', 
}}>
  <img src={logo_icon} alt='' style={{height:'125px'}}/>
  <ul style={{display:'flex', gap:'80px'}}>
    <li ><a href='/Home'><img src={home_icon}style={{height: '70px', width:'70px'}}/></a></li>
    <li><a href='/Arts'><img src={art_icon}style={{height: '70px', width:'70px'}}/></a>t</li>
    <li><a href='/Restaurants'><img src={food_icon}style={{height: '70px', width:'70px'}}/></a></li>
    <li><a href='/Event'><img src={event_icon}style={{height: '70px', width:'70px'}}/></a></li>
  </ul>
<Search /> 
    </div>
   </>
  );
}

export default Navbar;
