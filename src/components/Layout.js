import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props) {
  return (
    <section>
      <React.Fragment>
        <Navbar/>
          {props.children}
        <Footer/>
      </React.Fragment>
    </section>
  );
}

export default Layout;
