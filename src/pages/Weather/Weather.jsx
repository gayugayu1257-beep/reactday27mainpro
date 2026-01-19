import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API_KEY`
    );
    setData(res.data);
  };

  return (
    <>
      <input onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Search</button>
      {data && <h3>{data.weather[0].main}</h3>}
    </>
  );
}
