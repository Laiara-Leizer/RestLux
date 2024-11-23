import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantDetailsPage.css';
import Loading from '../../components/Loading';

function RestaurantDetailsPage() {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/restaurants/${id}`)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(error => console.error('Error fetching restaurant details:', error));
  }, [id]);

  if (!restaurant) {
    return <Loading />;
  }

  return (
    <div className="restaurant-details">


            <img
              src={restaurant.image}
              alt={`${restaurant.name} image`}
              className="restaurant-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/150x150?text=${restaurant.name}`;
              }}
            />
      <h1>{restaurant.name}</h1>
      <p><strong>Avaliação:</strong> {restaurant.rating}⭐</p>
      <p><strong>Descrição:</strong> {restaurant.description}</p>

      {/* id
name
rating
image
description */}
    </div>
  );
}

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
export default RestaurantDetailsPage;

