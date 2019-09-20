import React from 'react';
import { CardText, CardTitle, Button, Row } from 'reactstrap';
import '../components/styles/Section1.css';

class TSeccion1 extends React.Component{
    render(){
        return(
            <section>
                <div className="Seccion">
                    <CardTitle className="Seccion_Titulo" className="display-4">Facturación Electrónica a BAJO COSTO</ CardTitle>
                    <CardText  className="Seccion_Descripcion"className="lead">Emite cualquier comprobante de pago, fácil de usar y sin límites</CardText>
                    <Row className="Seccion_items">
                        <Button className="Seccion__botones" outline color="primary" href="#Caracteristicas">Saber mas</Button>
                        <Button className="Seccion__botones2" href="/registro">Probar Gratis</Button>
                    </Row>
                </div>
            </section>    
        )
    }
}
export default TSeccion1;