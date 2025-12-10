

export function fetchWeatherMock(city, unit = "C") {
  return new Promise((resolve) => {
    setTimeout(() => {
      
      const base = Array.from(city || "A").reduce((s,c)=> s + c.charCodeAt(0), 0) % 30 + 5;
      const tempC = Math.round(base + (Math.random() * 6 - 3)); // +/-3 random
      const temp = unit === "C" ? tempC : Math.round(tempC * 9/5 + 32);
      const feels = unit === "C" ? tempC + 1 : Math.round((tempC+1)*9/5 + 32);
      const data = {
        city: city || "Unknown",
        description: "Partly cloudy (mock)",
        temp,
        feelsLike: feels,
        humidity: Math.round(40 + Math.random() * 50),
        unit,
        timestamp: Date.now(),
      };
        resolve(data);
      }, 700); 
    });
  }
