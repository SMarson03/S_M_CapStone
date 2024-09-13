import React from 'react';
import logo_icon from './DesignImages/Icon1.png';
import search_icon from './DesignImages/search.png';

function Navbar() {
  return (
    <>
<div className='navbar'>
  <img src={logo_icon} alt='' className='logo'/>
  <ul>
    <li ><a href='/Home'>INyc</a></li>
    <li><a href='/Arts'>INArt</a></li>
    <li><a href='/Restaurants'>INFood</a></li>
    <li><a href='/Event'>INEvents</a></li>
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
