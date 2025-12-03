
import React from "react";
import { Harisinfo} from "./propsData";
export default function Haris({ age, email }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Haris</h2>
      <p>Age: {Harisinfo.age}</p>
      <p>Email: {Harisinfo.email}</p>
    </div>
  );
}
