// import React, { useState, useEffect } from "react";
// import Navbar from '../components/navbar.jsx';

// export default function Text() {
//   const [show, setShow] = useState(false);

//   // useEffect → log when message becomes visible
//   useEffect(() => {
//     if (show) {
//       console.log("Message is now visible");
//     }
//   }, [show]);

//   return (
//     <>
//    <Navbar/>

//     <div className="max-w-lg mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Show / Hide Message</h1>

//       {/* Toggle Button */}
//       <button
//         onClick={() => setShow((prev) => !prev)}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         {show ? "Hide Message" : "Show Message"}
//       </button>

//       {/* Message */}
//       {show && (
//         <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
//           <p className="text-black-1000 font-medium">Hey im Harris</p>
//         </div>
//       )}
//     </div>
//     </>
//   );
// }
// ;