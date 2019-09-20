import React from 'react';
import '../components/styles/NavbarRegistro.css';
import { Nav, NavItem,NavLink } from 'reactstrap';

class NavbarProgreso extends React.Component {
  render() {
    return (
        <section>
        <Nav className="NavbarRegistro">
          <NavItem >
            <NavLink className="NavbarRegistro__text" href="/registro">
              {/* <img src={imagen1} className="NavbarRegistro__brand-logo" /> */}
              Registro----></NavLink>
          </NavItem>
          <NavItem >
            <NavLink className="NavbarRegistro__text" href="/sunat">
              {/* <img src={imagen2} className="NavbarRegistro__brand-logo" /> */}
              Sunat----></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="NavbarRegistro__text" href="https://20491228297.pse.pe/login">
            {/* <img src={imagen3} className="NavbarRegistro__brand-logo" /> */}
              Ingresar</NavLink>
          </NavItem>
        </Nav>
      </section>
    );
  }
}

export default NavbarProgreso;
