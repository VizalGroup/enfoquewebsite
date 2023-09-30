import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import style from "./TrabajaConNosotros.module.css";
import { useLocation } from "react-router-dom";

export default function TrabajaConNosotros() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const cargoParam = queryParams.get("cargo");
  const [formData, setFormData] = useState({
    nombre: "",
    cargo: cargoParam || "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  // Utiliza el valor de cargoParam para preseleccionar la opción en el campo de selección de cargo
  useEffect(() => {
    if (cargoParam) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        cargo: cargoParam,
      }));
    }
  }, [cargoParam]); // Agregar formData al arreglo de dependencias

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, cargo, telefono, email, mensaje } = formData;
    const subject = "Nuevo Candidato Enfoque";
    const body = `${nombre} se ha postulado para el cargo de ${cargo}\n\n${mensaje}\n\nContacto:\n${telefono}\n${email}`;

    const encodedBody = encodeURIComponent(body);
    const encodedSubject = encodeURIComponent(subject);

    const mailtoLink = `mailto:enfoquechubut@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h3 className="text-center">Trabaja con Nosotros</h3>
          <p className="text-center">
            Sumate a la empresa de capitalización financiera más innovadora del
            mercado.
          </p>
          <h4>¿Quiénes somos?</h4>
          <p>
            Somos una empresa de capitalización financiera liderada por
            excelentes profesionales con una amplia trayectoria en el rubro.
            Nuestra misión es clara: acercar a nuestros suscriptores a cumplir
            sus sueños y acompañar a nuestra fuerza de venta en su desarrollo y
            éxito profesional.
          </p>
          <h4>Perfil del postulado</h4>
          <ul style={{ listStyle: "none" }}>
            <li>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#6ec5b8" }}
              />{" "}
              Perfil Comercial con aspiraciones de crecimiento
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#6ec5b8" }}
              />{" "}
              Proactivo
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#6ec5b8" }}
              />{" "}
              Manejo de redes sociales y tecnología
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#6ec5b8" }}
              />{" "}
              Experiencia en ventas (no excluyente)
            </li>
          </ul>
          <h4>Beneficios</h4>
          <ul style={{ listStyle: "none" }}>
            <li>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#6ec5b8" }}
              />{" "}
              Crecimiento: amplias posibilidades de crecimiento profesional,
              oportunidad de tener tu propia unidad de negocio
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#6ec5b8" }}
              />{" "}
              Formación: excelentes capacitaciones de manera continua para que
              puedas desarrollar la actividad y puedas ser un profesional de la
              venta
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#6ec5b8" }}
              />{" "}
              Profesionalismo: Desarrollate profesionalmente en este rubro con
              los líderes más competentes
            </li>
          </ul>
          <br />
          <h4 className="text-center">
            Postulate completando el siguiente formulario
          </h4>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                pattern="[A-Za-z\s]+"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cargo">Cargo</label>
              <input
                type="text"
                className="form-control"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                readOnly
                style={{ color: "grey" }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                pattern="^[0-9+]+$" // Patrón más restrictivo
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">
                ¿Por qué quieres trabajar en Enfoque?
              </label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                style={{ resize: "none", height: "35vh" }}
              ></textarea>
            </div>

            <br />
            <p className={style.alert}>
              Presiona Enviar y te redirigirá a tu correo electronico. Por favor
              adjunta tu Curriculum
            </p>
            <button type="submit" className={style.button}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
