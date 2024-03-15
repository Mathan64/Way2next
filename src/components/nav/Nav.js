import React, { useState } from 'react';
import './Nav.css'; // CSS file for styling
import searchIcon from './icons/s1.png';
import profileIcon from './icons/pi.png';
import menuIcon from './icons/mi.png';
const Navbar = () => {
  const [searchInput,setSearchInput] = useState('');
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);  
  };
  const Change = (name)=>{
    console.log(`welcome${name}`)
  }
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // You can handle search submission logic here
    console.log("Search query:", searchInput);
  };
return (
    <nav className="navbar">
        <div className="container">
         <div className="navbar__brand">Way<span>2</span>next</div>      
        <form className="navbar__search" onSubmit={handleSearchSubmit}>
        <div class="search">
          <div>
           <input
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Search for college..." />
            </div> 
           <div><button type="submit" class="searchicon">
              <img onClick={(e)=>Change("mathan")} src={searchIcon} alt="Search Icon" height="25px" width='26px'  />
            </button></div>
            </div>
        </form>
        <div class="picon">
        <img onClick={(e)=>Change("mathan")} src={profileIcon} alt="Search Icon" height="40px" width='40px' />
        </div>
        <div class="micon">
        <img onClick={(e)=>Change("mathan")} src={menuIcon} alt="Search Icon" height="30px" width='40px' />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;