import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/multidispositivo.json";
import {Row,Col,CardBody} from 'reactstrap';
import LazyLoad from 'react-lazy-load';

class Dispositivos extends Component {
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
                <h1>Multidispositivo</h1>
                <h4>Podrás ingresar desde tu  computadora, smartphone o tablet para
                para poder realizar tus facturas.</h4>
              </Col>
              <Col md="7">
                <CardBody>
                  <LazyLoad offsetVertical={1000}>
                    <Lottie options={defaultOptions} height={400} width="100%" alt="Gif_Dispositivos"/>
                  </LazyLoad>
                </CardBody>
              </Col>           
          </Row>
      </section>
    );
  }
}

export default Dispositivos;