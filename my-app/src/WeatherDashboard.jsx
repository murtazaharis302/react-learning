 
import React, { useState, useEffect, useContext, useRef } from "react";
import WeatherCard from "./components/WeatherCard";
import { AppContext } from "./contexts/AppContext";
import { fetchWeatherMock } from "./utils/fakeWeatherApi";

const WeatherDashboard = () => {
  // 1) state: weather data, city input, loading
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("ISLAMABAD");
  const [loading, setLoading] = useState(false);

  // 2) consume global context: unit and refreshTime
  const { unit, refreshTime } = useContext(AppContext);

  // keep a stable ref for current city/unit to use inside interval
  const latest = useRef({ city, unit });
  useEffect(() => { latest.current = { city, unit }; }, [city, unit]);

  // 3) fetch function
  const loadWeather = async (c = city, u = unit) => {
    setLoading(true);
    try {
      const result = await fetchWeatherMock(c, u);
      setWeatherData(result);
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // 4) useEffect: run on mount and when city or unit changes
  useEffect(() => {
    // whenever 'city' or 'unit' changes, fetch new data immediately
    loadWeather(city, unit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, unit]);

  // 5) useEffect: auto-refresh using refreshTime from context
  useEffect(() => {
    // setInterval that uses most recent city/unit from ref
    const id = setInterval(() => {
      const { city: c, unit: u } = latest.current;
      loadWeather(c, u);
    }, refreshTime);

    // cleanup when refreshTime changes or component unmounts
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshTime]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Weather Dashboard</h2>

      <div style={{ marginBottom: 12, display: "flex", gap: 8 }}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          style={{ padding: 8, flex: 1 }}
          onKeyDown={(e) => { if (e.key === "Enter") loadWeather(); }}
        />
        <button onClick={() => loadWeather()}>Fetch</button>
      </div>

      <div style={{ marginBottom: 12 }}>
        <strong>Auto-refresh:</strong> {refreshTime / 1000}s — (controlled by settings)
      </div>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : weatherData ? (
          <WeatherCard data={weatherData} />
        ) : (
          <div>No data yet</div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;





