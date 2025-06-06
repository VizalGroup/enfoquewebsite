import React, { useState, useEffect } from "react";
import LotteryResultNumberShow from "../LotteryResultNumberShow/LotteryResultNumberShow";
import PlanesHome from "../PlanesHome/PlanesHome";
import PaymentMethods from "../PaymentMethods/PaymentMethods";

import "./Home.css";
import Trabaja from "../Trabaja/Trabaja";
import Contenido from "../Contenido/Contenido.jsx";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Controla el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      // Verifica si el scroll está cerca del final de la página
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setShowScrollButton(isNearBottom);
    };

    // Escucha los eventos de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Maneja el clic en el botón para volver arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <LotteryResultNumberShow />
      <div></div>
      <Contenido />
      <div className="color-fondo" id="nuestros-planes">
        <PlanesHome />
      </div>
      <div id="metodos-de-pago">
        <PaymentMethods />
      </div>
      <div id="trabaja">
        <Trabaja />
      </div>
      {/* Renderiza el botón cuando showScrollButton sea true */}
      {showScrollButton && (
        <button className="scroll-button" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}

export default Home;
