import React from 'react';
import {CustomInput, Button, Card, CardBody, CardHeader, CardTitle, FormGroup, Form, Input, Row, Col, Label,FormFeedback,FormText } from "reactstrap";
import ModalCondiciones from '../components/Modal/ModalTerminosCondiciones.js';
import '../components/styles/errorMsg.css';
class RegisterForm extends React.Component{
   
render(){
    return(
      <section>
        <div className="content">
         <Row>
           <Col >
             <Card className="card-user">
                <CardHeader>
                    <CardTitle color="primary" tag="h1">Registra los datos de tu empresa</CardTitle>
                </CardHeader>
                <CardBody>
                 <Form onSubmit={this.props.onSubmit}>
                  <Row>
                    <Col>
                    <FormGroup>
                    <label>RUC</label>
                    <Input
                        onChange={this.props.onChange}
                        placeholder="Ingresar RUC"
                        type="text"
                        name="ruc"
                        maxLength="11"
                        minLength="11"
                        value={this.props.formValues.ruc}
                        // required
                    />
                   <div className="errorMsg">{this.props.errors.ruc}</div>
                    </FormGroup>
                    <FormGroup>
                    <label>Razon Social</label>
                    <Input
                        onChange={this.props.onChange}
                        placeholder="Ingresar Razon Social"
                        type="text"
                        name="cliente"
                        value={this.props.formValues.cliente}
                        //required
                        //disabled
                    />
                     
                    </FormGroup>
                    <FormGroup>
                    <label>Email</label>
                    <Input
                        onChange={this.props.onChange}
                        placeholder="Ingrese su email"
                        type="email"
                        name="email"
                        value={this.props.formValues.email}
                        //required
                    />
                    <div className="errorMsg" >{this.props.errors.email}</div>
                    </FormGroup>
                    <FormGroup>
                    <label>Telefono</label>
                    <Input
                        onChange={this.props.onChange}
                        placeholder="Ingresar Telefono"
                        type="char"
                        name="telefono"
                        maxLength="9"
                       // required
                        value={this.props.formValues.telefono}
                    />
                    <div className="errorMsg">{this.props.errors.telefono}</div>
                    </FormGroup>
                    <FormGroup>
                    <label>Contraseña</label>
                    <Input
                        onChange={this.props.onChange}
                        placeholder="Contraseña"
                        type="password"
                        name="ContrasenNueva"
                        minLength="5"
                        //required
                        value={this.props.formValues.ContrasenNueva}
                    />
                    <div className="errorMsg">{this.props.errors.ContrasenNueva}</div>
                    </FormGroup>
                    <FormGroup>
                    <label>Persona Contacto</label>
                    <Input
                        onChange={this.props.onChange}
                        placeholder="Ingrese el nombre de la persona de contacto"
                        type="text"
                        name="contacto"
                        value={this.props.formValues.contacto}
                    />
                     <div className="errorMsg">{this.props.errors.contacto}</div>
                    </FormGroup>

                    {/* <FormGroup tag="fieldset">
                    <legend>Elige tu plan</legend>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="idPlanFacturacion" value={1} />{' '}
                        Plan Básico <strong>S/.49,00</strong> 
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="idPlanFacturacion" value={2}/>{' '}
                        Plan Avanzado <strong>S/.69,00</strong> 
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="idPlanFacturacion" value={3}/>{' '}
                        Plan Completo <strong>S/.99,00</strong> 
                        </Label>
                    </FormGroup>
                    </FormGroup> */}
                    <FormGroup check>
                        <Label check>
                            <Input  onChange={this.props.onChange} type="checkbox" name="termino" value={this.props.formValues.termino} required
                             />{' '}   
                        </Label>
                      <ModalCondiciones/>
                    </FormGroup>
                        <br/>
                        <Button 
                        className="btn-round"
                        color="primary"
                        >
                            Siguiente
                        </Button>
                    </Col>
                   </Row> 
                        {this.props.error && (
                            <p className="text-danger">{this.props.error.message}</p>
                        )}
                    </Form>
                </CardBody>
              </Card>
             </Col>
         </Row>
        </div>
      </section>
        )
    }
}

export default RegisterForm;