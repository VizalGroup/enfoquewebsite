import React from "react";
import electroImg from "../img/electro.png";
import style from "./ElectroPlan.module.css";

export default function ElectroPlan() {
  

  return (
    <div className="container" style={{ marginTop: "3vh" }}>
      <h2 className={style.title}>Plan Electro y Electro 2.0</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={electroImg}
            alt="Imagen de plan de ahorro"
            className="img-fluid"
            style={{ boxShadow: '40px'}}
          />
        </div>

        <div className="col-md-6">
          <p className={style.text}>
            Equipa tu casa con hermosos electrodomésticos de primeras marcas.
            Lavarropas, heladera, cocina, microondas y un smart TV de 50 " es lo
            que te podes ganar al salir adjudicado con el plan electro pero el
            plan electro 2.0 es mucho más completo y además incluye: Aire
            acondicionado, juego de comedor y un sillon 3 cuerpos
          </p>
          <br />
          <a href="https://enfoquegestion.online/sumate">
            <button className="btn btn-warning" style={{ width: 'fit-content', padding: '1vw', fontSize: '24px'}}>Contáctanos</button>
          </a>
        </div>
      </div>
    </div>
  );
}
