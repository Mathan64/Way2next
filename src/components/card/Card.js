import { useState } from 'react';
import React from 'react';
import { IoLocation } from "react-icons/io5";
import './Card.css';
const Card = () => {
     const [items,setltems]=useState(
      [
        {
          id:1,
          collegeName:	"SRM Institute of Science and Technology",
          location	:"Chengalpattu",
          imgUrl	:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkCr9l32LipnPo-31lDQkxcWhpvvuI7-tcT50qKAeug&s"

     },
        {
          id:	2,
          collegeName:	"Anna University",
          location: "Chennai",
          imgUrl:	"https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Anna_University_Logo.svg/330px-Anna_University_Logo.svg.png"  
        },
        {id:	3,
collegeName:	"Sathyabama Institute of Science and Technology",
location	:"Chennai",
imgUrl:	"https://upload.wikimedia.org/wikipedia/en/1/13/Sathyabama_Institute_of_Science_and_Technology_logo.png",
        },
        {
id:	4,
collegeName	:"SSN College of Engineering",
location	:"Chennai",
imgUrl	:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sri_Sivasubramaniya_Nadar_College_of_Engineering.svg/800px-Sri_Sivasubramaniya_Nadar_College_of_Engineering.svg.png"
        },
{
id:5,
collegeName:	"PSGCT Coimbatore",
location:	"Coimbatore",
imgUrl	:"https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png",
}
,{
id:6,
collegeName	:"Vellore Institute of Technology",
location:	"Vellore",
imgUrl:	"https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/300px-Vellore_Institute_of_Technology_seal_2017.svg.png",
},{
id:	7,
collegeName:	"Rajalakshmi Engineering College",
location:"Chennai",
imgUrl:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Rajalakshmi_Engineering_College_%28REC%29_Chennai_Logo.jpg",
},
{	
id:	8,
collegeName	:"Kumaraguru College of Technology",
location:	"Coimbatore",
imgUrl	:"https://upload.wikimedia.org/wikipedia/en/f/f2/Kumaraguru_College_of_Technology_logo.png",
  }  ])
  return (
    <main>
         {items.map((item)=>(
            <div className="card">
              <img className="cimg" src={item.imgUrl} alt='college' height="50px" width="50px"></img>
              <div className='inercard'>
                <div className='lab'> <label className='cardcollege'>{item.collegeName}</label>
                <div><label className='cardid'>ranking:{item.id}</label></div></div>
                 <div>
                   <p className='cardloc'><IoLocation />{item.location}</p>
                </div>
                </div>
          </div>
         ))  }
     
      </main>
  );
};

export default Card;
