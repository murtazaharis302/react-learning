"use client";
import React from "react";
const Hello = () => {
  const name = "Harris";
  const headingStyle = {
    color: "red",
    textAlign: "center",
    backgroundColor: "pink",
    fontSize: 50,
  };
  return (
    <div>
      <h1 style={headingStyle}>Hello {name}</h1>
      <h2 className="Ali">jkhkjjkh</h2>
    </div>
  );
};

export default Hello;
