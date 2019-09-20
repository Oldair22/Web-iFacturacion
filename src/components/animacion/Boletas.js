import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/boletas.json";
import LazyLoad from "react-lazy-load";

class Boletas extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
   
    };
    return (
      <section>
        <div>
          <LazyLoad offsetVertical={1000}>
            <Lottie options={defaultOptions} height={130} width={300} alt="Gif_Boletas"/>
          </LazyLoad>
        </div>
      </section>
    );
  }
}

export default Boletas;