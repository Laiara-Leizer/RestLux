import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FoodsPage.css';
import Loading from '../../components/Loading';

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

  if (!foods) {
    return <Loading />;
  }

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

      {/* <ul className="foods-list">
        {filteredFoods.map(food => (
          <li key={food.id} className="food-item">
            <Link to={`/foods/${food.id}`}>

            <img
              src={food.image}
              alt={`${foods.name} image`}
              className="foods-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/150x150?text=${foods.name}`;
              }}
            />

              <h2 className='h2-food'>{food.name}</h2>
              <p>{food.description}</p>
              <p className="price">${food.price}</p>
            </Link>
          </li>
        ))}
      </ul>
       */}













<ul className="foods-list">
  {filteredFoods.map((food) => (
    <li key={food.id} className="food-item">
      <Link to={`/foods/${food.id}`} className="food-link">
        <img
          src={food.image}
          alt={`${food.name} image`}
          className="food-logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://via.placeholder.com/150x150?text=${food.name}`;
          }}
        />
        <div className="food-details">
          <h2>{food.name}</h2>
          <p className="food-description">{food.description}</p>
          <p className="food-price">{`R$ ${food.price}`}</p>
        </div>
      </Link>
    </li>
  ))}
</ul>









      
    </div>
  );
}

export default FoodsPage;