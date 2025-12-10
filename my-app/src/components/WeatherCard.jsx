
import React from "react";

const WeatherCard = ({ data }) => {
  if (!data) return <div>No data</div>;

  return (
    <div style={{
      padding: 16,
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      background: "#fff",
      maxWidth: 400
    }}>
      <h3 style={{ margin: 0 }}>{data.city}</h3>
      <p style={{ margin: "6px 0 0 0", color: "#555" }}>{data.description}</p>

      <div style={{ marginTop: 12, display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ fontSize: 32, fontWeight: 700 }}>
          {data.temp}°{data.unit}
        </div>
        <div style={{ color: "#666" }}>
          <div>Feels: {data.feelsLike}°{data.unit}</div>
          <div>Humidity: {data.humidity}%</div>
        </div>
      </div>

      <div style={{ marginTop: 12, color: "#888", fontSize: 13 }}>
        Last updated: {new Date(data.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default WeatherCard;
