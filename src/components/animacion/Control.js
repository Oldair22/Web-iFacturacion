import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/control.json";
import {Row,Col,CardBody} from 'reactstrap';
class Control extends Component {
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
            <h1>Control</h1>
            <h4>Optimiza procesos de auditorias. 
              Revisa los procesos diarios de tu empresa 
              a través de nuestros de reportes dinámicos. </h4>
          </Col>
          <Col md="7">
            <CardBody>
            <Lottie options={defaultOptions} height={400}width="100%"alt="Gif_Control"/>
            </CardBody>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Control;