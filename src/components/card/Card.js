// Card.js
import React from 'react';
import { IoLocation } from "react-icons/io5";
import './Card.css';

const Card = ({ itemsList }) => {
  return (
    <main>
      {itemsList.map((item) => (
        <div className="card" key={item.id}>
          <img className="cimg" src={item.imgUrl} alt='college' height="50px" width="50px" />
          <div className='inercard'>
            <div className='lab'>
              <label className='cardcollege'>{item.collegeName}<span className='collegecode'>#{item.id}</span></label>
            </div>
            <div>
              <p className='cardloc'><IoLocation />{item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Card;