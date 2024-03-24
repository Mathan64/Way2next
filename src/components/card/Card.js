// Card.js
import React from 'react';
import { IoLocation } from "react-icons/io5";
import './Card.css';

const Card = ({ itemsList }) => {
  return (
    <main>
      {itemsList.map((item) => (
        <div className='cards'>
        <div className="card" key={item.id}>
          <div className='element'>
            <img className="cimg" src={item.imgUrl} alt='.'/>
            </div> <div className='element'>
              <label className='cardcollege'>{item.collegeName}</label> </div>
              <div className='element'><span className='collegecode'>#{item.id}</span></div>
          <div className='element'> <p className='cardloc'><IoLocation />{item.location}</p>
             </div>
            </div>
            </div>
        
      ))}
    </main>
  );
};

export default Card;