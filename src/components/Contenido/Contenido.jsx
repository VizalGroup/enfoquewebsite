import React from "react";
import Image from "react-bootstrap/Image";
import img from "../img/22.png";
import banner from "../img/banner.png";
import "./Contenido.css";

function Contenido() {
  const backgroundStyle = {
    backgroundImage: `url(${banner})`, // Agrega la imagen de fondo utilizando la variable 'img'
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={backgroundStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <Image
              src={img}
              style={{ width: "95%", marginTop: "50px", borderRadius: "10PX" }}
              alt="Imagen"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <p
              style={{
                fontSize: "20PX",
                backgroundColor: "rgba(245, 245, 245, 0.5)",
                marginTop: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              Enfoque es una empresa dedicada a fomentar el ahorro de nuestros
              suscriptores. Con una variada oferta tanto en valores como
              cantidad de cuotas. Pensando siempre en la necesidad de nuestros
              clientes. Completa el formulario y conoce nuestros planes de 12,
              18, 24, 36 y 48 cuotas, siempre fijas, con la posibilidad de
              entrega pactada. Vos podés ser el próximo adjudicado, cumplir tus
              sueños y NO PAGAR MAS ‼️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
