import React, { useState } from 'react';
import './Nav.css';

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
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#" className="activo">
              Inicio
            </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Acerca de</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
