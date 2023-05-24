import React from "react";
import "./style/city.css";
import { BsFillCloudRainFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";

const City = () => {
  return (
    <div className="city">
      <div className="searchCity">
        <input type="text" />
      </div>
      <div className="cityStatusIcon">
        <TiWeatherPartlySunny />
      </div>
      <p className="cityDegree">12'c</p>
      <div className="time">
        <p>Monday</p> <p>16:00</p>
      </div>
      <div className="cityStatus">
        {" "}
        <TiWeatherPartlySunny /> Bulutlu
      </div>
      <div>
        <BsFillCloudRainFill /> %30
      </div>
    </div>
  );
};

export default City;
