import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PortalSunat from '../pages/PortalSunat';
import PortalNubeFact from '../pages/PortalNubeFact';
import Registro from '../pages/Registro';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sunat" component={PortalSunat}/>
          <Route exact path="/nubefact" component={PortalNubeFact}/>
          <Route exact path="/registro" component={Registro}/>
          <Route component={NotFound} />
        </Switch>
      </Layout>
  
    </BrowserRouter>
  );
}

export default App;
