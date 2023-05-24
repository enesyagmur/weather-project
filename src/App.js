import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.openweathermap.org/data/2.5/";
    const key = "9f3441674da2adb06b13700d6ff19b5f";
    let city = "bursa";
    let query = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`;
    const fetchData = async () => {
      const response = await axios.get(query);
      setData(response);
    };
    fetchData();
  }, []);
  console.log(data);
  return <div className="App"></div>;
}

export default App;
