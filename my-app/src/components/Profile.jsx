
import React, { useState, useEffect, useContext } from "react";
import ProfileStatus from "./ProfileStatus";
import { ThemeContext } from "../contexts/ThemeContext";

const Profile = () => {
  
  const saved = localStorage.getItem("userStatus");
  const [status, setStatus] = useState(saved ? saved : "Offline");

  
  const { theme } = useContext(ThemeContext); 

  
  useEffect(() => {
    console.log("Status changed");
    localStorage.setItem("userStatus", status);
  }, [status]); 

  
  const toggleStatus = () => {
    setStatus((prev) => (prev === "Online" ? "Offline" : "Online"));
  };


  const style = {
    padding: 20,
    borderRadius: 8,
    width: 300,
  
    background: theme === "dark" ? "#333" : "#f5f5f5",
    color: theme === "dark" ? "#fff" : "#111",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  return (
    <div style={style}>
      <h2>Profile Component</h2>
      
      <ProfileStatus status={status} />

      <div style={{ marginTop: 12 }}>
        <button onClick={toggleStatus}>
          Toggle Status ({status === "Online" ? "Go Offline" : "Go Online"})
        </button>
      </div>
    </div>
  );
};

export default Profile;
