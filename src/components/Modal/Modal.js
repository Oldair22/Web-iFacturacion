import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Formulario from '../FormularioRegistrar';
import '../styles/Modal.css'
class ModalExample extends React.Component {
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
        <Button className="Modal__botones" onClick={this.toggle}>
          PRUEBA GRATIS
        </Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Formulario/>
          </ModalBody>
            <ModalFooter/>
        </Modal>
      </section>
    );
  }
}

export default ModalExample;