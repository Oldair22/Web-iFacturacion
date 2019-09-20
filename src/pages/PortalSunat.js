import React from 'react'
import IFrameSunat from '../components/iFrame/iframeSunat';
import NavProgreso from '../components/NavbarRegistro';
class PortalSunat extends React.Component{
    render(){
        return(
            <section>
                <div className="container">
                <NavProgreso/>
                    <IFrameSunat/>
                </div>
            </section>
        );
    }
}
export default PortalSunat;