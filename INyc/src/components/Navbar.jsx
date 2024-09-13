import React from 'react';
import logo_icon from './DesignImages/Icon1.png';
// import home_icon from './DesignImages/home.png';
// import arts_icon from './DesignImages/art.png';
// import restaurant_icon from './DesignImages/food.png';
// import event_icon from './DesignImages/event.png';
import search_icon from './DesignImages/search.png';

function Navbar() {
  return (
    <>
<div className='navbar'>
  <img src={logo_icon} alt='' className='logo'/>
  <ul>
    <li>Home</li>
    <li>Arts</li>
    <li>Restaurants</li>
    <li>Events</li>
  </ul>

  <div className='search-box'>
    <input type='text' placeholder='Search...'/>
    <img src={search_icon} alt=''/>
  </div>
  
    
    </div>
   </>
  );
}

export default Navbar;
