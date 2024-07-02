import { useEffect, useState } from "react";
import "./App.css";
import Highlight from "./components/Highlight";
import Temprature from "./components/Temprature";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=2f7234638c324d40874194845240107&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city, apiUrl]);

  return (
    <>
      <div className="bg-slate-800 h-[150vh] sm:h-screen flex flex-col sm:flex-row justify-center items-center align-top">
        
        <div className=" w-[70%] h-[50&] sm:w-1/5 sm:h-1/3">
          <Temprature setCity={setCity} weatherData={weatherData}></Temprature>
        </div>
        <div className="w-[70%] h-[50&] sm:w-1/3 sm:h-1/3  p-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <h1 className="text-slate-200 text-center text-xl sm:text-2xl col-span-1 sm:col-span-2">Today{"'"}s Highlights</h1>
          {weatherData && (
            <>
              <Highlight title="Wind Status" value={weatherData.current.wind_mph} unit="mph" direction={weatherData.current.wind_dir}/>
              <Highlight title="Humidity" value={weatherData.current.humidity} unit="%" />
              <Highlight title="Pressure" value={weatherData.current.pressure_mb} unit="mb" />
              <Highlight title="Visibility" value={weatherData.current.vis_miles} unit="miles" />
            </>
          )}
        </div>
        </div>

    </>
  );
}

export default App;
