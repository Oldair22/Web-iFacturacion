import React from 'react';
import Iframe from 'react-iframe';
import {Row} from 'reactstrap';
import { Card, CardHeader, CardBody } from 'reactstrap';
import '../styles/PortalSunat.css';
class IframeNubeFact extends React.Component{
render(){
    return(
      <section>
        <div className="PortalSunat">    
          <Card>
            <CardHeader>
                <h1>
                Empieza a Facturar Ingresando aqui
                </h1>
                <ul>
                Realiza los Siguientes pasos:
                <li>Ingresa tu Usuario y Contraseña</li>
                </ul>
            </CardHeader>
            <CardBody>
            <Row>
                <Iframe href="https://20491228297.pse.pe/login"
                        width="100%"
                        height="900px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
            </Row>
            </CardBody> 
          </Card>  
        </div>
       </section>
        )
    }
}
export default IframeNubeFact;