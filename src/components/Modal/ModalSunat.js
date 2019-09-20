import React from 'react';
import { Button, Modal, ModalHeader,ModalBody, ModalFooter,Alert } from 'reactstrap';
import IFrameSunat from '../iFrame/iframeSunat';

class ModalTerminos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <section>
        <Button outline color="primary" size="lg" onClick={this.toggle}>
            2° paso
        </Button>
        <Modal id="modal"isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
            <ModalHeader  toggle={this.toggle}>
              Ahora dale alta en SUNAT
               <ul>
                Realiza los Siguientes pasos:
                <li>1.-Ingresa tu Usuario y Ruc</li>
                <li>1.-Ingresa tu Usuario y Ruc</li>
                <li>1.-Ingresa tu Usuario y Ruc</li>
               </ul>
            </ModalHeader> 
            <ModalBody>
              <IFrameSunat/>
            </ModalBody>
            <ModalFooter>
              <Alert color="primary" >Podras realizar tus facturas despues de 24 horas  <a href="https://www.nubefact.com/login" className="alert-link"> Click Aqui</a> </Alert>
            </ModalFooter>
        </Modal>
      </section>
    );
  }
}

export default ModalTerminos;