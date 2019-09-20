import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/soporte.json";

class Soporte extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <section>
        <div>
          <Lottie options={defaultOptions} height={130} width={300} alt="Gif_Soporte"/>
        </div>
      </section>
    );
  }
}

export default Soporte;