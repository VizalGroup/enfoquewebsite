import React from "react";
import enfoqueImg from "../img/trabajadormadera.jpg";
import enfoqueImg2 from "../img/ladrillos.jpg";
import style from "./EnfoquePlan.module.css";

export default function PlanProyecto() {
  return (
    <div className="container" style={{ marginTop: "3vh" }}>
      <h2 className={style.title}>Plan Proyecto</h2>
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
          ¿Hace cuanto tenés en mente renovar o ampliar tu casa o quincho? ¡Enfoque te ofrece comenzar a ahorrar para poder cubrir todo el costo de materiales y si salís adjudicado <strong> NO PAGAS MÁS</strong>!

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
