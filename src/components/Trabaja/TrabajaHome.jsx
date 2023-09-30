import React from "react";
import productor from "../img/productor.jpg";
import organizador from "../img/organizador.jpg";
import oficial from "../img/oficial.jpg";
import "./TrabajaHome.css"; // Importa tu archivo CSS

function TrabajaHome() {
  return (
    <div className="trabaja-fondo">
      <div className="trabaja-home">
        <h2 style={{ marginBottom: "50px" }} className="h2">
          Sumate a nuestro equipo de trabajo
        </h2>
        <div className="card-container-home">
          <div className="card-home">
            <img
              src={productor}
              alt="Productor asesor"
              className="card-image-home"
            />
            <div>
              <h3>Productor asesor</h3>
              <a href="/trabajaconnosotros?cargo=Productor%20Asesor">
                <button>Postúlate</button>
              </a>
            </div>
          </div>
          <div className="card-home">
            <img
              src={organizador}
              alt="Organizador"
              className="card-image-home"
            />
            <div>
              <h3>Organizador</h3>
              <a href="/trabajaconnosotros?cargo=Organizador">
                <button>Postúlate</button>
              </a>
            </div>
          </div>
          <div className="card-home">
            <img
              src={oficial}
              alt="agente oficial"
              className="card-image-home"
            />
            <div>
              <h3>Agente Oficial</h3>
              <a href="/trabajaconnosotros?cargo=Agente%20Oficial">
                <button>Postúlate</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrabajaHome;
