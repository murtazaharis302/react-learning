// import React from "react";
// // import "/.tailwind.css"
// import "./App.css";
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
import React from "react";
import Home from "./propspractice/home";
import About from "./propspractice/about";
import Contact from "./propspractice/contact";
import Haris from "./propspractice/haris";
import Awais from "./propspractice/awais";
// import Awais from

export default function App() {
  const user = { name: "Harris", email: "harris@example.com" };
  const user2 = { age: "19", email: "harris302@.com" };
  const user3 = { name: "Awais", email: "awais@example.com" };

  const showAlert = (msg) => {
    alert(msg);
  };

  return (
    <div>
      {/* sending simple text prop */}
      <Home title="Welcome to my site" />
      {/* sending object prop + function prop */}
      <About user={user} onGreet={() => showAlert("Hello from About!")} />
            <Contact phone="123-3454-4556" email="haris.com" />
      
      <Contact/>
      <Haris />
       <Awais user3={user3} onGreet={() => showAlert("Hello from Awais!")} />
    </div>
  )};



//
