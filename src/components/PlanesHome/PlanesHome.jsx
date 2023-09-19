import React from 'react';
import card1 from '../img/cards1.jpg';
import card2 from '../img/cards2.jpg';
import card3 from '../img/cards3.jpg';
import card4 from '../img/cards4.jpg';
import card5 from '../img/card5.jpg'
import './PlanesHome.css';

function Cards() {
  return (
    <>
      <h2 className='h2'>NUESTROS PLANES</h2>
    <div className='carta-container'>
      <div className='carta'>
        <img src={card1} alt="" />
        <div className="carta-content">
          <h3>Título de la Tarjeta 1</h3>
          <button>Botón 1</button>
        </div>
      </div>
      <div className='carta'>
        <img src={card2} alt="" />
        <div className="carta-content">
          <h3>Título de la Tarjeta 2</h3>
          <button>Botón 2</button>
        </div>
      </div>
      <div className='carta'>
        <img src={card3} alt="" />
        <div className="carta-content">
          <h3>Título de la Tarjeta 2</h3>
          <button>Botón 2</button>
        </div>
      </div>
      <div className='carta'>
        <img src={card4} alt="" />
        <div className="carta-content">
          <h3>Título de la Tarjeta 2</h3>
          <a href="/electroplan">
          <button>Botón 2</button>
          </a>
        </div>
      </div>
      <div className='carta'>
        <img src={card5} alt="" />
        <div className="carta-content">
          <h3>Título de la Tarjeta 2</h3>
          <button>Botón 2</button>
        </div>
      </div>
      {/* Repite lo mismo para las otras tarjetas */}
    </div>
    </>
  );
}

export default Cards;
