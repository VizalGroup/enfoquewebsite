import React, { useState } from 'react';
import './Nav.css';
import logo from '../img/logo.png'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="cont-lg">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <img src={logo} alt='' />
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="/" className="activo">
              Inicio
            </a>
          </li>
          <li>
            <a href="/">Nuestros Planes</a>
          </li>
          <li>
            <a href="/">Métodos de pago</a>
          </li>
          <li>
            <a href="/trabajahome">Trabaja con Nosotros</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
