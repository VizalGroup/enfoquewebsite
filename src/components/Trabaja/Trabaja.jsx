import React from 'react';
import './Trabaja.css';

function Trabaja() {

  const emailAddress = 'correo@example.com'; // Reemplaza con tu dirección de correo
  const emailSubject = 'Solicitud de Trabajo'; // Personaliza el asunto del correo
  const emailBody = 'Estoy interesado en trabajar con ustedes.\n\n Nombre:     \n\n Telefono:   \n\n  Direccion:   \n\n  Resumen:   \n\n'; // Personaliza el contenido del correo

  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='containertrabaja'>
      <div className="trabaja">
        <div className="background-image"></div> {/* Agrega un div para la imagen de fondo */}
        <div className="trabaja-content">
          <h3>Trabaja con Nosotros</h3>
          <button onClick={handleClick}>Contactanos</button>
        </div>
      </div>
    </div>
  );
}

export default Trabaja;
