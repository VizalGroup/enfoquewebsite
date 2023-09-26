import React from 'react';
import './Trabaja.css';

function Trabaja() {

  return (
    <div className='containertrabaja'>
      <div className="trabaja">
        <div className="background-image"></div> {/* Agrega un div para la imagen de fondo */}
        <div className="trabaja-content">
          <h3>Trabaja con Nosotros</h3>
          <a href="/trabajaconnosotros">

          <button >Contactanos</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Trabaja;
