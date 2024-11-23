import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import UsersPage from './pages/UsersPage/UsersPage';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';
import RestaurantsPage from './pages/RestaurantsPage/RestaurantsPage';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage/RestaurantDetailsPage';
import FoodsPage from './pages/FoodsPage/FoodsPage';
// import ThemeToggle from './components/ThemeToggle';

import FoodDetailsPage from './pages/FoodDetailsPage/FoodDetailsPage';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetailsPage />} />
            <Route path="/foods" element={<FoodsPage />} />
            <Route path="/foods/:id" element={<FoodDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

