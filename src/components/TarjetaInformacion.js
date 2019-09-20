import React from 'react';
import { Card, CardBody,CardTitle,CardDeck,Row,} from 'reactstrap';
import '../components/styles/TarjetaInformacion.css';
import Certificado from './animacion/Certificado';
import Boletas from './animacion/Boletas';
import Soporte from './animacion/Soporte';

class TarjetaInfo extends React.Component{
    render(){
        return(
            <section>
              <Row className="TarjetaInfo__items">
                    <h1 className="TarjetaInfo__General">Beneficios</h1>
              </Row>
              <Row>
               <CardDeck>
                <Card className="TarjetaInfo__items">
                    <Boletas/>
                    <CardTitle className="TarjetaInfo_Titulos">
                        Comprobante Personalizado
                    </CardTitle>
                    <CardBody className="TarjetaInfo_Body">
                        Personalizamos tus boletas y facturas con tu logo.
                    </CardBody>
                </Card>
                <Card className="TarjetaInfo__items">
                    <Certificado/>
                    <CardTitle className="TarjetaInfo_Titulos">
                        Certificación Digital
                    </CardTitle>
                    <CardBody className="TarjetaInfo_Body">
                        Tenemos una Alianza estrategica con la OSE y PSE autorizado por la SUNAT Certificado Digital gratuito.
                    </CardBody>
                </Card>
                <Card className="TarjetaInfo__items">
                    <Soporte/>
                    <CardTitle className="TarjetaInfo_Titulos">
                        Soporte
                    </CardTitle>
                    <CardBody className="TarjetaInfo_Body">
                        Te brindamos soporte 14/6 desde 7am-9pm de Lunes-Sabado, no incluye Feriados.
                    </CardBody>
                </Card>
               </CardDeck>
              </Row>
                <br/>     
            </section>
        )
    }
}
export default TarjetaInfo;