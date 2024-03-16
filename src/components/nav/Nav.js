import React, { useState } from 'react';
import './Nav.css'; // CSS file for styling
import { FaUserGraduate } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
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
            
           <button>
            <div className='sicon' onClick={()=>Change("mathan")}>
           <FaSearch/>
           </div>
           </button>
           <div>
           </div>
            </div> 
            <div className='uicon'onClick={()=>Change("mathan")} >      
            < FaUserGraduate />
           </div>    
            <div className='micon'onClick={()=>Change("mathan")}> 
            < IoMenu />
           </div>    
        </form>
      </div>
    </nav>
  );
};
export default Navbar;