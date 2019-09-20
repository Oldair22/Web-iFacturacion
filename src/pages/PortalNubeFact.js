import React from 'react';
import IFrameNubeFact from '../components/iFrame/IframeNubeFast';
class PortalNubeFact extends React.Component{
    render(){
         return(
           <section>
              <div className="container">
                <IFrameNubeFact/>
              </div>
           </section>
        )
    }
}
export default PortalNubeFact;