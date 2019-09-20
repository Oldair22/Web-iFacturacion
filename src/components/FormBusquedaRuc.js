import React from 'react';
import {Button,Card,CardBody,FormGroup,Form,Input,Row,Col,CardHeader,CardTitle} from 'reactstrap';

class BusquedaRuc extends React.Component{

render(){
    return(
        <Card>
            <CardHeader>
                    <CardTitle color="primary" tag="h1">Campos de Usuario</CardTitle>
                </CardHeader>
            <CardBody>
           
                <Form onSubmit={this.props.onSubmit}>
                <Row>
                <Col>
                <FormGroup>
                <label>Email</label>
                <Input
                    onChange={this.props.onChange}
                    placeholder="Ingresar Usuario"
                    type="email"
                    name="UsuarioNuevo"
                    value={this.props.formValues.UsuarioNuevo}
                    required
                />
                </FormGroup>
                <FormGroup>
                    <label>Contraseña</label>
                    <Input
                        onChange={this.props.onChange}
                        placeholder="Contraseña"
                        type="password"
                        name="ContrasenNueva"
                        minLength="5"
                        required
                        value={this.props.formValues.ContrasenNueva}
                    />
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
        )
    }

}

export default BusquedaRuc;