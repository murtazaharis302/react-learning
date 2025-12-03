// // App.jsx
// import React, { useState, useEffect } from "react";
// import "./App.css"; // neeche CSS diya hua hai — is file ko banao

// export default function App() {
//   const [now, setNow] = useState(new Date());

//   useEffect(() => {
//     // setInterval se har 1 second date update karenge
//     const id = setInterval(() => setNow(new Date()), 1000);
//     return () => clearInterval(id); // cleanup
//   }, []);

//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   const isAM = hours < 12;
//   const hour12 = ((hours + 11) % 12) + 1; // convert 24h to 12h (1-12)
//   const pad = (n) => String(n).padStart(2, "0");

//   // Toggle class har second ke even/odd per (do colours)
//   const theme = seconds % 2 === 0 ? "theme-even" : "theme-odd";

//   // Date string (example: Friday, 28 Nov 2025)
//   const options = { weekday: "long", day: "numeric", month: "short", year: "numeric" };
//   const dateStr = now.toLocaleDateString(undefined, options);

//   return (
//     <div className={`clock-wrap ${theme}`}>
//       <div className="clock-card">
//         <div className="time-row">
//           <span className="time-hour">{pad(hour12)}:{pad(minutes)}</span>
//           <span className="time-sec">:{pad(seconds)}</span>
//           <span className="ampm">{isAM ? "AM" : "PM"}</span>
//         </div>

//         <div className="date-row">{dateStr}</div>

//         <div className="hint">
//           <small>Background colour toggles every second (even/odd seconds)</small>
//         </div>
//       </div>
//     </div>
//   );
// }
