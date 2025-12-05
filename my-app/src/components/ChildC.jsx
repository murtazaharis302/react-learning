// src/components/ChildC.jsx
import React, { useContext } from "react";
import { UserContext } from "../contexts/usercontext";

const ChildC = () => {
  const user = useContext(UserContext);

  
  // if (!user) return <div>No user found</div>;

  return (
    <div>
      <h2>ChildC Component</h2>
      <p> user name: {user.name}</p>
    </div>
  );
};

export default ChildC;
