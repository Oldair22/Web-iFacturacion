import React from 'react'
import {Form,Input,CardTitle,FormGroup,Label} from 'reactstrap'
class SubirArchivos extends React.Component{
render(){
    return(
        <section> 
            <CardTitle>
                Subir el comprobante Pago
            </CardTitle>
            <Form>
                <FormGroup>
                    <Label >File</Label>
                    <Input type="file" name="file" id="" />
                </FormGroup>
            </Form>
        </section>
        )
    }
}
export default SubirArchivos;