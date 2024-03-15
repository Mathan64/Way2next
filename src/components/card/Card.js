import React from 'react';
import cimg from "./cimg/c1img.jpg"
import './Card.css';
const cardclick=(name)=>{
    console.log(`welcome${name}`)
};
const Card = ({ cardTitle }) => {
  return (
    <div className="card">
         <div className="card__image">
        <img src={cimg} alt="Card" height="30px" width="50px"/>
      </div>
      <div className="card__content" onClick={(e)=>cardclick("mathan")}>
        <p className="card__title">{cardTitle}</p>
      </div>
    </div>
  );
};

export default Card;
