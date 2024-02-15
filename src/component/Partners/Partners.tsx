import React from "react";
import harmony from "../../assets/harmony.svg";
import avalanche from "../../assets/avalanche.svg";
import simplex from "../../assets/simplex.svg";
import polygon from "../../assets/polygon.svg";
import binance from "../../assets/binance.svg";
import nervos from "../../assets/nervos.svg";
import "./pstyle.css"

const ContinuousSlider = () => {
	return (
    <div className="logos">
      <div className="logos-slide">
        <img src={harmony} alt="" />

        <img src={avalanche} alt="" />

        <img src={simplex} alt="" width={'114px'} />

        <img src={polygon} alt="" />

        <img src={binance} alt="" />

        <img src={nervos} alt="" width={'70px'} />
      </div>
      <div className="logos-slider">
        <img src={harmony} alt="" />

        <img src={avalanche} alt="" />

        <img src={simplex} alt="" width={'114px'} />

        <img src={polygon} alt="" />

        <img src={binance} alt="" />

        <img src={nervos} alt="" width={'70px'} />
      </div>
    </div>
  );
};

export default ContinuousSlider;
