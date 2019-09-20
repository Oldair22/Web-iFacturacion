import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/security.json";
import {Row,Col,CardBody} from "reactstrap";
class Seguridad extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <section>
          <Row>
              <Col md="5">
                <h1>Seguridad</h1>
                <h4>Confidencialidad,integridad y alta disponibilidad.
                  Definición de perfiles de usuarios
                </h4>
              </Col>
              <Col md="7">
                <CardBody>
                <Lottie options={defaultOptions} height="100%" width="100%" alt="Gif_Seguridad"/>
                </CardBody>
              </Col>
          </Row>
      </section>
    );
  }
}

export default Seguridad;