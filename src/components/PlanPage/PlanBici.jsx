import React from "react";
import enfoqueImg from "../img/bici1.jpg";
import enfoqueImg2 from "../img/bici2.jpg";
import style from "./EnfoquePlan.module.css";

export default function PlanBici() {
  return (
    <div className="container" style={{ marginTop: "3vh" }}>
      <h2 className={style.title}>Plan Bici</h2>
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
          Entendemos hacia donde querés ir y te ofrecemos llevarte, con el plan Bici vas a poder tener la que siempre quisiste.
Además de ser un medio de movilidad, es una actividad super saludable para compartir en familia, con amigos o solo.
Sumate al Plan Bici y descubrí todos los beneficios que tiene para vos.

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
