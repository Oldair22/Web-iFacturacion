import React from 'react';
import '../components/styles/Navbar.css';
import logo from '../images/Ifacturacion.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, NavLink } from 'reactstrap';

class NavbarPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <section>
        <Navbar  className="fixed-top" color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="Navbar__brand-logo" alt="Logo" />
            <span className="font-weight-bold"></span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem >
                   <NavLink className="Navbar__textM" href="/#Inicio">Inicio</NavLink>
                </NavItem>
                <NavItem>
                   <NavLink  className="Navbar__textM" href="/#Precios">Precios</NavLink>
                </NavItem>
                <NavItem>
                   <NavLink className="Navbar__textM" href="/#Caracteristicas">Características</NavLink>
                </NavItem>
                <NavItem>
                   <NavLink className="Navbar__textM" href="/#Beneficios">Beneficios</NavLink>
                </NavItem>
                <NavItem>
                   <Button className="Navbar__textB" href="https://ifacturacion.pse.pe/login" color="danger">Ingresar</Button>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </section>
    );
  }
}

export default NavbarPrincipal;
