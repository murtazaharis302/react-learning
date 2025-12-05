 
// import "/.tailwind.css"
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Counterfunc2 from "./counter2.jsx";
// import About from "./pages/About.jsx";
// import Home from "./pages/Home.jsx";
// import Contact from "./pages/Contact.jsx";
// import Password from "./pages/Password.jsx";
// import Input from "./pages/input.jsx";
// import Text from "./pages/text.jsx";

//  function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/Counter" element={<Counterfunc2 />} />
//         <Route path="/password" element={<Password />} />
//          <Route path="/input" element={<Input/>} />
//           <Route path="/text" element={<Text/>} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
import React, { useState } from "react";
import { UserContext } from "./contexts/usercontext.jsx";

import ChildC from "./components/ChildC";

// simple App without router for testing context
function App() {
  const [user, setUser] = useState({ name: "Harris" });

  return (
    // Provider se child components ko value milti hai
    <UserContext.Provider value={user}>
      <div style={{ padding: 20 }}>
        <h1>App Component</h1>
        {/* ChildC ab context consume karega */}
        <ChildC />
      </div>
    </UserContext.Provider>
  );
}

export default App;
