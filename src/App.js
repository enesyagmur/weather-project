import "./App.css";

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  headers: {
    'X-RapidAPI-Key': '9a37cc7818mshed6ac7313d7f93cp1fb439jsnc58358def347',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

function App() {
  return <div className="App"></div>;
}

export default App;
