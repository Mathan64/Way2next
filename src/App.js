// App.js
import React, { useState, useEffect } from 'react';
import Nav from "./components/nav/Nav";
import Card from "./components/card/Card";
import Mpage from "./components/mpage/Mpage";

const App = () => {
  const API_URL = 'https://way2next.onrender.com/api/v1/college'||[];
  const [itemsList, setItemsList] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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

  return (
    <div>
      <Nav searchInput={searchInput} setSearchInput={setSearchInput} />
      <Card itemsList={itemsList.filter(item => item.collegeName.toLowerCase().includes(searchInput.toLowerCase()))} />
      <Mpage />
    </div>
  );
};

export default App;