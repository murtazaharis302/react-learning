// import React, { useState, useEffect } from "react";
// import Navbar from '../components/navbar.jsx';

// export default function Input() {
//   const [text, setText] = useState("");

//   // useEffect → logs every time user types
//   useEffect(() => {
//     if (text) {
//       console.log("User typed:", text);
//     }
//   }, [text]);

//   return (
//     <>
//    < Navbar/>
    
//     <div className="max-w-lg mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Live Input Preview</h1>

//       {/* Input Field */}
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />

//       {/* Live Preview */}
//       <div className="mt-4 p-4 bg-gray-100 rounded-lg border">
//         {text ? (
//           <p className="text-gray-800">
//             <span className="font-semibold">You typed:</span> {text}
//           </p>
//         ) : (
//           <p className="text-gray-500">Start typing to see live preview...</p>
//         )}
//       </div>
//     </div>
//      </>
//   );
// }
