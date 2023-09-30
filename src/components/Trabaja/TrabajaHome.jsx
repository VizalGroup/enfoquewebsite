import React from "react";
import productor from '../img/productor.jpg';
import organizador from '../img/organizador.jpg';
import oficial from '../img/oficial.jpg';
import './TrabajaHome.css'; // Importa tu archivo CSS

function TrabajaHome() {
  return (
    <div className="trabaja-fondo">
    <div className="trabaja-home">
      <h2  style={{marginBottom:'50px'}} className="h2">Sumate a nuestro equipo de trabajo</h2>
      <div className="card-container-home">
        <div className="card-home">
          <img src={productor} alt="" className="card-image-home" />
          <div>
            <h3>Productor / Asesor</h3>
            <button>Ver más</button>
          </div>
        </div>
        <div className="card-home">
          <img src={organizador} alt="" className="card-image-home" />
          <div>
            <h3>Organizador</h3>
            <button>Ver más</button>
          </div>
        </div>
        <div className="card-home">
          <img src={oficial} alt=""  className="card-image-home"/>
          <div>
            <h3>Agente Oficial</h3>
            <button>Ver más</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TrabajaHome;
