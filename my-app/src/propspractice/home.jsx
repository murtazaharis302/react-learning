// Home.jsx
import React from "react";

export default function Home(props) {
  // props.title ko use kar rahe hain
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p>Some static home content...</p>
    </div>
  );
}
