import React, { useState } from "react";
import Profile from "./components/Profile";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const contextValue = { theme, toggleTheme };

  const appStyle = {
    minHeight: "100vh",
    padding: 40,
    background: theme === "dark" ? "#1a1a1a" : "#ffffff",
    color: theme === "dark" ? "#eee" : "#111",
    transition: "background 0.2s, color 0.2s",
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={appStyle}>
        <h1>App Component</h1>

        <div style={{ marginBottom: 20 }}>
          <button onClick={toggleTheme}>Toggle Theme (Current: {theme})</button>
        </div>

        <Profile />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
