import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from "./img/RestLux.png"
// import ThemeToggle from '../ThemeToggle/';

function Header() {
  return (
    <header className="header">
      <nav>

      <img className='Logo' src={Logo }/>
        <ul>
        {/* <ThemeToggle /> */}
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurantes</Link></li>
          <li><Link to="/foods">Comidas</Link></li>
          <li><Link to="/users">Usuários</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
