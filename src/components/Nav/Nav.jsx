import React, { useState } from "react";
import "./Nav.css";
import logo from "../img/logo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigateToNuestrosPlanes = () => {
    // Navega a la página de inicio ("/") sin recargar la página
    window.history.pushState({}, "", "/");

    // Después de un breve período de tiempo, desplázate a la sección "#nuestros-planes"
    setTimeout(() => {
      // Calcula la posición de "#nuestros-planes" y desplázate a ella
      const nuestrosPlanesElement = document.getElementById("nuestros-planes");
      if (nuestrosPlanesElement) {
        window.scrollTo({
          top: nuestrosPlanesElement.offsetTop,
          behavior: "smooth",
        });
      }
    }, 1000); // Ajusta el tiempo de espera según sea necesario
  };

  const navigateToPayments = () => {
    window.history.pushState({}, "", "/");

    setTimeout(() => {
      const nuestrosPlanesElement = document.getElementById("metodos-de-pago");
      if (nuestrosPlanesElement) {
        window.scrollTo({
          top: nuestrosPlanesElement.offsetTop,
          behavior: "smooth",
        });
      }
    }, 1000); 
  };

  return (
    <nav className="nav">
      <div className="cont-lg">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <img src={logo} alt="" />
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/" className="activo">
              Inicio
            </a>
          </li>
          <li>
            <a href="#nuestros-planes" onClick={navigateToNuestrosPlanes}>
              Nuestros Planes
            </a>
          </li>
          <li>
            <a href="#metodos-de-pago" onClick={navigateToPayments}>Métodos de Pago</a>
          </li>
          <li>
            <a href="/trabajahome">Trabaja con Nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
