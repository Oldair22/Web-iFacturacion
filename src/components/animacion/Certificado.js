import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/certificado.json";

class Seguridad extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <section>
        <div>
          <Lottie options={defaultOptions} height={130} width={300} alt="Gif_Certificado"/>
        </div>
      </section>
    );
  }
}

export default Seguridad;