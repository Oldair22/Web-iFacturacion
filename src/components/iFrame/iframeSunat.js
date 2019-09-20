import React from 'react';
import Iframe from 'react-iframe';
import {Row} from 'reactstrap';
import { Card, CardHeader, CardBody, Alert } from 'reactstrap';
import '../styles/PortalSunat.css';
class IframeSunat extends React.Component{

render(){
    return(
      <section>
        <div>
        <Card>
        <CardHeader>
            <h1>
            Ahora dale alta en SUNAT
                </h1>
               <ul>
                   Realiza los Siguientes pasos:
                   <li>1.-Ingresa tu Usuario y Ruc</li>
                   <li>2.-Marque la casilla de seguridad</li>
                   <li>3.-Haga click en Iniciar sesión</li>
               </ul>
        </CardHeader>
        <CardBody>
          <Row>
          <Iframe url="https://e-menu.sunat.gob.pe/cl-ti-itmenu/MenuInternet.htm"
                width="100%"
                height="900px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>
             </Row>
             <Alert color="primary" >Podras realizar tus facturas despues de 24 horas  <a href="https://ifacturacion.pse.pe/login" className="alert-link"> Click Aqui</a> </Alert>
        </CardBody>
        </Card>
        </div>
     </section>
        )
    }
}
export default IframeSunat;