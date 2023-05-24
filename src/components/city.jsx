import React from "react";
import "./style/city.css";

const City = () => {
  return (
    <div className="city">
      <div className="searchCity">
        <input type="text" />
      </div>
      <div className="cityStatusIcon">İcon</div>
      <p className="cityDegree">derece</p>
      <div>
        <p>Gün</p> <p>Saat</p>
      </div>
      <div>icon + Bulutlu</div>
      <div>icon yağmur + yağmur ihtimali</div>
    </div>
  );
};

export default City;
