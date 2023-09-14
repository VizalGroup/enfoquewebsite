import React from 'react';
import mpLogo from '../img/logo-mercadopago.jpg'
import vmLogo from "../img/visaMasterLogo.png"
import PpLogo from "../img/logo-PayPal.png"

export default function PaymentMethods() {

  // Estamos a la espera de informacion del cliente con la entidad bancaria que trabaja para desarrollar este componente, esto es un ejemplo para mostrarle en el sprint


  return (
    <div className="container mt-5">
      <h1 className="text-center">Métodos de Pago</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={mpLogo} className="card-img-top" alt="Método de Pago 1" />
            <div className="card-body">
              <h2 className="card-title">Mercado Pago</h2>
              <p className="card-text">Aqui esta la descripcion</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={vmLogo} className="card-img-top" alt="Método de Pago 2" />
            <div className="card-body">
              <h2 className="card-title">Tarjetas de Debito/Credito</h2>
              <p className="card-text">Descripción del Método de Pago.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={PpLogo} className="card-img-top" alt="Método de Pago 3" />
            <div className="card-body">
              <h2 className="card-title">Método de Pago 3</h2>
              <p className="card-text">Descripción del Método de Pago 3.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Agrega más métodos de pago aquí */}
    </div>
  );
}
