import React, { Component } from 'react';
import Dispositivos from '../components/animacion/Dispositivos'
import Seguridad from '../components/animacion/Seguridad'
import Control from './animacion/Control'
import Tiempo from './animacion/Tiempo';
import {Carousel, Row} from 'react-bootstrap';
import '../components/styles/Carousel.css'

class CCarousel extends Component {
 render(){
   return(
     <section>
        <Row className="Carousel__Items">
            <h1 className="Carousel__General">Características</h1>
        </Row>
        <Row>  
        <Carousel>
          <Carousel.Item >
            <Dispositivos/>
          </Carousel.Item>
          
          <Carousel.Item >
            <Seguridad />
          </Carousel.Item>
        
          <Carousel.Item >
            <Tiempo/>
          </Carousel.Item>

          <Carousel.Item >
            <Control/>
          </Carousel.Item>
        </Carousel>
      </Row>
     </section>
   )
 }
}
export default CCarousel;