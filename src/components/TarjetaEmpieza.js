import React from 'react';
import { CardTitle,Row,Button } from 'reactstrap';

import '../components/styles/EmpiezaFacturar.css'
class TarjetaEmpieza extends React.Component{
    render(){
        return(
          <section>
            <div className="jumbotron jumbotron-fluid" className="SeccionEmpieza" >
              <CardTitle className="display-4" className="Empieza_Titulo">Regístrate y empieza con tu facturación electrónica</CardTitle>
              <Row className="Empieza_items" >
                <Button className="boton" outline color="danger" size="lg" href="/registro"><h3>Probar Gratis</h3></Button>
              </Row>
            </div>
          </section>
        )
    }
}
export default TarjetaEmpieza;