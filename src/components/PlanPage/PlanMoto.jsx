import React from "react";
import enfoqueImg from "../img/moto1.jpg";
import enfoqueImg2 from "../img/moto2.jpg";
import style from "./EnfoquePlan.module.css";

export default function PlanMoto() {
  return (
    <div className="container" style={{ marginTop: "3vh" }}>
      <h2 className={style.title}>Plan Moto</h2>
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
          Subite a este plan y roda a tu próximo destino, con nuestro Plan Moto en sus 2 versiones, vas a poder elegir la que mejor se adapte a lo que más necesitas, tenemos en versión 110 o 150 cc.

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
          <a href="https://enfoquegestion.online/sumate">
            <button className={style.button}>Contáctanos</button>
          </a>
        </div>
      </div>
    </div>
  );
}
