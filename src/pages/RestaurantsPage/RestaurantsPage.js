import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantsPage.css';
import Loading from '../../components/Loading';

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://apifakedelivery.vercel.app/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!restaurants) {
    return <Loading />;
  }




  
  return (
    <div className="restaurants-page">
      <h1>Restaurantes disponíveis</h1>
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />



      <ul className="restaurant-list">
        {filteredRestaurants.map(restaurant => (
          <li key={restaurant.id} className="restaurant-item">
            <Link to={`/restaurants/${restaurant.id}`}>

            <img src={restaurant.image} alt={`${restaurant.name} image`}
              className="restaurant-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/150x150?text=${restaurant.name}`;
              }}
            />
              <h2>{restaurant.name}</h2>
            </Link>

          </li>
        ))}
      </ul>



      
    </div>
  );
}

export default RestaurantsPage;

/*


{"id":"6",
"name":"Burguer King",
"rating":"3.5",
"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mwH8D7nmaq8OOj_A5qI4qh4LnXhuJtN5vQ&s",
"description":"Rede de fast food conhecida por seus hambúrgueres saborosos."}]


id
name
rating
image
description


*/