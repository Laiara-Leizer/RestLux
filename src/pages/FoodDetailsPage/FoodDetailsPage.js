import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetailsPage.css';

function FoodDetailsPage() {
  const [food, setFood] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // Fetch data
    fetch(`https://apifakedelivery.vercel.app/foods/${id}`)
      .then(response => response.json())
      .then(data => {
        setFood(data);
        

      })
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!food) {
    return <div className="loading">
      <div className="loading-spinner"></div>
      <p>Loading delicious details...</p>
    </div>;
  }

  const formatTime = (time) => {
    return time || 'Estimated time unavailable';
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="container">

      <div className="food-details">
        <div className="food-image-container">
          <img src={food.image} alt={food.name} className="food-image" />
        </div>

        <div className="food-info">
          <h1>{food.name}</h1>
          
          <div className="price-rating-container">
            <p className="price">Preço: {formatPrice(food.price)}</p>
            <p className="rating">Avaliação: {food.rating} ⭐</p>
          </div>

          <div className="delivery-info">
            <p>Tempo médio de preparação: {formatTime(food.time)}</p>
            <p>Valor para entrega: {formatPrice(food.delivery)}</p>
          </div>

          <div className="description">
            <h2>Descrição</h2>
            <p>{food.description}</p>
          </div>

          <div className="restaurant-info">
            <p>ID do restaurante: {food.restaurantId}</p>
          </div>

          <button className="order-button">
            Pedir agora!
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Food Delivery Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FoodDetailsPage;