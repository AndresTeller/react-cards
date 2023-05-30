import React from "react";
import Testimonio from "./Testimonio";
import images from "../assets/images";
import descriptions from "../assets/descriptions";
import colors from "../assets/colors";

export const Testimonios = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">We are commited expert partners</h1>
        <p className="subtitle">
          We place huge value on strong relationships and have seen the benefit
          they bring to our business. Custome feedback is vital in helping us to
          get it right.
        </p>
      </div>
      <div class="cards">
        <Testimonio
          color={colors[1]}
          image={images[0]}
          name="Emma Bostian en Suecia"
          position="Ingeniera de Software en Spotify"
          text={descriptions[0]}
        />
        <Testimonio
          color={colors[2]}
          image={images[1]}
          name="John Doe en Inglaterra"
          position="Ingeniero de Software en Meta"
          text={descriptions[1]}
        />
        <Testimonio
          color={colors[4]}
          image={images[2]}
          name="Ana Johnson en Alemania"
          position="Ingeniera de Software en Amazon"
          text={descriptions[2]}
        />
      </div>
    </div>
  );
};

export default Testimonios;
