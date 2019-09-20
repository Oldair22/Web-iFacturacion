import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/tiempo2.json";
import {Row,Col,CardBody} from "reactstrap"
class Tiempo extends Component {
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
                <h1>Tiempo</h1>
                <h4>Lo hacemos simple porque conocemos tu negocio. 
                  Nuestros sistemas optimizan el tiempo de registro de todos tus procesos.</h4>
              </Col>
              <Col md="7">
                <CardBody>
                <Lottie options={defaultOptions} height={300} width="100%" alt="Gif_Tiempo"/>
                </CardBody>
              </Col>
            </Row>
        </section>
    );
  }
}

export default Tiempo;