import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./AboutMe.css";
import MyNavbar from "./MyNavbar";

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <MyNavbar />
      <div className="container lg-12 md-6 sm-4 sobre-mi-container mt-5">
        <div className="row text-center ">
          <div className="col  sobre-mi-card">
            <Card.Title className="sobre-mi-title mt-3">
              ¡Hola a todos!
            </Card.Title>
            <Card.Text className="sobre-mi-text mt-5">
              Mi nombre es Facundo Hernandez, un entusiasta desarrollador web
              full stack de 23 años proveniente de Uruguay. Desde el pasado
              abril de 2023, me sumergí de lleno en el emocionante mundo del
              desarrollo web, dedicando tiempo y esfuerzo continuo para mejorar
              y expandir mis habilidades.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Mi viaje comenzó con un curso introductorio de front-end, seguido
              de un bootcamp intensivo de 3 meses que abarcó de lunes a viernes,
              de 8 a 18 hs. Al completar el bootcamp, me embarqué en la creación
              de mi propio portfolio y en la implementación de proyectos
              prácticos para consolidar mis conocimientos.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Mi búsqueda constante de conocimiento me ha llevado a participar
              en cursos autodidactas en plataformas como Udemy. Actualmente, me
              encuentro inmerso en un curso de AWS, un curso completo de React y
              otro de Javascript, con el objetivo de reforzar y ampliar mis
              habilidades existentes.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Mis habilidades técnicas incluyen el dominio de tecnologías como
              React, Node.js, MongoDB, MySQL, Redux, Express.js, Javascript,
              HTML, CSS, Vue.js, GitHub, AWS, Scrum, Bootstrap y Tailwind.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Además de mi dedicación al desarrollo web, me considero una
              persona responsable, proactiva y constantemente impulsada a
              superar desafíos. Mi mentalidad enfocada en el crecimiento y mi
              habilidad para aprender rápidamente me convierten en un apasionado
              del desarrollo web.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              En cuanto a idiomas, manejo un nivel B-1 de inglés, soy hablante
              nativo de español y tengo conocimientos básicos de portugués.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Fuera del ámbito laboral, disfruto practicar fútbol, artes
              marciales y jugar videojuegos. Como amante del trabajo remoto, mi
              sueño es poder viajar y desempeñarme desde cualquier parte del
              mundo.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              Estoy emocionado por compartir mi viaje y habilidades con la
              comunidad del desarrollo web.
            </Card.Text>

            <Card.Text className="sobre-mi-text">
              ¡Gracias por tomarse el tiempo de conocerme! Estoy abierto a
              cualquier pregunta o colaboración.
            </Card.Text>

            <a
              className="buttonInfo mt-5 mb-5"
              onClick={handleShowModal}
              block
            >
              <span id="span1"></span>
              <span id="span2"></span>
              <span id="span3"></span>
              <span id="span4"></span>
              Contáctame
            </a>

            <Modal
              className="modal_bg mt-5"
              show={showModal}
              onHide={handleCloseModal}
              dialogClassName="modal-custom"
            >
              
              <Modal.Body className="modal_body">
                <h3 className="mt-2">Correo Electrónico:</h3>
                <h4 className="mt-3">facundohernandez122@gmail.com</h4>
                <h3 className="mt-5">Número de Teléfono:</h3>
                <h4 className="mt-3">+598 097 085 998</h4>
              </Modal.Body>
              <Modal.Footer className="modal_footer">
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
