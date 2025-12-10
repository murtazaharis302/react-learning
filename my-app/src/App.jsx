// src/App.jsx
import React, { useState } from "react";
import { AppContext } from "./contexts/AppContext";
import WeatherDashboard from "./WeatherDashboard";

function App() {
  // global settings (context)
  const [unit, setUnit] = useState("C"); // "C" or "F"
  const [refreshTime, setRefreshTime] = useState(10000); // ms (10s)

  const contextValue = { unit, refreshTime, setUnit, setRefreshTime };

  const container = {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: 24,
    fontFamily: "Arial, sans-serif",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div style={container}>
        <h1>Simple Weather App </h1>

        <div style={{ marginBottom: 16, display: "flex", gap: 12, alignItems: "center" }}>
          <div>
            <label>Unit: </label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="C">Celsius (C)</option>
              <option value="F">Fahrenheit (F)</option>
            </select>
          </div>

          <div>
            <label>Refresh:</label>
            <select
              value={refreshTime}
              onChange={(e) => setRefreshTime(Number(e.target.value))}
            >
              <option value={5000}>5s</option>
              <option value={10000}>10s</option>
              <option value={30000}>30s</option>
            </select>
          </div>
        </div>

        <WeatherDashboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;


