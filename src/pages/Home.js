import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './styles/Home.css';
import Seccion1 from '../components/TSeccion1';
import Carousel from '../components/Carousel';
import TarjetaInfo from '../components/TarjetaInformacion';
import TarjetaPrecio from '../components/TarjetaPrecios';
import TarjetaEmpieza from '../components/TarjetaEmpieza';
import '../components/styles/Global.css'

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <section id="Inicio"className="container" >
          <Row  className="Secciones" > 
            <Seccion1/>
          </Row>
        </section>
        <section id="Precios" className="container">
          <Row  className="Secciones" >
            <TarjetaPrecio/>
          </Row>
        </section>
        <section id="Caracteristicas" className="container">
            <Row  className="Secciones" >
              <Col md="12">
              <Carousel/>
              </Col>
            </Row>
        </section>
            <section  id="Beneficios" className="container">
              <Row  className="Secciones" >
                <TarjetaInfo/>
              </Row>
            </section>
            <section id="4" >
              <TarjetaEmpieza/>
            </section>
      </div>
    );
  }
}
