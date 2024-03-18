import React, { useEffect, useState } from 'react';
import { IoLocation } from "react-icons/io5";
import './Card.css';

const Filter = () => {
  const API_URL = 'http://localhost:3500/items';

  const [itemsList, setItemsList] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        setItemsList(listItems);
      } catch (err) {
        console.log(err.stack);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = itemsList.filter(item =>
    item.collegeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <input
        type="text"
        placeholder="Search by college name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredItems.map((item) => (
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

export default Filter;
