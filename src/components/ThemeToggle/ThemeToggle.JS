import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import UsersPage from '../pages/UsersPage/UsersPage';
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage';
import RestaurantsPage from '../pages/RestaurantsPage/RestaurantsPage';
import RestaurantDetailsPage from '../pages/RestaurantDetailsPage/RestaurantDetailsPage';
import FoodsPage from '../pages/FoodsPage/FoodsPage';
import FoodDetailsPage from '../pages/FoodDetailsPage/FoodDetailsPage';
import moonIcon from './img/moon.svg';
import sunIcon from './img/brightness-high.svg';

import './ThemeToggle.css';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Verifica o tema salvo no localStorage quando o componente é montado
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            setDarkMode(false);
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, []);

    // Alterna entre tema claro e escuro
    const toggleTheme = () => {
        setDarkMode(prevState => {
            const newDarkMode = !prevState;
            if (newDarkMode) {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            }
            return newDarkMode;
        });
    };

    return (
        <div className="theme-wrapper">
            {/* Botão para alternar o tema */}
            <button 
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Alternar tema"
            >
                <img 
                    src={darkMode ? sunIcon : moonIcon} 
                    alt={darkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
                />
            </button>

            {/* Renderizar conteúdo baseado no tema */}
            {darkMode ? (
                <div style={{ padding: '20px', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
                    Posicione as rotas do tema escuro aqui
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/users/:id" element={<UserDetailsPage />} />
                    <Route path="/restaurants" element={<RestaurantsPage />} />
                    <Route path="/restaurants/:id" element={<RestaurantDetailsPage />} />
                    <Route path="/foods" element={<FoodsPage />} />
                    <Route path="/foods/:id" element={<FoodDetailsPage />} />
                </Routes>
            )}
        </div>
    );
}

export default ThemeToggle;
