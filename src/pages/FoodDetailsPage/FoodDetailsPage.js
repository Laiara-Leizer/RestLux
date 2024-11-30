// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './FoodDetailsPage.css';
// import Loading from '../../components/Loading';


// // Importando o componente Loading

// function FoodDetailsPage() {
//   const [food, setFood] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch data
//     fetch(`https://apifakedelivery.vercel.app/foods/${id}`)
//       .then((response) => response.json())
//       .then((data) => setFood(data))
//       .catch((error) => console.error('Error:', error));
      
//   }, [id]);

//   // Exibe o componente Loading enquanto os dados não foram carregados
//   if (!food) {
//     return <div>Loading...</div>; // Mostra um fallback enquanto os dados não carregam
//   }

//   const formatTime = (time) => time || 'Estimated time unavailable';

//   const formatPrice = (price) =>
//     new Intl.NumberFormat('pt-BR', {
//       style: 'currency',
//       currency: 'BRL',
//     }).format(price);

//   return (
//     <div className="container">
//       <div className="food-details">
//         <div className="food-image-container">



          
//           <img src={food.image} alt={food.name} className="food-image" />
//         </div>





//         <div className="food-info">
//           <h1>{food.name}</h1>

//           <div className="price-rating-container">
//             <p className="price">Preço: {formatPrice(food.price)}</p>
//             <p className="rating">Avaliação: {food.rating} ⭐</p>
//           </div>

//           <div className="restaurant-info">
//             <p>ID do restaurante: {food.restaurantId}</p>
//           </div>


//           <div className="delivery-info">
//             <p>Tempo médio de preparação: {formatTime(food.time)}</p>
//             <p>Valor para entrega: {formatPrice(food.delivery)}</p>
//           </div>

//           <div className="description">
//             <h2>Descrição</h2>
//             <p>{food.description}</p>
//           </div>


//           <button className="order-button">Pedir agora!</button>
//         </div>
//       </div>


//     </div>
//   );
// }

// export default FoodDetailsPage;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FoodDetailsPage.css';

function FoodDetailsPage() {
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/foods/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFood(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando detalhes do produto...</p>
      </div>
    );
  }

  if (!food) {
    return (
      <div className="error-container">
        <p>Não foi possível carregar os detalhes do produto.</p>
      </div>
    );
  }

  const formatPrice = (price) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);

  return (
    <div className="food-details-container">
      <div className="food-details-card">






        <div className="food-info-section">
          <h1 className="food-title">{food.name}</h1>

          <div className="food-meta">
            <div className="meta-item">
              <span className="icon">⭐</span>
              <span>{food.rating} estrelas</span>
            </div>
            <div className="meta-item">
              <span className="icon">🕒</span>
              <span>{food.time || '50-60 min'}</span>
            </div>
            <div className="meta-item">
              <span className="icon">🏪</span>
              <span>Restaurante #{food.restaurantId}</span>
            </div>
          </div>

          <div className="food-description">
            <h2>Descrição</h2>
            <p>{food.description}</p>
          </div>

          <div className="food-pricing">
            <div className="price-tag">
              <span className="price-label">Preço:</span>
              <span className="price-value">{formatPrice(food.price)}</span>
            </div>
            <div className="delivery-info">
              <span className="icon">🚚</span>
              <span>Taxa de entrega: {formatPrice(food.delivery)}</span>
            </div>
          </div>

          <button className="order-button">
            Pedir agora
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetailsPage;

