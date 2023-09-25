import React from 'react';
import Image from 'react-bootstrap/Image';
import img from '../img/22.png';

function Contenido() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <Image src={img} style={{width:'95%', marginTop:'50px', borderRadius:'10PX'}} alt="Imagen" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <p style={{fontSize:'20PX'}}>Enfoque es una empresa dedicada a fomentar el ahorro y la capitalización financiera de nuestros suscriptores, con una gama súper variedad tanto en valores como en cantidad de cuitas, pensando siempre en las necesidades de nuestros clientes. ¡Completa el formulario y cono nuestros planes de 24, 36, 48 cuotas y hasta 72 cuotas fijas y con entrega práctica, además podés ser el próximo adjudicado, cumplir tus sueños y no pagar más!!
</p>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
