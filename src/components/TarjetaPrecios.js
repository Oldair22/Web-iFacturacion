import React from 'react';
import { Card, Button, CardFooter, CardBody, CardTitle, CardText, CardDeck, Row } from 'reactstrap';
import '../components/styles/TarjetaPrecios.css'

class TarjetaPrecio extends React.Component{
    render(){
        return(
            <section>
              <div  className="Precio_items">
                <Row className="Precio_items">
                    <h1 className="Precio__General">Nuestros Precios</h1>
                </Row>
                <CardDeck className="Precio_items">
                <Card className="Precio_items">
                    <CardBody>
                        <CardTitle className="Precio__TituloCabecera">A SOLO</CardTitle>
                        <CardTitle className="Precio__Precio"><span className="Precio__span">S/.</span>
                        49<small>.00</small></CardTitle>
                        <Button className="Seccion__botones2" href="/registro">Probar Gratis</Button>
                        <CardTitle className="Precio__TituloCabecera" >PLAN BÁSICO</CardTitle>
                    </CardBody>
                        <CardFooter className="Precio__Footer">
                        <CardText>Facturación 100 comprobantes por mes</CardText>
                        <CardText>Emisión fácil, rápida e intuitíva</CardText>
                        <CardText>Certificado Digital Incluido</CardText>
                        <CardText>Multi-dispositivos</CardText>
                        <CardText>Soporte vía correo electrónico</CardText>
                        <CardText>Incluye IGV</CardText>
                    </CardFooter>
                </Card>
                <Card className="Precio_items">
                    <CardBody>
                        <CardTitle className="Precio__TituloCabecera">A SOLO</CardTitle>
                        <CardTitle className="Precio__Precio"><span className="Precio__span">S/.</span>
                        69<small>.00</small></CardTitle>
                        <Button className="Seccion__botones2" href="/registro">Probar Gratis</Button>
                        <CardTitle className="Precio__TituloCabecera">PLAN AVANZADO</CardTitle>
                    </CardBody>
                        <CardFooter className="Precio__Footer">
                        <CardText>Facturación 500 comprobantes por mes</CardText>       
                        <CardText>Emisión facil, rapida e intuitíva</CardText>
                        <CardText>Certificado Digital Incluido</CardText>
                        <CardText>Multi-dispositivos</CardText>
                        <CardText>Soporte por teléfono(Lunes a viernes 9:00 am-6:00pm)</CardText>
                        <CardText>Incluye IGV</CardText>                   
                    </CardFooter>
                </Card>
                <Card className="Precio_items" >
                    <CardBody>
                    <CardTitle className="Precio__TituloCabecera">A SOLO</CardTitle>
                    <CardTitle className="Precio__Precio"><span className="Precio__span">S/.</span>
                    99<small>.00</small></CardTitle>
                    <Button className="Seccion__botones2" href="/registro">Probar Gratis</Button>
                    <CardTitle className="Precio__TituloCabecera" >PLAN COMPLETO</CardTitle>
                    </CardBody>
                    <CardFooter className="Precio__Footer">
                        <CardText>Facturación 1000 comprobantes por mes </CardText>
                        <CardText>Emisión facil, rapida e intuitíva</CardText>
                        <CardText>Certificado Digital Incluido</CardText>
                        <CardText>Multi-dispositivos</CardText>
                        <CardText>Soporte por teléfono 24/7</CardText>
                        <CardText>Incluye IGV</CardText>     
                    </CardFooter>
                </Card>
                </CardDeck>
              </div>
            </section>
        )
    }
}
export default TarjetaPrecio;