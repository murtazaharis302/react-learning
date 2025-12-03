// import React, { useState, useEffect } from "react";
// import Navbar from '../components/navbar.jsx';

// export default function Password() {
//   const [password, setPassword] = useState("");
//   const [visible, setVisible] = useState(false);
//   const [strength, setStrength] = useState(""); 

   
//   useEffect(() => {
//     console.log("Password changed:", password);
//   }, [password]);

 
//   useEffect(() => {
//     const hasCapital = /[A-Z]/.test(password);
//   const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
//   const hasMinLength = password.length >= 6;

//   if (password.length === 0) {
//     setStrength("");
//   } else if (hasCapital && hasSpecial && hasMinLength) {
//     setStrength("Strong");
//   } else {
//     setStrength("Weak");
//   }
//   }, [password]);

 
//   useEffect(() => {
//     if (visible) {
//       console.log("Password is now visible");
//     }
//   }, [visible]);

//   return (
//     <>
//     <Navbar/>
    
//     <div className="max-w-lg mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">Password Checker</h2>

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           Password
//         </label>

//         <div className="relative">
//           <input
//             type={visible ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password..."
//             className="w-full pr-24 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <button
//             onClick={() => setVisible((v) => !v)}
//             className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md bg-gray-100 border hover:bg-gray-200 text-sm"
//             aria-label={visible ? "Hide password" : "Show password"}
//             type="button"
//           >
//             {visible ? "Hide" : "Show"}
//           </button>
//         </div>

       
//         <div className="mt-3 flex items-center gap-3">
//           {strength ? (
//             <>
//               <span className="text-sm font-medium text-gray-700">
//                 Strength:
//               </span>
//               <span
//                 className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                   strength === "Strong"
//                     ? "bg-green-100 text-green-800"
//                     : "bg-red-100 text-red-800"
//                 }`}
//               >
//                 {strength}
//               </span>

            
//               {strength === "Weak" && (
//                 <span className="ml-2 text-sm text-red-700">
//                   Password is weak (min 6 chars)
//                 </span>
//               )}
//             </>
//           ) : (
//             <span className="text-sm text-gray-500">
//               Type a password to see strength
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
