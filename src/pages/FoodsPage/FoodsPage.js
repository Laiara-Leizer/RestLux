import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FoodsPage.css';

function FoodsPage() {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/foods')
      .then(response => response.json())
      .then(data => setFoods(data))
      .catch(error => console.error('Error fetching foods:', error));
  }, []);

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="foods-page">
      <h1>Foods</h1>
      <input
        type="text"
        placeholder="Search foods..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="foods-list">
        {filteredFoods.map(food => (
          <li key={food.id} className="food-item">
            <Link to={`/foods/${food.id}`}>
              <h2>{food.name}</h2>
              <p>{food.description}</p>
              <p className="price">${food.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodsPage;

