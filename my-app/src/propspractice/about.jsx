// About.jsx
import React from "react";

export default function About({ user, onGreet }) {
  // destructuring props for easier use
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">About</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button
        onClick={() => onGreet()}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Greet
      </button>
    </div>
  );
}

