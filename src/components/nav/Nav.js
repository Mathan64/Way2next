// Navbar.js
import React, { useEffect, useRef } from 'react';
import './Nav.css';
import { FaUserGraduate, FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ searchInput, setSearchInput }) => {
  const inputRef = useRef(null);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    // You can add any additional logic you need here
  }, []);

  const Change = (name) => {
    console.log(`welcome ${name}`);
  };

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
          <div className="search">
            <input
              type="text"
              value={searchInput}
              ref={inputRef}
              onChange={handleSearchInputChange}
              placeholder="Search for college..." />
            <button>
              <div className='sicon' onClick={() => inputRef.current.focus()}>
                <FaSearch />
              </div>
            </button>
            <div></div>
          </div>
          <div className='uicon' onClick={() => Change("mathan")}>
            <FaUserGraduate />
          </div>
          <div className='micon' onClick={() => Change("mathan")}>
            <IoMenu />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;