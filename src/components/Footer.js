import React from "react";
import {
    Col,
    Row,
    CardFooter,Button } from 'reactstrap';
//import logoEmpresa from '../images/logoblanco.jpg';
import '../components/styles/Footer.css';
import facebook from '../images/facebook.svg';
import whatsapp from '../images/whatsapp.svg';
import youtube from '../images/youtube.svg';
import '../components/styles/botonesSocial.css';

import { faFacebookSquare,faYoutube,faWhatsappSquare, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Footer extends React.Component{
    render(){
        return(
            <section>
                <CardFooter color="light" expand="md" className="Footer">
                    <Row>
                    <Col md="4">
                        {/* <img src={logoEmpresa} className="Footer__brand-logo" alt="Logo_Empresa"></img> */}
                        <h3>Contáctenos</h3>
                        <ul>
                            <li>Urb.Marcavalle E-15,Cusco-Cusco</li>
                            <li>(084) 28-76-41 / 984-125-256</li>
                            <li>info@palerp.com</li>
                            <li>www.ifacturacion.pe</li>
                        </ul> 
                    </Col> 
                    <Col md="2">
                    <h5 className="title">Caracteristícas</h5>
                        <ul>
                            <li>
                                Bajo Costo
                            </li>
                            <li>
                                Multiplataforma
                            </li>
                            <li>
                                Sin Limites
                            </li>
                            <li>
                                Soporte 16/6
                            </li>
                            <li>
                                Facil de Usar
                            </li>
                        </ul>
                    </Col>
                    <Col md="2">
                    <h5 className="title">Beneficios</h5>
                        <ul>
                            <li>
                                Certificado Incluido
                            </li>
                            <li>
                                Personaliza tu empresa
                            </li>
                            <li>
                                Activacin 24 horas
                            </li>
                            <li>
                                Alianza OSE y PSE
                            </li>
                            <li>
                                Colaboración mutua
                            </li>
                        </ul>
                    </Col>
                    <Col md="2">
                    <h5 className="title">Aviso Legal</h5>
                        <ul>
                            <li>
                                Términos y condiciones
                            </li>
                        </ul>
                    </Col>
                    <Col md="2">
                    <div>
                        <h5 className="title">Siguenos en: </h5>
                        
                        <a
                    href="https://www.youtube.com/PaleConsultores"
                    // target="_blank"
                   
                   
                >
                   <FontAwesomeIcon icon={faYoutubeSquare} size="3x" color="white"/>
                </a> 
                        
                           
                <a
                    href="https://www.facebook.com/ifacturacioncusco/"
                    //target="_blank"
                   
                   
                >
                    <FontAwesomeIcon icon={faWhatsappSquare} size="3x" color="white"/>
                </a>
                   
                <a
                    href="https://api.whatsapp.com/send?phone=+51984125256&amp;text=Quiero%20saber%20mas%20de%20iFacturacion"
                    //target="_blank"
                   
                   
                >
                  <FontAwesomeIcon icon={faFacebookSquare} size="3x" color="white"/>
                </a>
                        
                       
                        
                        {/* <ul>
                       
                            <Button  className="button" href="https://www.facebook.com/ifacturacioncusco/">
                            <img src={facebook} className="imagenes" alt="facebook" ></img>
                            
                            </Button>
                               
                            <Button className="button" href="https://www.youtube.com/PaleConsultores">
                            <img src={youtube} className="imagenes" alt="youtube" ></img>  
                            
                            </Button>
                             
                            <Button className="button" href="https://api.whatsapp.com/send?phone=+51984125256&amp;text=Quiero%20saber%20mas%20de%20iFacturacion">
                            <img src={whatsapp} className="imagenes" alt="whatsapp" ></img>  
                            
                            </Button>
                             
                        </ul> */}
                    </div>
                    </Col>
                    <Col>  
                        <p className="title">Copyright © 2019 Pale Consultores. Todos los derechos reservados </p>     
                    </Col>
                    </Row>   
                </CardFooter>
            </section>
        )
    }
}
 export default Footer;