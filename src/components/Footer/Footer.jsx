import React from "react";
import "./Footer.css";
import { CiFacebook, CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div id="footer">
      <footer className="footer">
        <div className="contact-info">
          <ul className="list">
            <li className="texto-footer">Email: enfoquechubut@gmail.com</li>
            <li className="texto-footer">Teléfono: 2804861323</li>
            <li className="texto-footer">
              Dirección: España 30, primer piso, Trelew, Chubut.
            </li>
          </ul>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/electroplan">Electro Plan</a>
            </li>
            <li>
              <a href="/enfoqueplan">Enfoque Plan</a>
            </li>
            <li>
              <a href="/planbici">Plan Bici</a>
            </li>
            <li>
              <a href="/planmoto">Plan Moto</a>
            </li>
            {/* <li>
              <a href="/planproyecto">Plan Proyecto</a>
            </li> */}
            <li>
              <a href="#trabaja">Trabaja con Nosotros</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="redes">
        <a
          style={{ color: "black" }}
          href="https://www.facebook.com/profile.php?id=61550619271586"
        >
          <CiFacebook />
        </a>
        <a
          style={{ color: "black" }}
          href="https://www.instagram.com/enfoque.chubut/?hl=es-la"
        >
          <CiInstagram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
