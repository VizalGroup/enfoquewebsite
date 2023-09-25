import React from "react";
import enfoqueImg from "../img/moto1.jpg";
import enfoqueImg2 from "../img/moto2.jpg";
import style from "./EnfoquePlan.module.css";

export default function ElectroPlan() {
  return (
    <div className="container" style={{ marginTop: "3vh" }}>
      <h2 className={style.title}>Plan Enfoque Moto</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={enfoqueImg}
            alt="Imagen de plan de ahorro"
            className="img-fluid"
            style={{ boxShadow: "40px", borderRadius: "15px" }}
          />
        </div>

        <div className="col-md-6">
          <p className={style.text}>
            Tené esas vacaciones soñadas en cuotas fijas y con entrega pactada.
            viaja a: las Cataratas del Iguazú, glaciar perito moreno, Termas de
            Río Hondo o a un crucero para 2 personas All inclusive durante 7
            noches por toda la costa sudamericana.
          </p>
          <img
            src={enfoqueImg2}
            alt="Imagen de plan de ahorro"
            className="img-fluid"
            style={{
              boxShadow: "40px",
              borderRadius: "15px",
              marginBottom: "2vh",
            }}
          />
          <br />
          <a href="https://gestionenfoque.online/sumate">
            <button className={style.button}>Contáctanos</button>
          </a>
        </div>
      </div>
    </div>
  );
}
