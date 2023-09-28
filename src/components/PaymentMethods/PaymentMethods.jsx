import React from "react";
import mpLogo from "../img/logo-mercadopago.jpg";
import vmLogo from "../img/visaMasterLogo.png";
import tbLogo from "../img/tbLogo.jpg";
import daLogo from "../img/daLogo.png";
import style from "./PaymentMethods.module.css";
import Card from "react-bootstrap/Card";

export default function PaymentMethods() {
  // Estamos a la espera de información del cliente con la entidad bancaria que trabaja para desarrollar este componente, esto es un ejemplo para mostrarle en el sprint

  return (
    <div >
      <h3 className={style.title}>Métodos de Pago</h3>
      <div className={style.container}>
        <Card className={style.card}>
          <Card.Img variant="top" src={mpLogo} />
          <Card.Body className={style.cardBody}>
            <Card.Title className={style.cardTitle}>Mercado Pago</Card.Title>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Img variant="top" src={vmLogo} />
          <Card.Body className={style.cardBody}>
            <Card.Title className={style.cardTitle}>
              Tarjeta de Crédito y Débito
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Img variant="top" src={tbLogo} />
          <Card.Body className={style.cardBody}>
            <Card.Title className={style.cardTitle}>
              Transferencia Bancaria
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Img variant="top" src={daLogo} />
          <Card.Body className={style.cardBody}>
            <Card.Title className={style.cardTitle}>
              Débito Automático
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
